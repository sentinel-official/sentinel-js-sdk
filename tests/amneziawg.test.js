const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const { AmneziaWG } = require("../dist/vpn/amneziawg");

const serverPublicKey = Buffer.alloc(32, 7).toString("base64");
const metadata = {
    port: 51820,
    public_key: serverPublicKey,
    s1: 10,
    s2: 20,
    s3: 30,
    s4: 12,
    h1: 1001,
    h2: 1002,
    h3: 1003,
    h4: 1004,
    i1: "<b 0x01>",
};

test("AmneziaWG creates released peer request and all handshake parameters", () => {
    const awg = new AmneziaWG();
    assert.equal(Buffer.from(awg.getPeerRequest().public_key, "base64").length, 32);

    awg.parseConfig(
        { addrs: ["10.8.0.10/32", "2001:db8::10/128"], metadata: [metadata] },
        ["2001:db8::1", "203.0.113.30"],
        {
            listenPort: 12345,
            junkPacketCount: 4,
            junkPacketMinSize: 64,
            junkPacketMaxSize: 512,
        },
    );

    const config = awg.buildConfigString();
    assert.match(config, /Address = 10\.8\.0\.10\/32,2001:db8::10\/128/);
    assert.match(config, /S1 = 10/);
    assert.match(config, /H4 = 1004/);
    assert.match(config, /I1 = <b 0x01>/);
    assert.match(config, /Endpoint = 203\.0\.113\.30:51820/);
    assert.match(config, new RegExp(`PublicKey = ${serverPublicKey.replace(/[+/]/g, "\\$&")}`));
});

test("AmneziaWG validates obfuscation invariants", () => {
    const awg = new AmneziaWG();
    assert.throws(
        () => awg.parseConfig(
            {
                addrs: ["10.8.0.10/32"],
                metadata: [{ ...metadata, h4: metadata.h3 }],
            },
            ["203.0.113.30"],
        ),
        /must be distinct/,
    );
    assert.throws(
        () => awg.parseConfig(
            {
                addrs: ["10.8.0.10/32"],
                metadata: [{ ...metadata, s1: 1, s2: 57 }],
            },
            ["203.0.113.30"],
        ),
        /s1 \+ 56/,
    );
});

test("AmneziaWG writes and cleans private temporary configs", () => {
    const awg = new AmneziaWG();
    awg.parseConfig(
        { addrs: ["10.8.0.10/32"], metadata: [metadata] },
        ["203.0.113.30"],
    );

    const configPath = awg.writeConfig();
    const directory = path.dirname(configPath);
    assert.equal(fs.statSync(configPath).mode & 0o777, 0o600);
    awg.cleanup();
    assert.equal(fs.existsSync(directory), false);
});
