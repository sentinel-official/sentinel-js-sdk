import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { Coin, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import Long from "long";
import {
    MsgRegisterEncodeObject,
    MsgUpdateDetailsEncodeObject,
    MsgUpdateStatusEncodeObject,
    MsgSubscribeEncodeObject
} from './modules/node'

import {
    MsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgUpdateStatusTypeUrl,
    MsgSubscribeTypeUrl
} from './modules/node'
import { Status } from "./protobuf/sentinel/types/v1/status";

function createDefaultRegistry(): Registry {
    return new Registry(SentinelRegistry);
}

export class SigningSentinelClient extends SigningStargateClient {
    public readonly sentinelQuery: SentinelQueryClient | undefined

    public readonly sentinelTx = {
        node: {
            register: this.nodeRegister.bind(this),
            updateDetails: this.nodeUpdateDetails.bind(this),
            updateStatus: this.nodeUpdateStatus.bind(this),
            subscribe: this.nodeSubscribe.bind(this)
        }
    }

    public static override async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {}
    ): Promise<SigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new SigningSentinelClient(tmClient, signer, {
            registry: createDefaultRegistry(),
            ...options
        })
    }

    protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningStargateClientOptions) {
        super(tmClient, signer, options)
        if (tmClient) this.sentinelQuery = buildSentinelQueryClient(tmClient)
    }

    public async nodeRegister(
        from: string,
        gigabytePrices: Coin[],
        hourlyPrices: Coin[],
        remoteUrl: string,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgRegisterEncodeObject = {
            typeUrl: MsgRegisterTypeUrl,
            value: {
                from,
                gigabytePrices,
                hourlyPrices,
                remoteUrl
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async nodeUpdateDetails(
        from: string,
        gigabytePrices: Coin[],
        hourlyPrices: Coin[],
        remoteUrl: string,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgUpdateDetailsEncodeObject = {
            typeUrl: MsgUpdateDetailsTypeUrl,
            value: {
                from,
                gigabytePrices,
                hourlyPrices,
                remoteUrl
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async nodeUpdateStatus(
        from: string,
        status: Status,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgUpdateStatusEncodeObject = {
            typeUrl: MsgUpdateStatusTypeUrl,
            value: {
                from,
                status
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async nodeSubscribe(
        from: string,
        nodeAddress: string,
        gigabytes: Long = Long.ZERO,
        hours: Long = Long.ZERO,
        denom: string = "udvpn",

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgSubscribeEncodeObject = {
            typeUrl: MsgSubscribeTypeUrl,
            value: {
                from,
                nodeAddress,
                gigabytes,
                hours,
                denom
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }
}

