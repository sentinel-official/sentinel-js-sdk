# sentinel-js-sdk

The Sentinel JS SDK relays on [CosmJS](https://github.com/cosmos/cosmjs) and it was developed following the official [tutorial](https://tutorials.cosmos.network/tutorials/7-cosmjs/), it take also inspiration from other open source Cosmos SDK.

The SDK exstends the followings:
- [@cosmjs/stargate/StargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html) as `SentinelClient`
- [@cosmjs/stargate/SigningStargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html) `SigningSentinelClient`
- [@cosmjs/stargate/QueryClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/QueryClient.html) as `client.sentinelQuery`

## clients
```javascript
import { SentinelClient } from "@sentinel-official/sentinel-js-sdk";

const rpc = "https://rpc.sentinel.co:443"
const client = await SentinelClient.connect(rpc)
```

If you need to sign and broadcast a tx you need to instantiate a `SigningClient`.
```javascript
import { SigningSentinelClient } from "@sentinel-official/sentinel-js-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice } from "@cosmjs/stargate"

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
const [account] = await wallet.getAccounts();

const rpc = "https://rpc.sentinel.co:443"

// With a default GasPrice:
const customDenom = "udvpn"
const gasPrice = GasPrice.fromString(`0.2${customDenom}`);
const client = await SigningSentinelClient.connectWithSigner(rpc, wallet, {
    gasPrice: gasPrice
})

// Without a default GasPrice:
const client = await SigningSentinelClient.connectWithSigner(rpc, wallet)
```

You can also set other default parameters: https://cosmos.github.io/cosmjs/latest/stargate/interfaces/SigningStargateClientOptions.html.

## query
```javascript
import { Status, PageRequest } from "@sentinel-official/sentinel-js-sdk";
const nodes = await client.sentinelQuery?.node.nodes(
    Status.STATUS_ACTIVE,
    PageRequest.fromPartial({
        limit: 5,
        countTotal: true
    })
)
```

For pagination please follow:
- https://docs.cosmos.network/v0.45/core/proto-docs.html#cosmos-base-query-v1beta1-pagination-proto
- https://github.com/cosmos/cosmos-sdk/blob/main/types/query/pagination.pb.go#L32-L53
- https://github.com/confio/cosmjs-types/blob/main/src/cosmos/base/query/v1beta1/pagination.ts

## transaction
After you have initialize a `SigningClient` you can prepare and broadcast a tx in multiple ways.
1. Create a MsgEcodeObject and call `signAndBroadcast` from your client.
```javascript
import { TxNodeSubscribe, nodeSubscribe } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const args: TxNodeSubscribe = {
    from: account.address,
    nodeAddress: sentnode,
    gigabytes: Long.fromNumber(gygabyte, true),
    denom: "udvpn"
}
const msg = nodeSubscribe(args)
const tx = client.signAndBroadcast(account.address, [msg], "auto", "memo")
```
2. Call directly `nodeSubscribe` from your client or from submodule (this will automatically signAndBroadcast the tx)
```javascript
import { TxNodeSubscribe } from "@sentinel-official/sentinel-js-sdk";
import Long from "long";

const args: TxNodeSubscribe = {
    from: account.address,
    nodeAddress: sentnode,
    gigabytes: Long.fromNumber(gygabyte, true),
    denom: "udvpn",
    fee: "auto",
    memo: "hello from js-sdk"
}
// call directly
const tx1 = client.nodeSubscribe(args)
// use submodule
const tx2 = client.node.subscribe(args)
```

It is up to you if you want to `await` the tx or use a callback
```javascript
const tx1 = await client.nodeSubscribe(args)
client.nodeSubscribe(args).then(tx => { do stuff... })
```

## events parsing
`client.signAndBroadcast` or implicit call trought, for example, `client.nodeSubscribe` or `client.node.subscribe` return a [DeliverTxResponse](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/DeliverTxResponse.html). You can search for a determinate event using the method `searchEvent`. For example if you are looking for `sentinel.node.v2.EventCreateSubscription`, you can do the following:
```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSubscription = searchEvent(sentinel.node.v2.EventCreateSubscription, tx.events);
```
or better
```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSubscription } from "@sentinel-official/sentinel-js-sdk";
const eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, tx.events);
```

The single event can also be parsed via the appropriate interface, following the example:
```javascript
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSubscription, isNodeEventCreateSubscription } from "@sentinel-official/sentinel-js-sdk";

const eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, tx.events);
if(eventCreateSubscription && isNodeEventCreateSubscription(eventCreateSubscription)) {
    const eventParsed = NodeEventCreateSubscription.parse(eventCreateSubscription)
    console.log(`Your subscription id is: ${eventParsed.value.id}`)
} else console.log("eventCreateSubscription, not founded")
```

## protobuf
All the .proto files are compiled using [protoc](https://grpc.io/docs/protoc-installation/) and [ts-proto](https://github.com/stephenh/ts-proto) as plugin. The compiled .ts proto files are under src/protobuf. If you want to compile again you can use [scripts/generate-proto.sh](scripts/generate-proto.sh). The script requires `git` and `protoc`, it will automatically download all the .proto definitions from [sentinel-hub](https://github.com/sentinel-official/hub/tree/development/proto/sentinel) and relative third parties.

## examples
The official [cosmjs examples](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9) can be used as well.
Just remember to replace `StargateClient` with `SentinelClient` and `SigningStargateClient` with `SigningSentinelClient`.

The repository provide currently a `nodejs script` example and a `keplr` one (based on: https://tutorials.cosmos.network/tutorials/7-cosmjs/4-with-keplr.html).

If you want to use a local version of sdk (for testing purpose) you have to compile the src folder into dist and then link the package with npm.
```bash
npm run build
npm link
cd examples/<choose-an-example>
npm link @sentinel-official/sentinel-js-sdk
```

### run keplr example
```bash
cd examples/keplr
npm i
npm i @sentinel-official/sentinel-js-sdk
npm run dev
```
Navigate to: http://127.0.0.1:3000/.
### run nodejs example
```bash
cd examples/node
npm i
npm i @sentinel-official/sentinel-js-sdk
npm i ts-node
ts-node main.ts
```

