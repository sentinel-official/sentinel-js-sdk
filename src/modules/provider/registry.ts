import { GeneratedType } from "@cosmjs/proto-signing";

import {
    MsgRegisterProviderRequest,
    MsgUpdateProviderDetailsRequest,
    MsgUpdateProviderStatusRequest,
    MsgUpdateParamsRequest,
} from '../../protobuf/sentinel/provider/v3/msg'

import {
    MsgRegisterProviderTypeUrl,
    MsgUpdateProviderDetailsTypeUrl,
    MsgUpdateProviderStatusTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts'

export const registry: ReadonlyArray<[string, GeneratedType]> = [
    [MsgRegisterProviderTypeUrl, MsgRegisterProviderRequest],
    [MsgUpdateProviderDetailsTypeUrl, MsgUpdateProviderDetailsRequest],
    [MsgUpdateProviderStatusTypeUrl, MsgUpdateProviderStatusRequest],
    [MsgUpdateParamsTypeUrl, MsgUpdateParamsRequest],
];

