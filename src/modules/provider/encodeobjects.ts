import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgRegisterRequest,
    MsgUpdateRequest,
} from '../../protobuf/sentinel/provider/v2/msg'

import {
    MsgRegisterTypeUrl,
    MsgUpdateTypeUrl,
} from './consts'

export interface MsgRegisterEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgRegisterTypeUrl,
    readonly value: Partial<MsgRegisterRequest>
}

export interface MsgUpdateEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateTypeUrl,
    readonly value: Partial<MsgUpdateRequest>
}

export function isMsgRegisterEncodeObject(object: EncodeObject): object is MsgRegisterEncodeObject{
    return (object as MsgRegisterEncodeObject).typeUrl === MsgRegisterTypeUrl
}

export function isMsgUpdateEncodeObject(object: EncodeObject): object is MsgUpdateEncodeObject{
    return (object as MsgUpdateEncodeObject).typeUrl === MsgUpdateTypeUrl
}
