import {
    QuerySessionsRequest,
    QuerySessionsForAccountRequest,
    QuerySessionsForNodeRequest,
    QuerySessionsForSubscriptionRequest,
    QuerySessionsForAllocationRequest,
    QuerySessionRequest,
    QueryParamsRequest,
    QuerySessionsResponse,
    QuerySessionsForAccountResponse,
    QuerySessionsForNodeResponse,
    QuerySessionsForSubscriptionResponse,
    QuerySessionsForAllocationResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/session/v2/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long from "long";

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";

import { Session } from "../../protobuf/sentinel/session/v2/session";
import { Params } from "../../protobuf/sentinel/session/v2/params";

export interface SessionExtension {
    readonly session: {
        sessions: (pagination?: PageRequest) => Promise<QuerySessionsResponse>,
        sessionsForAccount: (address: string, pagination?: PageRequest) => Promise<QuerySessionsForAccountResponse>,
        sessionsForNode: (address: string, pagination?: PageRequest) => Promise<QuerySessionsForNodeResponse>,
        sessionsForSubscription: (id: Long, pagination?: PageRequest) => Promise<QuerySessionsForSubscriptionResponse>,
        sessionsForAllocation: (id: Long, address: string, pagination?: PageRequest) => Promise<QuerySessionsForAllocationResponse>,
        session: (id: Long) => Promise<Session | undefined>,
        params: () => Promise<Params | undefined>,
    }
}

export function setupSessionExtension(base: QueryClient): SessionExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryServiceClientImpl(rpc);

    return {
        session: {
            sessions: async (pagination?: PageRequest) =>
                queryService.QuerySessions(QuerySessionsRequest.fromJSON({pagination})),
            sessionsForAccount: async (address: string, pagination?: PageRequest) =>
                queryService.QuerySessionsForAccount(QuerySessionsForAccountRequest.fromJSON({address, pagination})),
            sessionsForNode: async (address: string, pagination?: PageRequest) =>
                queryService.QuerySessionsForNode(QuerySessionsForNodeRequest.fromJSON({address, pagination})),
            sessionsForSubscription: async (id: Long, pagination?: PageRequest) =>
                queryService.QuerySessionsForSubscription(QuerySessionsForSubscriptionRequest.fromJSON({id, pagination})),
            sessionsForAllocation: async (id: Long, address: string, pagination?: PageRequest) =>
                queryService.QuerySessionsForAllocation(QuerySessionsForAllocationRequest.fromJSON({id, address, pagination})),
            session: async (id: Long) => {
                const { session } = await queryService.QuerySession(QuerySessionRequest.fromJSON({id}))
                return session
            },
            params: async () => {
                const { params } = await queryService.QueryParams(QueryParamsRequest)
                return params
            }
        }
    }
}