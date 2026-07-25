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
import { Session as NodeSession } from "../../protobuf/sentinel/node/v3/session";
import { Session as SubscriptionSession } from "../../protobuf/sentinel/subscription/v3/session";


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
 * Unpacks a protobuf Any containing a v3 session into its BaseSession.
 * Node and subscription sessions use different wrapper messages, so decoding
 * must be selected from Any.typeUrl before extracting their baseSession.
 *
 * @param any - The protobuf Any from the session query
 * @returns The decoded BaseSession, or null for unknown types and invalid data
 */
export function unpackSession(any: Any): BaseSession | null {
    if (!any?.value?.length) return null;

    const typeName = any.typeUrl.split("/").pop();
    try {
        switch (typeName) {
            case "sentinel.node.v3.Session":
                return NodeSession.decode(any.value).baseSession ?? null;

            case "sentinel.subscription.v3.Session":
                return SubscriptionSession.decode(any.value).baseSession ?? null;

            case "sentinel.session.v3.BaseSession":
                return BaseSession.decode(any.value);

            default:
                return null;
        }
    } catch {
        return null;
    }
}
