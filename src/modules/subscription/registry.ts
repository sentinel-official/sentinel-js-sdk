import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgCancelRequest,
    MsgAllocateRequest,
} from '../../protobuf/sentinel/subscription/v2/msg'

import {
    MsgCancelTypeUrl,
    MsgAllocateTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgCancelTypeUrl, MsgCancelRequest],
    [MsgAllocateTypeUrl, MsgAllocateRequest]
];

