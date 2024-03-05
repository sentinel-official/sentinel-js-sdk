import { SentinelClient, SigningSentinelClient } from "@sentinel-official/sentinel-js-sdk";
import { Status, PageRequest } from "@sentinel-official/sentinel-js-sdk";
import { TxNodeSubscribe, nodeSubscribe } from "@sentinel-official/sentinel-js-sdk";
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";

import { NodeEventCreateSubscription, isNodeEventCreateSubscription } from "@sentinel-official/sentinel-js-sdk";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice } from "@cosmjs/stargate"

import Long from "long";

import * as readline from 'readline/promises';

const queryNodes = async () => {
    const rpc = "https://rpc.sentinel.co:443"
    const client = await SentinelClient.connect(rpc)
    const nodes = await client.sentinelQuery?.node.nodes(
        Status.STATUS_ACTIVE,
        PageRequest.fromPartial({
            limit: 5,
            countTotal: true
        })
    )
    return nodes
}

const subscribeToNode = async (sentnode: string, gygabyte: number, denom: string) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const mnemonic = await rl.question('Write your mnemonic here, please: ');
    rl.close();

    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
    const [account] = await wallet.getAccounts();

    const customDenom = "udvpn"
    const gasPrice = GasPrice.fromString(`0.2${customDenom}`);

    const rpc = "https://rpc.sentinel.co:443"
    const client = await SigningSentinelClient.connectWithSigner(rpc, wallet, {
        gasPrice: gasPrice
    })

    console.log(account.address)
    const args: TxNodeSubscribe = {
        from: account.address,
        nodeAddress: sentnode,
        gigabytes: Long.fromNumber(gygabyte, true),
        denom,  // same name
    }
    const msg = nodeSubscribe(args)
    console.log(msg)

    const tx = await client.signAndBroadcast(account.address, [msg], "auto", "")
    console.log(tx)

    const eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, tx.events);
    if(eventCreateSubscription) {
        console.log("isSubscriptionEventAllocate", isNodeEventCreateSubscription(eventCreateSubscription))
        const eventParsed = NodeEventCreateSubscription.parse(eventCreateSubscription)
        console.log(eventParsed)
        console.log(`Your subscription id is: ${eventParsed.value.id}`)
    } else console.log("eventCreateSubscription, not founded")
}


const main = async () => {
    const nodes = await queryNodes()
    console.log(nodes)
    if (nodes?.nodes){
        const random = Math.floor(Math.random() * nodes?.nodes.length);
        const node = nodes?.nodes[random];
        subscribeToNode(node.address, 1, "udvpn")
    }
}

main()
