import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgCreatePlanRequest,
    MsgLinkNodeRequest,
    MsgUnlinkNodeRequest,
    MsgUpdatePlanStatusRequest,
    MsgStartSessionRequest,
} from '../../protobuf/sentinel/plan/v3/msg'

import {
    MsgCreatePlanTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgUpdatePlanStatusTypeUrl,
    MsgStartSessionTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgCreatePlanTypeUrl, MsgCreatePlanRequest],
    [MsgLinkNodeTypeUrl, MsgLinkNodeRequest],
    [MsgUnlinkNodeTypeUrl, MsgUnlinkNodeRequest],
    [MsgUpdatePlanStatusTypeUrl, MsgUpdatePlanStatusRequest],
    [MsgStartSessionTypeUrl, MsgStartSessionRequest]
];

