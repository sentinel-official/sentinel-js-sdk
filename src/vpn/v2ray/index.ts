import { randomUUID, randomBytes } from "crypto"
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import findFreePorts from "find-free-ports"
import qrcode from 'qrcode';
import { isIP } from "net";  // 0: not a ip > domain, 4: ipv4, 6: ivp6
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import V2RayConf from "./v2ray-conf";
import { V2RayStreamSettings } from "./v2ray-transport";

/**
 * Proxy protocol types. Maps to ProxyProtocol iota in sentinel-go-sdk/v2ray/server.go
 * 0 = Unspecified, 1 = VLess, 2 = VMess
 */
export enum ProxyProtocol {
    Unspecified = 0,
    VLess = 1,
    VMess = 2,
}

/**
 * Transport protocol types. Maps to TransportProtocol iota in sentinel-go-sdk/v2ray/transport.go
 * Ordered alphabetically as per Go iota definition.
 */
export enum TransportProtocol {
    Unspecified = 0,
    DomainSocket = 1,
    GUN = 2,
    GRPC = 3,
    HTTP = 4,
    MKCP = 5,
    QUIC = 6,
    TCP = 7,
    WebSocket = 8,
}

/**
 * Transport security types. Maps to TransportSecurity iota in sentinel-go-sdk/v2ray/transport.go
 * 0 = Unspecified, 1 = None, 2 = TLS
 */
export enum TransportSecurity {
    Unspecified = 0,
    None = 1,
    TLS = 2,
}

export interface V2RayMetadata {
    port: string;
    proxy_protocol: ProxyProtocol;
    transport_protocol: TransportProtocol;
    transport_security: TransportSecurity;
}

// Parsed content of `result.data` from the v2ray handshake response
// follow > sentinel-official/sentinel-dvpnx handshake
export interface V2RayHandshakeData {
    addrs: string[];
    metadata: V2RayMetadata[];
}

/**
 * Converts a `TransportProtocol` enum value to the v2ray `network` string.
 *
 * @param protocol - Numeric transport protocol from handshake metadata
 * @returns v2ray network string (e.g. "tcp", "ws", "grpc")
 */
function toV2RayNetwork(protocol: TransportProtocol): V2RayStreamSettings["network"] {
    const map: Record<TransportProtocol, V2RayStreamSettings["network"]> = {
        [TransportProtocol.Unspecified]: "tcp",
        [TransportProtocol.DomainSocket]: "domainsocket",
        [TransportProtocol.GUN]: "gun",
        [TransportProtocol.GRPC]: "grpc",
        [TransportProtocol.HTTP]: "http",
        [TransportProtocol.MKCP]: "kcp",
        [TransportProtocol.QUIC]: "quic",
        [TransportProtocol.TCP]: "tcp",
        [TransportProtocol.WebSocket]: "ws",
    };
    return map[protocol] ?? "tcp";
}

/**
 * Converts a `TransportSecurity` enum value to the v2ray `security` string.
 *
 * @param security - Numeric transport security from handshake metadata
 * @returns "tls" or "none"
 */
function toV2RaySecurity(security: TransportSecurity): "tls" | "none" {
    return security === TransportSecurity.TLS ? "tls" : "none";
}

/**
 * Converts a `ProxyProtocol` enum value to the v2ray outbound protocol string.
 *
 * @param protocol - Numeric proxy protocol from handshake metadata
 * @returns "vmess" or "vless"
 */
function toV2RayProtocol(protocol: ProxyProtocol): "vmess" | "vless" {
    return protocol === ProxyProtocol.VMess ? "vmess" : "vless";
}

export class V2Ray {
    config: V2RayConf;
    uuid: string;
    child: null | ChildProcessWithoutNullStreams;

    constructor() {
        this.child = null;
        this.uuid = randomUUID();
        // https://github.com/sentinel-official/sentinel-go-sdk/blob/development/v2ray/client.json.tmpl
        this.config = {
            api: { services: ["StatsService"], tag: "api" },
            inbounds: [],
            log: { access: "none", error: "none", loglevel: "none" },
            outbounds: [],
            policy: {
                levels: { "0": { downlinkOnly: 0, uplinkOnly: 0 } },
                system: { statsOutboundDownlink: true, statsOutboundUplink: true },
            },
            routing: {
                domainStrategy: "IPIfNonMatch",
                rules: [{ inboundTag: ["api"], outboundTag: "api", type: "field" }],
            },
            transport: {
                dsSettings: {},
                grpcSettings: {},
                gunSettings: {},
                httpSettings: {},
                kcpSettings: {},
                quicSettings: { security: "chacha20-poly1305" },
                tcpSettings: {},
                wsSettings: {},
            },
            stats: {},
        };
    }

    /**
     * Returns the v2ray-encoded key for this client's UUID.
     * Format: base64( [0x01] + uuid_bytes )
     *
     * @returns base64 string used as handshake `data.uid`
     */
    public getKey(): number[] {
        const uuidBuffer = Buffer.from(this.uuid.replace(/-/g, ''), 'hex');
        const uuidArray = Array.from(uuidBuffer);
        return uuidArray
    }

    /**
     * Parses the JSON response from the node handshake and builds the
     * v2ray configuration. Replaces the old 7-byte binary buffer parsing.
     *
     * Picks the first available metadata entry. If multiple are present
     * (the node supports multiple transports), the first is used — you can
     * extend this to let the caller choose.
     *
     * @param handshakeData - Parsed `result.data` from the handshake response
     * @param nodeAddrs     - `result.addrs` from the handshake response (public IPs of the node)
     *
     * @example
     * const raw: V2RayHandshakeData = JSON.parse(
     *     Buffer.from(result.data, 'base64').toString('utf8')
     * );
     * await v2ray.parseConfig(raw, result.addrs);
     */
    public async parseConfig(
        handshakeData: V2RayHandshakeData,
        nodeAddrs: string[],
    ): Promise<void> {
        const address = nodeAddrs[0];
        const [apiPort] = await findFreePorts(1);

        // API inbound
        this.config.inbounds.push({
            listen: "127.0.0.1",
            port: apiPort,
            protocol: "dokodemo-door",
            settings: { address: "127.0.0.1" },
            tag: "api",
        });

        // SOCKS proxy inbound
        this.config.inbounds.push({
            listen: "127.0.0.1",
            port: 1080,
            protocol: "socks",
            settings: { ip: "127.0.0.1", udp: true },
            sniffing: { destOverride: ["http", "tls"], enabled: true },
            tag: "proxy",
        });

        const outboundTags: string[] = [];

        // create outbound for each metadata entry
        for (const meta of handshakeData.metadata) {
            const port = parseInt(meta.port, 10);
            const network = toV2RayNetwork(meta.transport_protocol);
            const security = toV2RaySecurity(meta.transport_security);
            const protocol = toV2RayProtocol(meta.proxy_protocol);

            // tag format: {address}_{port}_{protocol}_{transport}_{security}
            const tag = `${address}_${port}_${protocol}_${network}_${security}`;
            outboundTags.push(tag);

            const userEntry = protocol === "vmess"
                ? { id: this.uuid, alterId: 0 }
                : { id: this.uuid, encryption: "none" };

            const streamSettings: V2RayStreamSettings = { network, security };
            if (security === "tls") {
                streamSettings.tlsSettings = { allowInsecure: true };
            }

            this.config.outbounds.push({
                protocol,
                settings: {
                    vnext: [{ address, port, users: [userEntry] }],
                },
                streamSettings,
                tag,
            });
        }

        // balancer con leastping su tutti gli outbound
        this.config.routing.balancers = [{
            selector: outboundTags,
            strategy: { type: "leastping" },
            tag: "balancer",
        }];

        // routing rule: proxy → balancer
        this.config.routing.rules.push({
            inboundTag: ["proxy"],
            balancerTag: "balancer",
            type: "field",
        });
    }

    /**
     * Serializes the current v2ray configuration to a JSON file on disk.
     *
     * @param output - Optional output file path. If omitted, a temp file is created.
     * @returns The path of the written config file.
     */
    public writeConfig(output?: string): string {
        if (output === undefined) {
            const tempDirectory = fs.mkdtempSync(
                path.join(os.tmpdir(), 'sentinel-js-sdk')
            );
            output = path.join(tempDirectory, "v2ray_" + randomBytes(8).toString('hex') + ".json");
        }
        fs.writeFileSync(output, JSON.stringify(this.config, null, 4));
        return output;
    }

    /**
     * Starts the v2ray process with the current configuration.
     * The process is kept as `this.child` for later termination via `disconnect()`.
     *
     * @param configFile - Optional path to an existing config JSON file.
     *   If omitted, writes the current config to a temp file first.
     * @returns The PID of the spawned v2ray process, or `undefined` if spawn failed.
     */
    public connect(configFile?: string): number | undefined {
        if (configFile === undefined) {
            const tempDirectory = fs.mkdtempSync(
                path.join(os.tmpdir(), 'sentinel-js-sdk')
            );
            configFile = path.join(
                tempDirectory,
                "v2ray_" + randomBytes(8).toString('hex') + ".json"
            );
            this.writeConfig(configFile);
        }
        this.child = spawn("v2ray", ["run", "--config", configFile]);
        return this.child.pid;
    }

    /**
     * Stops the v2ray process by sending SIGINT.
     *
     * @returns `true` if the signal was sent successfully, `false` if no process is running.
     */
    public disconnect(): boolean {
        if (this.child) return this.child.kill('SIGINT');
        return false;
    }

    /**
    * Generates a VMess share link in the standard v2rayNG format.
    * Format: `vmess://` + base64(JSON config)
    * Compatible with: v2rayNG, NekoBox, Shadowrocket, Quantumult X.
    *
    * @param address  - Node IP or hostname
    * @param port     - Node port
    * @param network  - Transport network (grpc, tcp, ws, etc.)
    * @param security - Transport security ("tls" or "none")
    * @param name     - Optional display name shown in the app (default: "sentinel-js-sdk")
    * @returns vmess:// share link string
    */
    public buildVMessLink(
        address:  string,
        port:     number,
        network:  V2RayStreamSettings["network"],
        security: V2RayStreamSettings["security"],
        aid: string = "0",
        name:     string = "sentinel-js-sdk",
    ): string {
        const config = {
            v:    "2",
            ps:   name,
            add:  address,
            port: String(port),
            id:   this.uuid,
            aid:  aid,
            net:  network,
            type: "none",
            host: "",
            path: "",
            tls:  security === "tls" ? "tls" : "",
            sni:  security === "tls" && isIP(address) === 0 ? address : "",
            alpn: "",
        };
        const encoded = Buffer.from(JSON.stringify(config)).toString("base64");
        return `vmess://${encoded}`;
    }

    /**
    * Generates a VLess share link in the standard URI format.
    * Format: `vless://{uuid}@{address}:{port}?{params}#{name}`
    * Compatible with: v2rayNG, NekoBox, Shadowrocket.
    *
    * @param address  - Node IP or hostname
    * @param port     - Node port
    * @param network  - Transport network (grpc, tcp, ws, etc.)
    * @param security - Transport security ("tls" or "none")
    * @param name     - Optional display name shown in the app (default: "sentinel-js-sdk")
    * @returns vless:// share link string
    */
    public buildVLessLink(
        address:  string,
        port:     number,
        network:  V2RayStreamSettings["network"],
        security: V2RayStreamSettings["security"],
        name:     string = "sentinel-js-sdk",
    ): string {
        const secString = security ?? "none"
        const params = new URLSearchParams({
            encryption: "none",
            security:   secString,
            type:       network,
        });
        if (secString === "tls") {
            if(isIP(address) === 0) params.append("sni", address);
            params.append("allowInsecure", "1")
        };
        const tag = encodeURIComponent(name);
        return `vless://${this.uuid}@${address}:${port}?${params.toString()}#${tag}`;
    }

    /**
    * Generates share links for all outbounds in the current config.
    * Returns one link per outbound, VMess or VLess depending on the protocol.
    *
    * @param name - Optional display name prefix (default: "sentinel-js-sdk")
    * @returns Array of share link strings
    */
    public buildShareLinks(name: string = "sentinel-js-sdk"): string[] {
        const links: string[] = [];
        for (const outbound of this.config.outbounds) {
            if (outbound.protocol !== "vmess" && outbound.protocol !== "vless") continue;

            const settings = outbound.settings as { vnext: any[] } | undefined;
            const vnext    = settings?.vnext?.[0];
            const user     = vnext?.users?.[0];
            const stream   = outbound.streamSettings;
            if (!vnext || !user || !stream) continue;

            const address = vnext.address;
            const port = vnext.port;
            const network  = stream.network ?? "tcp";
            const security = stream.security ?? "none";

            const remark = outbound.tag ?? name;
            if (outbound.protocol === "vmess") {
                const aid = (user.alterId || 0).toString();
                links.push(this.buildVMessLink(address, port, network, security, aid, remark));
            } else {
                links.push(this.buildVLessLink(address, port, network, security, remark));
            }
        }
        return links
    }

    /**
    * Prints QR codes for all share links to the terminal.
    * Each QR code can be scanned directly by v2rayNG or similar apps.
    * Requires `qrcode` package: `npm install qrcode @types/qrcode`
    *
    * @param name - Optional display name for the links (default: "sentinel-js-sdk")
    *
    * @example
    * await v2ray.printShareQRCodes();
    * // Prints one QR code per outbound to stdout
    */
    public async printShareQRCodes(name: string = "sentinel-js-sdk"): Promise<void> {
        const links = this.buildShareLinks(name);
        for (const [index, link] of links.entries()) {
            const protocol = link.startsWith("vmess://") ? "VMess" : "VLess";
            const remark   = decodeURIComponent(link.match(/#(.*)$/)?.[1] ?? "");
            console.log(`\n--- [${index + 1}/${links.length}] ${protocol} | ${remark} ---`);
            const qr = await qrcode.toString(link, { type: "terminal", small: true });
            console.log(qr);
            console.log(`${link}\n`);
        }
    }
}