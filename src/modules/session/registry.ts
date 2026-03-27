import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgCancelSessionRequest,
    MsgUpdateSessionRequest,
    MsgUpdateParamsRequest,
} from '../../protobuf/sentinel/session/v3/msg'

import {
    MsgCancelSessionTypeUrl,
    MsgUpdateSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgCancelSessionTypeUrl, MsgCancelSessionRequest],
    [MsgUpdateSessionTypeUrl, MsgUpdateSessionRequest],
    [MsgUpdateParamsTypeUrl, MsgUpdateParamsRequest],
];

