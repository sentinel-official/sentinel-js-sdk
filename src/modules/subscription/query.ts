import {
    QuerySubscriptionsRequest,
    QuerySubscriptionsForAccountRequest,
    QuerySubscriptionsForPlanRequest,
    QuerySubscriptionRequest,
    QuerySubscriptionsResponse,
    QuerySubscriptionsForAccountResponse,
    QuerySubscriptionsForPlanResponse,
    QuerySubscriptionResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/subscription/v3/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long from 'long';

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";

export interface SubscriptionExtension {
    readonly subscription: {
        subscriptions: (pagination?: PageRequest) => Promise<QuerySubscriptionsResponse>,
        subscriptionsForAccount: (address: string, pagination?: PageRequest) => Promise<QuerySubscriptionsForAccountResponse>,
        subscriptionsForPlan: (id: Long, pagination?: PageRequest) => Promise<QuerySubscriptionsForPlanResponse>,
        subscription: (id: Long) => Promise<QuerySubscriptionResponse>,
    }
}

export function setupSubscriptionExtension(base: QueryClient): SubscriptionExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryServiceClientImpl(rpc);

    return {
        subscription: {
            subscriptions: async (pagination?: PageRequest) =>
                queryService.QuerySubscriptions(QuerySubscriptionsRequest.fromJSON({pagination})),
            subscriptionsForAccount: async (address: string, pagination?: PageRequest) =>
                queryService.QuerySubscriptionsForAccount(QuerySubscriptionsForAccountRequest.fromJSON({address, pagination})),
            subscriptionsForPlan: async (id: Long, pagination?: PageRequest) =>
                queryService.QuerySubscriptionsForPlan(QuerySubscriptionsForPlanRequest.fromJSON({id, pagination})),
            subscription: async (id: Long) =>
                queryService.QuerySubscription(QuerySubscriptionRequest.fromJSON({id})),
        }
    }
}