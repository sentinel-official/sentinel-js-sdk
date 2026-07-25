const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const childProcess = require("node:child_process");
let wgQuickExitCode = 0;

childProcess.spawn = () => {
    const child = new EventEmitter();
    child.stdout = new EventEmitter();
    child.stderr = new EventEmitter();
    child.stdout.setEncoding = () => child.stdout;
    child.stderr.setEncoding = () => child.stderr;
    queueMicrotask(() => child.emit("close", wgQuickExitCode));
    return child;
};

const { V2Ray } = require("../dist/vpn/v2ray");
const { Wireguard } = require("../dist/vpn/wireguard");

function fileMode(filename) {
    return fs.statSync(filename).mode & 0o777;
}

function initializeWireguard(dns = ["1.1.1.1"]) {
    const wireguard = new Wireguard();
    wireguard.interface = {
        privateKey: wireguard.privateKey,
        addresses: ["10.0.0.2/32"],
        dns,
        mtu: 1280,
    };
    wireguard.peer = {
        publicKey: wireguard.publicKey,
        allowedIPs: ["0.0.0.0/0"],
        endpoint: "203.0.113.1:51820",
        persistentKeepAlive: 15,
    };
    return wireguard;
}

test("WireGuard omits DNS from generated configs when the DNS list is empty", () => {
    const wireguard = initializeWireguard([]);
    const config = wireguard.buildConfigString();
    const configPath = wireguard.writeConfig();

    assert.notEqual(config, null);
    assert.notEqual(configPath, null);
    assert.doesNotMatch(config, /^DNS\s*=/m);
    assert.doesNotMatch(fs.readFileSync(configPath, "utf8"), /^DNS\s*=/m);

    wireguard.cleanup();
});

test("WireGuard preserves DNS in generated configs by default", () => {
    const wireguard = initializeWireguard();
    const config = wireguard.buildConfigString();

    assert.notEqual(config, null);
    assert.match(config, /^DNS = 1\.1\.1\.1$/m);
});

test("VPN config writers protect secrets and never track caller paths", () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), "sentinel-sdk-test-"));
    const v2rayPath = path.join(directory, "v2ray.json");
    const wireguardPath = path.join(directory, "wireguard.conf");

    try {
        const v2ray = new V2Ray();
        const wireguard = initializeWireguard();

        v2ray.writeConfig(v2rayPath);
        wireguard.writeConfig(wireguardPath);

        assert.equal(fileMode(v2rayPath), 0o600);
        assert.equal(fileMode(wireguardPath), 0o600);
        assert.equal(v2ray.configPath, null);
        assert.equal(wireguard.configPath, null);

        v2ray.cleanup();
        wireguard.cleanup();
        assert.equal(fs.existsSync(v2rayPath), true);
        assert.equal(fs.existsSync(wireguardPath), true);
    } finally {
        fs.rmSync(directory, { recursive: true, force: true });
    }
});

test("VPN cleanup removes only internally generated temporary configs", () => {
    const v2ray = new V2Ray();
    const wireguard = initializeWireguard();
    const v2rayPath = v2ray.writeConfig();
    const wireguardPath = wireguard.writeConfig();

    assert.notEqual(wireguardPath, null);
    assert.equal(fileMode(v2rayPath), 0o600);
    assert.equal(fileMode(wireguardPath), 0o600);

    v2ray.cleanup();
    wireguard.cleanup();

    assert.equal(fs.existsSync(v2rayPath), false);
    assert.equal(fs.existsSync(wireguardPath), false);
});

test("WireGuard keeps its temporary config when disconnect fails", async () => {
    const wireguard = initializeWireguard();
    const configPath = wireguard.writeConfig();
    assert.notEqual(configPath, null);

    wgQuickExitCode = 1;
    await assert.rejects(
        wireguard.disconnect(configPath),
        /wg-quick down failed/,
    );

    assert.equal(fs.existsSync(configPath), true);
    assert.equal(wireguard.configPath, configPath);
    wireguard.cleanup();
});

test("WireGuard removes its temporary config after a successful disconnect", async () => {
    const wireguard = initializeWireguard();
    const configPath = wireguard.writeConfig();
    assert.notEqual(configPath, null);

    wgQuickExitCode = 0;
    await wireguard.disconnect(configPath);

    assert.equal(fs.existsSync(configPath), false);
    assert.equal(wireguard.configPath, null);
});
