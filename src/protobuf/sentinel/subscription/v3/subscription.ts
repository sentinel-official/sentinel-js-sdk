/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Price } from "../../types/v1/price";
import { RenewalPricePolicy, renewalPricePolicyFromJSON, renewalPricePolicyToJSON } from "../../types/v1/renewal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v3";

export interface Subscription {
  id: Long;
  accAddress: string;
  planId: Long;
  price?: Price | undefined;
  renewalPricePolicy: RenewalPricePolicy;
  status: Status;
  inactiveAt?: Date | undefined;
  statusAt?: Date | undefined;
}

function createBaseSubscription(): Subscription {
  return {
    id: Long.UZERO,
    accAddress: "",
    planId: Long.UZERO,
    price: undefined,
    renewalPricePolicy: 0,
    status: 0,
    inactiveAt: undefined,
    statusAt: undefined,
  };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (!message.planId.isZero()) {
      writer.uint32(24).uint64(message.planId);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.renewalPricePolicy !== 0) {
      writer.uint32(40).int32(message.renewalPricePolicy);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(66).fork()).ldelim();
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

          message.accAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.planId = reader.uint64() as Long;
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

          message.renewalPricePolicy = reader.int32() as any;
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

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
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
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.price !== undefined) {
      obj.price = Price.toJSON(message.price);
    }
    if (message.renewalPricePolicy !== 0) {
      obj.renewalPricePolicy = renewalPricePolicyToJSON(message.renewalPricePolicy);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.inactiveAt !== undefined) {
      obj.inactiveAt = message.inactiveAt.toISOString();
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Subscription>): Subscription {
    return Subscription.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.price = (object.price !== undefined && object.price !== null) ? Price.fromPartial(object.price) : undefined;
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    message.status = object.status ?? 0;
    message.inactiveAt = object.inactiveAt ?? undefined;
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
