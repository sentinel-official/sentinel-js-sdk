import { GeneratedType } from "@cosmjs/proto-signing";

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

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgCreateTypeUrl, MsgCreateRequest],
    [MsgUpdateStatusTypeUrl, MsgUpdateStatusRequest],
    [MsgLinkNodeTypeUrl, MsgLinkNodeRequest],
    [MsgUnlinkNodeTypeUrl, MsgUnlinkNodeRequest],
    [MsgSubscribeTypeUrl, MsgSubscribeRequest]
];

