import { connectComet, CometClient } from "@cosmjs/tendermint-rpc";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";

import {
    TxNodeRegister,
    TxNodeUpdateDetails,
    TxNodeUpdateStatus,
    TxNodeStartSession,
    TxNodeUpdateParams,
    nodeRegister,
    nodeUpdateDetails,
    nodeUpdateStatus,
    nodeStartSession,
    nodeUpdateParams
} from './modules/node'

import {
    TxPlanCreate,
    TxPlanUpdateStatus,
    TxPlanLinkNode,
    TxPlanUnlinkNode,
    TxPlanStartSession,
    planCreate,
    planUpdateStatus,
    planLinkNode,
    planUnlinkNode,
    planStartSession,
} from './modules/plan'

import {
    TxProviderRegister,
    TxProviderUpdateDetails,
    TxProviderUpdateStatus,
    TxProviderUpdateParams,
    providerRegister,
    providerUpdateDetails,
    providerUpdateStatus,
    providerUpdateParams,
} from './modules/provider'

import {
    TxSessionCancel,
    TxSessionUpdate,
    TxSessionUpdateParams,
    sessionCancel,
    sessionUpdate,
    sessionUpdateParams,
} from './modules/session'

import {
    TxSubscriptionCancel,
    TxSubscriptionRenew,
    TxSubscriptionShare,
    TxSubscriptionStart,
    TxSubscriptionUpdate,
    TxSubscriptionStartSession,
    TxSubscriptionUpdateParams,
    subscriptionCancel,
    subscriptionRenew,
    subscriptionShare,
    subscriptionStart,
    subscriptionUpdate,
    subscriptionStartSession,
    subscriptionUpdateParams,
} from './modules/subscription'

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
            startSession: this.nodeStartSession.bind(this),
            updateParams: this.nodeUpdateParams.bind(this)
        },
        plan: {
            create: this.planCreate.bind(this),
            updateStatus: this.planUpdateStatus.bind(this),
            linkNode: this.planLinkNode.bind(this),
            unlinkNode: this.planUnlinkNode.bind(this),
            startSession: this.planStartSession.bind(this),
        },
        provider: {
            register: this.providerRegister.bind(this),
            updateDetails: this.providerUpdateDetails.bind(this),
            updateStatus: this.providerUpdateStatus.bind(this),
            updateParams: this.providerUpdateParams.bind(this),
        },
        session: {
            cancel: this.sessionCancel.bind(this),
            update: this.sessionUpdate.bind(this),
            updateParams: this.sessionUpdateParams.bind(this),
        },
        subscription: {
            cancel: this.subscriptionCancel.bind(this),
            renew: this.subscriptionRenew.bind(this),
            share: this.subscriptionShare.bind(this),
            start: this.subscriptionStart.bind(this),
            update: this.subscriptionUpdate.bind(this),
            startSession: this.subscriptionStartSession.bind(this),
            updateParams: this.subscriptionUpdateParams.bind(this),
        }
    }

    public static override async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {}
    ): Promise<SigningSentinelClient> {
        const tmClient = await connectComet(endpoint)
        return new SigningSentinelClient(tmClient, signer, {
            registry: createDefaultRegistry(),
            ...options
        })
    }

    protected constructor(tmClient: CometClient | undefined, signer: OfflineSigner, options: SigningStargateClientOptions) {
        super(tmClient, signer, options)
        if (tmClient) this.sentinelQuery = buildSentinelQueryClient(tmClient)
    }

    public async nodeRegister(args: TxNodeRegister): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeRegister(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async nodeUpdateDetails(args: TxNodeUpdateDetails): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeUpdateDetails(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async nodeUpdateStatus(args: TxNodeUpdateStatus): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeUpdateStatus(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async nodeStartSession(args: TxNodeStartSession): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeStartSession(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async nodeUpdateParams(args: TxNodeUpdateParams): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeUpdateParams(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async planCreate(args: TxPlanCreate): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planCreate(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async planUpdateStatus(args: TxPlanUpdateStatus): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planUpdateStatus(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async planLinkNode(args: TxPlanLinkNode): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planLinkNode(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async planUnlinkNode(args: TxPlanUnlinkNode): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planUnlinkNode(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async planStartSession(args: TxPlanStartSession): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planStartSession(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerRegister(args: TxProviderRegister): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerRegister(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerUpdateDetails(args: TxProviderUpdateDetails): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerUpdateDetails(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerUpdateStatus(args: TxProviderUpdateStatus): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerUpdateStatus(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerUpdateParams(args: TxProviderUpdateParams): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerUpdateParams(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionCancel(args: TxSessionCancel): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionCancel(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionUpdate(args: TxSessionUpdate): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionUpdate(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionUpdateParams(args: TxSessionUpdateParams): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionUpdateParams(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async subscriptionCancel(args: TxSubscriptionCancel): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionCancel(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionRenew(args: TxSubscriptionRenew): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionRenew(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionShare(args: TxSubscriptionShare): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionShare(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionStart(args: TxSubscriptionStart): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionStart(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionUpdate(args: TxSubscriptionUpdate): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionUpdate(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionStartSession(args: TxSubscriptionStartSession): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionStartSession(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }
    public async subscriptionUpdateParams(args: TxSubscriptionUpdateParams): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionUpdateParams(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }


}

