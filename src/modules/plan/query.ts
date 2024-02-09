import {
    QueryPlansRequest,
    QueryPlansForProviderRequest,
    QueryPlanRequest,
    QueryPlansResponse,
    QueryPlansForProviderResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/plan/v2/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import Long  from "long";

import { PageRequest } from "../../protobuf/cosmos/base/query/v1beta1/pagination";
import { Status } from "../../protobuf/sentinel/types/v1/status";

import { Plan } from "../../protobuf/sentinel/plan/v2/plan";

export interface PlanExtension {
    readonly plan: {
        plans: (status: Status, pagination?: PageRequest) => Promise<QueryPlansResponse>,
        plansForProvide: (address: string, pagination?: PageRequest) => Promise<QueryPlansForProviderResponse>,
        plan: (id: Long) => Promise<Plan | undefined>
    }
}

export function setupPlanExtension(base: QueryClient): PlanExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryServiceClientImpl(rpc);

    return {
        plan: {
            plans: async (status: Status, pagination?: PageRequest) =>
                queryService.QueryPlans(QueryPlansRequest.fromJSON({status, pagination})),
            plansForProvide: async (address: string, pagination?: PageRequest) =>
                queryService.QueryPlansForProvider(QueryPlansForProviderRequest.fromJSON({address, pagination})),
            plan: async (id: Long) => {
                const { plan } = await queryService.QueryPlan(QueryPlanRequest.fromJSON({id}));
                return plan
            }
        }
    }
}