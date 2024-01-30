import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgStartRequest,
    MsgUpdateDetailsRequest,
    MsgEndRequest,
} from '../../protobuf/sentinel/session/v2/msg'

import {
    MsgStartTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgEndTypeUrl,
} from './consts'


export interface MsgStartEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgStartTypeUrl,
    readonly value: Partial<MsgStartRequest>
}

export interface MsgUpdateDetailsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateDetailsTypeUrl,
    readonly value: Partial<MsgUpdateDetailsRequest>
}

export interface MsgEndEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgEndTypeUrl,
    readonly value: Partial<MsgEndRequest>
}

export function isMsgStartEncodeObject(object: EncodeObject): object is MsgStartEncodeObject {
    return (object as MsgStartEncodeObject).typeUrl === MsgStartTypeUrl
}

export function isMsgUpdateDetailsEncodeObject(object: EncodeObject): object is MsgUpdateDetailsEncodeObject {
    return (object as MsgUpdateDetailsEncodeObject).typeUrl === MsgUpdateDetailsTypeUrl
}

export function isMsgEndEncodeObject(object: EncodeObject): object is MsgEndEncodeObject {
    return (object as MsgEndEncodeObject).typeUrl === MsgEndTypeUrl
}