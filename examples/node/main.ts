// Re-implementation of: https://github.com/sentinel-official/cli-client/blob/master/cmd/connect.go

import {
    Node,
    NodeStatus,
    SentinelClient,
    SessionEventStart,
    SigningSentinelClient,
    V2Ray,
    Wireguard,
    postSession,
    signSessionId,
    Status,
    PageRequest,
    TxNodeSubscribe,
    nodeSubscribe,
    TxSessionStart,
    sessionStart,
    searchEvent,
    nodeStatus,
    NodeEventCreateSubscription,
    privKeyFromMnemonic,
    NodeVPNType
} from "@sentinel-official/sentinel-js-sdk";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { GasPrice, assertIsDeliverTxSuccess } from "@cosmjs/stargate"

import Long from "long";

import * as readline from 'readline/promises';
import * as process from 'process';
import path from "path";

const queryNodes = async (limit: number) => {
    const rpc = "https://rpc.sentinel.co:443"
    const client = await SentinelClient.connect(rpc)
    const nodes = await client.sentinelQuery?.node.nodes(
        Status.STATUS_ACTIVE,
        PageRequest.fromPartial({ limit: limit, countTotal: true })
    )
    return nodes
}

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
    rl.close();

    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
    const [account] = await wallet.getAccounts();
    console.log(`Wallet: ${account.address}`)

    // Export private key in order to signSessionId
    const privkey = await privKeyFromMnemonic({mnemonic: wallet.mnemonic})
    // console.log(privkey)

    const customDenom = "udvpn"
    const gasPrice = GasPrice.fromString(`0.2${customDenom}`);

    const rpc = "https://rpc.sentinel.co:443"
    const client = await SigningSentinelClient.connectWithSigner(rpc, wallet, {
        gasPrice: gasPrice
    })

    var selectedNodes: {"node": Node, "status": NodeStatus}[] = []
    var v2Node: {"node": Node, "status": NodeStatus} | null = null;
    var wgNode: {"node": Node, "status": NodeStatus} | null = null;

    const nodes = await queryNodes(500);
    if (nodes?.nodes){
        // Search for a v2ray node and a wireguard node please.
        for(var i=0; i<nodes.nodes.length; i++){
            try {
                var status = await nodeStatus(nodes.nodes[i].remoteUrl)
                console.log(status)
                if (status.type == NodeVPNType.WIREGUARD) wgNode = { node: nodes.nodes[i], status }
                else if(status.type == NodeVPNType.V2RAY) v2Node = { node: nodes.nodes[i], status }
                if (v2Node !== null && wgNode !== null) break // both nodes was found
            } catch (error) {
                console.error(error)
            }
        }
    }

    /* var v2ChaiNode = await queryNode("sentnode1234")
    if(v2ChaiNode) {
        var v2StatusNode = await nodeStatus(v2ChaiNode.remoteUrl)
        v2Node = { node: v2ChaiNode, status: v2StatusNode }
    }

    var wgChaiNode = await queryNode("sentnode1234")
    if(wgChaiNode) {
        var wgStatusNode = await nodeStatus(wgChaiNode.remoteUrl)
        wgNode = { node: wgChaiNode, status: wgStatusNode }
    } */

    console.log("\n\n")

    if (v2Node === null && wgNode === null) {
        console.log('Could not find either V2Ray or Wireguard node.')
        return
    }

    if(v2Node !== null) selectedNodes.push(v2Node);
    if(wgNode !== null) selectedNodes.push(wgNode);

    for(const node of selectedNodes){
        var subscribeArgs: TxNodeSubscribe = {
            from: account.address,
            nodeAddress: node.node.address,
            gigabytes: Long.fromNumber(1, true),
            denom: "udvpn",  // same name
        }
        var subscribeTx = await client.signAndBroadcast(account.address, [nodeSubscribe(subscribeArgs)], "auto", "sentinel-js-sdk")
        assertIsDeliverTxSuccess(subscribeTx)
        var eventCreateSubscription = searchEvent(NodeEventCreateSubscription.type, subscribeTx.events);
        if(eventCreateSubscription) {

            // console.log("isSubscriptionEventAllocate", isNodeEventCreateSubscription(eventCreateSubscription))
            var subscriptionEventParsed = NodeEventCreateSubscription.parse(eventCreateSubscription)
            console.log("Event parsed", subscriptionEventParsed)
            var subscriptionId = subscriptionEventParsed.value.id
            console.log(`Your subscription id is: ${subscriptionId}`)

            var sessionStartArgs:  TxSessionStart = {
                from: account.address,
                id: subscriptionId,
                address: node.node.address
            }
            var sessionStartTx = await client.signAndBroadcast(account.address, [sessionStart(sessionStartArgs)], "auto", "sentinel-js-sdk")
            assertIsDeliverTxSuccess(sessionStartTx)

            var eventSessionStart = searchEvent(SessionEventStart.type, sessionStartTx.events);
            if(eventSessionStart){
                var sessionStartEventParsed = SessionEventStart.parse(eventSessionStart)
                console.log("Event parsed", sessionStartEventParsed)
                var sessionId = sessionStartEventParsed.value.id
                console.log(`Your session id is: ${sessionId}`)

                await new Promise(f => setTimeout(f, 10000));
                // wait for rpc sync... else 'session 123456789 does not exist'

                // make sure the session exist on chain, let's query the chain
                var session = await client.sentinelQuery?.session.session(sessionId)
                console.log("Session on chain: ", session)

                var signature = signSessionId(privkey, sessionId)

                if(node.status.type == NodeVPNType.WIREGUARD){
                    console.log("Wireguard")
                    var wg = new Wireguard()
                    var wgPostResponse = await postSession(wg.publicKey, signature, account.address, sessionId, node.node.remoteUrl)
                    console.log(wgPostResponse)
                    if (wgPostResponse.success === true){
                        await wg.parseConfig(wgPostResponse.result as string)

                        const wgConfFile = path.join(process.cwd(), "wgsent0.conf")
                        wg.writeConfig(wgConfFile)
                        console.log(`Wireguard configuration file stored at: ${wgConfFile}`)

                        wg.connect(wgConfFile)

                        const rl1 = readline.createInterface({ input: process.stdin, output: process.stdout });
                        console.log("Wireguard connection was started, please test you connection.")
                        await rl1.question('Once you have finished press enter, the session will be ended');
                        rl1.close();

                        wg.show().then(
                            (data: any) => { console.log("async result"); console.log(data) },
                            (err: any) => { console.error("async error:\n" + err); }
                        );

                        wg.disconnect(wgConfFile)
                    }
                }
                else if(node.status.type == NodeVPNType.V2RAY){
                    console.log("V2Ray")
                    var v2ray = new V2Ray()
                    var v2PostResponse = await postSession(v2ray.getKey(), signature, account.address, sessionId, node.node.remoteUrl)
                    console.log(v2PostResponse)
                    if (v2PostResponse.success === true){
                        await v2ray.parseConfig(v2PostResponse.result as string)

                        // Test v2ray with temp config.
                        // v2ray.writeConfig()
                        const v2Pid = v2ray.connect()

                        const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout });
                        console.log(`V2Ray client was started. Pid: ${v2Pid}.`)
                        console.log("You can test the following protocols: ")
                        v2ray.config.inbounds.forEach((inbound: any) => {
                            console.log(`- ${inbound.protocol} on ${inbound.listen}:${inbound.port}`)
                        })

                        await rl2.question('Once you have finished press enter, the session will be ended');
                        rl2.close();

                        v2ray.disconnect()
                    }
                }

            } else console.log("eventSessionStart, not found")
        } else console.log("eventCreateSubscription, not found")

    }
}

main()