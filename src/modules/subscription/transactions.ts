import {
    MsgCancelEncodeObject,
    MsgAllocateEncodeObject,
} from "./encodeobjects";

import {
    MsgCancelTypeUrl,
    MsgAllocateTypeUrl
} from "./consts";

import { TxParams } from '../../types';
import Long from 'long';

interface SubscriptionCancel {
    from: string
    id: Long
}

interface SubscriptionAllocate {
    from: string
    id: Long,
    address: string,
    bytes: string,
}

export interface TxSubscriptionCancel extends SubscriptionCancel, TxParams {}
export interface TxSubscriptionAllocate extends SubscriptionAllocate, TxParams {}


export function subscriptionCancel(args: SubscriptionCancel): MsgCancelEncodeObject {
    return { typeUrl: MsgCancelTypeUrl, value: args } as MsgCancelEncodeObject
}

export function subscriptionAllocate(args: SubscriptionAllocate): MsgAllocateEncodeObject {
    return { typeUrl: MsgAllocateTypeUrl, value: args } as MsgAllocateEncodeObject
}