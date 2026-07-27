"use strict";

const Long = require("long");
const {
    NodeVPNType,
    PageRequest,
    SentinelClient,
    Status,
    nodeInfo,
} = require("../../dist");

const DEFAULT_RPC_URL = "https://rpc.sentinel.co:443";
const PROTOCOLS = Object.values(NodeVPNType);

function positiveInteger(name, fallback) {
    const value = Number.parseInt(process.env[name] || fallback, 10);
    if (!Number.isSafeInteger(value) || value < 1) {
        throw new Error(`${name} must be a positive safe integer`);
    }
    return value;
}

function comparePrices(left, right) {
    try {
        const leftBase = BigInt(left.baseValue);
        const leftQuote = BigInt(left.quoteValue);
        const rightBase = BigInt(right.baseValue);
        const rightQuote = BigInt(right.quoteValue);
        const products = [leftBase * rightQuote, rightBase * leftQuote];
        return products[0] < products[1] ? -1 : products[0] > products[1] ? 1 : 0;
    } catch {
        return 0;
    }
}

function cheapestUdvpnPrice(node) {
    return (node.gigabytePrices || [])
        .filter(price => price.denom === "udvpn")
        .sort(comparePrices)[0] || null;
}

async function inspectNode(node, infoTimeoutMs) {
    for (const remoteAddr of node.remoteAddrs || []) {
        try {
            const info = await nodeInfo(remoteAddr, infoTimeoutMs);
            if (!PROTOCOLS.includes(info.service_type)) continue;
            return {
                protocol: info.service_type,
                nodeAddress: node.address,
                remoteAddr,
                gigabytePrice: cheapestUdvpnPrice(node),
                moniker: info.moniker,
                countryCode: info.location?.country_code || null,
                version: info.version?.tag || null,
            };
        } catch {
            // Try the next endpoint advertised by this node.
        }
    }
    return null;
}

async function mapConcurrent(items, concurrency, mapper) {
    const output = new Array(items.length);
    let cursor = 0;

    async function worker() {
        while (cursor < items.length) {
            const index = cursor++;
            output[index] = await mapper(items[index]);
        }
    }

    await Promise.all(
        Array.from({ length: Math.min(concurrency, items.length) }, worker),
    );
    return output;
}

async function discoverNodes(options = {}) {
    const rpcUrl = options.rpcUrl || process.env.SENTINEL_RPC_URL || DEFAULT_RPC_URL;
    const nodeLimit = positiveInteger("SENTINEL_NODE_LIMIT", "2000");
    const concurrency = positiveInteger("SENTINEL_DISCOVERY_CONCURRENCY", "20");
    const infoTimeoutMs = positiveInteger("SENTINEL_INFO_TIMEOUT_MS", "5000");
    const protocol = options.protocol;

    if (protocol && !PROTOCOLS.includes(protocol)) {
        throw new Error(`Unsupported protocol: ${protocol}`);
    }

    const client = await SentinelClient.connect(rpcUrl);
    try {
        const response = await client.sentinelQuery.node.nodes(
            Status.STATUS_ACTIVE,
            PageRequest.fromPartial({
                limit: Long.fromNumber(nodeLimit, true),
                countTotal: true,
            }),
        );
        const inspected = await mapConcurrent(
            response.nodes,
            concurrency,
            node => inspectNode(node, infoTimeoutMs),
        );
        const candidates = inspected
            .filter(candidate => candidate && (!protocol || candidate.protocol === protocol))
            .sort((left, right) => {
                if (!left.gigabytePrice) return 1;
                if (!right.gigabytePrice) return -1;
                return comparePrices(left.gigabytePrice, right.gigabytePrice);
            });

        return {
            rpc: rpcUrl,
            activeNodesQueried: response.nodes.length,
            reachableCompatibleNodes: candidates.length,
            candidates,
        };
    } finally {
        client.disconnect();
    }
}

module.exports = { DEFAULT_RPC_URL, PROTOCOLS, discoverNodes };
