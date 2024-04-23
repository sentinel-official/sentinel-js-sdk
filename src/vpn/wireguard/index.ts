import { generateKeyPairSync, randomBytes } from "crypto"
import { spawn } from "child_process";
import { uintArrayTob64 } from "../../utils"
import findFreePorts from "find-free-ports"

import * as path from 'path';
import * as fs from 'fs';

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

    public async parseConfig(content: string) {
        var wgBuff = Buffer.from(content, 'base64');
        if (wgBuff.length === 58 && this.privateKey) {
            const [listenPort] = await findFreePorts(1)

            const ipv4Address = [...wgBuff.subarray(0, 4)].join(".") + "/32"
            const ipv6Address = [...wgBuff.subarray(4, 20)].join(":") + "/128"

            this.interface = {
                privateKey: this.privateKey,
                addresses: [ipv4Address, ipv6Address],
                listenPort: listenPort,
                dns: ["10.8.0.1", "1.0.0.1", "1.1.1.1"],
            }

            const publicKey = uintArrayTob64(Array.from(wgBuff.subarray(26, 58)));
            const host = [...wgBuff.subarray(20, 24)].join(".");
            const port = (wgBuff[24] & -1) << 8 | wgBuff[25] & -1;

            this.peer = {
                publicKey: publicKey,
                allowedIPs: ["0.0.0.0/0", "::/0"],
                endpoint: `${host}:${port}`,
                persistentKeepAlive: 15
            }
        }
    }

    public writeConfig(output: string) {
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
        }
    }

    public connect(configFile: string | undefined) {
        if(configFile == undefined){
            configFile = path.join(fs.mkdtempSync("wg-sentinel-sdk"), randomBytes(32).toString('hex') + ".conf")
            // Hope the config are in "memory"
            this.writeConfig(configFile)
        }
        const child = spawn(`wg-quick up ${configFile}`)
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data);
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
        });

        // child.on('close', function(code) {});
    }

    public disconnect(configFile: string){
        const child = spawn(`wg-quick down ${configFile}`);
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data);
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
        });

        // child.on('close', function(code) {});
    }
}
