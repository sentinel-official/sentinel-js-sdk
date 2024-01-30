import { QueryClient } from '@cosmjs/stargate'
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupNodeExtension, NodeExtension } from './node/query'
import { setupPlanExtension, PlanExtension } from './plan/query'

export type SentinelQueryClient = QueryClient &
    NodeExtension &
    PlanExtension

export function buildSentinelQueryClient(tendermintClient: Tendermint34Client | undefined): SentinelQueryClient | undefined {
    return tendermintClient ? QueryClient.withExtensions(
        tendermintClient,
        setupNodeExtension,
        setupPlanExtension
    ) : undefined;
}