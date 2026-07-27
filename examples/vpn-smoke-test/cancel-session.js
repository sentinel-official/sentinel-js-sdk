#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { assertIsDeliverTxSuccess, GasPrice } = require("@cosmjs/stargate");
const Long = require("long");
const { SigningSentinelClient } = require("../../dist");
const { DEFAULT_RPC_URL } = require("./discovery");

function loadMnemonic() {
    const configuredFile = process.env.SENTINEL_MNEMONIC_FILE;
    if (!configuredFile) throw new Error("SENTINEL_MNEMONIC_FILE is required");
    const file = path.resolve(configuredFile);
    const stats = fs.statSync(file);
    if (!stats.isFile() || (process.platform !== "win32" && (stats.mode & 0o077) !== 0)) {
        throw new Error("Mnemonic file must be a private 0600 regular file");
    }
    const secret = fs.readFileSync(file);
    try {
        return secret.toString("utf8").trim();
    } finally {
        secret.fill(0);
    }
}

async function main() {
    const id = Long.fromString(process.argv[2] || "", true);
    if (id.isZero() || id.isNegative()) {
        throw new Error("A positive session ID is required");
    }

    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(loadMnemonic(), { prefix: "sent" });
    const [account] = await wallet.getAccounts();
    const rpcUrl = process.env.SENTINEL_RPC_URL || DEFAULT_RPC_URL;
    const client = await SigningSentinelClient.connectWithSigner(rpcUrl, wallet, {
        gasPrice: GasPrice.fromString("0.2udvpn"),
    });
    try {
        const result = await client.sessionCancel({
            from: account.address,
            id,
            memo: "sentinel-js-sdk smoke cleanup retry",
        });
        assertIsDeliverTxSuccess(result);
        console.log(JSON.stringify({
            stage: "session-cancelled",
            sessionId: id.toString(),
            txHash: result.transactionHash,
        }));
    } finally {
        client.disconnect();
    }
}

main().catch(error => {
    console.error(JSON.stringify({ stage: "session-cancel-failed", error: error.message }));
    process.exitCode = 1;
});
