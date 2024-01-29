import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgRegisterRequest,
    MsgUpdateDetailsRequest,
    MsgUpdateStatusRequest,
    MsgSubscribeRequest,
} from '../../protobuf/sentinel/node/v2/msg'

import {
    MsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgSubscribeTypeUrl
} from "./consts";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgRegisterTypeUrl, MsgRegisterRequest],
    [MsgUpdateDetailsTypeUrl, MsgUpdateDetailsRequest],
    [MsgUpdateStatusTypeUrl, MsgUpdateStatusRequest],
    [MsgSubscribeTypeUrl, MsgSubscribeRequest],
];

