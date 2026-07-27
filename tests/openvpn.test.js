const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { OpenVPN } = require("../dist/vpn/openvpn");

const bytes = value => Buffer.from(value).toString("base64");

test("OpenVPN matches released peer request and config semantics", () => {
    const openvpn = new OpenVPN();
    assert.deepEqual(openvpn.getPeerRequest().uuid.length, 16);

    openvpn.parseConfig({
        metadata: [{
            port: 1194,
            protocol: "udp",
            ca: bytes([1, 2, 3]),
            tls: bytes([0xde, 0xad, 0xbe, 0xef]),
        }],
        cert: bytes([4, 5, 6]),
        key: bytes([7, 8, 9]),
    }, ["2001:db8::1", "203.0.113.10"]);

    const directory = fs.mkdtempSync(path.join(os.tmpdir(), "openvpn-test-"));
    try {
        const configPath = openvpn.writeConfig(path.join(directory, "client.conf"));
        const config = fs.readFileSync(configPath, "utf8");
        const tlsKey = fs.readFileSync(path.join(directory, "pki", "tls.key"), "utf8");

        assert.match(config, /proto udp/);
        assert.match(config, /remote 203\.0\.113\.10 1194/);
        assert.match(config, /tls-crypt/);
        assert.doesNotMatch(config, /tls-auth/);
        assert.match(config, /explicit-exit-notify 1/);
        assert.match(tlsKey, /BEGIN OpenVPN Static key V1/);
        assert.match(tlsKey, /deadbeef/);
        assert.equal(fs.statSync(configPath).mode & 0o777, 0o600);
        assert.equal(fs.statSync(path.join(directory, "pki", "client.key")).mode & 0o777, 0o600);
    } finally {
        fs.rmSync(directory, { recursive: true, force: true });
    }
});

test("OpenVPN rejects malformed released handshake data", () => {
    const openvpn = new OpenVPN();
    assert.throws(
        () => openvpn.parseConfig({ metadata: [], cert: "", key: "" }, ["203.0.113.10"]),
        /metadata is empty/,
    );
    assert.throws(
        () => openvpn.parseConfig({
            metadata: [{ port: 1194, protocol: "udp", ca: "!", tls: "!" }],
            cert: "!",
            key: "!",
        }, ["203.0.113.10"]),
        /base64/,
    );
});

test("OpenVPN cleans only SDK-owned temporary configuration", () => {
    const openvpn = new OpenVPN();
    openvpn.parseConfig({
        metadata: [{
            port: 443,
            protocol: "tcp",
            ca: bytes([1]),
            tls: bytes([2]),
        }],
        cert: bytes([3]),
        key: bytes([4]),
    }, ["203.0.113.10"]);

    const configPath = openvpn.writeConfig();
    const directory = path.dirname(configPath);
    assert.equal(fs.existsSync(configPath), true);
    openvpn.cleanup();
    assert.equal(fs.existsSync(directory), false);
});
