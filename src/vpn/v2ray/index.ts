import { randomUUID, randomBytes } from "crypto"
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import findFreePorts from "find-free-ports"

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

import V2RayConf from "./v2ray-conf";
import { V2RayStreamSettings } from "./v2ray-transport";

export class V2Ray {
    // https://www.v2ray.com/en/configuration/overview.html

    // outdated - really sad :(
    // typing was copied from here:
    // https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-conf.d.ts

    config: V2RayConf
    uuid: string

    child: null | ChildProcessWithoutNullStreams;

    constructor() {
        this.child = null;
        this.uuid = this.genuuid();

        // initialize default configuration values from:  https://github.com/sentinel-official/cli-client/blob/master/services/v2ray/types/config.go
        this.config = {
            "api": {
                "services": [ "StatsService" ], "tag": "api"
            },
            "inbounds": [],  // will be populate from .parse method
            "log": { "loglevel": "none" },
            "outbounds": [],  // will be populate from .parse method
            "policy": {
                "levels": {
                    "0": { "downlinkOnly": 0, "uplinkOnly": 0 }
                },
                "system": {
                    "statsOutboundDownlink": true,
                    "statsOutboundUplink": true
                }
            },
            "routing": {
                "rules": [
                    { "inboundTag": [ "api" ], "outboundTag": "api", "type": "field" }
                ]
            },
            "stats": {}
        }
    }

    genuuid(): string {
        return randomUUID();
    }

    getKey(): string {
        const buffuuid = Buffer.from(this.uuid.replace(/-/g, ''), "hex");
        return Buffer.concat([Buffer.from([0x01]), buffuuid]).toString("base64");
    }

    public async parseConfig(content: string) {
        var v2rayBuff = Buffer.from(content, 'base64');
        if(v2rayBuff.length === 7 && this.uuid) {
            const vmessAddress = [...v2rayBuff.subarray(0, 4)].join(".")
            const vmessPort = (v2rayBuff[4] & -1) << 8 | v2rayBuff[5] & -1

            // https://github.com/sentinel-official/cli-client/blob/4026ebc77f6c7431247f34bdfd3c73233f3a5fdf/cmd/connect.go#L385-L405
            const vmessTransports = ["tcp", "mkcp", "websocket", "http", "domainsocket", "quic", "gun", "grpc"]
            // following this: https://www.v2ray.com/en/configuration/transport/tcp.html
            // the only value allowed are:  "tcp" | "kcp" | "ws" | "http" | "domainsocket" | "quic"

            const vmessTransport = vmessTransports[ v2rayBuff[v2rayBuff.length -1] - 1]

            const [apiPort] = await findFreePorts(1)

            this.config.inbounds.push({
                "listen": "127.0.0.1",
                "port": apiPort,
                "protocol": "dokodemo-door",
                "settings": {
                    "address": "127.0.0.1",
                    "port": 53,  // i need a default port here, It's not defined in golang file.
                    "network":  "tcp,udp"  // same for network, default value is required.
                },
                "tag": "api"
            })

            // v2RayProxyPort = cmd.Flags().Uint16(clienttypes.FlagV2RayProxyPort, 1080, "port number fot the V2Ray SOCKS proxy")

            this.config.inbounds.push({
                "listen": "127.0.0.1",
                "port": 1080,  // default value from v2RayProxyPort
                "protocol": "socks",
                "settings": {
                    "ip": "127.0.0.1",
                    "udp": true
                },
                "sniffing": {
                    "destOverride": [
                        "http",
                        "tls"
                    ],
                    "enabled": true
                },
                "tag": "proxy"
            })

            this.config.outbounds.push({
                "protocol": "vmess",
                "settings": {
                    "vnext": [
                        {
                            "address": vmessAddress,
                            "port": vmessPort,
                            "users": [
                                {
                                    "alterId": 0,
                                    "id": this.uuid
                                }
                            ]
                        }
                    ]
                },
                "streamSettings": {
                    "network": vmessTransport as V2RayStreamSettings["network"]
                },
                "tag": "vmess"
            })
        }
    }

    public writeConfig(output?: string): string {
        if(output == undefined){
            const randomFile = "v2ray_" + randomBytes(8).toString('hex') + ".json"
            const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-js-sdk'))
            output = path.join(tempDirectory, randomFile)
        }
        fs.writeFileSync(output, JSON.stringify(this.config, null, 4));
        return output;
    }

    public connect(configFile?: string): number | undefined {
        if(configFile == undefined){
            const randomFile = "v2ray_" + randomBytes(8).toString('hex') + ".json"
            const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-js-sdk'))
            configFile = path.join(tempDirectory, randomFile)
            // Hope the config are in "memory"
            this.writeConfig(configFile)
        }
        this.child = spawn("v2ray", ["run", "--config", configFile])
        return this.child.pid
    }

    public disconnect(): boolean {
        if(this.child) return this.child.kill('SIGINT');
        return false
    }
}
