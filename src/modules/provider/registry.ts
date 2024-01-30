import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgRegisterRequest,
    MsgUpdateRequest,
} from '../../protobuf/sentinel/provider/v2/msg'

import {
    MsgRegisterTypeUrl,
    MsgUpdateTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgRegisterTypeUrl, MsgRegisterRequest],
    [MsgUpdateTypeUrl, MsgUpdateRequest]
];

