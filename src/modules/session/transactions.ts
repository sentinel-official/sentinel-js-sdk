import {
    MsgCancelSessionEncodeObject,
    MsgUpdateSessionEncodeObject,
    MsgUpdateParamsEncodeObject,
} from "./encodeobjects";

import {
    MsgCancelSessionTypeUrl,
    MsgUpdateSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from "./consts";

import { TxParams } from '../../types';
import Long from 'long';
import { Duration } from "../../protobuf/google/protobuf/duration";
import { Params as SessionParams } from '../../protobuf/sentinel/session/v2/params';


interface SessionCancel {
    from: string
    id: Long,
}

interface SessionUpdate {
    from: string;
    id: Long;
    downloadBytes: string;
    uploadBytes: string;
    duration?: Duration | undefined;
    signature: Uint8Array;
}

interface SessionUpdateParams {
  from: string;
  params?: SessionParams | undefined;
}

export interface TxSessionCancel extends SessionCancel, TxParams {}
export interface TxSessionUpdate extends SessionUpdate, TxParams {}
export interface TxSessionUpdateParams extends SessionUpdateParams, TxParams {}

export function sessionCancel(args: SessionCancel): MsgCancelSessionEncodeObject {
    return { typeUrl: MsgCancelSessionTypeUrl, value: args} as MsgCancelSessionEncodeObject
}
export function sessionUpdate(args: SessionUpdate): MsgUpdateSessionEncodeObject {
    return { typeUrl: MsgUpdateSessionTypeUrl, value: args} as MsgUpdateSessionEncodeObject
}
export function sessionUpdateParams(args: SessionUpdateParams): MsgUpdateParamsEncodeObject {
    return { typeUrl: MsgUpdateParamsTypeUrl, value: args} as MsgUpdateParamsEncodeObject
}
