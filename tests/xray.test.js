const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const findFreePortsPath = require.resolve("find-free-ports");
require(findFreePortsPath);
require.cache[findFreePortsPath].exports = async count => {
    assert.equal(count, 2);
    return [2323, 1080];
};

const {
    Xray,
    XrayFlow,
    XrayProxyProtocol,
    XrayTransportProtocol,
    XrayTransportSecurity,
} = require("../dist/vpn/xray");

const emptySecurityFields = {
    tls_pin: "",
    reality_server_name: "",
    reality_short_id: "",
    reality_public_key: "",
    reality_fingerprint: "",
};

function metadata(overrides) {
    return {
        port: "443",
        proxy_protocol: XrayProxyProtocol.VLess,
        transport_protocol: XrayTransportProtocol.TCP,
        transport_security: XrayTransportSecurity.None,
        flow: XrayFlow.None,
        method: "",
        key: "",
        ...emptySecurityFields,
        ...overrides,
    };
}

test("Xray expands ports and renders VLESS Reality settings", async () => {
    const xray = new Xray();
    assert.equal(xray.getPeerRequest().uuid.length, 16);

    await xray.parseConfig({
        metadata: [metadata({
            port: "443-444:8443-8444",
            transport_security: XrayTransportSecurity.Reality,
            flow: XrayFlow.Vision,
            reality_server_name: "example.com",
            reality_short_id: "aabbccdd",
            reality_public_key: "public-key",
            reality_fingerprint: "chrome",
        })],
    }, ["203.0.113.40"]);

    assert.deepEqual(
        xray.config.outbounds.map(outbound => outbound.settings.vnext[0].port),
        [8443, 8444],
    );
    assert.deepEqual(
        xray.config.outbounds[0].streamSettings.realitySettings,
        {
            fingerprint: "chrome",
            publicKey: "public-key",
            serverName: "example.com",
            shortId: "aabbccdd",
        },
    );
    assert.equal(
        xray.config.outbounds[0].settings.vnext[0].users[0].flow,
        "xtls-rprx-vision",
    );
});

test("Xray derives Shadowsocks 2022 EIH credentials like the Go SDK", async () => {
    const xray = new Xray();
    xray.uuid = "550e8400-e29b-41d4-a716-446655440000";
    const serverKey = Buffer.alloc(32, 5).toString("base64");

    await xray.parseConfig({
        metadata: [metadata({
            proxy_protocol: XrayProxyProtocol.Shadowsocks2022,
            method: "2022-blake3-aes-256-gcm",
            key: serverKey,
        })],
    }, ["203.0.113.40"]);

    const uuidBytes = Buffer.from(xray.uuid.replace(/-/g, ""), "hex");
    const userKey = crypto.createHash("sha256").update(uuidBytes).digest("base64");
    const outbound = xray.config.outbounds[0];
    assert.equal(outbound.protocol, "shadowsocks");
    assert.equal(outbound.settings.servers[0].password, `${serverKey}:${userKey}`);
});

test("Xray pins TLS and writes private temporary configs", async () => {
    const xray = new Xray();
    await xray.parseConfig({
        metadata: [metadata({
            transport_security: XrayTransportSecurity.TLS,
            tls_pin: "ab".repeat(32),
        })],
    }, ["203.0.113.40"]);

    assert.equal(
        xray.config.outbounds[0].streamSettings.tlsSettings.pinnedPeerCertSha256,
        "ab".repeat(32),
    );
    const configPath = xray.writeConfig();
    const directory = path.dirname(configPath);
    assert.equal(fs.statSync(configPath).mode & 0o777, 0o600);
    xray.cleanup();
    assert.equal(fs.existsSync(directory), false);
});

test("Xray rejects invalid protocol combinations", async () => {
    const xray = new Xray();
    await assert.rejects(
        xray.parseConfig({
            metadata: [metadata({
                proxy_protocol: XrayProxyProtocol.Trojan,
                flow: XrayFlow.Vision,
            })],
        }, ["203.0.113.40"]),
        /only valid for VLESS/,
    );
});
