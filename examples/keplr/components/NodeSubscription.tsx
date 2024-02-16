import { ChangeEvent, Component, MouseEvent } from "react"

// "../../../dist/client" will be fixed after pushing on npm-registry
import { SentinelClient } from "../../../dist/client"
import { SigningSentinelClient } from "../../../dist/signingclient"
import { PageRequest, Status } from "../../../dist/types";
import { Node } from "../../../dist/protobuf/sentinel/node/v2/node";

import { Coin } from "@cosmjs/stargate"
import { AccountData, Window as KeplrWindow } from "@keplr-wallet/types";

import styles from '../styles/Home.module.css'

declare global {
    interface Window extends KeplrWindow {}
}

interface NodeSubscriptionState {
    denom: string
    balance: string
    nodes: any[]
}

export interface NodeSubscriptionProps {
    rpcUrl: string
}

export class NodeSubscription extends Component<NodeSubscriptionProps, NodeSubscriptionState> {
    // Set the initial state
    constructor(props:NodeSubscriptionProps) {
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
        const response = await client.sentinelQuery?.node.nodes(1, PageRequest.fromPartial({
            limit: 500,
            countTotal: true
        }))
        console.log(response.nodes)
        this.setState({nodes: response.nodes})
    }

    onSubscribeClicked = async(node: any) => {
        const dvpnNode = Node.fromPartial(node)
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
            {gasPrice: "0.5udvpn"}
        )
        // Get the address and balance of your user
        const account: AccountData = (await offlineSigner.getAccounts())[0]
        const subscribeResult = await signingClient.nodeSubscribe(
            account.address,
            dvpnNode.address,
            1,
            0,
            "udvpn"
        )
        // Print the result to the console
        console.log(subscribeResult)
    }

    render() {
        return <div>
            {this.state.nodes.map((node, index) => (
                <div key={index} className={styles.card}>
                    <p>Address: {Node.fromPartial(node).address}</p>
                    <p>Remote URL: {Node.fromPartial(node).remoteUrl}</p>
                    <p>Gigabyte price: {Node.fromPartial(node).gigabytePrices.filter((x: Coin) => x.denom === "udvpn").map((x: Coin) => `${x.amount} ${x.denom}`)}</p>

                    <button onClick={() => this.onSubscribeClicked(node)}>Subscribe 1gb</button>
                </div>
            ))}
        </div>
    }
}
