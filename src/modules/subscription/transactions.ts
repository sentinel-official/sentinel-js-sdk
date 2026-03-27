import {
    MsgCancelSubscriptionEncodeObject,
    MsgRenewSubscriptionEncodeObject,
    MsgShareSubscriptionEncodeObject,
    MsgStartSubscriptionEncodeObject,
    MsgUpdateSubscriptionEncodeObject,
    MsgStartSessionEncodeObject,
    MsgUpdateParamsEncodeObject,
} from "./encodeobjects";

import {
    MsgCancelSubscriptionTypeUrl,
    MsgRenewSubscriptionTypeUrl,
    MsgShareSubscriptionTypeUrl,
    MsgStartSubscriptionTypeUrl,
    MsgUpdateSubscriptionTypeUrl,
    MsgStartSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from "./consts";

import { RenewalPricePolicy, TxParams } from '../../types';
import Long from 'long';

import { Params as SubscriptionParams } from '../../protobuf/sentinel/subscription/v2/params';

interface SubscriptionCancel {
    from: string
    id: Long
}

interface SubscriptionRenew {
  from: string;
  id: Long;
  denom: string;
}

export interface SubscriptionShare {
  from: string;
  id: Long;
  accAddress: string;
  bytes: string;
}

export interface SubscriptionStart {
  from: string;
  id: Long;
  denom: string;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface SubscriptionUpdate {
  from: string;
  id: Long;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface SubscriptionStartSession {
  from: string;
  id: Long;
  nodeAddress: string;
}

export interface SubscriptionUpdateParams {
  from: string;
  params?: SubscriptionParams | undefined;
}

export interface TxSubscriptionCancel extends SubscriptionCancel, TxParams {}
export interface TxSubscriptionRenew extends SubscriptionRenew, TxParams {}
export interface TxSubscriptionShare extends SubscriptionShare, TxParams {}
export interface TxSubscriptionStart extends SubscriptionStart, TxParams {}
export interface TxSubscriptionUpdate extends SubscriptionUpdate, TxParams {}
export interface TxSubscriptionStartSession extends SubscriptionStartSession, TxParams {}
export interface TxSubscriptionUpdateParams extends SubscriptionUpdateParams, TxParams {}

export function subscriptionCancel(args: SubscriptionCancel): MsgCancelSubscriptionEncodeObject {
    return { typeUrl: MsgCancelSubscriptionTypeUrl, value: args} as MsgCancelSubscriptionEncodeObject
}
export function subscriptionRenew(args: SubscriptionRenew): MsgRenewSubscriptionEncodeObject {
    return { typeUrl: MsgRenewSubscriptionTypeUrl, value: args} as MsgRenewSubscriptionEncodeObject
}
export function subscriptionShare(args: SubscriptionShare): MsgShareSubscriptionEncodeObject {
    return { typeUrl: MsgShareSubscriptionTypeUrl, value: args} as MsgShareSubscriptionEncodeObject
}
export function subscriptionStart(args: SubscriptionStart): MsgStartSubscriptionEncodeObject {
    return { typeUrl: MsgStartSubscriptionTypeUrl, value: args} as MsgStartSubscriptionEncodeObject
}
export function subscriptionUpdate(args: SubscriptionUpdate): MsgUpdateSubscriptionEncodeObject {
    return { typeUrl: MsgUpdateSubscriptionTypeUrl, value: args} as MsgUpdateSubscriptionEncodeObject
}
export function subscriptionStartSession(args: SubscriptionStartSession): MsgStartSessionEncodeObject {
    return { typeUrl: MsgStartSessionTypeUrl, value: args} as MsgStartSessionEncodeObject
}
export function subscriptionUpdateParams(args: SubscriptionUpdateParams): MsgUpdateParamsEncodeObject {
    return { typeUrl: MsgUpdateParamsTypeUrl, value: args} as MsgUpdateParamsEncodeObject
}
