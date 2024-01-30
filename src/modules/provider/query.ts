import {
    QueryProvidersRequest,
    QueryProviderRequest,
    QueryParamsRequest,
    QueryProvidersResponse,
    QueryProviderResponse,
    QueryParamsResponse,
    QueryServiceClientImpl
} from "../../protobuf/sentinel/provider/v2/querier";

import {
    createProtobufRpcClient,
    QueryClient,
} from "@cosmjs/stargate";

import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Status } from "../../protobuf/sentinel/types/v1/status";

import { Provider } from "../../protobuf/sentinel/provider/v1/provider";
import { Params } from "../../protobuf/sentinel/provider/v2/params";

export interface ProviderExtension {
    readonly provider: {
        providers: (status: Status, pagination?: PageRequest) => Promise<QueryProvidersResponse>
        provider: (address: string) => Promise<Provider | undefined>,
        params: () => Promise<Params | undefined>,
    }
}

export function setupProviderExtension(base: QueryClient): ProviderExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryServiceClientImpl(rpc);

    return {
        provider: {
            providers: async (status: Status, pagination?: PageRequest) =>
                queryService.QueryProviders(QueryProvidersRequest.fromJSON({status, pagination})),
            provider: async (address: string) => {
                const { provider } = await queryService.QueryProvider(QueryProviderRequest.fromJSON({address}))
                return provider
            },
            params: async () => {
                const { params } = await queryService.QueryParams(QueryParamsRequest)
                return params
            }
        }
    }
}