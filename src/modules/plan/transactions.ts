import {
    MsgCreatePlanEncodeObject,
    MsgLinkNodeEncodeObject,
    MsgUnlinkNodeEncodeObject,
    MsgUpdatePlanStatusEncodeObject,
    MsgStartSessionEncodeObject,
} from "./encodeobjects";

import {
    MsgCreatePlanTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgUpdatePlanStatusTypeUrl,
    MsgStartSessionTypeUrl,
} from "./consts";

import { RenewalPricePolicy, TxParams } from '../../types';
import Long from 'long';
import { Price, Status } from '../../types';

interface PlanCreate {
    from: string;
    gigabytes: Long;
    hours: Long;
    prices: Price[];
    private: boolean;
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

interface PlanUpdateStatus {
    from: string
    id: Long,
    status: Status,
}

interface PlanStartSession {
    from: string
    id: Long,
    denom: string,
    renewalPricePolicy: RenewalPricePolicy;
    nodeAddress: string;
}

export interface TxPlanCreate extends PlanCreate, TxParams {}
export interface TxPlanLinkNode extends PlanLinkNode, TxParams {}
export interface TxPlanUnlinkNode extends PlanUnlinkNode, TxParams {}
export interface TxPlanUpdateStatus extends PlanUpdateStatus, TxParams {}
export interface TxPlanStartSession extends PlanStartSession, TxParams {}


export function planCreate(args: PlanCreate): MsgCreatePlanEncodeObject {
    return { typeUrl: MsgCreatePlanTypeUrl, value: args } as MsgCreatePlanEncodeObject
}

export function planUpdateStatus(args: PlanUpdateStatus): MsgUpdatePlanStatusEncodeObject {
    return { typeUrl: MsgUpdatePlanStatusTypeUrl, value: args } as MsgUpdatePlanStatusEncodeObject
}

export function planLinkNode(args: PlanLinkNode): MsgLinkNodeEncodeObject {
    return { typeUrl: MsgLinkNodeTypeUrl, value: args } as MsgLinkNodeEncodeObject
}

export function planUnlinkNode(args: PlanUnlinkNode): MsgUnlinkNodeEncodeObject {
    return { typeUrl: MsgUnlinkNodeTypeUrl, value: args } as MsgUnlinkNodeEncodeObject
}

export function planStartSession(args: PlanStartSession): MsgStartSessionEncodeObject {
    return { typeUrl: MsgStartSessionTypeUrl, value: args } as MsgStartSessionEncodeObject
}