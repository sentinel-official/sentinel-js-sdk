import { SentinelClient, SigningSentinelClient } from "@sentinel-official/sentinel-js-sdk";
import { Status, PageRequest } from "@sentinel-official/sentinel-js-sdk";

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
    const tx = await client.sentinelTx.node.subscribe(
        account.address,
        sentnode,
        Long.fromNumber(gygabyte, true),
        Long.fromInt(0, true),
        denom
    )
    console.log(tx)
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
