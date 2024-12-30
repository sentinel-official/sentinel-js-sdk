/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Price } from "../../types/v1/price";
import { RenewalPricePolicy, renewalPricePolicyFromJSON, renewalPricePolicyToJSON } from "../../types/v1/renewal";

export const protobufPackage = "sentinel.lease.v1";

export interface Lease {
  id: Long;
  provAddress: string;
  nodeAddress: string;
  price?: Price | undefined;
  hours: Long;
  maxHours: Long;
  renewalPricePolicy: RenewalPricePolicy;
  inactiveAt?: Date | undefined;
  payoutAt?: Date | undefined;
}

function createBaseLease(): Lease {
  return {
    id: Long.UZERO,
    provAddress: "",
    nodeAddress: "",
    price: undefined,
    hours: Long.ZERO,
    maxHours: Long.ZERO,
    renewalPricePolicy: 0,
    inactiveAt: undefined,
    payoutAt: undefined,
  };
}

export const Lease = {
  encode(message: Lease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (!message.hours.isZero()) {
      writer.uint32(40).int64(message.hours);
    }
    if (!message.maxHours.isZero()) {
      writer.uint32(48).int64(message.maxHours);
    }
    if (message.renewalPricePolicy !== 0) {
      writer.uint32(56).int32(message.renewalPricePolicy);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.payoutAt !== undefined) {
      Timestamp.encode(toTimestamp(message.payoutAt), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
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

          message.provAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = Price.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hours = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxHours = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.renewalPricePolicy = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payoutAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lease {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      maxHours: isSet(object.maxHours) ? Long.fromValue(object.maxHours) : Long.ZERO,
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      payoutAt: isSet(object.payoutAt) ? fromJsonTimestamp(object.payoutAt) : undefined,
    };
  },

  toJSON(message: Lease): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.price !== undefined) {
      obj.price = Price.toJSON(message.price);
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (!message.maxHours.isZero()) {
      obj.maxHours = (message.maxHours || Long.ZERO).toString();
    }
    if (message.renewalPricePolicy !== 0) {
      obj.renewalPricePolicy = renewalPricePolicyToJSON(message.renewalPricePolicy);
    }
    if (message.inactiveAt !== undefined) {
      obj.inactiveAt = message.inactiveAt.toISOString();
    }
    if (message.payoutAt !== undefined) {
      obj.payoutAt = message.payoutAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Lease>): Lease {
    return Lease.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Lease>): Lease {
    const message = createBaseLease();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.price = (object.price !== undefined && object.price !== null) ? Price.fromPartial(object.price) : undefined;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.maxHours = (object.maxHours !== undefined && object.maxHours !== null)
      ? Long.fromValue(object.maxHours)
      : Long.ZERO;
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    message.inactiveAt = object.inactiveAt ?? undefined;
    message.payoutAt = object.payoutAt ?? undefined;
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
