import {
    QuerySubscriptionsRequest,
    QuerySubscriptionsForAccountRequest,
    QuerySubscriptionsForNodeRequest,
    QuerySubscriptionsForPlanRequest,
    QuerySubscriptionRequest,
    QueryAllocationRequest,
    QueryAllocationsRequest,
    QueryPayoutsRequest,
    QueryPayoutsForAccountRequest,
    QueryPayoutsForNodeRequest,
    QueryPayoutRequest,
    QueryParamsRequest,
    QuerySubscriptionsResponse,
    QuerySubscriptionsForAccountResponse,
    QuerySubscriptionsForNodeResponse,
    QuerySubscriptionsForPlanResponse,
    QuerySubscriptionResponse,
    QueryAllocationsResponse,
    QueryPayoutsResponse,
    QueryPayoutsForAccountResponse,
    QueryPayoutsForNodeResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/subscription/v2/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long from 'long';

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";

import { Params } from "../../protobuf/sentinel/subscription/v2/params";
import { Payout } from "../../protobuf/sentinel/subscription/v2/payout";
import { Allocation } from "../../protobuf/sentinel/subscription/v2/allocation";

export interface SubscriptionExtension {
    readonly subscription: {
        subscriptions: (pagination?: PageRequest) => Promise<QuerySubscriptionsResponse>,
        subscriptionsForAccount: (address: string, pagination?: PageRequest) => Promise<QuerySubscriptionsForAccountResponse>,
        subscriptionsForNode: (address: string, pagination?: PageRequest) => Promise<QuerySubscriptionsForNodeResponse>,
        subscriptionsForPlan: (id: Long, pagination?: PageRequest) => Promise<QuerySubscriptionsForPlanResponse>,
        subscription: (id: Long) => Promise<QuerySubscriptionResponse>,
        allocation: (id: Long, address: string) => Promise<Allocation | undefined>,
        allocations: (id: Long, pagination?: PageRequest) => Promise<QueryAllocationsResponse>,
        payouts: (pagination?: PageRequest) => Promise<QueryPayoutsResponse>,
        payoutsForAccount: (address: string, pagination?: PageRequest) => Promise<QueryPayoutsForAccountResponse>,
        payoutsForNode: (address: string, pagination?: PageRequest) => Promise<QueryPayoutsForNodeResponse>,
        payout: (id: Long) => Promise<Payout | undefined>,
        params: () => Promise<Params | undefined>,
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
            subscriptionsForNode: async (address: string, pagination?: PageRequest) =>
                queryService.QuerySubscriptionsForNode(QuerySubscriptionsForNodeRequest.fromJSON({address, pagination})),
            subscriptionsForPlan: async (id: Long, pagination?: PageRequest) =>
                queryService.QuerySubscriptionsForPlan(QuerySubscriptionsForPlanRequest.fromJSON({id, pagination})),
            subscription: async (id: Long) =>
                queryService.QuerySubscription(QuerySubscriptionRequest.fromJSON({id})),
            allocation: async (id: Long, address: string) => {
                const { allocation } = await queryService.QueryAllocation(QueryAllocationRequest.fromJSON({id, address}))
                return allocation
            },
            allocations: async (id: Long, pagination?: PageRequest) =>
                queryService.QueryAllocations(QueryAllocationsRequest.fromJSON({id, pagination})),
            payouts: async (pagination?: PageRequest) =>
                queryService.QueryPayouts(QueryPayoutsRequest.fromJSON({pagination})),
            payoutsForAccount: async (address: string, pagination?: PageRequest) =>
                queryService.QueryPayoutsForAccount(QueryPayoutsForAccountRequest.fromJSON({address, pagination})),
            payoutsForNode: async (address: string, pagination?: PageRequest) =>
                queryService.QueryPayoutsForNode(QueryPayoutsForNodeRequest.fromJSON({address, pagination})),
            payout: async (id: Long) => {
                const { payout } = await queryService.QueryPayout(QueryPayoutRequest.fromJSON({id}))
                return payout
            },
            params: async () => {
                const { params } = await queryService.QueryParams(QueryParamsRequest)
                return params
            }

        }
    }
}