import { generateKeyPairSync } from "crypto"
import { execFileSync, spawn } from "child_process";
import { platform } from 'os';

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

import qrcode from 'qrcode';

import { preferIPv4 } from "../../utils";

interface WireGuardMetadata {
    port: number;
    public_key: string;
}

// from sentinel-official/sentinel-dvpnx handshake
export interface WireGuardHandshakeData {
    addrs: string[];             // client IP/CIDR assigned. ["10.153.98.8/32"]
    metadata: WireGuardMetadata[];  // endpoint node info (metadata: port, public_key)
}

interface Interface {
    privateKey: string,
    addresses: string[],
    // Optional. When omitted, WireGuard auto-selects a free UDP port at bind
    // time (kernel-level, no TOCTOU). Set explicitly only to force a fixed port.
    listenPort?: number,
    dns: string[],
    // dnsSearch: string[],
    // https://gist.github.com/nitred/f16850ca48c48c79bf422e90ee5b9d95
    mtu?: number,
    preUp?: string,
    postUp?: string,
    preDown?: string
    postDown?: string
}

interface Peer {
    publicKey: string,
    presharedKey?: string,
    allowedIPs: string[],
    endpoint: string,
    persistentKeepAlive: number
}


/**
 * Checks if the current process has administrator/root privileges.
 * WireGuard tunnel management requires elevated permissions on all platforms.
 */
export function isAdmin(): boolean {
    if (platform() === 'win32') {
        try {
            const output = execFileSync(
                "powershell.exe",
                [
                    "-NoLogo",
                    "-NoProfile",
                    "-NonInteractive",
                    "-Command",
                    "(New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)",
                ],
                { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], windowsHide: true },
            );
            return output.trim().toLowerCase() === "true";
        } catch {
            return false;
        }
    }
    return process.getuid?.() === 0;
}

/**
 * Finds the WireGuard executable on Windows.
 * Checks common installation paths.
 */
function findWireGuardExe(): string | null {
    if (platform() !== 'win32') return null;
    const installRoots = [
        process.env.ProgramFiles,
        process.env["ProgramFiles(x86)"],
        "C:\\Program Files",
        "C:\\Program Files (x86)",
    ];
    for (const root of installRoots) {
        if (!root) continue;
        const executable = path.win32.join(root, "WireGuard", "wireguard.exe");
        if (fs.existsSync(executable)) return executable;
    }

    try {
        const result = execFileSync(
            "where.exe",
            ["wireguard.exe"],
            { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], windowsHide: true },
        );
        for (const line of result.split(/\r?\n/)) {
            const executable = line.trim();
            if (executable && fs.existsSync(executable)) return executable;
        }
    } catch {}
    return null;
}

function windowsTunnelName(configFile: string): string {
    return path.win32.basename(configFile).replace(/\.conf(?:\.dpapi)?$/i, "");
}

function commandError(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

function runWireGuardWindows(executable: string, args: string[]): void {
    execFileSync(executable, args, {
        stdio: ["ignore", "ignore", "pipe"],
        windowsHide: true,
    });
}

function queryWindowsService(serviceName: string): string {
    return execFileSync(
        "sc.exe",
        ["query", serviceName],
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], windowsHide: true },
    );
}

function isWindowsServiceRunning(output: string): boolean {
    return /STATE\s*:\s*4\b|\bRUNNING\b/i.test(output);
}

// oh, well... https://www.npmjs.com/package/wireguard-tools
// Warning, in order to use connect and disconnect method we need sudoers permission
export class Wireguard {
    // https://github.com/sentinel-official/cli-client/blob/master/services/wireguard/types/config.go
    // https://github.com/pirate/wireguard-docs?tab=readme-ov-file
    interface: Interface | null
    peer: Peer | null

    publicKey: string
    privateKey: string
    configPath: string | null

    constructor() {
        this.interface = null;
        this.peer = null;
        this.configPath = null;

        const keys = this.genKeys();
        this.publicKey = keys.pub
        this.privateKey = keys.prv
    }

    /**
     * Generates a WireGuard X25519 keypair.
     *
     * @returns An object with `pub` (base64 public key) and `prv` (base64 private key)
     */
    public genKeys(): { [k: string]: string } {
        // https://www.reddit.com/r/WireGuard/comments/k5ksax/how_do_i_generate_wireguard_keys_in_js_without/
        const keys = generateKeyPairSync("x25519", {
            publicKeyEncoding: { format: "der", type: "spki" },
            privateKeyEncoding: { format: "der", type: "pkcs8" }
        });
        return {
            pub: keys.publicKey.subarray(12).toString("base64"),
            prv: keys.privateKey.subarray(16).toString("base64"),
        }
    }

    /**
     * Parses the JSON response from the node handshake and builds the
     * WireGuard interface + peer configuration.
     *
     * Replaces the old binary buffer parsing (58-byte format) with the new
     * JSON format introduced in hub v12 / sentinel-dvpnx.
     *
     * @param handshakeData - Parsed `result.data` from the handshake response
     * @param nodeAddrs     - `result.addrs` from the handshake response (public IPs of the node)
     * @param dns           - DNS servers for wg-quick. Pass an empty array to
     *   omit the DNS directive when resolvconf integration is unavailable.
     *
     * @example
     * const data: WireGuardHandshakeData = JSON.parse(
     *     Buffer.from(result.data, 'base64').toString('utf8')
     * );
     * await wg.parseConfig(data, result.addrs);
     */
    public async parseConfig(
        handshakeData: WireGuardHandshakeData,
        nodeAddrs: string[],
        dns: string[] = ["10.8.0.1", "1.0.0.1", "1.1.1.1"],
        mtu: number = 1280,
        listenPort?: number
    ): Promise<void> {
        // Do NOT probe for a free port here: a port found free at config-build
        // time can be taken before WireGuard actually binds it (TOCTOU). When
        // listenPort is omitted we leave it unset so WireGuard picks a free UDP
        // port itself at bind time. Pass listenPort only to force a fixed port.

        // IP/CIDR assigned to the client to use as interface addresses
        this.interface = {
            privateKey: this.privateKey,
            addresses: handshakeData.addrs,
            listenPort,
            dns,
            mtu,
        };

        // Use the first available metadata to build the peer endpoint
        const meta = handshakeData.metadata[0];

        // Endpoint = public IP of the node (from result.addrs) + port (from metadata)
        const host = preferIPv4(nodeAddrs);
        const endpoint = `${host}:${meta.port}`;

        this.peer = {
            publicKey: meta.public_key,
            allowedIPs: ["0.0.0.0/0", "::/0"],
            endpoint,
            persistentKeepAlive: 15,
        };
    }

    /**
     * Serializes the current interface + peer configuration to a WireGuard
     * `.conf` file format and writes it to disk.
     *
     * @param output - Optional file path. If omitted, a temp file is created
     *   in the system temp directory under a `sentinel-js-sdk` prefix.
     * @returns The path of the written config file, or `null` if the config
     *   is not yet initialized (call `parseConfig` first).
     */
    public writeConfig(output?: string): string | null {
        if (!this.interface || !this.peer) return null;

        const isTemporary = output === undefined;
        if (output == undefined) {
            const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-js-sdk'))
            output = path.join(tempDirectory, "wgsent0.conf")
        }

        // ungly, but betten than nothing :)
        var config = "[Interface]\n"
        config += "Address = " + this.interface.addresses.join(",") + "\n"
        config += "PrivateKey = " + this.interface.privateKey + "\n"
        if (this.interface.listenPort !== undefined)
            config += "ListenPort = " + this.interface.listenPort.toString() + "\n"
        if (this.interface.dns.length > 0)
            config += "DNS = " + this.interface.dns.join(",") + "\n"

        if (this.interface.mtu) config += "MTU = " + this.interface.mtu.toString() + "\n"
        if (this.interface.preUp) config += "PreUp = " + this.interface.preUp + "\n"
        if (this.interface.postUp) config += "PostUp = " + this.interface.postUp + "\n"
        if (this.interface.preDown) config += "PreDown = " + this.interface.preDown + "\n"
        if (this.interface.postDown) config += "PostDown = " + this.interface.postDown + "\n"

        config += "\n[Peer]\n"
        config += "PublicKey = " + this.peer.publicKey + "\n"
        config += "AllowedIPs = " + this.peer.allowedIPs.join(",") + "\n"
        config += "Endpoint = " + this.peer.endpoint + "\n"
        if (this.peer.persistentKeepAlive > 0) config += "PersistentKeepalive = " + this.peer.persistentKeepAlive + "\n"

        if (this.peer.presharedKey) config += "PresharedKey = " + this.peer.presharedKey + "\n"

        fs.writeFileSync(output, config, { mode: 0o600 });
        try { fs.chmodSync(output, 0o600); } catch {}
        if (isTemporary) this.configPath = output;
        return output
    }

    /**
     * Builds the WireGuard config string without writing it to disk.
     * Useful for displaying or generating a QR code.
     *
     * @returns The config string, or `null` if not yet initialized.
     */
    public buildConfigString(): string | null {
        if (!this.interface || !this.peer) return null;

        let config = "[Interface]\n";
        config += "Address = " + this.interface.addresses.join(",") + "\n";
        config += "PrivateKey = " + this.interface.privateKey + "\n";
        if (this.interface.listenPort !== undefined)
            config += "ListenPort = " + this.interface.listenPort.toString() + "\n";
        if (this.interface.dns.length > 0)
            config += "DNS = " + this.interface.dns.join(",") + "\n";
        if (this.interface.mtu) config += "MTU = " + this.interface.mtu + "\n";

        config += "\n[Peer]\n";
        config += "PublicKey = " + this.peer.publicKey + "\n";
        config += "AllowedIPs = " + this.peer.allowedIPs.join(",") + "\n";
        config += "Endpoint = " + this.peer.endpoint + "\n";
        config += "PersistentKeepalive = " + this.peer.persistentKeepAlive + "\n";

        if (this.peer.presharedKey)
            config += "PresharedKey = " + this.peer.presharedKey + "\n";

        return config;
    }

    /**
     * Prints the WireGuard configuration as a QR code to the terminal.
     * Useful for importing the config directly into a mobile WireGuard app.
     *
     * Requires `qrcode` package: `npm install qrcode @types/qrcode`
     *
     * @throws If the config is not yet initialized or QR generation fails.
     *
     * @example
     * await wg.printQRCode();
     * // Prints a scannable QR code to stdout
     */
    public async printQRCode(): Promise<void> {
        const config = this.buildConfigString();
        if (!config) throw new Error("WireGuard config not initialized. Call parseConfig first.");

        const qr = await qrcode.toString(config, { type: "terminal", small: true });
        console.log(qr);
    }

    /**
     * Brings up the WireGuard tunnel.
     * On Linux/macOS uses `wg-quick up`. On Windows uses the WireGuard tunnel service.
     * Requires sudo/root/administrator privileges.
     *
     * @param configFile - Optional path to an existing `.conf` file.
     *   If omitted, writes the current config to a temp file first.
     * @returns Promise that resolves on success or rejects with error details.
     */
    public async connect(configFile?: string): Promise<void> {
        if (configFile == undefined) {
            const temporaryConfig = this.writeConfig();
            if (temporaryConfig === null) {
                throw new Error("WireGuard config not initialized. Call parseConfig first.");
            }
            configFile = temporaryConfig;
        }

        if (platform() === 'win32') {
            return this.connectWindows(configFile);
        }
        return this.connectUnix(configFile);
    }

    private connectUnix(configFile: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const child = spawn("wg-quick", ["up", configFile]);
            let stderr = '';

            child.stdout.setEncoding('utf8');
            child.stderr.setEncoding('utf8');
            child.stderr.on('data', (data) => { stderr += data; });
            child.on('error', (err) => {
                if (configFile === this.configPath) this.cleanup();
                reject(new Error(`Failed to start wg-quick: ${err.message}`));
            });
            child.on('close', (code) => {
                if (code === 0) resolve();
                else {
                    if (configFile === this.configPath) this.cleanup();
                    reject(new Error(`wg-quick up failed (exit code ${code}): ${stderr.trim()}`));
                }
            });
        });
    }

    private async connectWindows(configFile: string): Promise<void> {
        if (!isAdmin()) {
            if (configFile === this.configPath) this.cleanup();
            throw new Error(
                "WireGuard tunnel installation requires an elevated administrator process."
            );
        }

        const wgExe = findWireGuardExe();
        if (!wgExe) {
            if (configFile === this.configPath) this.cleanup();
            throw new Error('WireGuard not found. Install from https://www.wireguard.com/install/');
        }

        const tunnelName = windowsTunnelName(configFile);
        const serviceName = `WireGuardTunnel$${tunnelName}`;

        try {
            // Arguments are passed directly without a command shell.
            runWireGuardWindows(wgExe, ["/installtunnelservice", configFile]);

            const deadline = Date.now() + 15000;
            while (Date.now() < deadline) {
                try {
                    if (isWindowsServiceRunning(queryWindowsService(serviceName))) return;
                } catch {}
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            throw new Error(
                `WireGuard tunnel service "${serviceName}" did not reach RUNNING state within 15 seconds`
            );
        } catch (error) {
            let rollbackError: unknown = null;
            try {
                runWireGuardWindows(wgExe, ["/uninstalltunnelservice", tunnelName]);
            } catch (rollback) {
                rollbackError = rollback;
            }

            if (rollbackError === null && configFile === this.configPath) {
                this.cleanup();
            }

            const rollbackMessage = rollbackError === null
                ? ""
                : ` Rollback also failed: ${commandError(rollbackError)}`;
            throw new Error(
                `Failed to start WireGuard tunnel "${tunnelName}": ${commandError(error)}.${rollbackMessage}`
            );
        }
    }

    /**
     * Brings down the WireGuard tunnel.
     * On Linux/macOS uses `wg-quick down`. On Windows removes the tunnel service.
     * Requires sudo/root/administrator privileges.
     *
     * @param configFile - Path to the `.conf` file used when connecting.
     * @returns Promise that resolves on success or rejects with error details.
     */
    public async disconnect(configFile: string): Promise<void> {
        if (platform() === 'win32') {
            return this.disconnectWindows(configFile);
        }
        return this.disconnectUnix(configFile);
    }

    private disconnectUnix(configFile: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const child = spawn("wg-quick", ["down", configFile]);
            let stderr = '';

            child.stdout.setEncoding('utf8');
            child.stderr.setEncoding('utf8');
            child.stderr.on('data', (data) => { stderr += data; });
            child.on('error', (err) => reject(new Error(`Failed to start wg-quick: ${err.message}`)));
            child.on('close', (code) => {
                if (code === 0) {
                    if (configFile === this.configPath) this.cleanup();
                    resolve();
                } else {
                    reject(new Error(`wg-quick down failed (exit code ${code}): ${stderr.trim()}`));
                }
            });
        });
    }

    private async disconnectWindows(configFile: string): Promise<void> {
        if (!isAdmin()) {
            throw new Error(
                "WireGuard tunnel removal requires an elevated administrator process."
            );
        }

        const wgExe = findWireGuardExe();
        if (!wgExe) {
            throw new Error('WireGuard not found');
        }
        const tunnelName = windowsTunnelName(configFile);
        try {
            runWireGuardWindows(wgExe, ["/uninstalltunnelservice", tunnelName]);
        } catch (error) {
            throw new Error(
                `Failed to uninstall WireGuard tunnel "${tunnelName}": ${commandError(error)}`
            );
        }
        if (configFile === this.configPath) this.cleanup();
    }

    /**
     * Removes the temporary config created by this instance. Caller-provided
     * paths are never tracked or deleted automatically.
     */
    public cleanup(): void {
        const target = this.configPath;
        if (!target) return;
        const directory = path.dirname(target);
        try {
            const size = fs.statSync(target).size;
            fs.writeFileSync(target, Buffer.alloc(size, 0));
            fs.unlinkSync(target);
        } catch {
            // Best-effort cleanup
        }
        if (!fs.existsSync(target)) {
            this.configPath = null;
            try {
                fs.rmdirSync(directory);
            } catch {
                // The directory may not be empty or may already be gone.
            }
        }
    }

    /**
     * Returns the current status of the WireGuard tunnel by running `wg show`.
     *
     * @param configFile - Optional path to the `.conf` file (used to derive
     *   the interface name). Defaults to `wgsent0`.
     * @returns Array of peer objects with handshake, transfer, and keepalive info.
     */
    public async show(configFile?: string) {
        const interfaceName = configFile ? configFile.split("/").slice(-1)[0].replace(".conf", "") : "wgsent0"
        const child = spawn("wg", ["show", interfaceName, "dump"])
        child.stdout.setEncoding('utf8');
        child.stderr.setEncoding('utf8');

        var peers: Array<any> = []

        for await (const chunk of child.stdout) {
            console.log('stdout: ', chunk.trim());

            const lines = chunk.trim().split("\n")
            lines.shift() // Remove the first element, It's the interface.
            const keys = [
                "publicKey",
                "privateKey",
                "endpoint",
                "allowedIps",
                "latestHandshakes",
                "transferIn",
                "transferOut",
                "persistentKeepalive",
            ]
            lines.forEach((x: string) => {
                var peer: any = {}
                x.split("\t").forEach((v: string, i: number) => peer[keys[i]] = v)
                peers.push(peer)
            })
        }
        let error = "";
        for await (const chunk of child.stderr) {
            console.error('stderr: ', chunk.trim());
            error += chunk;
        }
        const exitCode = await new Promise((resolve, _) => { child.on('close', resolve); });
        if (exitCode) throw new Error(`wg show failed with exit code ${exitCode}: ${error}`);
        return peers;
    }
}
