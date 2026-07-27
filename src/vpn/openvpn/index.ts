import { randomUUID } from "crypto";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import { preferIPv4, uuidToByteArray } from "../../utils";

export interface OpenVPNServerMetadata {
    port: number;
    protocol: "tcp" | "udp";
    /** Go []byte encoded by encoding/json as standard base64. */
    ca: string;
    /** OpenVPN static key bytes, encoded as standard base64. */
    tls: string;
}

export interface OpenVPNHandshakeData {
    metadata: OpenVPNServerMetadata[];
    /** DER client certificate encoded as standard base64. */
    cert: string;
    /** DER PKCS#8 client private key encoded as standard base64. */
    key: string;
}

interface OpenVPNConfig {
    addr: string;
    port: number;
    protocol: "tcp" | "udp";
    ca: Buffer;
    tls: Buffer;
    cert: Buffer;
    key: Buffer;
}

function decodeGoBytes(value: unknown, field: string): Buffer {
    if (typeof value !== "string" || value.length === 0) {
        throw new TypeError(`${field} must be a non-empty base64 string`);
    }
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(value) || value.length % 4 !== 0) {
        throw new TypeError(`${field} is not valid standard base64`);
    }

    const decoded = Buffer.from(value, "base64");
    if (decoded.length === 0 || decoded.toString("base64") !== value) {
        throw new TypeError(`${field} is not canonical standard base64`);
    }

    return decoded;
}

function pemBase64(data: Buffer, label: string): string {
    const lines = data.toString("base64").match(/.{1,64}/g)?.join("\n") ?? "";
    return `-----BEGIN ${label}-----\n${lines}\n-----END ${label}-----\n`;
}

function pemHex(data: Buffer, label: string): string {
    const encoded = data.toString("hex");
    const lines = encoded.match(/.{1,32}/g)?.join("\n") ?? "";
    return `-----BEGIN ${label}-----\n${lines}\n-----END ${label}-----\n`;
}

/**
 * OpenVPN client configuration compatible with dvpnx v9 and dvpncli v5.
 */
export class OpenVPN {
    readonly uuid: string;
    child: ChildProcessWithoutNullStreams | null;
    configPath: string | null;

    private config: OpenVPNConfig | null;
    private tempDirectory: string | null;

    constructor() {
        this.uuid = randomUUID();
        this.child = null;
        this.configPath = null;
        this.config = null;
        this.tempDirectory = null;
    }

    public getPeerRequest(): { uuid: number[] } {
        return { uuid: uuidToByteArray(this.uuid) };
    }

    public parseConfig(data: OpenVPNHandshakeData, nodeAddrs: string[]): void {
        if (!data || !Array.isArray(data.metadata) || data.metadata.length === 0) {
            throw new TypeError("OpenVPN handshake metadata is empty");
        }
        if (!Array.isArray(nodeAddrs) || nodeAddrs.length === 0) {
            throw new TypeError("OpenVPN node addresses are empty");
        }

        const metadata = data.metadata[0];
        if (!Number.isInteger(metadata.port) || metadata.port < 1 || metadata.port > 65535) {
            throw new RangeError(`Invalid OpenVPN port: ${metadata.port}`);
        }
        if (metadata.protocol !== "tcp" && metadata.protocol !== "udp") {
            throw new TypeError(`Unsupported OpenVPN protocol: ${metadata.protocol}`);
        }

        this.config = {
            addr: preferIPv4(nodeAddrs),
            port: metadata.port,
            protocol: metadata.protocol,
            ca: decodeGoBytes(metadata.ca, "OpenVPN ca"),
            tls: decodeGoBytes(metadata.tls, "OpenVPN tls"),
            cert: decodeGoBytes(data.cert, "OpenVPN cert"),
            key: decodeGoBytes(data.key, "OpenVPN key"),
        };
    }

    public buildConfigString(pkiDirectory: string): string {
        if (!this.config) {
            throw new Error("OpenVPN config not initialized. Call parseConfig first.");
        }

        const config = this.config;
        const lines = [
            "client",
            "dev ovpn0",
            "dev-type tun",
            `proto ${config.protocol}`,
            `remote ${config.addr} ${config.port}`,
            "nobind",
            `ca "${path.join(pkiDirectory, "ca.crt")}"`,
            `cert "${path.join(pkiDirectory, "client.crt")}"`,
            `key "${path.join(pkiDirectory, "client.key")}"`,
            `tls-crypt "${path.join(pkiDirectory, "tls.key")}"`,
            "auth-nocache",
            "auth SHA256",
            "data-ciphers AES-256-GCM:AES-128-GCM",
            "data-ciphers-fallback AES-256-GCM",
            "tls-cipher TLS-ECDHE-ECDSA-WITH-AES-256-GCM-SHA384",
            "tls-client",
            "tls-version-min 1.2",
            "remote-cert-tls server",
            "redirect-gateway def1 ipv6 bypass-dhcp",
            "topology subnet",
        ];
        if (config.protocol === "udp") {
            lines.push("explicit-exit-notify 1");
        }
        lines.push("persist-key", "persist-tun");

        return `${lines.join("\n")}\n`;
    }

    public writeConfig(output?: string): string {
        if (!this.config) {
            throw new Error("OpenVPN config not initialized. Call parseConfig first.");
        }

        const isTemporary = output === undefined;
        const directory = isTemporary
            ? fs.mkdtempSync(path.join(os.tmpdir(), "sentinel-js-sdk-openvpn-"))
            : path.dirname(output!);
        const configPath = output ?? path.join(directory, "client.conf");
        const pkiDirectory = path.join(directory, "pki");

        fs.mkdirSync(pkiDirectory, { recursive: true, mode: 0o700 });
        fs.writeFileSync(path.join(pkiDirectory, "ca.crt"), pemBase64(this.config.ca, "CERTIFICATE"), { mode: 0o600 });
        fs.writeFileSync(path.join(pkiDirectory, "client.crt"), pemBase64(this.config.cert, "CERTIFICATE"), { mode: 0o600 });
        fs.writeFileSync(path.join(pkiDirectory, "client.key"), pemBase64(this.config.key, "PRIVATE KEY"), { mode: 0o600 });
        fs.writeFileSync(path.join(pkiDirectory, "tls.key"), pemHex(this.config.tls, "OpenVPN Static key V1"), { mode: 0o600 });
        fs.writeFileSync(configPath, this.buildConfigString(pkiDirectory), { mode: 0o600 });

        for (const file of ["ca.crt", "client.crt", "client.key", "tls.key"]) {
            try { fs.chmodSync(path.join(pkiDirectory, file), 0o600); } catch {}
        }
        try { fs.chmodSync(configPath, 0o600); } catch {}

        if (isTemporary) {
            this.configPath = configPath;
            this.tempDirectory = directory;
        }

        return configPath;
    }

    public connect(configFile?: string): number | undefined {
        const target = configFile ?? this.configPath ?? this.writeConfig();
        this.child = spawn("openvpn", ["--config", target]);
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
