/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.swap.v1";

export interface EventSwap {
  txHash: Uint8Array;
  receiver: string;
}

function createBaseEventSwap(): EventSwap {
  return { txHash: new Uint8Array(0), receiver: "" };
}

export const EventSwap = {
  encode(message: EventSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txHash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSwap {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(0),
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
    };
  },

  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    if (message.txHash.length !== 0) {
      obj.txHash = base64FromBytes(message.txHash);
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    return obj;
  },

  create(base?: DeepPartial<EventSwap>): EventSwap {
    return EventSwap.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.txHash = object.txHash ?? new Uint8Array(0);
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
