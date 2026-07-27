const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const { Hysteria2 } = require("../dist/vpn/hysteria2");

const tlsPin = "01".repeat(32);

test("Hysteria2 uses a string UUID and released full-tunnel config", () => {
    const hysteria = new Hysteria2();
    assert.match(hysteria.getPeerRequest().uuid, /^[0-9a-f-]{36}$/);

    hysteria.parseConfig({
        metadata: [{
            port: 8443,
            tls_pin: tlsPin,
            obfs_password: "secret-with-\"-quote",
        }],
    }, ["2001:db8::10", "203.0.113.20"]);

    const config = hysteria.buildConfigString();
    assert.match(config, /server: "203\.0\.113\.20:8443"/);
    assert.match(config, /pinSHA256: "0101/);
    assert.match(config, /tun:\n  name: "hyst0"/);
    assert.match(config, /ipv4Exclude:[\s\S]*203\.0\.113\.20\/32/);
    assert.match(config, /type: salamander/);
    assert.match(config, /secret-with-\\"-quote/);
});

test("Hysteria2 formats IPv6 endpoints and writes private configs", () => {
    const hysteria = new Hysteria2();
    hysteria.parseConfig({
        metadata: [{
            port: 443,
            tls_pin: tlsPin,
            obfs_password: "",
        }],
    }, ["2001:db8::20"]);

    const configPath = hysteria.writeConfig();
    const directory = require("node:path").dirname(configPath);
    try {
        const config = fs.readFileSync(configPath, "utf8");
        assert.match(config, /server: "\[2001:db8::20\]:443"/);
        assert.doesNotMatch(config, /obfs:/);
        assert.equal(fs.statSync(configPath).mode & 0o777, 0o600);
    } finally {
        hysteria.cleanup();
    }
    assert.equal(fs.existsSync(directory), false);
});

test("Hysteria2 rejects missing or malformed TLS pins", () => {
    const hysteria = new Hysteria2();
    assert.throws(
        () => hysteria.parseConfig({
            metadata: [{ port: 443, tls_pin: "", obfs_password: "" }],
        }, ["203.0.113.20"]),
        /tls_pin/,
    );
});
