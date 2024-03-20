// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-n.d.ts

declare namespace V2RayNQR {
    type Security = "aes-128-gcm" | "chacha20-poly1305" | "auto" | "none";
    type Net = "tcp" | "kcp" | "ws" | "http" | "h2" | "quic";
    type Type = "none" | "http" | "srtp" | "utp" | "wechat-video";
}

export default interface V2RayNQR {
    v: string;
    ps: string;
    add: string;
    port: string;
    id: string;
    aid: string;
    scy: V2RayNQR.Security;
    net: V2RayNQR.Net;
    type: V2RayNQR.Type;
    host: string;
    path: string;
    tls: string;
    sni: string;
}