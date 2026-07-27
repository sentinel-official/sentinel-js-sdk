const assert = require("node:assert/strict");
const test = require("node:test");

const { Wireguard } = require("../dist/vpn/wireguard");

test("WireGuard emits the released dvpnx peer request field", () => {
    const wireguard = new Wireguard();
    assert.deepEqual(
        wireguard.getPeerRequest(),
        { public_key: wireguard.publicKey },
    );
    assert.equal(
        Buffer.from(wireguard.getPeerRequest().public_key, "base64").length,
        32,
    );
});
