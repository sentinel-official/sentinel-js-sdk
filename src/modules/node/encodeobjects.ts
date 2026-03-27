import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgRegisterNodeRequest,
    MsgUpdateNodeDetailsRequest,
    MsgUpdateNodeStatusRequest,
    MsgStartSessionRequest,
    MsgUpdateParamsRequest,
} from '../../protobuf/sentinel/node/v3/msg'

import {
    MsgRegisterNodeTypeUrl,
    MsgUpdateNodeDetailsTypeUrl,
    MsgUpdateNodeStatusTypeUrl,
    MsgStartSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'


export interface MsgRegisterNodeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgRegisterNodeTypeUrl,
    readonly value: Partial<MsgRegisterNodeRequest>
}
export interface MsgUpdateNodeDetailsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateNodeDetailsTypeUrl,
    readonly value: Partial<MsgUpdateNodeDetailsRequest>
}
export interface MsgUpdateNodeStatusEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateNodeStatusTypeUrl,
    readonly value: Partial<MsgUpdateNodeStatusRequest>
}
export interface MsgStartSessionEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgStartSessionTypeUrl,
    readonly value: Partial<MsgStartSessionRequest>
}
export interface MsgUpdateParamsEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateParamsTypeUrl,
    readonly value: Partial<MsgUpdateParamsRequest>
}


export function isMsgRegisterNodeEncodeObject(object: EncodeObject): object is MsgRegisterNodeEncodeObject{
    return (object as MsgRegisterNodeEncodeObject).typeUrl === MsgRegisterNodeTypeUrl
}
export function isMsgUpdateNodeDetailsEncodeObject(object: EncodeObject): object is MsgUpdateNodeDetailsEncodeObject{
    return (object as MsgUpdateNodeDetailsEncodeObject).typeUrl === MsgUpdateNodeDetailsTypeUrl
}
export function isMsgUpdateNodeStatusEncodeObject(object: EncodeObject): object is MsgUpdateNodeStatusEncodeObject{
    return (object as MsgUpdateNodeStatusEncodeObject).typeUrl === MsgUpdateNodeStatusTypeUrl
}
export function isMsgStartSessionEncodeObject(object: EncodeObject): object is MsgStartSessionEncodeObject{
    return (object as MsgStartSessionEncodeObject).typeUrl === MsgStartSessionTypeUrl
}
export function isMsgUpdateParamsEncodeObject(object: EncodeObject): object is MsgUpdateParamsEncodeObject{
    return (object as MsgUpdateParamsEncodeObject).typeUrl === MsgUpdateParamsTypeUrl
}
