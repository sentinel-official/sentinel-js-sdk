const assert = require("node:assert/strict");
const test = require("node:test");

const { NodeVPNType, uuidToByteArray } = require("../dist");
const { parseVPNPortRange } = require("../dist/vpn/port");

test("exports every dvpnx v9 service type", () => {
    assert.deepEqual(
        Object.values(NodeVPNType),
        ["wireguard", "v2ray", "openvpn", "xray", "amneziawg", "hysteria2"],
    );
});

test("uuidToByteArray matches sentinel-go-sdk UUID JSON encoding", () => {
    assert.deepEqual(
        uuidToByteArray("550e8400-e29b-41d4-a716-446655440000"),
        [85, 14, 132, 0, 226, 155, 65, 212, 167, 22, 68, 102, 85, 68, 0, 0],
    );
    assert.throws(() => uuidToByteArray("not-a-uuid"), /canonical/);
});

test("parses and bounds sentinel netip port ranges", () => {
    assert.deepEqual(
        parseVPNPortRange("1000-1002:2000-2002"),
        { inFrom: 1000, inTo: 1002, outFrom: 2000, outTo: 2002 },
    );
    assert.deepEqual(
        parseVPNPortRange("443"),
        { inFrom: 443, inTo: 443, outFrom: 443, outTo: 443 },
    );
    assert.throws(
        () => parseVPNPortRange("1000-1002:2000-2003"),
        /equal sizes/,
    );
    assert.throws(
        () => parseVPNPortRange("1-2000"),
        /more than 1024/,
    );
});
