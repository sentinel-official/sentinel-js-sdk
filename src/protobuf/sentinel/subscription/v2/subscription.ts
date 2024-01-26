/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v2";

export enum SubscriptionType {
  TYPE_UNSPECIFIED = 0,
  TYPE_NODE = 1,
  TYPE_PLAN = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionTypeFromJSON(object: any): SubscriptionType {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return SubscriptionType.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_NODE":
      return SubscriptionType.TYPE_NODE;
    case 2:
    case "TYPE_PLAN":
      return SubscriptionType.TYPE_PLAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionType.UNRECOGNIZED;
  }
}

export function subscriptionTypeToJSON(object: SubscriptionType): string {
  switch (object) {
    case SubscriptionType.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case SubscriptionType.TYPE_NODE:
      return "TYPE_NODE";
    case SubscriptionType.TYPE_PLAN:
      return "TYPE_PLAN";
    case SubscriptionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BaseSubscription {
  id: Long;
  address: string;
  inactiveAt?: Date | undefined;
  status: Status;
  statusAt?: Date | undefined;
}

export interface NodeSubscription {
  base?: BaseSubscription | undefined;
  nodeAddress: string;
  gigabytes: Long;
  hours: Long;
  deposit?: Coin | undefined;
}

export interface PlanSubscription {
  base?: BaseSubscription | undefined;
  planId: Long;
  denom: string;
}

function createBaseBaseSubscription(): BaseSubscription {
  return { id: Long.UZERO, address: "", inactiveAt: undefined, status: 0, statusAt: undefined };
}

export const BaseSubscription = {
  encode(message: BaseSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseSubscription();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): BaseSubscription {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: BaseSubscription): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
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

  create<I extends Exact<DeepPartial<BaseSubscription>, I>>(base?: I): BaseSubscription {
    return BaseSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BaseSubscription>, I>>(object: I): BaseSubscription {
    const message = createBaseBaseSubscription();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.inactiveAt = object.inactiveAt ?? undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt ?? undefined;
    return message;
  },
};

function createBaseNodeSubscription(): NodeSubscription {
  return { base: undefined, nodeAddress: "", gigabytes: Long.ZERO, hours: Long.ZERO, deposit: undefined };
}

export const NodeSubscription = {
  encode(message: NodeSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      BaseSubscription.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.gigabytes.isZero()) {
      writer.uint32(24).int64(message.gigabytes);
    }
    if (!message.hours.isZero()) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base = BaseSubscription.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gigabytes = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hours = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeSubscription {
    return {
      base: isSet(object.base) ? BaseSubscription.fromJSON(object.base) : undefined,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
    };
  },

  toJSON(message: NodeSubscription): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = BaseSubscription.toJSON(message.base);
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.gigabytes.isZero()) {
      obj.gigabytes = (message.gigabytes || Long.ZERO).toString();
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeSubscription>, I>>(base?: I): NodeSubscription {
    return NodeSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeSubscription>, I>>(object: I): NodeSubscription {
    const message = createBaseNodeSubscription();
    message.base = (object.base !== undefined && object.base !== null)
      ? BaseSubscription.fromPartial(object.base)
      : undefined;
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytes = (object.gigabytes !== undefined && object.gigabytes !== null)
      ? Long.fromValue(object.gigabytes)
      : Long.ZERO;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    return message;
  },
};

function createBasePlanSubscription(): PlanSubscription {
  return { base: undefined, planId: Long.UZERO, denom: "" };
}

export const PlanSubscription = {
  encode(message: PlanSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      BaseSubscription.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base = BaseSubscription.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanSubscription {
    return {
      base: isSet(object.base) ? BaseSubscription.fromJSON(object.base) : undefined,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: PlanSubscription): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = BaseSubscription.toJSON(message.base);
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanSubscription>, I>>(base?: I): PlanSubscription {
    return PlanSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlanSubscription>, I>>(object: I): PlanSubscription {
    const message = createBasePlanSubscription();
    message.base = (object.base !== undefined && object.base !== null)
      ? BaseSubscription.fromPartial(object.base)
      : undefined;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
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
