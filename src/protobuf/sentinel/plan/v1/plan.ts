/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v1";

export interface Plan {
  id: Long;
  provider: string;
  price: Coin[];
  validity?: Duration | undefined;
  bytes: string;
  status: Status;
  statusAt?: Date | undefined;
}

function createBasePlan(): Plan {
  return { id: Long.UZERO, provider: "", price: [], validity: undefined, bytes: "", status: 0, statusAt: undefined };
}

export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Duration.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    if (message.bytes !== "") {
      writer.uint32(42).string(message.bytes);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
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

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validity = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bytes = reader.string();
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

  fromJSON(object: any): Plan {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      price: globalThis.Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      validity: isSet(object.validity) ? Duration.fromJSON(object.validity) : undefined,
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Plan): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.price?.length) {
      obj.price = message.price.map((e) => Coin.toJSON(e));
    }
    if (message.validity !== undefined) {
      obj.validity = Duration.toJSON(message.validity);
    }
    if (message.bytes !== "") {
      obj.bytes = message.bytes;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plan>, I>>(base?: I): Plan {
    return Plan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
    const message = createBasePlan();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provider = object.provider ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.validity = (object.validity !== undefined && object.validity !== null)
      ? Duration.fromPartial(object.validity)
      : undefined;
    message.bytes = object.bytes ?? "";
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
