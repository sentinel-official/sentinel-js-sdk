import { GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";

import { registry as NodeRegistry } from "./node/registry";
import { registry as PlanRegistry } from "./plan/registry";
import { registry as ProviderRegistry } from "./plan/registry";

export const SentinelRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ...NodeRegistry,
    ...PlanRegistry,
    ...ProviderRegistry
]

export default SentinelRegistry