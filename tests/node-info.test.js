const assert = require("node:assert/strict");
const { afterEach, test } = require("node:test");

const axios = require("axios").default;

const { nodeInfo } = require("../dist/utils");

const originalGet = axios.get;

afterEach(() => {
    axios.get = originalGet;
});

test("nodeInfo parses the dvpnx envelope from a non-2xx response", async () => {
    axios.get = async () => {
        throw new axios.AxiosError(
            "Request failed with status code 500",
            axios.AxiosError.ERR_BAD_RESPONSE,
            undefined,
            undefined,
            {
                data: {
                    success: false,
                    error: {
                        code: 1,
                        message: "parsing metadata failed",
                    },
                },
                status: 500,
                statusText: "Internal Server Error",
                headers: {},
                config: {},
            },
        );
    };

    await assert.rejects(
        nodeInfo("https://node.example"),
        /Node info request rejected by node \(code 1\): parsing metadata failed/,
    );
});

test("nodeInfo preserves network errors without a node response", async () => {
    const networkError = new axios.AxiosError(
        "socket hang up",
        "ECONNRESET",
    );

    axios.get = async () => {
        throw networkError;
    };

    await nodeInfo("https://node.example").then(
        () => assert.fail("Expected nodeInfo to reject"),
        error => assert.equal(error, networkError),
    );
});

test("nodeInfo validates resolved envelopes and returns valid results", async () => {
    axios.get = async () => ({
        data: {
            success: false,
            error: {
                code: 1,
                message: "node not ready",
            },
        },
    });

    await assert.rejects(
        nodeInfo("https://node.example"),
        /Node info request rejected by node \(code 1\): node not ready/,
    );

    axios.get = async () => ({
        data: { success: true },
    });

    await assert.rejects(
        nodeInfo("https://node.example"),
        /Node info response missing result payload/,
    );

    const result = {
        addr: "sentnode1example",
        moniker: "example",
    };
    axios.get = async () => ({
        data: {
            success: true,
            result,
        },
    });

    assert.equal(
        await nodeInfo("https://node.example"),
        result,
    );
});
