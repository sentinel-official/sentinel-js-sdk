import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgCancelSubscriptionRequest,
    MsgRenewSubscriptionRequest,
    MsgShareSubscriptionRequest,
    MsgStartSubscriptionRequest,
    MsgUpdateSubscriptionRequest,
    MsgStartSessionRequest,
    MsgUpdateParamsRequest,
} from '../../protobuf/sentinel/subscription/v3/msg'

import {
    MsgCancelSubscriptionTypeUrl,
    MsgRenewSubscriptionTypeUrl,
    MsgShareSubscriptionTypeUrl,
    MsgStartSubscriptionTypeUrl,
    MsgUpdateSubscriptionTypeUrl,
    MsgStartSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'


export interface MsgCancelSubscriptionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgCancelSubscriptionTypeUrl,
    readonly value: Partial<MsgCancelSubscriptionRequest>
}
export interface MsgRenewSubscriptionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgRenewSubscriptionTypeUrl,
    readonly value: Partial<MsgRenewSubscriptionRequest>
}
export interface MsgShareSubscriptionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgShareSubscriptionTypeUrl,
    readonly value: Partial<MsgShareSubscriptionRequest>
}
export interface MsgStartSubscriptionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgStartSubscriptionTypeUrl,
    readonly value: Partial<MsgStartSubscriptionRequest>
}
export interface MsgUpdateSubscriptionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateSubscriptionTypeUrl,
    readonly value: Partial<MsgUpdateSubscriptionRequest>
}
export interface MsgStartSessionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgStartSessionTypeUrl,
    readonly value: Partial<MsgStartSessionRequest>
}
export interface MsgUpdateParamsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateParamsTypeUrl,
    readonly value: Partial<MsgUpdateParamsRequest>
}

export function isMsgCancelSubscriptionEncodeObject(object: EncodeObject): object is MsgCancelSubscriptionEncodeObject {
    return (object as MsgCancelSubscriptionEncodeObject).typeUrl === MsgCancelSubscriptionTypeUrl
}
export function isMsgRenewSubscriptionEncodeObject(object: EncodeObject): object is MsgRenewSubscriptionEncodeObject {
    return (object as MsgRenewSubscriptionEncodeObject).typeUrl === MsgRenewSubscriptionTypeUrl
}
export function isMsgShareSubscriptionEncodeObject(object: EncodeObject): object is MsgShareSubscriptionEncodeObject {
    return (object as MsgShareSubscriptionEncodeObject).typeUrl === MsgShareSubscriptionTypeUrl
}
export function isMsgStartSubscriptionEncodeObject(object: EncodeObject): object is MsgStartSubscriptionEncodeObject {
    return (object as MsgStartSubscriptionEncodeObject).typeUrl === MsgStartSubscriptionTypeUrl
}
export function isMsgUpdateSubscriptionEncodeObject(object: EncodeObject): object is MsgUpdateSubscriptionEncodeObject {
    return (object as MsgUpdateSubscriptionEncodeObject).typeUrl === MsgUpdateSubscriptionTypeUrl
}
export function isMsgStartSessionEncodeObject(object: EncodeObject): object is MsgStartSessionEncodeObject {
    return (object as MsgStartSessionEncodeObject).typeUrl === MsgStartSessionTypeUrl
}
export function isMsgUpdateParamsEncodeObject(object: EncodeObject): object is MsgUpdateParamsEncodeObject {
    return (object as MsgUpdateParamsEncodeObject).typeUrl === MsgUpdateParamsTypeUrl
}