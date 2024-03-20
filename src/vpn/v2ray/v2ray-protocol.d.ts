// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-protocol.d.ts

declare namespace V2RayProtocol {
    interface Blackhole {
        response: { type: "http" | "none" };
    }
    interface Dns {
        network: "tcp" | "udp";
        address: string;
        port: number;
    }
    interface DokodemoDoor {
        address?: string;
        port: number;
        network: "tcp" | "udp" | "tcp,udp";
        timeout?: number;
        followRedirect?: boolean;
        userLevel?: number;
    }
    interface Freedom {
        domainStrategy: "AsIs" | "UseIP" | "UseIPv4" | "UseIPv6";
        redirect: string;
        userLevel?: number;
    }
    namespace HTTP {
        interface User {
            user: string;
            pass: string;
        }
    }
    interface HTTPInbound {
        timeout?: number;
        accounts: HTTP.User[];
        allowTransparent?: boolean;
        userLevel?: number;
    }
    namespace HTTPOutbound {
        interface Server {
            address: string;
            port: number;
            users: HTTP.User[];
        }
    }
    interface HTTPOutbound {
        servers: HTTPOutbound.Server[];
    }
    export namespace Shadowsocks {
        type Method =
            | "aes-256-gcm"
            | "aes-128-gcm"
            | "chacha20-poly1305"
            | "chacha20-ietf-poly1305"
            | "none"
            | "plain";
    }
    interface ShadowsocksInbound {
        email?: string;
        method: Shadowsocks.Method;
        password: string;
        level?: number;
        network: "tcp" | "udp" | "tcp,udp";
    }
    namespace ShadowsocksOutbound {
        interface Server {
            email?: string;
            address: string;
            port: number;
            method: Shadowsocks.Method;
            password: string;
            level?: number;
        }
    }
    interface ShadowsocksOutbound {
        servers: ShadowsocksOutbound.Server[];
    }
    namespace SocksInbound {
        interface Account {
            user: string;
            pass: string;
        }
    }
    interface SocksInbound {
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
            address: string;
            port: number;
            users: User[];
        }
    }
    interface SocksOutbound {
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
            address: string;
            port: number;
            users: User[];
        }
    }
    interface VMessOutbound {
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
        clients: VMessInbound.Client[];
        default?: VMessInbound.Default;
        detour?: VMessInbound.Detour;
        disableInsecureEncryption?: boolean;
    }
    type InboundProtocols =
        | DokodemoDoor
        | HTTPInbound
        | ShadowsocksInbound
        | SocksInbound
        | VMessInbound;
    type OutboundProtocols =
        | Blackhole
        | Dns
        | Freedom
        | HTTPOutbound
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
        | "http"
        | "mtproto"
        | "shadowsocks"
        | "socks"
        | "vmess";
}

export default V2RayProtocol;