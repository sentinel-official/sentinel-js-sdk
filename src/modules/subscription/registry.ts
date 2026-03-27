import { GeneratedType } from "@cosmjs/proto-signing";

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

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgCancelSubscriptionTypeUrl, MsgCancelSubscriptionRequest],
    [MsgRenewSubscriptionTypeUrl, MsgRenewSubscriptionRequest],
    [MsgShareSubscriptionTypeUrl, MsgShareSubscriptionRequest],
    [MsgStartSubscriptionTypeUrl, MsgStartSubscriptionRequest],
    [MsgUpdateSubscriptionTypeUrl, MsgUpdateSubscriptionRequest],
    [MsgStartSessionTypeUrl, MsgStartSessionRequest],
    [MsgUpdateParamsTypeUrl, MsgUpdateParamsRequest],
];

