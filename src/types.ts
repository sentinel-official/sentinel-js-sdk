export { Bandwidth } from "./protobuf/sentinel/types/v1/bandwidth";
export { Status } from "./protobuf/sentinel/types/v1/status";

export { Coin } from "./protobuf/cosmos/base/v1beta1/coin";
export { PageRequest } from "./protobuf/cosmos/base/query/v1beta1/pagination";

import { StdFee } from "@cosmjs/stargate";
export interface TxParams {
    fee?: StdFee | "auto" | number,
    memo?: string,
}
