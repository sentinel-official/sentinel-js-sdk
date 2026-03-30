import {
    MsgRegisterProviderEncodeObject,
    MsgUpdateProviderDetailsEncodeObject,
    MsgUpdateProviderStatusEncodeObject,
    MsgUpdateParamsEncodeObject,
} from "./encodeobjects";

import {
    MsgRegisterProviderTypeUrl,
    MsgUpdateProviderDetailsTypeUrl,
    MsgUpdateProviderStatusTypeUrl,
    MsgUpdateParamsTypeUrl,
} from "./consts";

import { TxParams } from '../../types';
import { Status } from '../../types';

import { Params as ProviderParams } from '../../protobuf/sentinel/provider/v2/params';

interface ProvideRegister {
    from: string,
    name: string,
    identity: string,
    website: string,
    description: string,
}

interface ProviderUpdateDetails {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}

interface ProviderUpdateStatus {
  from: string;
  status: Status;
}

interface ProviderUpdateParams {
  from: string;
  params?: ProviderParams | undefined;
}


export interface TxProviderRegister extends ProvideRegister, TxParams {}
export interface TxProviderUpdateDetails extends ProviderUpdateDetails, TxParams {}
export interface TxProviderUpdateStatus extends ProviderUpdateStatus, TxParams {}
export interface TxProviderUpdateParams extends ProviderUpdateParams, TxParams {}


export function providerRegister(args: ProvideRegister): MsgRegisterProviderEncodeObject{
    return { typeUrl: MsgRegisterProviderTypeUrl, value: args } as MsgRegisterProviderEncodeObject
}

export function providerUpdateDetails(args: ProviderUpdateDetails): MsgUpdateProviderDetailsEncodeObject{
    return { typeUrl: MsgUpdateProviderDetailsTypeUrl, value: args } as MsgUpdateProviderDetailsEncodeObject
}

export function providerUpdateStatus(args: ProviderUpdateStatus): MsgUpdateProviderStatusEncodeObject{
    return { typeUrl: MsgUpdateProviderStatusTypeUrl, value: args } as MsgUpdateProviderStatusEncodeObject
}

export function providerUpdateParams(args: ProviderUpdateParams): MsgUpdateParamsEncodeObject{
    return { typeUrl: MsgUpdateParamsTypeUrl, value: args } as MsgUpdateParamsEncodeObject
}