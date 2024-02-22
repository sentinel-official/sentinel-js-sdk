import {
    MsgStartEncodeObject,
    MsgUpdateDetailsEncodeObject,
    MsgEndEncodeObject,
} from "./encodeobjects";

import {
    MsgStartTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgEndTypeUrl,
} from "./consts";

import { TxParams } from '../../types';
import Long from 'long';
import { Proof } from "../../protobuf/sentinel/session/v2/proof";

interface SessionStart {
    from: string
    id: Long,
    address: string,
}

interface SessionUpdateDetails {
    from: string
    proof: Proof | undefined,
    signature: Uint8Array,
}

interface SessionEnd {
    from: string
    id: Long,
    rating: Long,
}

export interface TxSessionStart extends SessionStart, TxParams {}
export interface TxSessionUpdateDetails extends SessionUpdateDetails, TxParams {}
export interface TxSessionEnd extends SessionEnd, TxParams {}


export function sessionStart(args: SessionStart): MsgStartEncodeObject{
    return { typeUrl: MsgStartTypeUrl, value: args } as MsgStartEncodeObject
}

export function sessionUpdateDetails(args: SessionUpdateDetails): MsgUpdateDetailsEncodeObject {
    return { typeUrl: MsgUpdateDetailsTypeUrl, value: args } as MsgUpdateDetailsEncodeObject
}

export function sessionEnd(args: SessionEnd): MsgEndEncodeObject {
    return { typeUrl: MsgEndTypeUrl, value: args } as MsgEndEncodeObject
}
