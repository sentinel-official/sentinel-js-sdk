import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";

import {
    TxNodeRegister,
    TxNodeUpdateDetails,
    TxNodeUpdateStatus,
    TxNodeSubscribe,
    nodeRegister,
    nodeUpdateDetails,
    nodeUpdateStatus,
    nodeSubscribe,
} from './modules/node'

import {
    TxPlanCreate,
    TxPlanUpdateStatus,
    TxPlanLinkNode,
    TxPlanUnlinkNode,
    TxPlanSubscribe,
    planCreate,
    planUpdateStatus,
    planLinkNode,
    planUnlinkNode,
    planSubscribe,
} from './modules/plan'

import {
    TxProvideRegister,
    TxProviderUpdate,
    providerRegister,
    providerUpdate
} from './modules/provider'

import {
    TxSessionStart,
    TxSessionUpdateDetails,
    TxSessionEnd,
    sessionStart,
    sessionUpdateDetails,
    sessionEnd,
} from './modules/session'

import {
    TxSubscriptionCancel,
    TxSubscriptionAllocate,
    subscriptionCancel,
    subscriptionAllocate
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

    public async nodeSubscribe(args: TxNodeSubscribe): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = nodeSubscribe(params)
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

    public async planSubscribe(args: TxPlanSubscribe): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = planSubscribe(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerRegister(args: TxProvideRegister): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerRegister(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async providerUpdate(args: TxProviderUpdate): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = providerUpdate(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionStart(args: TxSessionStart): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionStart(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionUpdateDetails(args: TxSessionUpdateDetails): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionUpdateDetails(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async sessionEnd(args: TxSessionEnd): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = sessionEnd(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async subscriptionCancel(args: TxSubscriptionCancel): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionCancel(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

    public async subscriptionAllocate(args: TxSubscriptionAllocate): Promise<DeliverTxResponse> {
        const {fee, memo, ...params} = args
        const msg = subscriptionAllocate(params)
        return this.signAndBroadcast(args.from, [msg], fee || "auto", memo)
    }

}

