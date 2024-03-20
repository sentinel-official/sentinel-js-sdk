// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-transport.d.ts
// https://www.v2ray.com/en/configuration/transport.html

declare namespace V2RayTransport {
    namespace Tcp {
        interface HTTPRequest {
            version?: string;
            method?: string;
            path?: string[];
            headers?: Record<string, string[]>;
        }
        interface HTTPResponse {
            version?: string;
            status?: string;
            reason?: string;
            headers?: Record<string, string[]>;
        }
        interface NoneHeader {
            type: "none";
        }
        interface HttpHeader {
            type: "http";
            request: HTTPRequest;
            response: HTTPResponse;
        }
    }
    interface Tcp {
        // https://www.v2ray.com/en/configuration/transport/tcp.html
        // acceptProxyProtocol?: boolean;
        // header: Tcp.NoneHeader | Tcp.HttpHeader;
        header: Record<string, Tcp.NoneHeader | Tcp.HttpHeader>;
    }

    namespace Kcp {
        type Type = "none" | "srtp" | "utp" | "wechat-video" | "dtls" | "wireguard";
    }
    interface Kcp {
        // https://www.v2ray.com/en/configuration/transport/mkcp.html
        mtu?: number;
        tti?: number;
        uplinkCapacity?: number;
        downlinkCapacity?: number;
        congestion?: boolean;
        readBufferSize?: number;
        writeBufferSize?: number;
        header: {
            type: Kcp.Type;
        };
    }

    interface WebSocket {
        // https://www.v2ray.com/en/configuration/transport/websocket.html
        // acceptProxyProtocol?: boolean;
        path?: string;
        headers: Record<string, string>;
    }

    interface Http {
        // https://www.v2ray.com/en/configuration/transport/h2.html
        host: string[];
        path?: string;
    }

    interface DomainSocket {
        // https://www.v2ray.com/en/configuration/transport/domainsocket.html
        path: string;
        // abstract?: boolean;
        // padding?: boolean;
    }

    interface Quic {
        // https://www.v2ray.com/en/configuration/transport/quic.html
        security: "none" | "aes-128-gcm" | "chacha20-poly1305";
        key: string;
        header: {
            type: "none" | "srtp" | "utp" | "wechat-video" | "dtls" | "wireguard";
        };
    }
}

interface V2RayTransport {
    tcpSettings?: V2RayTransport.Tcp;
    kcpSettings?: V2RayTransport.Kcp;
    wsSettings?: V2RayTransport.WebSocket;
    httpSettings?: V2RayTransport.Http;
    dsSettings?: V2RayTransport.DomainSocket;
    quicSettings?: V2RayTransport.Quic;
}

declare namespace StreamSettings {
    type Network = "tcp" | "kcp" | "ws" | "http" | "domainsocket" | "quic";
    type Security = "none" | "tls";
    namespace TLS {
        namespace Certificate {
            type Usage = "encipherment" | "verify" | "issue";
        }
        interface Certificate {
            usage: Certificate.Usage;
            certificateFile: string;
            certificate: string[];
            keyFile: string;
            key: string[];
        }
    }
    interface TLS {
        serverName: string;
        allowInsecure: boolean;
        allowInsecureCiphers?: boolean;
        alpn?: string[];
        certificates: [];
        disableSystemRoot: boolean;
    }
    namespace Sockopt {
        type Tproxy = "redirect" | "tproxy" | "off";
    }
    interface Sockopt {
        mark: number;
        tcpFastOpen: boolean;
        tproxy: Sockopt.Tproxy;
    }
}

interface StreamSettings extends V2RayTransport {
    // https://www.v2ray.com/en/configuration/transport/tcp.html
    network: StreamSettings.Network;
    security?: StreamSettings.Security;
    tlsSettings?: StreamSettings.TLS;
    sockopt?: StreamSettings.Sockopt;
}

export default V2RayTransport;
export type V2RayStreamSettings = StreamSettings;