import { GeneratedType } from "@cosmjs/proto-signing";

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
} from "./consts";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgRegisterNodeTypeUrl, MsgRegisterNodeRequest],
    [MsgUpdateNodeDetailsTypeUrl, MsgUpdateNodeDetailsRequest],
    [MsgUpdateNodeStatusTypeUrl, MsgUpdateNodeStatusRequest],
    [MsgStartSessionTypeUrl, MsgStartSessionRequest],
    [MsgUpdateParamsTypeUrl, MsgUpdateParamsRequest],
];

