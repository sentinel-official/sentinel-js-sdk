const assert = require("node:assert/strict");
const test = require("node:test");

const findFreePortsPath = require.resolve("find-free-ports");
require(findFreePortsPath);

const mockedFindFreePorts = async count => {
    assert.equal(count, 2);
    return [1025, 2048];
};
require.cache[findFreePortsPath].exports = mockedFindFreePorts;

const {
    ProxyProtocol,
    TransportProtocol,
    TransportSecurity,
    V2Ray,
} = require("../dist/vpn/v2ray");

const handshakeData = {
    addrs: ["10.0.0.2/32"],
    metadata: [{
        port: "443",
        proxy_protocol: ProxyProtocol.VLess,
        transport_protocol: TransportProtocol.TCP,
        transport_security: TransportSecurity.None,
    }],
};

function inboundPort(v2ray, tag) {
    return v2ray.config.inbounds.find(inbound => inbound.tag === tag)?.port;
}

test("V2Ray allocates distinct automatic API and SOCKS ports", async () => {
    const v2ray = new V2Ray();

    await v2ray.parseConfig(
        handshakeData,
        ["2001:db8::1", "203.0.113.1"],
    );

    const apiPort = inboundPort(v2ray, "api");
    const socksPort = inboundPort(v2ray, "proxy");

    assert.equal(typeof apiPort, "number");
    assert.equal(typeof socksPort, "number");
    assert.notEqual(apiPort, socksPort);
    assert.equal(v2ray.socksPort, socksPort);
});

test("V2Ray API allocation never reuses an explicit SOCKS port", async () => {
    // The mocked allocator returns 1025 first, reproducing the original
    // collision deterministically.
    const explicitSocksPort = 1025;
    const v2ray = new V2Ray(explicitSocksPort);

    await v2ray.parseConfig(
        handshakeData,
        ["203.0.113.1"],
    );

    assert.equal(
        inboundPort(v2ray, "proxy"),
        explicitSocksPort,
    );
    assert.notEqual(
        inboundPort(v2ray, "api"),
        explicitSocksPort,
    );
});
