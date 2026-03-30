import { Component } from "react"

import { Price, SentinelClient, SigningSentinelClient } from "@sentinel-official/sentinel-js-sdk";
import { Status, PageRequest, Node } from "@sentinel-official/sentinel-js-sdk";
import { searchEvent } from "@sentinel-official/sentinel-js-sdk";
import { handshake, NodeVPNType, Wireguard, nodeInfo, WireGuardHandshakeData} from "@sentinel-official/sentinel-js-sdk";
import { NodeEventCreateSession, isNodeEventCreateSession } from "@sentinel-official/sentinel-js-sdk";

import { GasPrice, Coin } from "@cosmjs/stargate";

import { AccountData, Window as KeplrWindow } from "@keplr-wallet/types";

import styles from '../styles/Home.module.css'
import Long from "long";

declare global {
    interface Window extends KeplrWindow {}
}

interface NodeSubscriptionState {
    denom: string
    balance: string
    nodes: Node[]
}

export interface NodeSubscriptionProps {
    rpcUrl: string
}

export class NodeSubscription extends Component<NodeSubscriptionProps, NodeSubscriptionState> {
    // Set the initial state
    constructor(props: NodeSubscriptionProps) {
        super(props)
        this.state = {
            denom: "Loading...",
            balance: "Loading...",
            nodes: []
        }
        setTimeout(this.queryNodes, 500)
    }

    queryNodes = async() => {
        const client = await SentinelClient.connect(this.props.rpcUrl)
        const response = await client.sentinelQuery?.node.nodes(Status.STATUS_ACTIVE, PageRequest.fromPartial({
            limit: 50,
            countTotal: true
        }))
        if(response !== undefined){
            console.log(response.nodes)
            this.setState({nodes: response.nodes})
        }
    }

    onSubscribeClicked = async(node: any) => {
        const dvpnNode = Node.fromPartial(node)

        /* const p2pStatusNode = await nodeInfo(dvpnNode.remoteAddrs[0])
        if(p2pStatusNode.service_type !== NodeVPNType.WIREGUARD){
            alert("Please choose a wireguard node!")
            return;
        } */

        const { keplr } = window
        if (!keplr) {
            alert("You need to install or unlock Keplr")
            return
        }
        const { rpcUrl } = this.props

        // Create the signing client
        const offlineSigner = window.getOfflineSigner!("sentinelhub-2")
        const signingClient = await SigningSentinelClient.connectWithSigner(
            rpcUrl,
            offlineSigner,
            {gasPrice: GasPrice.fromString("0.5udvpn")}
        )
        // Get the address and balance of your user
        const account: AccountData = (await offlineSigner.getAccounts())[0]

        const udvpn = dvpnNode.gigabytePrices.filter(x => x.denom === "udvpn")[0] as Price
        const subscribeResult = await signingClient.nodeStartSession({
            from: account.address,
            nodeAddress: dvpnNode.address,
            gigabytes: new Long(1),
            maxPrice: udvpn
        })
        // Print the result to the console
        console.log(subscribeResult)

        const eventCreateSubscription = searchEvent(NodeEventCreateSession.type, subscribeResult.events);
        if(eventCreateSubscription) {
            console.log("isSubscriptionEventAllocate", isNodeEventCreateSession(eventCreateSubscription))
            const eventParsed = NodeEventCreateSession.parse(eventCreateSubscription)
            console.log(eventParsed)
            const sessionId = eventParsed.value.sessionId
            alert(`Your subscription id is: ${sessionId}`)

            /* const wg = new Wireguard()
            const result = await handshake(
                sessionId,
                { public_key: wg.publicKey },
                privkey,
                dvpnNode.remoteAddrs[0],
            );
            console.log("wg result from handshake", result)
            const handshakeData: WireGuardHandshakeData = JSON.parse(
                Buffer.from(result.data, 'base64').toString('utf8')
            );
            await wg.parseConfig(handshakeData, result.addrs); */

        } else alert("eventCreateSubscription, not found")
    }

    render() {
        return <div>
            {this.state.nodes.map((node, index) => (
                <div key={index} className={styles.card}>
                    <p>Address: {Node.fromPartial(node).address}</p>
                    <p>Remote URL: {Node.fromPartial(node).remoteAddrs}</p>
                    <p>Gigabyte price: {Node.fromPartial(node).gigabytePrices.filter((x: Price) => x.denom === "udvpn").map((x: Price) => `base: ${x.baseValue}, quote: ${x.quoteValue}, denom: ${x.denom}`)}</p>

                    <button onClick={() => this.onSubscribeClicked(node)}>Subscribe 1gb</button>
                </div>
            ))}
        </div>
    }
}
