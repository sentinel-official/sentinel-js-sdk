import { randomUUID } from "crypto";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import * as fs from "fs";
import { isIP } from "net";
import * as os from "os";
import * as path from "path";

import { preferIPv4 } from "../../utils";

export interface Hysteria2ServerMetadata {
    port: number;
    tls_pin: string;
    obfs_password: string;
}

export interface Hysteria2HandshakeData {
    metadata: Hysteria2ServerMetadata[];
}

export interface Hysteria2Options {
    tunName?: string;
    addresses?: string[];
    routeAddresses?: string[];
    excludeAddresses?: string[];
    mtu?: number;
}

interface Hysteria2Config {
    serverAddress: string;
    tlsPin: string;
    obfsPassword: string;
    tunName: string;
    addresses: string[];
    routeAddresses: string[];
    excludeAddresses: string[];
    mtu: number;
}

const DEFAULT_ADDRESSES = [
    "100.100.100.101/30",
    "2001::ffff:ffff:ffff:fff1/126",
];
const DEFAULT_ROUTES = ["0.0.0.0/0", "::/0"];
const DEFAULT_EXCLUDES = [
    "127.0.0.0/8",
    "192.168.0.0/16",
    "172.16.0.0/12",
    "10.0.0.0/8",
    "::1/128",
    "fe80::/10",
    "fd00::/8",
];

function yamlString(value: string): string {
    return JSON.stringify(value);
}

function serverEndpoint(host: string, port: number): string {
    return isIP(host) === 6 ? `[${host}]:${port}` : `${host}:${port}`;
}

function addressFamily(cidr: string): 4 | 6 | 0 {
    const host = cidr.split("/")[0];
    return isIP(host) as 4 | 6 | 0;
}

function validateCIDRs(addrs: string[], field: string): void {
    if (!Array.isArray(addrs) || addrs.length === 0) {
        throw new TypeError(`Hysteria2 ${field} are empty`);
    }
    for (const cidr of addrs) {
        const parts = cidr.split("/");
        const family = isIP(parts[0]);
        const prefix = Number(parts[1]);
        const maxPrefix = family === 4 ? 32 : family === 6 ? 128 : -1;
        if (
            parts.length !== 2 ||
            !Number.isInteger(prefix) ||
            prefix < 0 ||
            prefix > maxPrefix
        ) {
            throw new TypeError(`Invalid Hysteria2 ${field} CIDR: ${cidr}`);
        }
    }
}

function firstAddress(addrs: string[], family: 4 | 6): string | undefined {
    return addrs.find(addr => addressFamily(addr) === family);
}

function routeLines(addrs: string[], family: 4 | 6, indent: number): string[] {
    const padding = " ".repeat(indent);
    return addrs
        .filter(addr => addressFamily(addr) === family)
        .map(addr => `${padding}- ${yamlString(addr)}`);
}

/**
 * Hysteria2 full-tunnel client compatible with dvpnx v9 and dvpncli v5.
 */
export class Hysteria2 {
    readonly uuid: string;
    child: ChildProcessWithoutNullStreams | null;
    configPath: string | null;

    private config: Hysteria2Config | null;
    private tempDirectory: string | null;

    constructor() {
        this.uuid = randomUUID();
        this.child = null;
        this.configPath = null;
        this.config = null;
        this.tempDirectory = null;
    }

    public getPeerRequest(): { uuid: string } {
        return { uuid: this.uuid };
    }

    public parseConfig(
        data: Hysteria2HandshakeData,
        nodeAddrs: string[],
        options: Hysteria2Options = {},
    ): void {
        if (!data || !Array.isArray(data.metadata) || data.metadata.length === 0) {
            throw new TypeError("Hysteria2 handshake metadata is empty");
        }
        if (!Array.isArray(nodeAddrs) || nodeAddrs.length === 0) {
            throw new TypeError("Hysteria2 node addresses are empty");
        }

        const metadata = data.metadata[0];
        if (!Number.isInteger(metadata.port) || metadata.port < 1 || metadata.port > 65535) {
            throw new RangeError(`Invalid Hysteria2 port: ${metadata.port}`);
        }
        if (
            typeof metadata.tls_pin !== "string" ||
            !/^(?:[0-9a-fA-F]{64}|[0-9a-fA-F]{2}(?::[0-9a-fA-F]{2}){31})$/.test(metadata.tls_pin)
        ) {
            throw new TypeError("Hysteria2 tls_pin must be a SHA-256 hex fingerprint");
        }
        if (typeof metadata.obfs_password !== "string") {
            throw new TypeError("Hysteria2 obfs_password must be a string");
        }

        const host = preferIPv4(nodeAddrs);
        const excludes = [...(options.excludeAddresses ?? DEFAULT_EXCLUDES)];
        if (isIP(host) === 4) excludes.push(`${host}/32`);
        if (isIP(host) === 6) excludes.push(`${host}/128`);

        const mtu = options.mtu ?? 1420;
        if (!Number.isInteger(mtu) || mtu < 576 || mtu > 65535) {
            throw new RangeError(`Invalid Hysteria2 MTU: ${mtu}`);
        }

        const tunName = options.tunName ?? "hyst0";
        if (!/^[A-Za-z0-9._-]{1,15}$/.test(tunName)) {
            throw new TypeError(`Invalid Hysteria2 tunnel name: ${tunName}`);
        }
        const addresses = [...(options.addresses ?? DEFAULT_ADDRESSES)];
        const routeAddresses = [...(options.routeAddresses ?? DEFAULT_ROUTES)];
        validateCIDRs(addresses, "addresses");
        validateCIDRs(routeAddresses, "route addresses");
        validateCIDRs(excludes, "exclude addresses");

        this.config = {
            serverAddress: serverEndpoint(host, metadata.port),
            tlsPin: metadata.tls_pin,
            obfsPassword: metadata.obfs_password,
            tunName,
            addresses,
            routeAddresses,
            excludeAddresses: excludes,
            mtu,
        };
    }

    public buildConfigString(): string {
        if (!this.config) {
            throw new Error("Hysteria2 config not initialized. Call parseConfig first.");
        }

        const config = this.config;
        const ipv4 = firstAddress(config.addresses, 4);
        const ipv6 = firstAddress(config.addresses, 6);
        if (!ipv4 && !ipv6) {
            throw new TypeError("Hysteria2 tunnel addresses contain no valid IP prefixes");
        }

        const lines = [
            `server: ${yamlString(config.serverAddress)}`,
            `auth: ${yamlString(this.uuid)}`,
            "",
            "tls:",
            "  insecure: true",
            `  pinSHA256: ${yamlString(config.tlsPin)}`,
            "",
            "tun:",
            `  name: ${yamlString(config.tunName)}`,
            `  mtu: ${config.mtu}`,
            "  address:",
        ];
        if (ipv4) lines.push(`    ipv4: ${yamlString(ipv4)}`);
        if (ipv6) lines.push(`    ipv6: ${yamlString(ipv6)}`);
        lines.push(
            "  route:",
            "    ipv4:",
            ...routeLines(config.routeAddresses, 4, 6),
            "    ipv6:",
            ...routeLines(config.routeAddresses, 6, 6),
            "    ipv4Exclude:",
            ...routeLines(config.excludeAddresses, 4, 6),
            "    ipv6Exclude:",
            ...routeLines(config.excludeAddresses, 6, 6),
        );

        if (config.obfsPassword) {
            lines.push(
                "",
                "obfs:",
                "  type: salamander",
                "  salamander:",
                `    password: ${yamlString(config.obfsPassword)}`,
            );
        }

        return `${lines.join("\n")}\n`;
    }

    public writeConfig(output?: string): string {
        const isTemporary = output === undefined;
        const directory = isTemporary
            ? fs.mkdtempSync(path.join(os.tmpdir(), "sentinel-js-sdk-hysteria2-"))
            : path.dirname(output!);
        const target = output ?? path.join(directory, "client.yaml");

        fs.writeFileSync(target, this.buildConfigString(), { mode: 0o600 });
        try { fs.chmodSync(target, 0o600); } catch {}

        if (isTemporary) {
            this.configPath = target;
            this.tempDirectory = directory;
        }

        return target;
    }

    public connect(configFile?: string): number | undefined {
        const target = configFile ?? this.configPath ?? this.writeConfig();
        this.child = spawn("hysteria2", ["client", "-c", target]);
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
