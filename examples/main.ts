
import { SentinelClient } from "../src/client";
import { SigningSentinelClient } from "../src/signingclient";
import { Status } from "../src/types";
import { PageRequest } from "../src/types";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice } from "@cosmjs/stargate"

import Long from "long";

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
    const mnemonic = "please never share your secret"

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
