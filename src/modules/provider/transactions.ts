import {
    MsgRegisterEncodeObject,
    MsgUpdateEncodeObject
} from "./encodeobjects";

import {
    MsgRegisterTypeUrl,
    MsgUpdateTypeUrl
} from "./consts";

import { TxParams } from '../../types';
import { Status } from '../../types';

interface ProvideRegister {
    from: string,
    name: string,
    identity: string,
    website: string,
    description: string,
}

interface ProviderUpdate {
    from: string,
    name: string,
    identity: string,
    website: string,
    description: string,
    status: Status,
}

export interface TxProvideRegister extends ProvideRegister, TxParams {}
export interface TxProviderUpdate extends ProviderUpdate, TxParams {}


export function providerRegister(args: ProvideRegister): MsgRegisterEncodeObject{
    return { typeUrl: MsgRegisterTypeUrl, value: args } as MsgRegisterEncodeObject
}

export function providerUpdate(args: ProviderUpdate): MsgUpdateEncodeObject{
    return { typeUrl: MsgUpdateTypeUrl, value: args } as MsgUpdateEncodeObject
}