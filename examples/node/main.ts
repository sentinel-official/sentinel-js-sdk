import {
    AmneziaWG,
    Hysteria2,
    Node,
    NodeEventCreateSession,
    NodeInfo,
    NodeVPNType,
    OpenVPN,
    Price,
    SigningSentinelClient,
    TxNodeStartSession,
    V2Ray,
    Wireguard,
    Xray,
    handshake,
    nodeInfo,
    nodeStartSession,
    privKeyFromMnemonic,
    searchEvent,
} from "@sentinel-official/sentinel-js-sdk";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice, assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import Long from "long";
import { readFileSync } from "node:fs";
import * as process from "node:process";
import * as readline from "node:readline/promises";

type VPNClient = {
    parseConfig(data: any, addrs: string[]): void | Promise<void>;
    writeConfig(): string | null;
};

function createVPNClient(serviceType: NodeVPNType): VPNClient {
    switch (serviceType) {
        case NodeVPNType.WIREGUARD: return new Wireguard();
        case NodeVPNType.V2RAY: return new V2Ray();
        case NodeVPNType.OPENVPN: return new OpenVPN();
        case NodeVPNType.XRAY: return new Xray();
        case NodeVPNType.AMNEZIAWG: return new AmneziaWG();
        case NodeVPNType.HYSTERIA2: return new Hysteria2();
        default: throw new Error(`Unsupported service type: ${serviceType}`);
    }
}

function peerRequest(serviceType: NodeVPNType, client: VPNClient): unknown {
    if (serviceType === NodeVPNType.WIREGUARD) {
        return { pub_key: (client as Wireguard).publicKey };
    }
    if (serviceType === NodeVPNType.V2RAY) {
        return { uuid: (client as V2Ray).getKey() };
    }
    return (client as OpenVPN | Xray | AmneziaWG | Hysteria2).getPeerRequest();
}

async function main() {
    const mnemonicFile = process.env.SENTINEL_MNEMONIC_FILE;
    if (!mnemonicFile) {
        throw new Error("Set SENTINEL_MNEMONIC_FILE to a private 0600 file");
    }
    const mnemonic = readFileSync(mnemonicFile, "utf8").trim();

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const sentNodeAddr = await rl.question("Please provide a sentnode address: ");
    const gigabytes = await rl.question("How many gigabytes? ");
    rl.close();

    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
    const [account] = await wallet.getAccounts();
    const privateKey = await privKeyFromMnemonic({ mnemonic });
    const client = await SigningSentinelClient.connectWithSigner(
        "https://rpc.sentinel.co:443",
        wallet,
        { gasPrice: GasPrice.fromString("0.2udvpn") },
    );

    try {
        if (!client.sentinelQuery) throw new Error("Sentinel query extensions are unavailable");
        const chainNode = await client.sentinelQuery.node.node(sentNodeAddr);
        if (!chainNode) throw new Error(`Node not found: ${sentNodeAddr}`);
        const status = await nodeInfo(chainNode.remoteAddrs[0]);
        await prepareSession(client, account.address, chainNode, status, gigabytes, privateKey);
    } finally {
        privateKey.fill(0);
        client.disconnect();
    }
}

async function prepareSession(
    client: SigningSentinelClient,
    accountAddress: string,
    node: Node,
    status: NodeInfo,
    gigabytes: string,
    privateKey: Uint8Array,
) {
    const maxPrice = node.gigabytePrices.find((price: Price) => price.denom === "udvpn");
    if (!maxPrice) throw new Error("Node has no udvpn gigabyte price");

    const args: TxNodeStartSession = {
        from: accountAddress,
        nodeAddress: node.address,
        gigabytes: Long.fromString(gigabytes, true),
        maxPrice,
    };
    const tx = await client.signAndBroadcast(
        accountAddress,
        [nodeStartSession(args)],
        "auto",
        "sentinel-js-sdk",
    );
    assertIsDeliverTxSuccess(tx);

    const event = searchEvent(NodeEventCreateSession.type, tx.events);
    if (!event) throw new Error("EventCreateSession not found");
    const sessionId = NodeEventCreateSession.parse(event).value.sessionId;
    const vpn = createVPNClient(status.service_type);
    const result = await handshake(
        sessionId,
        peerRequest(status.service_type, vpn),
        privateKey,
        node.remoteAddrs[0],
    );
    const data = JSON.parse(Buffer.from(result.data, "base64").toString("utf8"));
    await vpn.parseConfig(data, result.addrs);

    const configPath = vpn.writeConfig();
    console.log(`Session ${sessionId.toString()} is ready (${status.service_type}).`);
    console.log(`Private client config: ${configPath}`);
}

main().catch(error => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
