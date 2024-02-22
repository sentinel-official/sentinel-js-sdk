import {
    MsgCreateEncodeObject,
    MsgUpdateStatusEncodeObject,
    MsgLinkNodeEncodeObject,
    MsgUnlinkNodeEncodeObject,
    MsgSubscribeEncodeObject,
} from "./encodeobjects";

import {
    MsgCreateTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgSubscribeTypeUrl
} from "./consts";

import { TxParams } from '../../types';
import Long from 'long';
import { Coin, Status } from '../../types';
import { Duration } from "../../protobuf/google/protobuf/duration";

interface PlanCreate {
    from: string
    duration: Duration | undefined,
    gigabytes: Long,
    prices: Coin[],
}

interface PlanUpdateStatus {
    from: string
    id: Long,
    status: Status,
}

interface PlanLinkNode {
    from: string
    id: Long,
    nodeAddress: string,
}

interface PlanUnlinkNode {
    from: string
    id: Long,
    nodeAddress: string,
}

interface PlanSubscribe {
    from: string
    id: Long,
    denom: string,
}

export interface TxPlanCreate extends PlanCreate, TxParams {}
export interface TxPlanUpdateStatus extends PlanUpdateStatus, TxParams {}
export interface TxPlanLinkNode extends PlanLinkNode, TxParams {}
export interface TxPlanUnlinkNode extends PlanUnlinkNode, TxParams {}
export interface TxPlanSubscribe extends PlanSubscribe, TxParams {}


export function planCreate(args: PlanCreate): MsgCreateEncodeObject {
    return { typeUrl: MsgCreateTypeUrl, value: args } as MsgCreateEncodeObject
}

export function planUpdateStatus(args: PlanUpdateStatus): MsgUpdateStatusEncodeObject {
    return { typeUrl: MsgUpdateStatusTypeUrl, value: args } as MsgUpdateStatusEncodeObject
}

export function planLinkNode(args: PlanLinkNode): MsgLinkNodeEncodeObject {
    return { typeUrl: MsgLinkNodeTypeUrl, value: args } as MsgLinkNodeEncodeObject
}

export function planUnlinkNode(args: PlanUnlinkNode): MsgUnlinkNodeEncodeObject {
    return { typeUrl: MsgUnlinkNodeTypeUrl, value: args } as MsgUnlinkNodeEncodeObject
}

export function planSubscribe(args: PlanSubscribe): MsgSubscribeEncodeObject {
    return { typeUrl: MsgSubscribeTypeUrl, value: args } as MsgSubscribeEncodeObject
}