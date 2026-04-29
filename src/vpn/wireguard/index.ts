import { generateKeyPairSync, randomBytes } from "crypto"
import { spawn } from "child_process";
import findFreePorts from "find-free-ports"

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

import qrcode from 'qrcode';

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
    listenPort: number,
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


// oh, well... https://www.npmjs.com/package/wireguard-tools
// Warning, in order to use connect and disconnect method we need sudoers permission
export class Wireguard {
    // https://github.com/sentinel-official/cli-client/blob/master/services/wireguard/types/config.go
    // https://github.com/pirate/wireguard-docs?tab=readme-ov-file
    interface: Interface | null
    peer: Peer | null

    publicKey: string
    privateKey: string

    constructor() {
        this.interface = null;
        this.peer = null;

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
        mtu: number = 1280
    ): Promise<void> {
        const [listenPort] = await findFreePorts(1);

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
        const host = nodeAddrs[0];
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
        if (output == undefined) {
            const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-js-sdk'))
            output = path.join(tempDirectory, "wgsent0.conf")
        }

        if (this.interface && this.peer) {
            // ungly, but betten than nothing :)
            var config = "[Interface]\n"
            config += "Address = " + this.interface.addresses.join(",") + "\n"
            config += "PrivateKey = " + this.interface.privateKey + "\n"
            config += "ListenPort = " + this.interface.listenPort.toString() + "\n"
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

            fs.writeFileSync(output, config);
            return output
        }
        return null
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
        config += "ListenPort = " + this.interface.listenPort.toString() + "\n";
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
     * Brings up the WireGuard tunnel using `wg-quick up`.
     * Requires sudo/root privileges.
     *
     * @param configFile - Optional path to an existing `.conf` file.
     *   If omitted, writes the current config to a temp file first.
     */
    public connect(configFile?: string) {
        if (configFile == undefined) {
            // const randomFile = "wg_" + randomBytes(8).toString('hex') + ".conf"
            // pkexec wg-quick up /tmp/sentinel-js-sdkR2Resv/wg_76294e9ab0aac67f.conf
            // wg-quick: The config file must be a valid interface name, followed by .conf

            /* Recommended INTERFACE names include `wg0' or `wgvpn0' or even `wgmgmtlan0'.  However,  the
            number  at  the  end  is  in  fact  optional,  and  really  any  free-form  string  [a-zA-
            Z0-9_=+.-]{1,15} will work. So even interface names corresponding to geographic  locations
            would suffice, such as `cincinnati', `nyc', or `paris', if that's somehow desirable */

            const randomFile = "wgsent0.conf"
            const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-js-sdk'))
            configFile = path.join(tempDirectory, randomFile)
            // Hope the config are in "memory"
            this.writeConfig(configFile)
        }
        const child = spawn("wg-quick", ["up", configFile])
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function (data) { console.log('stdout: ' + data.trim()); });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) { console.log('stderr: ' + data.trim()); });
        child.on('close', (code) => console.log(`wg-quick up exited with code ${code}.`));
    }

    /**
     * Brings down the WireGuard tunnel using `wg-quick down`.
     * Requires sudo/root privileges.
     *
     * @param configFile - Path to the `.conf` file used when connecting.
     */
    public disconnect(configFile: string) {
        const child = spawn("wg-quick", ["down", configFile])
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function (data) { console.log('stdout: ' + data.trim()); });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) { console.log('stderr: ' + data.trim()); });
        child.on('close', (code) => console.log(`wg-quick down exited with code ${code}.`));
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
