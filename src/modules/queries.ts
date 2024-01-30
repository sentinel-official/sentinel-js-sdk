import { QueryClient } from '@cosmjs/stargate'
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupNodeExtension, NodeExtension } from './node/query'
import { setupPlanExtension, PlanExtension } from './plan/query'
import { setupProviderExtension, ProviderExtension } from './provider/query'

export type SentinelQueryClient = QueryClient &
    NodeExtension &
    PlanExtension &
    ProviderExtension

export function buildSentinelQueryClient(tendermintClient: Tendermint34Client | undefined): SentinelQueryClient | undefined {
    return tendermintClient ? QueryClient.withExtensions(
        tendermintClient,
        setupNodeExtension,
        setupPlanExtension,
        setupProviderExtension
    ) : undefined;
}