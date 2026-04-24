import {
    Node,
    NodeInfo,
    SentinelClient,
    SigningSentinelClient,
    V2Ray,
    V2RayHandshakeData,
    Wireguard,
    WireGuardHandshakeData,
    searchEvent,
    nodeInfo,
    privKeyFromMnemonic,
    NodeVPNType,
    TxNodeStartSession,
    nodeStartSession,
    handshake,
    NodeEventCreateSession,
    Price
} from "@sentinel-official/sentinel-js-sdk";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice, assertIsDeliverTxSuccess } from "@cosmjs/stargate"

import Long from "long";

import * as readline from 'readline/promises';
import * as process from 'process';
import path from "path";

const queryNode = async (sentnode: string) => {
    const rpc = "https://rpc.sentinel.co:443"
    const client = await SentinelClient.connect(rpc)
    const node = await client.sentinelQuery?.node.node(sentnode)
    return node
}

const main = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const mnemonic = await rl.question('Write your mnemonic here, please: ');
    const sentNodeAddr = await rl.question('Please provide a sentnode address: ')
    const gygabytes = await rl.question('How many gigabytes? ')
    rl.close();

    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
    const [account] = await wallet.getAccounts();
    console.log(`Wallet: ${account.address}`)

    const privkey = await privKeyFromMnemonic({ mnemonic: wallet.mnemonic })
    // console.log(privkey)

    const customDenom = "udvpn"
    const gasPrice = GasPrice.fromString(`0.2${customDenom}`);

    const rpc = "https://rpc.sentinel.co:443"
    const client = await SigningSentinelClient.connectWithSigner(rpc, wallet, {
        gasPrice: gasPrice
    })

    var p2pNode: { node: null | Node, status: null | NodeInfo } = { node: null, status: null };

    var p2pChainNode = await queryNode(sentNodeAddr)
    if (p2pChainNode) {
        console.log("p2p node from chain:", p2pChainNode)
        let p2pStatusNode = await nodeInfo(p2pChainNode.remoteAddrs[0])
        console.log("p2p node status (fetched):", p2pStatusNode)
        p2pNode = { node: p2pChainNode, status: p2pStatusNode }
    }

    if (!p2pNode.node || !p2pNode.status) {
        console.log("Unable to continue, node and status === null")
        process.exit(1)
    }

    console.log("\n\n")

    const udvpn = p2pNode.node.gigabytePrices.filter(x => x.denom === "udvpn")[0] as Price
    const sessionStartArgs: TxNodeStartSession = {
        from: account.address,
        nodeAddress: p2pNode.node.address,
        gigabytes: Long.fromString(gygabytes, true),
        maxPrice: udvpn
    }

    var subscribeTx = await client.signAndBroadcast(account.address, [nodeStartSession(sessionStartArgs)], "auto", "sentinel-js-sdk")
    assertIsDeliverTxSuccess(subscribeTx)
    var eventNodesCreateSession = searchEvent(NodeEventCreateSession.type, subscribeTx.events);
    if (eventNodesCreateSession) {
        var eventNodesCreateSessionParsed = NodeEventCreateSession.parse(eventNodesCreateSession)
        console.log("Event parsed", eventNodesCreateSessionParsed)

        const sessionId = eventNodesCreateSessionParsed.value.sessionId
        console.log("sessionId", sessionId)

        if (p2pNode.status.service_type === NodeVPNType.WIREGUARD) {
            const wg = new Wireguard()
            const result = await handshake(
                sessionId,
                { public_key: wg.publicKey },
                privkey,
                p2pNode.node.remoteAddrs[0],
            );
            console.log("wg result from handshake", result)
            const handshakeData: WireGuardHandshakeData = JSON.parse(
                Buffer.from(result.data, 'base64').toString('utf8')
            );
            await wg.parseConfig(handshakeData, result.addrs);
            await wg.printQRCode();
        } else if (p2pNode.status.service_type === NodeVPNType.V2RAY) {
            const v2ray = new V2Ray()
            const result = await handshake(
                sessionId,
                { uid: v2ray.getKey() },
                privkey,
                p2pNode.node.remoteAddrs[0],
            );
            console.log("v2ray result from handshake", result)
            const handshakeData: V2RayHandshakeData = JSON.parse(
                Buffer.from(result.data, 'base64').toString('utf8')
            );
            await v2ray.parseConfig(handshakeData, result.addrs)
            v2ray.printShareQRCodes()
        }


    } else console.log("eventCreateSession, not found")

}

main()