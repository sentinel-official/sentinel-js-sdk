#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFile, execFileSync } = require("node:child_process");
const { promisify } = require("node:util");
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { assertIsDeliverTxSuccess, GasPrice } = require("@cosmjs/stargate");
const Long = require("long");
const {
    AmneziaWG,
    handshake,
    Hysteria2,
    NodeEventCreateSession,
    NodeVPNType,
    nodeInfo,
    OpenVPN,
    privKeyFromMnemonic,
    searchEvent,
    SigningSentinelClient,
    V2Ray,
    Wireguard,
    Xray,
} = require("../../dist");
const { DEFAULT_RPC_URL, PROTOCOLS, discoverNodes } = require("./discovery");

const execFileAsync = promisify(execFile);
const RPC_URL = process.env.SENTINEL_RPC_URL || DEFAULT_RPC_URL;
const IP_CHECK_URL =
    process.env.SENTINEL_IP_CHECK_URL || "https://1.1.1.1/cdn-cgi/trace";
const CONNECT_TIMEOUT_MS = Number.parseInt(
    process.env.SENTINEL_CONNECT_TIMEOUT_MS || "20000",
    10,
);
const LOCAL_BIN = path.join(__dirname, "bin");

if (fs.existsSync(LOCAL_BIN)) {
    process.env.PATH = `${LOCAL_BIN}${path.delimiter}${process.env.PATH || ""}`;
}

const BINARIES = {
    [NodeVPNType.WIREGUARD]: "wg-quick",
    [NodeVPNType.V2RAY]: "v2ray",
    [NodeVPNType.OPENVPN]: "openvpn",
    [NodeVPNType.XRAY]: "xray",
    [NodeVPNType.AMNEZIAWG]: "awg-quick",
    [NodeVPNType.HYSTERIA2]: "hysteria2",
};

const FULL_TUNNEL_PROTOCOLS = new Set([
    NodeVPNType.WIREGUARD,
    NodeVPNType.OPENVPN,
    NodeVPNType.AMNEZIAWG,
    NodeVPNType.HYSTERIA2,
]);

function log(stage, details = {}) {
    console.log(JSON.stringify({ stage, ...details }));
}

function loadMnemonic() {
    const configuredFile = process.env.SENTINEL_MNEMONIC_FILE;
    if (!configuredFile) throw new Error("SENTINEL_MNEMONIC_FILE is required");
    const file = path.resolve(configuredFile);
    const stats = fs.statSync(file);
    if (!stats.isFile()) throw new Error("Mnemonic path must be a regular file");
    if (process.platform !== "win32" && (stats.mode & 0o077) !== 0) {
        throw new Error("Mnemonic file permissions must be 0600");
    }

    const secret = fs.readFileSync(file);
    try {
        const mnemonic = secret.toString("utf8").trim();
        if (mnemonic.split(/\s+/).length < 12) {
            throw new Error("Mnemonic file does not contain a valid-looking mnemonic");
        }
        return mnemonic;
    } finally {
        secret.fill(0);
    }
}

function ensureExecutable(binary) {
    try {
        execFileSync("which", [binary], { stdio: "ignore" });
    } catch {
        throw new Error(`Required executable not found in PATH: ${binary}`);
    }
}

function ensurePrerequisites(protocol, mode) {
    if (!Number.isSafeInteger(CONNECT_TIMEOUT_MS) || CONNECT_TIMEOUT_MS < 1) {
        throw new Error("SENTINEL_CONNECT_TIMEOUT_MS must be a positive safe integer");
    }
    if (mode !== "connect") return;
    ensureExecutable("curl");
    ensureExecutable(BINARIES[protocol]);
    if (FULL_TUNNEL_PROTOCOLS.has(protocol) && process.getuid?.() !== 0) {
        throw new Error(`${protocol} connect smoke test must run as root`);
    }
}

function selectUdvpnPrice(node) {
    const price = node.gigabytePrices?.find(candidate => candidate.denom === "udvpn");
    if (!price) throw new Error("Selected node has no udvpn gigabyte price");
    return price;
}

function createService(protocol) {
    switch (protocol) {
        case NodeVPNType.WIREGUARD: return new Wireguard();
        case NodeVPNType.V2RAY: return new V2Ray();
        case NodeVPNType.OPENVPN: return new OpenVPN();
        case NodeVPNType.XRAY: return new Xray();
        case NodeVPNType.AMNEZIAWG: return new AmneziaWG();
        case NodeVPNType.HYSTERIA2: return new Hysteria2();
        default: throw new Error(`Unsupported protocol: ${protocol}`);
    }
}

function decodeHandshakeData(value) {
    if (typeof value === "object" && value !== null) return value;
    if (typeof value !== "string" || value.length === 0) {
        throw new Error("Node returned empty handshake data");
    }
    return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
}

async function prepareService(protocol, service, result) {
    const data = decodeHandshakeData(result.data);
    if (protocol === NodeVPNType.WIREGUARD) {
        // Preserve the host resolver: wg-quick can otherwise fail when
        // /etc/resolv.conf is not managed by resolvconf.
        await service.parseConfig(data, result.addrs, []);
    } else if (protocol === NodeVPNType.AMNEZIAWG) {
        // Preserve the host resolver for the AmneziaWG full-tunnel client too.
        await service.parseConfig(data, result.addrs, { dns: [] });
    } else {
        await service.parseConfig(data, result.addrs);
    }
    const configPath = service.writeConfig();
    const mode = fs.statSync(configPath).mode & 0o777;
    if (process.platform !== "win32" && mode !== 0o600) {
        throw new Error(`Generated config has unsafe permissions: ${mode.toString(8)}`);
    }
    return configPath;
}

async function publicIp(socksPort) {
    const args = ["--fail", "--silent", "--show-error", "--max-time", "15"];
    if (socksPort) args.push("--socks5-hostname", `127.0.0.1:${socksPort}`);
    args.push(IP_CHECK_URL);
    const { stdout } = await execFileAsync("curl", args, {
        encoding: "utf8",
        timeout: CONNECT_TIMEOUT_MS,
    });
    const traceIp = stdout
        .split(/\r?\n/)
        .find(line => line.startsWith("ip="))
        ?.slice(3)
        .trim();
    const value = traceIp || stdout.trim();
    if (!value) throw new Error("Public IP check returned an empty response");
    return value;
}

async function cancelSessionWithRetry(client, accountAddress, sessionId, protocol) {
    let lastError;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await client.sessionCancel({
                from: accountAddress,
                id: sessionId,
                memo: "sentinel-js-sdk smoke cleanup",
            });
            assertIsDeliverTxSuccess(result);
            log("session-cancelled", {
                protocol,
                sessionId: sessionId.toString(),
                txHash: result.transactionHash,
                attempt,
            });
            return;
        } catch (error) {
            lastError = error;
            if (attempt < 3) {
                await new Promise(resolve => setTimeout(resolve, attempt * 2000));
            }
        }
    }
    throw lastError;
}

async function waitForProxy(service) {
    const deadline = Date.now() + CONNECT_TIMEOUT_MS;
    let lastError;
    while (Date.now() < deadline) {
        if (service.child?.exitCode !== null && service.child?.exitCode !== undefined) {
            throw new Error(`VPN process exited early with code ${service.child.exitCode}`);
        }
        try {
            return await publicIp(service.socksPort);
        } catch (error) {
            lastError = error;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    throw lastError || new Error("Proxy did not become ready");
}

async function waitForFullTunnel(service, baselineIp) {
    const deadline = Date.now() + CONNECT_TIMEOUT_MS;
    let lastError;
    while (Date.now() < deadline) {
        if (service.child?.exitCode !== null && service.child?.exitCode !== undefined) {
            throw new Error(`VPN process exited early with code ${service.child.exitCode}`);
        }
        try {
            const ip = await publicIp();
            if (ip !== baselineIp) return ip;
            lastError = new Error(`Tunnel IP has not changed from baseline (${baselineIp})`);
        } catch (error) {
            lastError = error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw lastError || new Error("Full tunnel did not become ready");
}

async function waitForWireGuardHandshake(configPath) {
    const interfaceName = path.basename(configPath, path.extname(configPath));
    const deadline = Date.now() + CONNECT_TIMEOUT_MS;
    while (Date.now() < deadline) {
        try {
            const { stdout } = await execFileAsync(
                "wg",
                ["show", interfaceName, "latest-handshakes"],
                { encoding: "utf8", timeout: 5000 },
            );
            const ready = stdout
                .trim()
                .split(/\r?\n/)
                .some(line => Number(line.trim().split(/\s+/).at(-1)) > 0);
            if (ready) {
                log("wireguard-handshake-ok", { interfaceName });
                return;
            }
        } catch {
            // The interface may still be coming up.
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error(`WireGuard interface ${interfaceName} completed no handshake`);
}

function captureProcessOutput(service) {
    const output = { value: "" };
    const append = chunk => {
        output.value = `${output.value}${String(chunk)}`.slice(-8192);
    };
    service.child?.stdout?.on("data", append);
    service.child?.stderr?.on("data", append);
    return output;
}

function sanitizedProcessTail(output) {
    return output.value
        .replaceAll(/\x1b\[[0-9;]*m/g, "")
        .replaceAll(/[\r\n]+/g, " | ")
        .trim()
        .slice(-2000);
}

async function waitForOpenVPNReady(service, output) {
    const deadline = Date.now() + CONNECT_TIMEOUT_MS;
    while (Date.now() < deadline) {
        if (/Initialization Sequence Completed/i.test(output.value)) {
            log("openvpn-initialization-ok");
            return;
        }
        if (service.child?.exitCode !== null && service.child?.exitCode !== undefined) {
            throw new Error(
                `OpenVPN exited with code ${service.child.exitCode}: ${sanitizedProcessTail(output)}`,
            );
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    throw new Error(
        `OpenVPN initialization timed out: ${sanitizedProcessTail(output) || "no process output"}`,
    );
}

async function connectAndCheck(protocol, service, configPath, baselineIp) {
    let tunnelIp;
    if (protocol === NodeVPNType.WIREGUARD) {
        await service.connect(configPath);
        service.smokeConnected = true;
        await waitForWireGuardHandshake(configPath);
        tunnelIp = await waitForFullTunnel(service, baselineIp);
    } else if (protocol === NodeVPNType.AMNEZIAWG) {
        await service.connect(configPath);
        service.smokeConnected = true;
        tunnelIp = await waitForFullTunnel(service, baselineIp);
    } else if (protocol === NodeVPNType.V2RAY || protocol === NodeVPNType.XRAY) {
        service.connect(configPath);
        service.smokeConnected = true;
        tunnelIp = await waitForProxy(service);
    } else if (protocol === NodeVPNType.OPENVPN) {
        service.connect(configPath);
        service.smokeConnected = true;
        const output = captureProcessOutput(service);
        await waitForOpenVPNReady(service, output);
        tunnelIp = await waitForFullTunnel(service, baselineIp);
    } else {
        service.connect(configPath);
        service.smokeConnected = true;
        const output = captureProcessOutput(service);
        try {
            tunnelIp = await waitForFullTunnel(service, baselineIp);
        } catch (error) {
            const diagnostic = sanitizedProcessTail(output);
            throw new Error(
                diagnostic ? `${error.message}; process: ${diagnostic}` : error.message,
            );
        }
    }

    if (tunnelIp === baselineIp) {
        throw new Error(`Tunnel IP did not change from baseline (${baselineIp})`);
    }
    return tunnelIp;
}

async function disconnectService(protocol, service, configPath) {
    if (protocol === NodeVPNType.WIREGUARD || protocol === NodeVPNType.AMNEZIAWG) {
        await service.disconnect(configPath);
    } else {
        service.disconnect();
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function chooseNode(protocol) {
    if (process.env.SENTINEL_NODE_ADDRESS) {
        return { nodeAddress: process.env.SENTINEL_NODE_ADDRESS, remoteAddr: null };
    }

    const index = Number.parseInt(process.env.SENTINEL_NODE_INDEX || "0", 10);
    if (!Number.isSafeInteger(index) || index < 0) {
        throw new Error("SENTINEL_NODE_INDEX must be a non-negative safe integer");
    }
    log("discovery-started", { protocol, index });
    const result = await discoverNodes({ protocol, rpcUrl: RPC_URL });
    const candidate = result.candidates[index];
    if (!candidate) {
        throw new Error(
            `No candidate at index ${index}; discovery found ${result.candidates.length} ${protocol} nodes`,
        );
    }
    log("node-discovered", {
        protocol,
        index,
        candidatesFound: result.candidates.length,
        nodeAddress: candidate.nodeAddress,
        remoteAddr: candidate.remoteAddr,
    });
    return candidate;
}

async function resolveRemote(node, protocol, preferredRemote) {
    const endpoints = preferredRemote
        ? [preferredRemote, ...(node.remoteAddrs || []).filter(value => value !== preferredRemote)]
        : node.remoteAddrs || [];
    let lastError;
    for (const remoteAddr of endpoints) {
        try {
            const info = await nodeInfo(remoteAddr);
            if (info.service_type === protocol) return { remoteAddr, info };
            lastError = new Error(
                `Endpoint advertises ${info.service_type}, expected ${protocol}`,
            );
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error("Selected node has no reachable endpoint");
}

async function main() {
    const protocol = process.argv[2];
    const mode = process.argv[3] || "prepare";
    if (!PROTOCOLS.includes(protocol)) {
        throw new Error(`Protocol must be one of: ${PROTOCOLS.join(", ")}`);
    }
    if (!["prepare", "connect"].includes(mode)) {
        throw new Error("Mode must be prepare or connect");
    }

    ensurePrerequisites(protocol, mode);
    const selected = await chooseNode(protocol);
    const mnemonic = loadMnemonic();
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "sent" });
    const [account] = await wallet.getAccounts();
    const privateKey = await privKeyFromMnemonic({ mnemonic });
    const client = await SigningSentinelClient.connectWithSigner(RPC_URL, wallet, {
        gasPrice: GasPrice.fromString("0.2udvpn"),
    });

    let service;
    let configPath;
    let sessionId;
    try {
        const node = await client.sentinelQuery.node.node(selected.nodeAddress);
        if (!node) throw new Error("Selected node was not found on chain");
        const { remoteAddr, info } = await resolveRemote(
            node,
            protocol,
            selected.remoteAddr,
        );
        const maxPrice = selectUdvpnPrice(node);
        log("node-ready", {
            protocol,
            nodeAddress: node.address,
            remoteAddr,
            version: info.version?.tag || null,
            mode,
        });

        const baselineIp = mode === "connect" ? await publicIp() : null;
        const start = await client.nodeStartSession({
            from: account.address,
            nodeAddress: node.address,
            gigabytes: Long.UONE,
            maxPrice,
            memo: "sentinel-js-sdk smoke test",
        });
        assertIsDeliverTxSuccess(start);
        const event = searchEvent(NodeEventCreateSession.type, start.events);
        if (!event) throw new Error("Session creation event missing from transaction");
        sessionId = NodeEventCreateSession.parse(event).value.sessionId;
        log("session-created", {
            protocol,
            sessionId: sessionId.toString(),
            txHash: start.transactionHash,
        });

        service = createService(protocol);
        const response = await handshake(
            sessionId,
            service.getPeerRequest(),
            privateKey,
            remoteAddr,
        );
        configPath = await prepareService(protocol, service, response);
        log("handshake-and-config-ok", { protocol });

        if (mode === "connect") {
            const tunnelIp = await connectAndCheck(protocol, service, configPath, baselineIp);
            log("connectivity-ok", { protocol, baselineIp, tunnelIp });
        }
    } finally {
        if (service?.smokeConnected && configPath) {
            try {
                await disconnectService(protocol, service, configPath);
                log("disconnected", { protocol });
            } catch (error) {
                log("disconnect-failed", { protocol, error: error.message });
            }
        }
        service?.cleanup();
        privateKey.fill(0);

        if (sessionId) {
            try {
                await cancelSessionWithRetry(
                    client,
                    account.address,
                    sessionId,
                    protocol,
                );
            } catch (error) {
                log("session-cancel-failed", {
                    protocol,
                    sessionId: sessionId.toString(),
                    error: error.message,
                });
            }
        }
        client.disconnect();
    }
}

main().catch(error => {
    console.error(JSON.stringify({ stage: "failed", error: error.message }));
    process.exitCode = 1;
});
