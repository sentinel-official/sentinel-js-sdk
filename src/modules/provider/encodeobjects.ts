import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgRegisterProviderRequest,
    MsgUpdateProviderDetailsRequest,
    MsgUpdateProviderStatusRequest,
    MsgUpdateParamsRequest
} from '../../protobuf/sentinel/provider/v3/msg'

import {
    MsgRegisterProviderTypeUrl,
    MsgUpdateProviderDetailsTypeUrl,
    MsgUpdateProviderStatusTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'


export interface MsgRegisterProviderEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgRegisterProviderTypeUrl,
    readonly value: Partial<MsgRegisterProviderRequest>
}
export interface MsgUpdateProviderDetailsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateProviderDetailsTypeUrl,
    readonly value: Partial<MsgUpdateProviderDetailsRequest>
}
export interface MsgUpdateProviderStatusEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateProviderStatusTypeUrl,
    readonly value: Partial<MsgUpdateProviderStatusRequest>
}
export interface MsgUpdateParamsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateParamsTypeUrl,
    readonly value: Partial<MsgUpdateParamsRequest>
}

export function isMsgRegisterProviderEncodeObject(object: EncodeObject): object is MsgRegisterProviderEncodeObject {
    return (object as MsgRegisterProviderEncodeObject).typeUrl === MsgRegisterProviderTypeUrl
}
export function isMsgUpdateProviderDetailsEncodeObject(object: EncodeObject): object is MsgUpdateProviderDetailsEncodeObject {
    return (object as MsgUpdateProviderDetailsEncodeObject).typeUrl === MsgUpdateProviderDetailsTypeUrl
}
export function isMsgUpdateProviderStatusEncodeObject(object: EncodeObject): object is MsgUpdateProviderStatusEncodeObject {
    return (object as MsgUpdateProviderStatusEncodeObject).typeUrl === MsgUpdateProviderStatusTypeUrl
}
export function isMsgUpdateParamsEncodeObject(object: EncodeObject): object is MsgUpdateParamsEncodeObject {
    return (object as MsgUpdateParamsEncodeObject).typeUrl === MsgUpdateParamsTypeUrl
}