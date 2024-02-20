import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import Long from "long";

import {
    NodeRegisterTx,
    NodeUpdateDetailsTx,
    NodeUpdateStatusTx,
    NodeSubscribeTx,
    PlanCreateTx,
    PlanUpdateStatusTx,
    PlanLinkUnlinkNodeTx,
    PlanSubscribeTx,
    ProvideRegisterTx,
    ProviderUpdateTx,
    SessionStartTx,
    SessionUpdateDetailsTx,
    SessionEndTx,
    SubscriptionCancelTx,
    SubscriptionAllocateTx,
 } from "./interfaces"

import {
    MsgRegisterEncodeObject as NodeMsgRegisterEncodeObject,
    MsgUpdateDetailsEncodeObject as NodeMsgUpdateDetailsEncodeObject,
    MsgUpdateStatusEncodeObject as NodeMsgUpdateStatusEncodeObject,
    MsgSubscribeEncodeObject as NodeMsgSubscribeEncodeObject,

    MsgRegisterTypeUrl as NodeMsgRegisterTypeUrl,
    MsgUpdateDetailsTypeUrl as NodeMsgUpdateDetailsTypeUrl,
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

import {
    MsgStartEncodeObject,
    MsgUpdateDetailsEncodeObject as SessionMsgUpdateDetailsEncodeObject,
    MsgEndEncodeObject,

    MsgStartTypeUrl,
    MsgUpdateDetailsTypeUrl as SessionMsgUpdateDetailsTypeUrl,
    MsgEndTypeUrl,
} from "./modules/session";

import {
    MsgCancelEncodeObject,
    MsgAllocateEncodeObject,

    MsgCancelTypeUrl,
    MsgAllocateTypeUrl
} from "./modules/subscription";

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
        },
        session: {
            start: this.sessionStart.bind(this),
            updateDetails: this.sessionUpdateDetails.bind(this),
            end: this.sessionEnd.bind(this),
        },
        subscription: {
            cancel: this.subscriptionCancel.bind(this),
            allocate: this.subscriptionAllocate.bind(this)
        }
    }

    public static override async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {}
    ): Promise<SigningSentinelClient> {
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

    public nodeRegister({
        from,
        gigabytePrices,
        hourlyPrices,
        remoteUrl,
        broadcast = true,
        fee = "auto",
        memo = ""
    }: NodeRegisterTx): Promise<DeliverTxResponse> | NodeMsgRegisterEncodeObject {
        const msg: NodeMsgRegisterEncodeObject = {
            typeUrl: NodeMsgRegisterTypeUrl,
            value: {
                from,
                gigabytePrices,
                hourlyPrices,
                remoteUrl
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public nodeUpdateDetails({
        from,
        gigabytePrices,
        hourlyPrices,
        remoteUrl,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: NodeUpdateDetailsTx): Promise<DeliverTxResponse> | NodeMsgUpdateDetailsEncodeObject {
        const msg: NodeMsgUpdateDetailsEncodeObject = {
            typeUrl: NodeMsgUpdateDetailsTypeUrl,
            value: {
                from,
                gigabytePrices,
                hourlyPrices,
                remoteUrl
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public nodeUpdateStatus({
        from,
        status,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: NodeUpdateStatusTx): Promise<DeliverTxResponse> | NodeMsgUpdateStatusEncodeObject {
        const msg: NodeMsgUpdateStatusEncodeObject = {
            typeUrl: NodeMsgUpdateStatusTypeUrl,
            value: {
                from,
                status
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public nodeSubscribe({
        from,
        nodeAddress,
        gigabytes = Long.ZERO,
        hours = Long.ZERO,
        denom = "udvpn",
        broadcast = true,
        fee = "auto",
        memo = "",
    }: NodeSubscribeTx): Promise<DeliverTxResponse> | NodeMsgSubscribeEncodeObject {
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
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public planCreate({
        from,
        duration,
        gigabytes,
        prices,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: PlanCreateTx): Promise<DeliverTxResponse> | MsgCreateEncodeObject {
        const msg: MsgCreateEncodeObject = {
            typeUrl: MsgCreateTypeUrl,
            value: {
                from,
                duration,
                gigabytes,
                prices
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public planUpdateStatus({
        from,
        id,
        status,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: PlanUpdateStatusTx): Promise<DeliverTxResponse> | PlanMsgUpdateStatusEncodeObject {
        const msg: PlanMsgUpdateStatusEncodeObject = {
            typeUrl: PlanMsgUpdateStatusTypeUrl,
            value: {
                from,
                id,
                status
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public planLinkNode({
        from,
        id,
        nodeAddress,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: PlanLinkUnlinkNodeTx): Promise<DeliverTxResponse> | MsgLinkNodeEncodeObject {
        const msg: MsgLinkNodeEncodeObject = {
            typeUrl: MsgLinkNodeTypeUrl,
            value: {
                from,
                id,
                nodeAddress
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public planUnlinkNode({
        from,
        id,
        nodeAddress,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: PlanLinkUnlinkNodeTx): Promise<DeliverTxResponse> | MsgUnlinkNodeEncodeObject {
        const msg: MsgUnlinkNodeEncodeObject = {
            typeUrl: MsgUnlinkNodeTypeUrl,
            value: {
                from,
                id,
                nodeAddress
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public planSubscribe({
        from,
        id,
        denom = "udvpn",
        broadcast = true,
        fee = "auto",
        memo = "",
    }: PlanSubscribeTx ): Promise<DeliverTxResponse> | PlanMsgSubscribeEncodeObject {
        const msg: PlanMsgSubscribeEncodeObject = {
            typeUrl: PlanMsgSubscribeTypeUrl,
            value: {
                from,
                id,
                denom
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public providerRegister({
        from,
        name,
        identity,
        website,
        description,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: ProvideRegisterTx): Promise<DeliverTxResponse> | ProviderMsgRegisterEncodeObject{
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
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public providerUpdate({
        from,
        name,
        identity,
        website,
        description,
        status,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: ProviderUpdateTx): Promise<DeliverTxResponse> | MsgUpdateEncodeObject{
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
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public sessionStart({
        from,
        id,
        address,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: SessionStartTx): Promise<DeliverTxResponse> | MsgStartEncodeObject{
        const msg: MsgStartEncodeObject = {
            typeUrl: MsgStartTypeUrl,
            value: {
                from,
                id,
                address
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public sessionUpdateDetails({
        from,
        proof,
        signature,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: SessionUpdateDetailsTx ): Promise<DeliverTxResponse> | SessionMsgUpdateDetailsEncodeObject {
        const msg: SessionMsgUpdateDetailsEncodeObject = {
            typeUrl: SessionMsgUpdateDetailsTypeUrl,
            value: {
                from,
                proof,
                signature
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public sessionEnd({
        from,
        id,
        rating,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: SessionEndTx): Promise<DeliverTxResponse> | MsgEndEncodeObject {
        const msg: MsgEndEncodeObject = {
            typeUrl: MsgEndTypeUrl,
            value: {
                from,
                id,
                rating
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public subscriptionCancel({
        from,
        id,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: SubscriptionCancelTx): Promise<DeliverTxResponse> | MsgCancelEncodeObject {
        const msg: MsgCancelEncodeObject = {
            typeUrl: MsgCancelTypeUrl,
            value: {
                from,
                id,
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

    public subscriptionAllocate({
        from,
        id,
        address,
        bytes,
        broadcast = true,
        fee = "auto",
        memo = "",
    }: SubscriptionAllocateTx): Promise<DeliverTxResponse> | MsgAllocateEncodeObject {
        const msg: MsgAllocateEncodeObject = {
            typeUrl: MsgAllocateTypeUrl,
            value: {
                from,
                id,
                address,
                bytes
            }
        }
        if(broadcast === true && fee !== undefined && memo !== undefined) return this.signAndBroadcast(from, [msg], fee, memo)
        else return msg
    }

}

