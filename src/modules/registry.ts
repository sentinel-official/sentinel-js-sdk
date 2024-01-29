import { GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";

import { registry as NodeRegistry } from "./node/registry";

export const SentinelRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ...NodeRegistry
]

export default SentinelRegistry