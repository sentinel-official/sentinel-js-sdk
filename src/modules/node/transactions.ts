import {
    MsgRegisterEncodeObject,
    MsgUpdateDetailsEncodeObject,
    MsgUpdateStatusEncodeObject,
    MsgSubscribeEncodeObject
} from './encodeobjects';

import {
    MsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgSubscribeTypeUrl
} from './consts';

import { TxParams } from '../../types';
import Long from 'long';
import { Coin, Status } from '../../types';

interface NodeRegister {
    from: string;
    gigabytePrices: Coin[];
    hourlyPrices: Coin[];
    remoteUrl: string;
}

interface NodeUpdateDetails {
    from: string;
    gigabytePrices: Coin[];
    hourlyPrices: Coin[];
    remoteUrl: string;
}

interface NodeUpdateStatus {
    from: string;
    status: Status;
}

interface NodeSubscribe {
    from: string;
    nodeAddress: string;
    gigabytes?: Long;
    hours?: Long;
    denom?: string;
}

export interface TxNodeRegister extends NodeRegister, TxParams {}
export interface TxNodeUpdateDetails extends NodeUpdateDetails, TxParams {}
export interface TxNodeUpdateStatus extends NodeUpdateStatus, TxParams {}
export interface TxNodeSubscribe extends NodeSubscribe, TxParams {}

export function nodeRegister(args: NodeRegister): MsgRegisterEncodeObject {
    return { typeUrl: MsgRegisterTypeUrl, value: args } as MsgRegisterEncodeObject;
}

export function nodeUpdateDetails(args: NodeUpdateDetails): MsgUpdateDetailsEncodeObject {
    return { typeUrl: MsgUpdateDetailsTypeUrl, value: args } as MsgUpdateDetailsEncodeObject;
}

export function nodeUpdateStatus(args: NodeUpdateStatus): MsgUpdateStatusEncodeObject {
    return { typeUrl: MsgUpdateStatusTypeUrl, value: args } as MsgUpdateStatusEncodeObject;
}

export function nodeSubscribe({
    from,
    nodeAddress,
    gigabytes = Long.ZERO,
    hours = Long.ZERO,
    denom = 'udvpn'
}: NodeSubscribe): MsgSubscribeEncodeObject {
    return {
        typeUrl: MsgSubscribeTypeUrl,
        value: {
            from,
            nodeAddress,
            gigabytes,
            hours,
            denom
        }
    } as MsgSubscribeEncodeObject;
}
