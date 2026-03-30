import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgCancelSessionRequest,
    MsgUpdateSessionRequest,
    MsgUpdateParamsRequest,
} from '../../protobuf/sentinel/session/v3/msg'

import {
    MsgCancelSessionTypeUrl,
    MsgUpdateSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'

export interface MsgCancelSessionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgCancelSessionTypeUrl,
    readonly value: Partial<MsgCancelSessionRequest>
}
export interface MsgUpdateSessionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateSessionTypeUrl,
    readonly value: Partial<MsgUpdateSessionRequest>
}
export interface MsgUpdateParamsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateParamsTypeUrl,
    readonly value: Partial<MsgUpdateParamsRequest>
}


export function isMsgCancelSessionEncodeObject(object: EncodeObject): object is MsgCancelSessionEncodeObject {
    return (object as MsgCancelSessionEncodeObject).typeUrl === MsgCancelSessionTypeUrl
}
export function isMsgUpdateSessionEncodeObject(object: EncodeObject): object is MsgUpdateSessionEncodeObject {
    return (object as MsgUpdateSessionEncodeObject).typeUrl === MsgUpdateSessionTypeUrl
}
export function isMsgUpdateParamsEncodeObject(object: EncodeObject): object is MsgUpdateParamsEncodeObject {
    return (object as MsgUpdateParamsEncodeObject).typeUrl === MsgUpdateParamsTypeUrl
}