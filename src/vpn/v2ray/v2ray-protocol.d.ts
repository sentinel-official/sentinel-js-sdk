// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-protocol.d.ts

declare namespace V2RayProtocol {
    interface Blackhole {
        // https://www.v2ray.com/en/configuration/protocols/blackhole.html
        response: { type: "http" | "none" };
    }

    interface Dns {
        // https://www.v2ray.com/en/configuration/protocols/dns.html
        network: "tcp" | "udp";
        address: string;
        port: number;
    }

    interface DokodemoDoor {
        address?: string;
        port: number;
        network: "tcp" | "udp" | "tcp,udp";
        timeout?: number;
        // timeout is not present on ConfigurationObject but it exist in the example
        followRedirect?: boolean;
        userLevel?: number;
    }

    interface Freedom {
        // https://www.v2ray.com/en/configuration/protocols/freedom.html
        domainStrategy: "AsIs" | "UseIP" | "UseIPv4" | "UseIPv6";
        redirect: string;
        userLevel?: number;
    }

    namespace MTProto {
        interface User {
            // https://www.v2ray.com/en/configuration/protocols/mtproto.html#userobject
            email: string,
            level: string,
            secret: string
        }
    }
    interface MTProtoInbound {
        // https://www.v2ray.com/en/configuration/protocols/mtproto.html
        users: MTProto.User[]
    }
    interface MTProtoOutbound {
        // https://www.v2ray.com/en/configuration/protocols/mtproto.html
    }


    namespace HTTP {
        interface User {
            user: string;
            pass: string;
        }
    }
    interface HTTPInbound {
        timeout?: number; // ?
        accounts: HTTP.User[];
        allowTransparent?: boolean;
        userLevel?: number;
    }
    /* namespace HTTPOutbound {
        interface Server {
            address: string;
            port: number;
            users: HTTP.User[];
        }
    }
    interface HTTPOutbound {
        servers: HTTPOutbound.Server[];
    } */

    export namespace Shadowsocks {
        type Method =
            | "aes-256-cfb"
            | "aes-128-cfb"
            | "chacha20"
            | "chacha20-ietf"
            | "aes-256-gcm"
            | "aes-128-gcm"
            | "chacha20-poly1305"
            | "chacha20-ietf-poly1305"
            | "none"  // ?
            | "plain" // ?;
    }
    interface ShadowsocksInbound {
        // https://www.v2ray.com/en/configuration/protocols/shadowsocks.html#inboundconfigurationobject
        email?: string;
        method: Shadowsocks.Method;
        password: string;
        level?: number;
        ota?: boolean;
        network: "tcp" | "udp" | "tcp,udp";
    }
    namespace ShadowsocksOutbound {
        interface Server {
            email?: string;
            address: string;
            port: number;
            method: Shadowsocks.Method;
            password: string;
            ora?: boolean;
            level?: number;
        }
    }
    interface ShadowsocksOutbound {
        // https://www.v2ray.com/en/configuration/protocols/shadowsocks.html#outboundconfigurationobject
        servers: ShadowsocksOutbound.Server[];
    }

    namespace SocksInbound {
        interface Account {
            user: string;
            pass: string;
        }
    }
    interface SocksInbound {
        // https://www.v2ray.com/en/configuration/protocols/socks.html#inboundconfigurationobject
        auth?: "noauth" | "password";
        accounts?: SocksInbound.Account[];
        udp?: boolean;
        ip?: string;
        userLevel?: number;
    }
    namespace SocksOutbound {
        interface User {
            user: string;
            pass: string;
            level?: number;
        }
        interface Server {
            // https://www.v2ray.com/en/configuration/protocols/socks.html#serverobject
            address: string;
            port: number;
            users: User[];
        }
    }
    interface SocksOutbound {
        // https://www.v2ray.com/en/configuration/protocols/shadowsocks.html#outboundconfigurationobject
        servers: SocksOutbound.Server[];
    }

    namespace VMessOutbound {
        interface User {
            id: string;
            alterId: number;
            security?: "aes-128-gcm" | "chacha20-poly1305" | "auto" | "none";
            level?: number;
        }
        interface Server {
            // https://www.v2ray.com/en/configuration/protocols/vmess.html#serverobject
            address: string;
            port: number;
            users: User[];
        }
    }
    interface VMessOutbound {
        // https://www.v2ray.com/en/configuration/protocols/vmess.html#outboundconfigurationobject
        vnext: VMessOutbound.Server[];
    }
    namespace VMessInbound {
        interface Client {
            id: string;
            level?: number;
            alterId: number;
            email?: string;
        }
        interface Detour {
            to: string;
        }
        interface Default {
            level?: number;
            alterId?: number;
        }
    }
    interface VMessInbound {
        // https://www.v2ray.com/en/configuration/protocols/vmess.html#inboundconfigurationobject
        clients: VMessInbound.Client[];
        default?: VMessInbound.Default;
        detour?: VMessInbound.Detour;
        disableInsecureEncryption?: boolean;
    }

    type InboundProtocols =
        | DokodemoDoor
        | MTProtoInbound
        | HTTPInbound
        | ShadowsocksInbound
        | SocksInbound
        | VMessInbound;
    type OutboundProtocols =
        | Blackhole
        | Dns
        | Freedom
        | MTProtoOutbound
        // | HTTPOutbound
        | ShadowsocksOutbound
        | SocksOutbound
        | VMessOutbound;
    type InboundProtocolNames =
        | "dokodemo-door"
        | "http"
        | "mtproto"
        | "shadowsocks"
        | "socks"
        | "vmess";
    type OutboundProtocolNames =
        | "blackhole"
        | "dns"
        | "freedom"
        // | "http"
        | "mtproto"
        | "shadowsocks"
        | "socks"
        | "vmess";
}

export default V2RayProtocol;