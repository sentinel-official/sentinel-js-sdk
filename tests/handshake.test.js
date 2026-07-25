const assert = require("node:assert/strict");
const { afterEach, test } = require("node:test");
const { createHash } = require("node:crypto");

const axios = require("axios").default;
const Long = require("long");
const secp256k1 = require("secp256k1");

const { handshake } = require("../dist/utils");

const originalPost = axios.post;
const originalAdapter = axios.defaults.adapter;

afterEach(() => {
    axios.post = originalPost;
    axios.defaults.adapter = originalAdapter;
});

test("handshake emits an exact unquoted uint64 ID and signs the same value", async () => {
    const sessionId = Long.fromString("18446744073709551615", true);
    const data = { pub_key: "wireguard-public-key" };
    const privateKey = new Uint8Array(32);
    privateKey[31] = 1;

    let requestBody;
    axios.defaults.adapter = async config => {
        requestBody = config.data;
        return {
            data: {
                success: true,
                result: { addrs: [], data: "" },
            },
            status: 200,
            statusText: "OK",
            headers: {},
            config,
        };
    };

    await handshake(
        sessionId,
        data,
        privateKey,
        "https://node.example",
    );

    assert.equal(typeof requestBody, "string");
    assert.match(
        requestBody,
        /"id":18446744073709551615(?:,|})/,
    );
    assert.doesNotMatch(
        requestBody,
        /"id":"18446744073709551615"/,
    );

    const signature = Buffer.from(
        JSON.parse(requestBody).signature,
        "base64",
    );
    const idBytes = Buffer.alloc(8, 0xff);
    const dataBytes = Buffer.from(JSON.stringify(data));
    const hash = createHash("sha256")
        .update(Buffer.concat([idBytes, dataBytes]))
        .digest();
    const publicKey = secp256k1.publicKeyCreate(privateKey, true);

    assert.equal(
        secp256k1.ecdsaVerify(signature, hash, publicKey),
        true,
    );
});

test("handshake rejects zero and negative session IDs before sending", async () => {
    let requests = 0;
    axios.post = async () => {
        requests += 1;
        throw new Error("should not be called");
    };

    const privateKey = new Uint8Array(32);
    privateKey[31] = 1;

    await assert.rejects(
        handshake(
            Long.ZERO,
            { pub_key: "key" },
            privateKey,
            "https://node.example",
        ),
        /positive uint64/,
    );
    await assert.rejects(
        handshake(
            Long.NEG_ONE,
            { pub_key: "key" },
            privateKey,
            "https://node.example",
        ),
        /positive uint64/,
    );
    assert.equal(requests, 0);
});

test("handshake parses dvpnx envelopes from non-2xx Axios responses", async () => {
    const privateKey = new Uint8Array(32);
    privateKey[31] = 1;

    for (const status of [400, 401, 409, 500]) {
        axios.post = async () => {
            throw new axios.AxiosError(
                `Request failed with status code ${status}`,
                axios.AxiosError.ERR_BAD_RESPONSE,
                undefined,
                undefined,
                {
                    data: {
                        success: false,
                        error: {
                            code: 5,
                            message: "invalid session status",
                        },
                    },
                    status,
                    statusText: "Error",
                    headers: {},
                    config: {},
                },
            );
        };

        await assert.rejects(
            handshake(
                Long.UONE,
                { pub_key: "key" },
                privateKey,
                "https://node.example",
            ),
            /Handshake rejected by node \(code 5\): invalid session status/,
        );
    }
});

test("handshake preserves network errors without a node response", async () => {
    const privateKey = new Uint8Array(32);
    privateKey[31] = 1;
    const networkError = new axios.AxiosError(
        "socket hang up",
        "ECONNRESET",
    );

    axios.post = async () => {
        throw networkError;
    };

    await handshake(
        Long.UONE,
        { pub_key: "key" },
        privateKey,
        "https://node.example",
    ).then(
        () => assert.fail("Expected handshake to reject"),
        error => assert.equal(error, networkError),
    );
});

test("handshake validates resolved response envelopes", async () => {
    const privateKey = new Uint8Array(32);
    privateKey[31] = 1;

    axios.post = async () => ({
        data: {
            success: false,
            error: {
                code: 7,
                message: "adding peer failed",
            },
        },
    });

    await assert.rejects(
        handshake(
            Long.UONE,
            { pub_key: "key" },
            privateKey,
            "https://node.example",
        ),
        /Handshake rejected by node \(code 7\): adding peer failed/,
    );

    axios.post = async () => ({
        data: { success: true },
    });

    await assert.rejects(
        handshake(
            Long.UONE,
            { pub_key: "key" },
            privateKey,
            "https://node.example",
        ),
        /Handshake response missing result payload/,
    );
});
