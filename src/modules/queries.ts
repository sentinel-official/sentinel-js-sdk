import { QueryClient } from '@cosmjs/stargate'
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupNodeExtension, NodeExtension } from './node/query'
import { setupPlanExtension, PlanExtension } from './plan/query'
import { setupProviderExtension, ProviderExtension } from './provider/query'
import { setupSessionExtension, SessionExtension } from './session/query'
import { setupSubscriptionExtension, SubscriptionExtension } from './subscription/query'

export type SentinelQueryClient = QueryClient &
    NodeExtension &
    PlanExtension &
    ProviderExtension &
    SessionExtension &
    SubscriptionExtension

export function buildSentinelQueryClient(tendermintClient: Tendermint34Client | undefined): SentinelQueryClient | undefined {
    return tendermintClient ? QueryClient.withExtensions(
        tendermintClient,
        setupNodeExtension,
        setupPlanExtension,
        setupProviderExtension,
        setupSessionExtension,
        setupSubscriptionExtension
    ) : undefined;
}