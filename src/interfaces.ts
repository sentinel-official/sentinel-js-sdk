import { StdFee } from "@cosmjs/stargate";
import { Coin, Status } from "./types";
import { Duration } from "./protobuf/google/protobuf/duration";
import { Proof } from "./protobuf/sentinel/session/v2/proof";

import Long from "long";

interface From {
    from: string
}

interface TxParams {
    broadcast: boolean,
    fee: StdFee | "auto" | number,
    memo: string,
}

interface NodeRegister {
    gigabytePrices: Coin[],
    hourlyPrices: Coin[],
    remoteUrl: string,
}

interface NodeUpdateDetails {
    gigabytePrices: Coin[],
    hourlyPrices: Coin[],
    remoteUrl: string,
}

interface NodeUpdateStatus {
    status: Status,
}

interface NodeSubscribe {
    nodeAddress: string,
    gigabytes: Long
    hours: Long,
    denom: string,
}

interface PlanCreate {
    duration: Duration | undefined,
    gigabytes: Long,
    prices: Coin[],
}

interface PlanUpdateStatus {
    id: Long,
    status: Status,
}

interface PlanLinkUnlinkNode {
    id: Long,
    nodeAddress: string,
}

interface PlanSubscribe {
    id: Long,
    denom: string,
}

interface ProvideRegister {
    name: string,
    identity: string,
    website: string,
    description: string,
}

interface ProviderUpdate {
    name: string,
    identity: string,
    website: string,
    description: string,
    status: Status,
}

interface SessionStart {
    id: Long,
    address: string,
}

interface SessionUpdateDetails {
    proof: Proof | undefined,
    signature: Uint8Array,
}

interface SessionEnd {
    id: Long,
    rating: Long,
}

interface SubscriptionCancel {
    id: Long
}

interface SubscriptionAllocate {
    id: Long,
    address: string,
    bytes: string,
}

export interface NodeRegisterTx extends NodeRegister, From, TxParams {}
export interface NodeUpdateDetailsTx extends NodeUpdateDetails, From, TxParams {}
export interface NodeUpdateStatusTx extends NodeUpdateStatus, From, TxParams {}
export interface NodeSubscribeTx extends NodeSubscribe, From, TxParams {}
export interface PlanCreateTx extends PlanCreate, From, TxParams {}
export interface PlanUpdateStatusTx extends PlanUpdateStatus, From, TxParams {}
export interface PlanLinkUnlinkNodeTx extends PlanLinkUnlinkNode, From, TxParams {}
export interface PlanSubscribeTx extends PlanSubscribe, From, TxParams {}
export interface ProvideRegisterTx extends ProvideRegister, From, TxParams {}
export interface ProviderUpdateTx extends ProviderUpdate, From, TxParams {}
export interface SessionStartTx extends SessionStart, From, TxParams {}
export interface SessionUpdateDetailsTx extends SessionUpdateDetails, From, TxParams {}
export interface SessionEndTx extends SessionEnd, From, TxParams {}
export interface SubscriptionCancelTx extends SubscriptionCancel, From, TxParams {}
export interface SubscriptionAllocateTx extends SubscriptionAllocate, From, TxParams {}