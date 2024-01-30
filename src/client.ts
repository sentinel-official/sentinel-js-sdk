import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { StargateClient, StargateClientOptions } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"

export class SentinelClient extends StargateClient {
    public readonly sentinelQuery: SentinelQueryClient | undefined

    public static override async connect(
        endpoint: string,
        options?: StargateClientOptions,
    ): Promise<SentinelClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new SentinelClient(tmClient, options)
    }

    protected constructor(tmClient: Tendermint34Client | undefined, options: StargateClientOptions = {}) {
        super(tmClient, options)
        if (tmClient) this.sentinelQuery = buildSentinelQueryClient(tmClient)
    }
}

