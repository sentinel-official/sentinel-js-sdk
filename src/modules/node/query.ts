import {
    QueryNodesRequest,
    QueryNodesForPlanRequest,
    QueryNodeRequest,
    QueryNodesResponse,
    QueryNodesForPlanResponse,
    // QueryNodeResponse, // return directly Node
    QueryParamsRequest,
    // QueryParamsResponse, // return directly Params
    QueryServiceClientImpl
} from "../../protobuf/sentinel/node/v3/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long  from "long";

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";
import { Status } from "../../protobuf/sentinel/types/v1/status";

import { Params } from "../../protobuf/sentinel/node/v3/params";
import { Node } from "../../protobuf/sentinel/node/v3/node";

export interface NodeExtension {
    readonly node: {
        /**
         * Query nodes by status.
         *
         * NOTE: Sentinel chain v3 does not return `pagination.next_key` for
         * this query even when results are truncated. To enumerate all nodes
         * reliably, do not loop on `next_key` or rely on `offset`: current
         * mainnet queries can return no results for a non-zero offset. Use a
         * sufficiently large `limit` in a single call instead.
         *
         * Reproducible against mainnet: a status=ACTIVE query that has more
         * than `limit` matching nodes still returns `next_key=null`.
         */
        nodes: (status: Status, pagination?: PageRequest) => Promise<QueryNodesResponse>,
        /**
         * Query nodes joined to a plan by status. Same `next_key` caveat
         * as `nodes()` — chain v3 does not emit it on truncation and non-zero
         * offsets are not reliable. Use a sufficiently large `limit` in one
         * call.
         */
        nodesForPlan: (id: Long, status: Status, pagination?: PageRequest) => Promise<QueryNodesForPlanResponse>,
        node: (address: string) => Promise<Node | undefined>,
        params: () => Promise<Params | undefined>
    }
}

export function setupNodeExtension(base: QueryClient): NodeExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryServiceClientImpl(rpc);

    return {
        node: {
            nodes: async (status: Status, pagination?: PageRequest) =>
                queryService.QueryNodes(QueryNodesRequest.fromJSON({status, pagination})),
            nodesForPlan: async (id: Long, status: Status, pagination?: PageRequest) =>
                queryService.QueryNodesForPlan(QueryNodesForPlanRequest.fromJSON({id, status, pagination})),
            node: async (address: string) => {
                const { node } = await queryService.QueryNode(QueryNodeRequest.fromJSON({address}));
                return node;
            },
            params: async () => {
                const { params } = await queryService.QueryParams(QueryParamsRequest);
                return params
            }
        }
    }
}
