import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgRegisterRequest,
    MsgUpdateDetailsRequest,
    MsgUpdateStatusRequest,
    MsgSubscribeRequest,
} from '../../protobuf/sentinel/node/v2/msg'

import {
    MsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgSubscribeTypeUrl
} from './consts'

export interface MsgRegisterEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgRegisterTypeUrl,
    readonly value: Partial<MsgRegisterRequest>
}

export interface MsgUpdateDetailsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateDetailsTypeUrl,
    readonly value: Partial<MsgUpdateDetailsRequest>
}

export interface MsgUpdateStatusEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateStatusTypeUrl,
    readonly value: Partial<MsgUpdateStatusRequest>
}

export interface MsgSubscribeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgSubscribeTypeUrl,
    readonly value: Partial<MsgSubscribeRequest>
}

export function isMsgRegisterEncodeObject(object: EncodeObject): object is MsgRegisterEncodeObject {
    return (object as MsgRegisterEncodeObject).typeUrl === MsgRegisterTypeUrl
}

export function isMsgUpdateDetailsEncodeObject(object: EncodeObject): object is MsgUpdateDetailsEncodeObject {
    return (object as MsgUpdateDetailsEncodeObject).typeUrl === MsgUpdateDetailsTypeUrl
}

export function isMsgUpdateStatusEncodeObject(object: EncodeObject): object is MsgUpdateStatusEncodeObject {
    return (object as MsgUpdateStatusEncodeObject).typeUrl === MsgUpdateStatusTypeUrl
}

export function isMsgSubscribeEncodeObject(object: EncodeObject): object is MsgSubscribeEncodeObject {
    return (object as MsgSubscribeEncodeObject).typeUrl === MsgSubscribeTypeUrl
}