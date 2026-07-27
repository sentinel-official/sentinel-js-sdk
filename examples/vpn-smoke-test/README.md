# Mainnet VPN smoke test

This opt-in example verifies the complete SDK flow against a live Sentinel node:
node discovery, on-chain session creation, authenticated handshake, private
configuration generation, optional connectivity, disconnect, and session
cancellation.

It is intentionally not part of the automated test suite. It uses mainnet,
spends wallet funds for gas and a 1 GB session, requires native VPN clients, and
full-tunnel protocols modify the host network configuration.

No node address is stored in this repository. The runner discovers active nodes
at runtime. A reachable node API does not guarantee a healthy VPN data plane, so
trying another discovery result is sometimes necessary.

## Prerequisites

- Node.js and this repository's npm dependencies
- A funded Sentinel wallet
- `curl`
- The client executable for the selected protocol:

| Protocol | Executable | Needs root in `connect` mode |
| --- | --- | --- |
| `wireguard` | `wg-quick` and `wg` | Yes |
| `v2ray` | `v2ray` | No |
| `openvpn` | `openvpn` | Yes |
| `xray` | `xray` | No |
| `amneziawg` | `awg-quick` | Yes |
| `hysteria2` | `hysteria2` | Yes |

Build the SDK before running the example:

```bash
npm install
npm run build
```

On Linux x86_64, the optional setup helper downloads verified, pinned Xray and
Hysteria2 binaries and builds pinned AmneziaWG tools from source. It installs
them only in the ignored `examples/vpn-smoke-test/bin/` directory; it does not
use `sudo` or modify the system:

```bash
examples/vpn-smoke-test/setup-runtimes.sh
```

The helper requires `curl`, `git`, `go`, `make`, `sha256sum`, and `unzip`.
WireGuard, V2Ray, and OpenVPN must still be installed using the operating
system's package manager. The smoke runner automatically adds the local `bin/`
directory to its process `PATH`.

## Discover nodes without spending funds

List up to five reachable candidates for every supported protocol:

```bash
npm run smoke:discover
```

Optionally limit discovery to one protocol:

```bash
npm run smoke:discover -- hysteria2
```

Discovery is read-only. Runtime output contains live node addresses and
endpoints; the source code does not.

## Pass the mnemonic safely

Do not put a mnemonic in a command, environment variable, `.env` file, or the
repository. The helper reads it without terminal echo and creates a mode `0600`
file in the user's runtime directory:

```bash
examples/vpn-smoke-test/capture-mnemonic.sh
export SENTINEL_MNEMONIC_FILE="/path/printed/by/the/helper"
```

The runner rejects files accessible by group or other users. Remove the file as
soon as testing is complete.

## Run the smoke test

`prepare` is the safer default: it creates and cancels a live session and
verifies the handshake and generated configuration, without starting the VPN
client.

```bash
npm run smoke:vpn -- xray prepare
```

`connect` additionally starts the native client and verifies that the public IP
changes. Proxy protocols route only the check through their local SOCKS5 proxy;
full-tunnel protocols change the system route.

```bash
npm run smoke:vpn -- xray connect
```

For a full-tunnel protocol, preserve only the required secret-file variable
when invoking Node as root:

```bash
sudo --preserve-env=SENTINEL_MNEMONIC_FILE /usr/bin/node \
  examples/vpn-smoke-test/live-protocol-smoke.js wireguard connect
```

By default the runner uses the cheapest reachable discovery candidate. To try
another result, set its zero-based index:

```bash
SENTINEL_NODE_INDEX=1 npm run smoke:vpn -- openvpn connect
```

An address obtained from the discovery command can also be selected explicitly:

```bash
SENTINEL_NODE_ADDRESS="<node-address>" npm run smoke:vpn -- openvpn connect
```

Useful optional settings are:

- `SENTINEL_RPC_URL`: alternate RPC endpoint
- `SENTINEL_NODE_LIMIT`: maximum active nodes queried, default `2000`
- `SENTINEL_DISCOVERY_CONCURRENCY`: concurrent node-info requests, default `20`
- `SENTINEL_INFO_TIMEOUT_MS`: node-info timeout, default `5000`
- `SENTINEL_CONNECT_TIMEOUT_MS`: VPN readiness timeout, default `20000`
- `SENTINEL_IP_CHECK_URL`: endpoint used to observe the public IP

Successful output ends with `connectivity-ok`, `disconnected`, and
`session-cancelled`. Save the session ID if cancellation fails. After resolving
the RPC issue, retry it with:

```bash
npm run smoke:cancel -- <session-id>
```

Finally, remove the secret file:

```bash
rm -- "${SENTINEL_MNEMONIC_FILE}"
unset SENTINEL_MNEMONIC_FILE
```
