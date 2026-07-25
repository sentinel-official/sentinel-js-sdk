const assert = require("node:assert/strict");
const test = require("node:test");

const Long = require("long");

const {
    unpackSession,
} = require("../dist/modules/session/query");
const {
    Session: NodeSession,
} = require("../dist/protobuf/sentinel/node/v3/session");
const {
    BaseSession,
} = require("../dist/protobuf/sentinel/session/v3/session");
const {
    Session: SubscriptionSession,
} = require("../dist/protobuf/sentinel/subscription/v3/session");

const baseSession = BaseSession.fromPartial({
    id: Long.fromInt(42, true),
    accAddress: "sent1account",
    nodeAddress: "sentnode1node",
    status: 1,
});

function assertBaseSession(actual) {
    assert.notEqual(actual, null);
    assert.equal(actual.id.toString(), "42");
    assert.equal(actual.accAddress, "sent1account");
    assert.equal(actual.nodeAddress, "sentnode1node");
    assert.equal(actual.status, 1);
}

test("unpackSession decodes a node session wrapper", () => {
    const value = NodeSession.encode({
        baseSession,
        price: undefined,
    }).finish();

    assertBaseSession(unpackSession({
        typeUrl: "/sentinel.node.v3.Session",
        value,
    }));
});

test("unpackSession decodes a subscription session wrapper", () => {
    const value = SubscriptionSession.encode({
        baseSession,
        subscriptionId: Long.fromInt(7, true),
    }).finish();

    assertBaseSession(unpackSession({
        typeUrl: "type.googleapis.com/sentinel.subscription.v3.Session",
        value,
    }));
});

test("unpackSession decodes a direct BaseSession", () => {
    const value = BaseSession.encode(baseSession).finish();

    assertBaseSession(unpackSession({
        typeUrl: "/sentinel.session.v3.BaseSession",
        value,
    }));
});

test("unpackSession rejects unknown, empty and malformed payloads", () => {
    assert.equal(unpackSession({
        typeUrl: "/unknown.Session",
        value: BaseSession.encode(baseSession).finish(),
    }), null);

    assert.equal(unpackSession({
        typeUrl: "/sentinel.session.v3.BaseSession",
        value: new Uint8Array(),
    }), null);

    assert.equal(unpackSession({
        typeUrl: "/sentinel.node.v3.Session",
        value: Uint8Array.from([0xff]),
    }), null);
});
