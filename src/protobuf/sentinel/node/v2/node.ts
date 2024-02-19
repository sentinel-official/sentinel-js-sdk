/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v2";

export interface Node {
  address: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
  inactiveAt?: Date | undefined;
  status: Status;
  statusAt?: Date | undefined;
}

function createBaseNode(): Node {
  return {
    address: "",
    gigabytePrices: [],
    hourlyPrices: [],
    remoteUrl: "",
    inactiveAt: undefined,
    status: 0,
    statusAt: undefined,
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gigabytePrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.remoteUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statusAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      gigabytePrices: globalThis.Array.isArray(object?.gigabytePrices)
        ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e))
        : [],
      hourlyPrices: globalThis.Array.isArray(object?.hourlyPrices)
        ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e))
        : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.gigabytePrices?.length) {
      obj.gigabytePrices = message.gigabytePrices.map((e) => Coin.toJSON(e));
    }
    if (message.hourlyPrices?.length) {
      obj.hourlyPrices = message.hourlyPrices.map((e) => Coin.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    if (message.inactiveAt !== undefined) {
      obj.inactiveAt = message.inactiveAt.toISOString();
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Node>): Node {
    return Node.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.address = object.address ?? "";
    message.gigabytePrices = object.gigabytePrices?.map((e) => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map((e) => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    message.inactiveAt = object.inactiveAt ?? undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
