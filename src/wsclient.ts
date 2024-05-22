import { WebsocketClient } from "@cosmjs/tendermint-rpc";
import { Stream } from "xstream";

/**
 * https://github.com/cosmos/cosmjs/blob/main/packages/tendermint-rpc/src/rpcclients/rpcclient.ts
 * An event emitted from Tendermint after subscribing via RPC.
 *
 * These events are passed as the `result` of JSON-RPC responses, which is kind
 * of hacky because it breaks the idea that exactly one JSON-RPC response belongs
 * to each JSON-RPC request. But this is how subscriptions work in Tendermint.
 */
interface SubscriptionEvent {
    readonly query: string;
    readonly data: {
      readonly type: string;
      readonly value: any;
    };
}

export class SentinelWsClient extends WebsocketClient {
    public subscribe(query: string): Stream<SubscriptionEvent> {
        return this.listen({
            "jsonrpc": "2.0",
            "method": "subscribe",
            "id": 0,
            "params": { "query": query }
        })
    }
}