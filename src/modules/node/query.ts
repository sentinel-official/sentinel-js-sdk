import {
    QueryNodesRequest,
    QueryNodesForPlanRequest,
    QueryNodeRequest,
    QueryParamsRequest,
    QueryNodesResponse,
    QueryNodesForPlanResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/node/v2/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long  from "long";

import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Status } from "../../protobuf/sentinel/types/v1/status";

import { Params } from "../../protobuf/sentinel/node/v2/params";
import { Node } from "../../protobuf/sentinel/node/v2/node";

export interface NodeExtension {
    readonly node: {
        nodes: (status: Status, pagination?: PageRequest) => Promise<QueryNodesResponse>,
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