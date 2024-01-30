import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgStartRequest,
    MsgUpdateDetailsRequest,
    MsgEndRequest,
} from '../../protobuf/sentinel/session/v2/msg'

import {
    MsgStartTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgEndTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgStartTypeUrl, MsgStartRequest],
    [MsgUpdateDetailsTypeUrl, MsgUpdateDetailsRequest],
    [MsgEndTypeUrl, MsgEndRequest],
];

