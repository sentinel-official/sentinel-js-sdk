import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningStargateClient, SigningStargateClientOptions, StargateClientOptions } from "@cosmjs/stargate"
import { buildSentinelQueryClient, SentinelQueryClient } from "./modules/queries"
import { SentinelRegistry } from "./modules";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";

function createDefaultRegistry(): Registry {
    return new Registry(SentinelRegistry);
  }

export class SigningSentinelClient extends SigningStargateClient {
    public readonly sentinelQueryClient: SentinelQueryClient | undefined

    public static override async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {}
    ): Promise<SigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new SigningSentinelClient(tmClient, signer, {
            registry: createDefaultRegistry(),
            ...options
        })
    }

    protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningStargateClientOptions) {
        super(tmClient, signer, options)
        if (tmClient) this.sentinelQueryClient = buildSentinelQueryClient(tmClient)
    }
}

