// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-transport.d.ts

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
        acceptProxyProtocol?: boolean;
        header: Tcp.NoneHeader | Tcp.HttpHeader;
    }

    namespace Kcp {
        type Type = "none" | "srtp" | "utp" | "wechat-video" | "dtls" | "wireguard";
    }
    interface Kcp {
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
        acceptProxyProtocol?: boolean;
        path?: string;
        headers: Record<string, string[]>;
    }

    interface Http {
        host: string[];
        path?: string;
    }

    interface DomainSocket {
        path: string;
        abstract?: boolean;
        padding?: boolean;
    }

    interface Quic {
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
    network: StreamSettings.Network;
    security?: StreamSettings.Security;
    tlsSettings?: StreamSettings.TLS;
    sockopt?: StreamSettings.Sockopt;
}

export default V2RayTransport;
export type V2RayStreamSettings = StreamSettings;