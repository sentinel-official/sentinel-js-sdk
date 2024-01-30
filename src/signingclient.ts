import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { Coin, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import Long from "long";

import {
    MsgRegisterEncodeObject as NodeMsgRegisterEncodeObject,
    MsgUpdateDetailsEncodeObject,
    MsgUpdateStatusEncodeObject as NodeMsgUpdateStatusEncodeObject,
    MsgSubscribeEncodeObject as NodeMsgSubscribeEncodeObject,

    MsgRegisterTypeUrl as NodeMsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl,
    MsgUpdateStatusTypeUrl as NodeMsgUpdateStatusTypeUrl,
    MsgSubscribeTypeUrl as NodeMsgSubscribeTypeUrl
} from './modules/node'

import {
    MsgCreateEncodeObject,
    MsgUpdateStatusEncodeObject as PlanMsgUpdateStatusEncodeObject,
    MsgLinkNodeEncodeObject,
    MsgUnlinkNodeEncodeObject,
    MsgSubscribeEncodeObject as PlanMsgSubscribeEncodeObject,

    MsgCreateTypeUrl,
    MsgUpdateStatusTypeUrl as PlanMsgUpdateStatusTypeUrl,
    MsgLinkNodeTypeUrl,
    MsgUnlinkNodeTypeUrl,
    MsgSubscribeTypeUrl as PlanMsgSubscribeTypeUrl
} from "./modules/plan";

import {
    MsgRegisterEncodeObject as ProviderMsgRegisterEncodeObject,
    MsgUpdateEncodeObject,

    MsgRegisterTypeUrl as ProviderMsgRegisterTypeUrl,
    MsgUpdateTypeUrl
} from "./modules/provider";

import { Status } from "./protobuf/sentinel/types/v1/status";
import { Duration } from "./protobuf/google/protobuf/duration";

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
        },
        plan: {
            create: this.planCreate.bind(this),
            updateStatus: this.planUpdateStatus.bind(this),
            linkNode: this.planLinkNode.bind(this),
            unlinkNode: this.planUnlinkNode.bind(this),
            subscribe: this.planSubscribe.bind(this),
        },
        provider: {
            register: this.providerRegister.bind(this),
            update: this.providerUpdate.bind(this),
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
        const msg: NodeMsgRegisterEncodeObject = {
            typeUrl: NodeMsgRegisterTypeUrl,
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
        const msg: NodeMsgUpdateStatusEncodeObject = {
            typeUrl: NodeMsgUpdateStatusTypeUrl,
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
        const msg: NodeMsgSubscribeEncodeObject = {
            typeUrl: NodeMsgSubscribeTypeUrl,
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

    public async planCreate(
        from: string,
        duration: Duration | undefined,
        gigabytes: Long,
        prices: Coin[],

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgCreateEncodeObject = {
            typeUrl: MsgCreateTypeUrl,
            value: {
                from,
                duration,
                gigabytes,
                prices
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async planUpdateStatus(
        from: string,
        id: Long,
        status: Status,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: PlanMsgUpdateStatusEncodeObject = {
            typeUrl: PlanMsgUpdateStatusTypeUrl,
            value: {
                from,
                id,
                status
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async planLinkNode(
        from: string,
        id: Long,
        nodeAddress: string,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgLinkNodeEncodeObject = {
            typeUrl: MsgLinkNodeTypeUrl,
            value: {
                from,
                id,
                nodeAddress
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async planUnlinkNode(
        from: string,
        id: Long,
        nodeAddress: string,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgUnlinkNodeEncodeObject = {
            typeUrl: MsgUnlinkNodeTypeUrl,
            value: {
                from,
                id,
                nodeAddress
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async planSubscribe(
        from: string,
        id: Long,
        denom: string = "udvpn",

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: PlanMsgSubscribeEncodeObject = {
            typeUrl: PlanMsgSubscribeTypeUrl,
            value: {
                from,
                id,
                denom
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async providerRegister(
        from: string,
        name: string,
        identity: string,
        website: string,
        description: string,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: ProviderMsgRegisterEncodeObject = {
            typeUrl: ProviderMsgRegisterTypeUrl,
            value: {
                from,
                name,
                identity,
                website,
                description
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

    public async providerUpdate(
        from: string,
        name: string,
        identity: string,
        website: string,
        description: string,
        status: Status,

        fee: StdFee | "auto" | number = "auto",
        memo: string = "",
    ): Promise<DeliverTxResponse> {
        const msg: MsgUpdateEncodeObject = {
            typeUrl: MsgUpdateTypeUrl,
            value: {
                from,
                name,
                identity,
                website,
                description,
                status
            }
        }
        return this.signAndBroadcast(from, [msg], fee, memo)
    }

}

