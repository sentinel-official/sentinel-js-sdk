/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v1";

export interface Subscription {
  id: Long;
  owner: string;
  node: string;
  price?: Coin | undefined;
  deposit?: Coin | undefined;
  plan: Long;
  denom: string;
  expiry?: Date | undefined;
  free: string;
  status: Status;
  statusAt?: Date | undefined;
}

function createBaseSubscription(): Subscription {
  return {
    id: Long.UZERO,
    owner: "",
    node: "",
    price: undefined,
    deposit: undefined,
    plan: Long.UZERO,
    denom: "",
    expiry: undefined,
    free: "",
    status: 0,
    statusAt: undefined,
  };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.node !== "") {
      writer.uint32(26).string(message.node);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(42).fork()).ldelim();
    }
    if (!message.plan.isZero()) {
      writer.uint32(48).uint64(message.plan);
    }
    if (message.denom !== "") {
      writer.uint32(58).string(message.denom);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(66).fork()).ldelim();
    }
    if (message.free !== "") {
      writer.uint32(74).string(message.free);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.node = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.plan = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.free = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): Subscription {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      plan: isSet(object.plan) ? Long.fromValue(object.plan) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
      free: isSet(object.free) ? globalThis.String(object.free) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (message.price !== undefined) {
      obj.price = Coin.toJSON(message.price);
    }
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    if (!message.plan.isZero()) {
      obj.plan = (message.plan || Long.UZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.expiry !== undefined) {
      obj.expiry = message.expiry.toISOString();
    }
    if (message.free !== "") {
      obj.free = message.free;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subscription>, I>>(base?: I): Subscription {
    return Subscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subscription>, I>>(object: I): Subscription {
    const message = createBaseSubscription();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.node = object.node ?? "";
    message.price = (object.price !== undefined && object.price !== null) ? Coin.fromPartial(object.price) : undefined;
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    message.plan = (object.plan !== undefined && object.plan !== null) ? Long.fromValue(object.plan) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.expiry = object.expiry ?? undefined;
    message.free = object.free ?? "";
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
