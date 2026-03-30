import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgCreatePlanRequest,
    MsgLinkNodeRequest,
    MsgUnlinkNodeRequest,
    MsgUpdatePlanStatusRequest,
    MsgStartSessionRequest,
} from '../../protobuf/sentinel/plan/v3/msg'

import {
    MsgCreatePlanTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgUpdatePlanStatusTypeUrl,
    MsgStartSessionTypeUrl,
} from './consts'

export interface MsgCreatePlanEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgCreatePlanTypeUrl,
    readonly value: Partial<MsgCreatePlanRequest>
}
export interface MsgLinkNodeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgLinkNodeTypeUrl,
    readonly value: Partial<MsgLinkNodeRequest>
}
export interface MsgUnlinkNodeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUnlinkNodeTypeUrl,
    readonly value: Partial<MsgUnlinkNodeRequest>
}
export interface MsgUpdatePlanStatusEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdatePlanStatusTypeUrl,
    readonly value: Partial<MsgUpdatePlanStatusRequest>
}
export interface MsgStartSessionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgStartSessionTypeUrl,
    readonly value: Partial<MsgStartSessionRequest>
}


export function isMsgCreatePlanEncodeObject(object: EncodeObject): object is MsgCreatePlanEncodeObject {
    return (object as MsgCreatePlanEncodeObject).typeUrl === MsgCreatePlanTypeUrl
}
export function isMsgLinkNodeEncodeObject(object: EncodeObject): object is MsgLinkNodeEncodeObject {
    return (object as MsgLinkNodeEncodeObject).typeUrl === MsgLinkNodeTypeUrl
}
export function isMsgUnlinkNodeEncodeObject(object: EncodeObject): object is MsgUnlinkNodeEncodeObject {
    return (object as MsgUnlinkNodeEncodeObject).typeUrl === MsgUnlinkNodeTypeUrl
}
export function isMsgUpdatePlanStatusEncodeObject(object: EncodeObject): object is MsgUpdatePlanStatusEncodeObject {
    return (object as MsgUpdatePlanStatusEncodeObject).typeUrl === MsgUpdatePlanStatusTypeUrl
}
export function isMsgStartSessionEncodeObject(object: EncodeObject): object is MsgStartSessionEncodeObject {
    return (object as MsgStartSessionEncodeObject).typeUrl === MsgStartSessionTypeUrl
}

