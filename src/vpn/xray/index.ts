import { createHash, randomUUID } from "crypto";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import findFreePorts from "find-free-ports";

import { uuidToByteArray } from "../../utils";
import { parseVPNPortRange } from "../port";

export enum XrayProxyProtocol {
    Unspecified = 0,
    VLess = 1,
    VMess = 2,
    Trojan = 3,
    Shadowsocks2022 = 4,
}

export enum XrayTransportProtocol {
    Unspecified = 0,
    TCP = 1,
    WebSocket = 2,
    GRPC = 3,
    HTTPUpgrade = 4,
    XHTTP = 5,
}

export enum XrayTransportSecurity {
    Unspecified = 0,
    None = 1,
    TLS = 2,
    Reality = 3,
}

export enum XrayFlow {
    Unspecified = 0,
    None = 1,
    Vision = 2,
}

export interface XrayServerMetadata {
    port: string;
    proxy_protocol: XrayProxyProtocol;
    transport_protocol: XrayTransportProtocol;
    transport_security: XrayTransportSecurity;
    flow: XrayFlow;
    method: string;
    key: string;
    tls_pin: string;
    reality_server_name: string;
    reality_short_id: string;
    reality_public_key: string;
    reality_fingerprint: string;
}

export interface XrayHandshakeData {
    metadata: XrayServerMetadata[];
}

type XrayObject = Record<string, unknown>;

export interface XrayClientConfig {
    api: { services: string[]; tag: string };
    inbounds: XrayObject[];
    log: XrayObject;
    outbounds: XrayObject[];
    observatory: XrayObject;
    routing: XrayObject;
    policy: XrayObject;
    stats: XrayObject;
}

function proxyProtocol(value: XrayProxyProtocol): "vless" | "vmess" | "trojan" | "shadowsocks-2022" {
    switch (value) {
        case XrayProxyProtocol.VLess: return "vless";
        case XrayProxyProtocol.VMess: return "vmess";
        case XrayProxyProtocol.Trojan: return "trojan";
        case XrayProxyProtocol.Shadowsocks2022: return "shadowsocks-2022";
        default: throw new TypeError(`Unsupported Xray proxy protocol: ${value}`);
    }
}

function transportProtocol(value: XrayTransportProtocol): string {
    switch (value) {
        case XrayTransportProtocol.TCP: return "tcp";
        case XrayTransportProtocol.WebSocket: return "websocket";
        case XrayTransportProtocol.GRPC: return "grpc";
        case XrayTransportProtocol.HTTPUpgrade: return "httpupgrade";
        case XrayTransportProtocol.XHTTP: return "xhttp";
        default: throw new TypeError(`Unsupported Xray transport protocol: ${value}`);
    }
}

function transportSecurity(value: XrayTransportSecurity): "none" | "tls" | "reality" {
    switch (value) {
        case XrayTransportSecurity.None: return "none";
        case XrayTransportSecurity.TLS: return "tls";
        case XrayTransportSecurity.Reality: return "reality";
        default: throw new TypeError(`Unsupported Xray transport security: ${value}`);
    }
}

function flow(value: XrayFlow): string {
    switch (value) {
        case XrayFlow.None: return "";
        case XrayFlow.Vision: return "xtls-rprx-vision";
        default: throw new TypeError(`Unsupported Xray flow: ${value}`);
    }
}

function validateString(value: unknown, field: string, required: boolean = true): asserts value is string {
    if (typeof value !== "string" || (required && value.length === 0)) {
        throw new TypeError(`Xray ${field} must be ${required ? "a non-empty" : "a"} string`);
    }
    if (/[\x00-\x1f\x7f]/.test(value)) {
        throw new TypeError(`Xray ${field} contains control characters`);
    }
}

function validateMetadata(metadata: XrayServerMetadata): void {
    const protocol = proxyProtocol(metadata.proxy_protocol);
    transportProtocol(metadata.transport_protocol);
    const security = transportSecurity(metadata.transport_security);
    const selectedFlow = flow(metadata.flow);

    if (selectedFlow && protocol !== "vless") {
        throw new TypeError("Xray Vision flow is only valid for VLESS");
    }
    if (security === "tls") {
        validateString(metadata.tls_pin, "tls_pin");
        if (!/^[0-9a-fA-F]{64}$/.test(metadata.tls_pin)) {
            throw new TypeError("Xray tls_pin must be a SHA-256 hex fingerprint");
        }
    }
    if (security === "reality") {
        validateString(metadata.reality_server_name, "reality_server_name");
        validateString(metadata.reality_short_id, "reality_short_id");
        validateString(metadata.reality_public_key, "reality_public_key");
        validateString(metadata.reality_fingerprint, "reality_fingerprint");
        if (
            !/^[0-9a-fA-F]*$/.test(metadata.reality_short_id) ||
            metadata.reality_short_id.length > 16 ||
            metadata.reality_short_id.length % 2 !== 0
        ) {
            throw new TypeError("Xray reality_short_id must be at most 8 bytes of hex");
        }
    }
    if (protocol === "shadowsocks-2022") {
        if (metadata.method !== "2022-blake3-aes-256-gcm") {
            throw new TypeError(`Unsupported Xray Shadowsocks method: ${metadata.method}`);
        }
        validateString(metadata.key, "key");
        const key = Buffer.from(metadata.key, "base64");
        if (key.length !== 32 || key.toString("base64") !== metadata.key) {
            throw new TypeError("Xray Shadowsocks server key must be 32-byte canonical base64");
        }
    }
}

function shadowsocksUserKey(uuid: string): string {
    const uuidBytes = Buffer.from(uuid.replace(/-/g, ""), "hex");
    return createHash("sha256").update(uuidBytes).digest("base64");
}

/**
 * Xray proxy client compatible with dvpnx v9 and dvpncli v5.
 */
export class Xray {
    readonly uuid: string;
    config: XrayClientConfig;
    child: ChildProcessWithoutNullStreams | null;
    configPath: string | null;
    socksPort: number;

    private tempDirectory: string | null;

    constructor(socksPort?: number) {
        this.uuid = randomUUID();
        this.child = null;
        this.configPath = null;
        this.socksPort = socksPort ?? 0;
        this.tempDirectory = null;
        this.config = {
            api: { services: ["StatsService"], tag: "api" },
            inbounds: [],
            log: { access: "none", error: "none", loglevel: "none" },
            outbounds: [],
            observatory: {
                subjectSelector: [],
                probeUrl: "https://www.gstatic.com/generate_204",
                probeInterval: "10s",
            },
            routing: {
                balancers: [],
                domainStrategy: "IPIfNonMatch",
                rules: [{ inboundTag: ["api"], outboundTag: "api", type: "field" }],
            },
            policy: {
                levels: { "0": { downlinkOnly: 0, uplinkOnly: 0 } },
                system: { statsOutboundDownlink: true, statsOutboundUplink: true },
            },
            stats: {},
        };
    }

    public getPeerRequest(): { uuid: number[] } {
        return { uuid: uuidToByteArray(this.uuid) };
    }

    public async parseConfig(data: XrayHandshakeData, nodeAddrs: string[]): Promise<void> {
        if (!data || !Array.isArray(data.metadata) || data.metadata.length === 0) {
            throw new TypeError("Xray handshake metadata is empty");
        }
        if (!Array.isArray(nodeAddrs) || nodeAddrs.length === 0) {
            throw new TypeError("Xray node addresses are empty");
        }

        const freePorts = await findFreePorts(2);
        const socksPort = this.socksPort === 0 ? freePorts[1] : this.socksPort;
        const apiPort = freePorts.find(port => port !== socksPort);
        if (apiPort === undefined) {
            throw new Error("Could not allocate an Xray API port distinct from the SOCKS port");
        }
        if (!Number.isInteger(socksPort) || socksPort < 1 || socksPort > 65535) {
            throw new RangeError(`Invalid Xray SOCKS port: ${socksPort}`);
        }
        this.socksPort = socksPort;

        this.config.inbounds = [
            {
                listen: "127.0.0.1",
                port: apiPort,
                protocol: "dokodemo-door",
                settings: { address: "127.0.0.1" },
                tag: "api",
            },
            {
                listen: "127.0.0.1",
                port: socksPort,
                protocol: "socks",
                settings: { ip: "127.0.0.1", udp: true },
                sniffing: { destOverride: ["http", "tls"], enabled: true },
                tag: "proxy",
            },
        ];
        this.config.outbounds = [];
        this.config.routing.rules = [{
            inboundTag: ["api"],
            outboundTag: "api",
            type: "field",
        }];

        const tags: string[] = [];
        for (const address of nodeAddrs) {
            validateString(address, "node address");
            for (const metadata of data.metadata) {
                validateMetadata(metadata);
                const ports = parseVPNPortRange(metadata.port);
                for (let port = ports.outFrom; port <= ports.outTo; port++) {
                    if (this.config.outbounds.length >= 4096) {
                        throw new RangeError("Xray handshake expands to more than 4096 outbounds");
                    }
                    const outbound = this.buildOutbound(address, port, metadata);
                    const tag = `${address}_${port}_${proxyProtocol(metadata.proxy_protocol)}_${transportProtocol(metadata.transport_protocol)}_${transportSecurity(metadata.transport_security)}`;
                    outbound.tag = tag;
                    tags.push(tag);
                    this.config.outbounds.push(outbound);
                }
            }
        }

        this.config.observatory.subjectSelector = tags;
        this.config.routing.balancers = [{
            selector: tags,
            strategy: { type: "leastping" },
            tag: "balancer",
        }];
        (this.config.routing.rules as XrayObject[]).push({
            inboundTag: ["proxy"],
            balancerTag: "balancer",
            type: "field",
        });
    }

    private buildOutbound(address: string, port: number, metadata: XrayServerMetadata): XrayObject {
        const protocol = proxyProtocol(metadata.proxy_protocol);
        const security = transportSecurity(metadata.transport_security);
        const streamSettings: XrayObject = {
            network: transportProtocol(metadata.transport_protocol),
            security,
        };
        if (security === "tls") {
            streamSettings.tlsSettings = {
                fingerprint: "chrome",
                pinnedPeerCertSha256: metadata.tls_pin,
            };
        }
        if (security === "reality") {
            streamSettings.realitySettings = {
                fingerprint: metadata.reality_fingerprint,
                publicKey: metadata.reality_public_key,
                serverName: metadata.reality_server_name,
                shortId: metadata.reality_short_id,
            };
        }

        let coreProtocol: string = protocol;
        let settings: XrayObject;
        switch (protocol) {
            case "vless":
                settings = {
                    vnext: [{
                        address,
                        port,
                        users: [{
                            id: this.uuid,
                            encryption: "none",
                            flow: flow(metadata.flow),
                        }],
                    }],
                };
                break;
            case "vmess":
                settings = {
                    vnext: [{
                        address,
                        port,
                        users: [{ id: this.uuid, alterId: 0 }],
                    }],
                };
                break;
            case "trojan":
                settings = {
                    servers: [{ address, password: this.uuid, port }],
                };
                break;
            case "shadowsocks-2022":
                coreProtocol = "shadowsocks";
                settings = {
                    servers: [{
                        address,
                        method: metadata.method,
                        password: `${metadata.key}:${shadowsocksUserKey(this.uuid)}`,
                        port,
                    }],
                };
                break;
        }

        return { protocol: coreProtocol, settings, streamSettings };
    }

    public writeConfig(output?: string): string {
        if (this.config.outbounds.length === 0) {
            throw new Error("Xray config not initialized. Call parseConfig first.");
        }

        const isTemporary = output === undefined;
        const directory = isTemporary
            ? fs.mkdtempSync(path.join(os.tmpdir(), "sentinel-js-sdk-xray-"))
            : path.dirname(output!);
        const target = output ?? path.join(directory, "client.json");

        fs.writeFileSync(target, JSON.stringify(this.config, null, 2), { mode: 0o600 });
        try { fs.chmodSync(target, 0o600); } catch {}

        if (isTemporary) {
            this.configPath = target;
            this.tempDirectory = directory;
        }

        return target;
    }

    public connect(configFile?: string): number | undefined {
        const target = configFile ?? this.configPath ?? this.writeConfig();
        this.child = spawn("xray", ["run", "--config", target]);
        const child = this.child;
        child.once("close", () => {
            if (this.child === child) this.child = null;
            if (target === this.configPath) this.cleanup();
        });

        return child.pid;
    }

    public disconnect(): boolean {
        return this.child ? this.child.kill("SIGTERM") : false;
    }

    public cleanup(): void {
        const directory = this.tempDirectory;
        if (!directory) return;

        try {
            fs.rmSync(directory, { recursive: true, force: true });
        } catch {
            return;
        }
        this.configPath = null;
        this.tempDirectory = null;
    }
}
