import { generateKeyPairSync, randomBytes } from "crypto"
import { spawn } from "child_process";
import { uintArrayTob64 } from "../../utils"
import findFreePorts from "find-free-ports"

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

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

            this.interface = {
                privateKey: this.privateKey,
                addresses: [],
                listenPort: listenPort,
                dns: ["10.8.0.1", "1.0.0.1", "1.1.1.1"],
            }

            const ipv4Address = [...wgBuff.subarray(0, 4)].join(".") + "/32"
            if(ipv4Address) this.interface.addresses.push(ipv4Address)

            // const ipv6Address = [...wgBuff.subarray(4, 20)].join(":") + "/128"
            // Short version: .match(/.{1,4}/g).map((val) => val.replace(/^0+/, '')).join(':').replace(/0000\:/g, ':').replace(/:{2,}/g, '::')
            const ipv6Address = wgBuff.subarray(4, 20).toString('hex').match(/.{1,4}/g)?.join(':') + "/128"
            if(ipv6Address) this.interface.addresses.push(ipv6Address)

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

    public writeConfig(output?: string): string | null {
        if(output == undefined){
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

    public connect(configFile?: string) {
        if(configFile == undefined){
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
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data.trim());
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function(data) {
            console.log('stderr: ' + data.trim());
        });

        child.on('close', (code) => {
            console.log(`exited with code ${code}.`);
        });
    }

    public disconnect(configFile: string){
        const child = spawn("wg-quick", ["down", configFile])
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function(data) {
            console.log('stdout: ' + data.trim());
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function(data) {
            console.log('stderr: ' + data.trim());
        });

        child.on('close', (code) => {
            console.log(`exited with code ${code}.`);
        });
    }
}
