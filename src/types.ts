export { Bandwidth } from "./protobuf/sentinel/types/v1/bandwidth";
export { Status } from "./protobuf/sentinel/types/v1/status";

export { Coin } from "./protobuf/cosmos/base/v1beta1/coin";
export { PageRequest } from "./protobuf/cosmos/base/query/v1beta1/pagination";

import { StdFee } from "@cosmjs/stargate";
export interface TxParams {
    fee?: StdFee | "auto" | number,
    memo?: string,
}

export { Node } from "./modules/node";
export { Plan } from "./modules/plan";
export { Provider } from "./modules/provider";
export { Session } from "./modules/session";

export { Subscription } from "./modules/subscription";
export { Quota } from "./modules/subscription";

export interface NodeResponse {
    success: boolean,
    result: NodeStatus | string
}

export interface NodeStatus {
    address: string,
    bandwidth: {download: number, upload: number},
    handshake: {enable: boolean, peers: number},
    interval_set_sessions: number,
    interval_update_sessions: number,
    interval_update_status: number,
    location: {
        city: string,
        country: string,
        latitude: number,
        longitude: number
    },
    moniker: string,
    operator: string,
    peers: number,
    gigabyte_prices: string,
    qos:{max_peers: number},
    type: number,
    version: string
}