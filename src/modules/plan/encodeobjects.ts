import { EncodeObject } from "@cosmjs/proto-signing";

import {
    MsgCreateRequest,
    MsgUpdateStatusRequest,
    MsgLinkNodeRequest,
    MsgUnlinkNodeRequest,
    MsgSubscribeRequest
} from '../../protobuf/sentinel/plan/v2/msg'

import {
    MsgCreateTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgSubscribeTypeUrl
} from './consts'

export interface MsgCreateEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgCreateTypeUrl,
    readonly value: Partial<MsgCreateRequest>
}

export interface MsgUpdateStatusEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUpdateStatusTypeUrl,
    readonly value: Partial<MsgUpdateStatusRequest>
}

export interface MsgLinkNodeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgLinkNodeTypeUrl,
    readonly value: Partial<MsgLinkNodeRequest>
}

export interface MsgUnlinkNodeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgUnlinkNodeTypeUrl,
    readonly value: Partial<MsgUnlinkNodeRequest>
}

export interface MsgSubscribeEncodeObject extends EncodeObject {
    readonly typeUrl: typeof MsgSubscribeTypeUrl,
    readonly value: Partial<MsgSubscribeRequest>
}

export function isMsgCreateEncodeObject(object: EncodeObject): object is MsgCreateEncodeObject{
    return (object as MsgCreateEncodeObject).typeUrl === MsgCreateTypeUrl
}

export function isMsgUpdateStatusEncodeObject(object: EncodeObject): object is MsgUpdateStatusEncodeObject{
    return (object as MsgUpdateStatusEncodeObject).typeUrl === MsgUpdateStatusTypeUrl
}

export function isMsgLinkNodeEncodeObject(object: EncodeObject): object is MsgLinkNodeEncodeObject{
    return (object as MsgLinkNodeEncodeObject).typeUrl === MsgLinkNodeTypeUrl
}

export function isMsgUnlinkNodeEncodeObject(object: EncodeObject): object is MsgUnlinkNodeEncodeObject{
    return (object as MsgUnlinkNodeEncodeObject).typeUrl === MsgUnlinkNodeTypeUrl
}

export function isMsgSubscribeEncodeObject(object: EncodeObject): object is MsgSubscribeEncodeObject{
    return (object as MsgSubscribeEncodeObject).typeUrl === MsgSubscribeTypeUrl
}
