import { generateKeyPairSync, randomInt } from "crypto";
import { spawn } from "child_process";
import * as fs from "fs";
import { isIP } from "net";
import * as os from "os";
import * as path from "path";
import { platform } from "os";

import { preferIPv4 } from "../../utils";

export interface AmneziaWGServerMetadata {
    port: number;
    public_key: string;
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    i1?: string;
    i2?: string;
    i3?: string;
    i4?: string;
    i5?: string;
}

export interface AmneziaWGHandshakeData {
    addrs: string[];
    metadata: AmneziaWGServerMetadata[];
}

export interface AmneziaWGOptions {
    dns?: string[];
    mtu?: number;
    listenPort?: number;
    junkPacketCount?: number;
    junkPacketMinSize?: number;
    junkPacketMaxSize?: number;
}

interface AmneziaWGConfig {
    addresses: string[];
    endpoint: string;
    serverPublicKey: string;
    dns: string[];
    mtu: number;
    listenPort: number;
    jc: number;
    jmin: number;
    jmax: number;
    metadata: AmneziaWGServerMetadata;
}

function validateBase64Key(value: unknown, field: string): asserts value is string {
    if (typeof value !== "string" || !/^[A-Za-z0-9+/]{43}=$/.test(value)) {
        throw new TypeError(`${field} must be a 32-byte base64 key`);
    }
    const decoded = Buffer.from(value, "base64");
    if (decoded.length !== 32 || decoded.toString("base64") !== value) {
        throw new TypeError(`${field} must be a canonical 32-byte base64 key`);
    }
}

function validateCIDR(value: string): void {
    const parts = value.split("/");
    const family = isIP(parts[0]);
    const prefix = Number(parts[1]);
    const maxPrefix = family === 4 ? 32 : family === 6 ? 128 : -1;
    if (
        parts.length !== 2 ||
        !Number.isInteger(prefix) ||
        prefix < 0 ||
        prefix > maxPrefix
    ) {
        throw new TypeError(`Invalid AmneziaWG address: ${value}`);
    }
}

function validateMetadata(metadata: AmneziaWGServerMetadata): void {
    if (!Number.isInteger(metadata.port) || metadata.port < 1 || metadata.port > 65535) {
        throw new RangeError(`Invalid AmneziaWG port: ${metadata.port}`);
    }
    validateBase64Key(metadata.public_key, "AmneziaWG public_key");

    for (const [name, max] of [["s1", 64], ["s2", 64], ["s3", 64], ["s4", 32]] as const) {
        const value = metadata[name];
        if (!Number.isInteger(value) || value < 0 || value > max) {
            throw new RangeError(`Invalid AmneziaWG ${name}: ${value}`);
        }
    }
    if (metadata.s1 + 56 === metadata.s2) {
        throw new RangeError("AmneziaWG s1 + 56 must not equal s2");
    }

    const headers = [metadata.h1, metadata.h2, metadata.h3, metadata.h4];
    for (let index = 0; index < headers.length; index++) {
        const value = headers[index];
        if (!Number.isInteger(value) || value <= 4 || value > 0xffffffff) {
            throw new RangeError(`Invalid AmneziaWG h${index + 1}: ${value}`);
        }
    }
    if (new Set(headers).size !== headers.length) {
        throw new RangeError("AmneziaWG h1-h4 must be distinct");
    }

    for (const name of ["i1", "i2", "i3", "i4", "i5"] as const) {
        const value = metadata[name];
        if (value === undefined) continue;
        if (typeof value !== "string" || /[\x00-\x1f\x7f"'`$;\\]/.test(value)) {
            throw new TypeError(`Invalid AmneziaWG ${name}`);
        }
    }
}

function validatePort(value: number, field: string): void {
    if (!Number.isInteger(value) || value < 1 || value > 65535) {
        throw new RangeError(`Invalid AmneziaWG ${field}: ${value}`);
    }
}

function runAWGQuick(action: "up" | "down", configFile: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const isWindows = platform() === "win32";
        const executable = isWindows ? "amneziawg" : "awg-quick";
        const args = isWindows
            ? action === "up"
                ? ["/installtunnelservice", configFile]
                : ["/uninstalltunnelservice", path.basename(configFile, ".conf")]
            : [action, configFile];
        const child = spawn(executable, args);
        let stderr = "";

        child.stderr.setEncoding("utf8");
        child.stderr.on("data", data => {
            if (stderr.length < 16384) stderr += data;
        });
        child.once("error", error => reject(new Error(`Failed to start ${executable}: ${error.message}`)));
        child.once("close", code => {
            if (code === 0) resolve();
            else reject(new Error(`${executable} ${action} failed (exit code ${code}): ${stderr.trim()}`));
        });
    });
}

/**
 * AmneziaWG client compatible with dvpnx v9 and dvpncli v5.
 */
export class AmneziaWG {
    readonly publicKey: string;
    readonly privateKey: string;
    configPath: string | null;

    private config: AmneziaWGConfig | null;
    private tempDirectory: string | null;

    constructor() {
        const keys = generateKeyPairSync("x25519", {
            publicKeyEncoding: { format: "der", type: "spki" },
            privateKeyEncoding: { format: "der", type: "pkcs8" },
        });
        this.publicKey = keys.publicKey.subarray(12).toString("base64");
        this.privateKey = keys.privateKey.subarray(16).toString("base64");
        this.configPath = null;
        this.config = null;
        this.tempDirectory = null;
    }

    public getPeerRequest(): { public_key: string } {
        return { public_key: this.publicKey };
    }

    public parseConfig(
        data: AmneziaWGHandshakeData,
        nodeAddrs: string[],
        options: AmneziaWGOptions = {},
    ): void {
        if (!data || !Array.isArray(data.addrs) || data.addrs.length === 0) {
            throw new TypeError("AmneziaWG assigned addresses are empty");
        }
        if (!Array.isArray(data.metadata) || data.metadata.length === 0) {
            throw new TypeError("AmneziaWG handshake metadata is empty");
        }
        if (!Array.isArray(nodeAddrs) || nodeAddrs.length === 0) {
            throw new TypeError("AmneziaWG node addresses are empty");
        }
        for (const address of data.addrs) validateCIDR(address);

        const metadata = data.metadata[0];
        validateMetadata(metadata);

        const listenPort = options.listenPort ?? randomInt(1024, 65536);
        validatePort(listenPort, "listen port");
        const mtu = options.mtu ?? 1420;
        if (!Number.isInteger(mtu) || mtu < 576 || mtu > 65535) {
            throw new RangeError(`Invalid AmneziaWG MTU: ${mtu}`);
        }

        const dns = options.dns ?? [
            "208.67.222.222",
            "208.67.220.220",
            "2620:119:35::35",
            "2620:119:53::53",
        ];
        for (const address of dns) {
            if (isIP(address) === 0) throw new TypeError(`Invalid AmneziaWG DNS address: ${address}`);
        }

        const jc = options.junkPacketCount ?? randomInt(3, 11);
        const jmin = options.junkPacketMinSize ?? randomInt(64, 257);
        const jmax = options.junkPacketMaxSize ?? randomInt(512, 1025);
        if (!Number.isInteger(jc) || jc < 0 || jc > 10) {
            throw new RangeError(`Invalid AmneziaWG Jc: ${jc}`);
        }
        if (
            !Number.isInteger(jmin) ||
            !Number.isInteger(jmax) ||
            jmin < 64 ||
            jmax > 1024 ||
            jmin >= jmax
        ) {
            throw new RangeError(`Invalid AmneziaWG junk packet range: ${jmin}-${jmax}`);
        }

        const host = preferIPv4(nodeAddrs);
        const endpoint = isIP(host) === 6
            ? `[${host}]:${metadata.port}`
            : `${host}:${metadata.port}`;

        this.config = {
            addresses: [...data.addrs],
            endpoint,
            serverPublicKey: metadata.public_key,
            dns: [...dns],
            mtu,
            listenPort,
            jc,
            jmin,
            jmax,
            metadata,
        };
    }

    public buildConfigString(): string {
        if (!this.config) {
            throw new Error("AmneziaWG config not initialized. Call parseConfig first.");
        }

        const config = this.config;
        const metadata = config.metadata;
        const lines = [
            "[Interface]",
            `Address = ${config.addresses.join(",")}`,
            `DNS = ${config.dns.join(",")}`,
            `ListenPort = ${config.listenPort}`,
            `MTU = ${config.mtu}`,
            `PrivateKey = ${this.privateKey}`,
            `Jc = ${config.jc}`,
            `Jmin = ${config.jmin}`,
            `Jmax = ${config.jmax}`,
            `S1 = ${metadata.s1}`,
            `S2 = ${metadata.s2}`,
            `S3 = ${metadata.s3}`,
            `S4 = ${metadata.s4}`,
            `H1 = ${metadata.h1}`,
            `H2 = ${metadata.h2}`,
            `H3 = ${metadata.h3}`,
            `H4 = ${metadata.h4}`,
        ];
        for (const name of ["i1", "i2", "i3", "i4", "i5"] as const) {
            if (metadata[name]) lines.push(`${name.toUpperCase()} = ${metadata[name]}`);
        }
        lines.push(
            "",
            "[Peer]",
            "AllowedIPs = 0.0.0.0/0,::/0",
            `Endpoint = ${config.endpoint}`,
            "PersistentKeepalive = 25",
            `PublicKey = ${config.serverPublicKey}`,
        );

        return `${lines.join("\n")}\n`;
    }

    public writeConfig(output?: string): string {
        const isTemporary = output === undefined;
        const directory = isTemporary
            ? fs.mkdtempSync(path.join(os.tmpdir(), "sentinel-js-sdk-amneziawg-"))
            : path.dirname(output!);
        const target = output ?? path.join(directory, "awg0.conf");

        fs.writeFileSync(target, this.buildConfigString(), { mode: 0o600 });
        try { fs.chmodSync(target, 0o600); } catch {}

        if (isTemporary) {
            this.configPath = target;
            this.tempDirectory = directory;
        }

        return target;
    }

    public async connect(configFile?: string): Promise<void> {
        const target = configFile ?? this.configPath ?? this.writeConfig();
        try {
            await runAWGQuick("up", target);
        } catch (error) {
            if (target === this.configPath) this.cleanup();
            throw error;
        }
    }

    public async disconnect(configFile?: string): Promise<void> {
        const target = configFile ?? this.configPath;
        if (!target) throw new Error("AmneziaWG config path is not set");
        await runAWGQuick("down", target);
        if (target === this.configPath) this.cleanup();
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
