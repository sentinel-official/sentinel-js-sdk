import {
    QuerySessionsRequest,
    QuerySessionsForAccountRequest,
    QuerySessionsForNodeRequest,
    QuerySessionsForSubscriptionRequest,
    QuerySessionsForAllocationRequest,
    QuerySessionRequest,
    QuerySessionsResponse,
    QuerySessionsForAccountResponse,
    QuerySessionsForNodeResponse,
    QuerySessionsForSubscriptionResponse,
    QuerySessionsForAllocationResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/session/v3/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long from "long";

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";
import { Any } from "../../protobuf/google/protobuf/any";
import { BaseSession } from "../../protobuf/sentinel/session/v3/session";


export interface SessionExtension {
    readonly session: {
        sessions: (pagination?: PageRequest) => Promise<QuerySessionsResponse>,
        sessionsForAccount: (address: string, pagination?: PageRequest) => Promise<QuerySessionsForAccountResponse>,
        sessionsForNode: (address: string, pagination?: PageRequest) => Promise<QuerySessionsForNodeResponse>,
        sessionsForSubscription: (id: Long, pagination?: PageRequest) => Promise<QuerySessionsForSubscriptionResponse>,
        sessionsForAllocation: (id: Long, address: string, pagination?: PageRequest) => Promise<QuerySessionsForAllocationResponse>,
        session: (id: Long) => Promise<Any | undefined>,
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
            }
        }
    }
}

/**
 * Unpacks a protobuf Any containing a Session into the concrete BaseSession type.
 * The session query returns Any because sessions can be different versions.
 *
 * @param any - The protobuf Any from the session query
 * @returns The decoded BaseSession object, or null if the typeUrl is unrecognized
 */
export function unpackSession(any: Any): BaseSession | null {
    if (!any || !any.value) return null;
    try {
        return BaseSession.decode(any.value);
    } catch {
        return null;
    }
}
