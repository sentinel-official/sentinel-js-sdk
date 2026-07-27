export { Bandwidth } from "./protobuf/sentinel/types/v1/bandwidth";
export { Price } from "./protobuf/sentinel/types/v1/price";
export { RenewalPricePolicy } from "./protobuf/sentinel/types/v1/renewal";
export { Status } from "./protobuf/sentinel/types/v1/status";

export { Coin } from "./protobuf/cosmos/base/v1beta1/coin";
export { PageRequest } from "./protobuf/cosmos/base/query/v1beta1/pagination";

import { StdFee } from "@cosmjs/stargate";

export interface TxParams {
    fee?: StdFee | "auto" | number,
    memo?: string,
}

export { Node, Session } from "./modules/node";
export enum NodeVPNType {
    WIREGUARD = "wireguard",
    V2RAY = "v2ray",
    OPENVPN = "openvpn",
    XRAY = "xray",
    AMNEZIAWG = "amneziawg",
    HYSTERIA2 = "hysteria2",
}

export { Plan } from "./modules/plan";
export { Provider } from "./modules/provider";
export { BaseSession } from "./modules/session";

export { Subscription } from "./modules/subscription";
export { Quota } from "./modules/subscription";

export interface NodeResponseError {
    code: number,
    message: string
}

export interface NodeResponse {
    success: boolean,
    result?: NodeInfo | NodeHandshakeResult | string
    error?: NodeResponseError
}

export interface NodeHandshakeResult {
    addrs: string[],
    data: any
}

// https://github.com/sentinel-official/sentinel-go-sdk/blob/development/node/info.go#L14-L24
export interface NodeInfo {
    addr: string,
    downlink: string,
    handshake_dns: boolean,
    location: {
        city: string,
        country: string,
        country_code: string,
        latitude: number,
        longitude: number
    },
    moniker: string,
    peers: number,
    service_type: NodeVPNType,
    /**
     * Filtered, protocol-specific metadata advertised by dvpnx v9+.
     * Connection secrets and ports are only returned by the authenticated
     * handshake, so consumers must not use this field as client config.
     */
    service_metadata?: unknown,
    uplink: string,
    version: {
        commit: string,
        tag: string
    }
}

export interface GeoIPLocation {
    status: string,
    country: string,
    countryCode: string,
    region?: string,
    regionName?: string,
    city: string,
    zip?: string,
    lat: number,
    lon: number,
    timezone?: string,
    isp?: string,
    org?: string,
    as?: string,
    query?: string
}
