import {
    MsgRegisterNodeEncodeObject,
    MsgUpdateNodeDetailsEncodeObject,
    MsgUpdateNodeStatusEncodeObject,
    MsgStartSessionEncodeObject,
    MsgUpdateParamsEncodeObject,
} from './encodeobjects';

import {
    MsgRegisterNodeTypeUrl,
    MsgUpdateNodeDetailsTypeUrl,
    MsgUpdateNodeStatusTypeUrl,
    MsgStartSessionTypeUrl,
    MsgUpdateParamsTypeUrl,
} from './consts';

import { TxParams, Price, Status } from '../../types';
import Long from 'long';

import { Params as NodeParams } from '../../protobuf/sentinel/node/v3/params';

interface NodeRegister {
    from: string;
    gigabytePrices: Price[];
    hourlyPrices: Price[];
    remoteUrl: string;
}

interface NodeUpdateDetails {
    from: string;
    gigabytePrices: Price[];
    hourlyPrices: Price[];
    remoteUrl: string;
}

interface NodeUpdateStatus {
    from: string;
    status: Status;
}

interface NodeStartSession {
    from: string;
    nodeAddress: string;
    gigabytes?: Long;
    hours?: Long;
    denom?: string;
}

interface NodeUpdateParams {
    from: string;
    params?: NodeParams;
}

export interface TxNodeRegister extends NodeRegister, TxParams {}
export interface TxNodeUpdateDetails extends NodeUpdateDetails, TxParams {}
export interface TxNodeUpdateStatus extends NodeUpdateStatus, TxParams {}
export interface TxNodeStartSession extends NodeStartSession, TxParams {}
export interface TxNodeUpdateParams extends NodeUpdateParams, TxParams {}

export function nodeRegister(args: NodeRegister): MsgRegisterNodeEncodeObject {
    return { typeUrl: MsgRegisterNodeTypeUrl, value: args } as MsgRegisterNodeEncodeObject;
}

export function nodeUpdateDetails(args: NodeUpdateDetails): MsgUpdateNodeDetailsEncodeObject {
    return { typeUrl: MsgUpdateNodeDetailsTypeUrl, value: args } as MsgUpdateNodeDetailsEncodeObject;
}

export function nodeUpdateStatus(args: NodeUpdateStatus): MsgUpdateNodeStatusEncodeObject {
    return { typeUrl: MsgUpdateNodeStatusTypeUrl, value: args } as MsgUpdateNodeStatusEncodeObject;
}

export function nodeUpdateParams(args: NodeUpdateParams): MsgUpdateParamsEncodeObject {
    return { typeUrl: MsgUpdateParamsTypeUrl, value: args } as MsgUpdateParamsEncodeObject;
}

export function nodeStartSession({
    from,
    nodeAddress,
    gigabytes = Long.ZERO,
    hours = Long.ZERO,
    denom = 'udvpn'
}: NodeStartSession): MsgStartSessionEncodeObject {
    return {
        typeUrl: MsgStartSessionTypeUrl,
        value: {
            from,
            nodeAddress,
            gigabytes,
            hours,
            denom
        }
    } as MsgStartSessionEncodeObject;
}
