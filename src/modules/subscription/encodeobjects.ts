import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgCancelRequest,
    MsgAllocateRequest,
} from '../../protobuf/sentinel/subscription/v2/msg'

import {
    MsgCancelTypeUrl,
    MsgAllocateTypeUrl,
} from './consts'

export interface MsgCancelEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgCancelTypeUrl,
    readonly value: Partial<MsgCancelRequest>
}

export interface MsgUpAllocateEcodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgAllocateTypeUrl,
    readonly value: Partial<MsgAllocateRequest>
}

export function isMsgCancelEncodeObject(object: EncodeObject): object is MsgCancelEncodeObject {
    return (object as MsgCancelEncodeObject).typeUrl === MsgCancelTypeUrl
}

export function isMsgAllocateEncodeObject(object: EncodeObject): object is MsgUpAllocateEcodeObject {
    return (object as MsgUpAllocateEcodeObject).typeUrl === MsgAllocateTypeUrl
}
