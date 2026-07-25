const assert = require("node:assert/strict");
const childProcess = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const test = require("node:test");

const originalExecFileSync = childProcess.execFileSync;
const originalExistsSync = fs.existsSync;
const originalPlatform = os.platform;

const wireguardExe = "C:\\Program Files\\WireGuard\\wireguard.exe";
const calls = [];

os.platform = () => "win32";
fs.existsSync = filename =>
    filename === wireguardExe || originalExistsSync(filename);
childProcess.execFileSync = (file, args, options) => {
    calls.push({ file, args, options });
    if (file === "powershell.exe") return "True\r\n";
    if (file === "sc.exe") return "STATE              : 4  RUNNING\r\n";
    return Buffer.alloc(0);
};

const { Wireguard, isAdmin } = require("../dist/vpn/wireguard");

test.after(() => {
    childProcess.execFileSync = originalExecFileSync;
    fs.existsSync = originalExistsSync;
    os.platform = originalPlatform;
});

test("Windows WireGuard commands pass untrusted paths as literal arguments", async () => {
    calls.length = 0;
    const wireguard = new Wireguard();
    const configPath = "C:\\VPN configs\\sentinel & echo injected %.conf";

    assert.equal(isAdmin(), true);
    await wireguard.connect(configPath);
    await wireguard.disconnect(configPath);

    const install = calls.find(call =>
        call.file === wireguardExe &&
        call.args[0] === "/installtunnelservice"
    );
    const query = calls.find(call => call.file === "sc.exe");
    const uninstall = calls.find(call =>
        call.file === wireguardExe &&
        call.args[0] === "/uninstalltunnelservice"
    );

    assert.deepEqual(
        install.args,
        ["/installtunnelservice", configPath],
    );
    assert.deepEqual(
        query.args,
        ["query", "WireGuardTunnel$sentinel & echo injected %"],
    );
    assert.deepEqual(
        uninstall.args,
        ["/uninstalltunnelservice", "sentinel & echo injected %"],
    );
});

test("Windows WireGuard rolls back a service that misses its startup deadline", async () => {
    calls.length = 0;
    const originalNow = Date.now;
    let now = 0;
    Date.now = () => {
        now += 16000;
        return now;
    };

    try {
        const wireguard = new Wireguard();
        await assert.rejects(
            wireguard.connect("C:\\VPN\\timeout.conf"),
            /did not reach RUNNING state/,
        );
    } finally {
        Date.now = originalNow;
    }

    assert.equal(
        calls.some(call =>
            call.file === wireguardExe &&
            call.args[0] === "/uninstalltunnelservice" &&
            call.args[1] === "timeout"
        ),
        true,
    );
});
