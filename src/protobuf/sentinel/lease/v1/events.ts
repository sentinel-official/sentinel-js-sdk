/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.lease.v1";

export interface EventCreate {
  id: Long;
  nodeAddress: string;
  provAddress: string;
  maxHours: Long;
  price: string;
  renewalPricePolicy: string;
}

export interface EventEnd {
  id: Long;
  nodeAddress: string;
  provAddress: string;
}

export interface EventPay {
  id: Long;
  nodeAddress: string;
  provAddress: string;
  payment: string;
  stakingReward: string;
}

export interface EventRefund {
  id: Long;
  provAddress: string;
  amount: string;
}

export interface EventRenew {
  id: Long;
  nodeAddress: string;
  provAddress: string;
  maxHours: Long;
  price: string;
}

export interface EventUpdate {
  id: Long;
  nodeAddress: string;
  provAddress: string;
  hours: Long;
  renewalPricePolicy: string;
  payoutAt: string;
}

function createBaseEventCreate(): EventCreate {
  return { id: Long.UZERO, nodeAddress: "", provAddress: "", maxHours: Long.ZERO, price: "", renewalPricePolicy: "" };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(26).string(message.provAddress);
    }
    if (!message.maxHours.isZero()) {
      writer.uint32(32).int64(message.maxHours);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.renewalPricePolicy !== "") {
      writer.uint32(50).string(message.renewalPricePolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxHours = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.price = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.renewalPricePolicy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreate {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      maxHours: isSet(object.maxHours) ? Long.fromValue(object.maxHours) : Long.ZERO,
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? globalThis.String(object.renewalPricePolicy) : "",
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (!message.maxHours.isZero()) {
      obj.maxHours = (message.maxHours || Long.ZERO).toString();
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.renewalPricePolicy !== "") {
      obj.renewalPricePolicy = message.renewalPricePolicy;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.maxHours = (object.maxHours !== undefined && object.maxHours !== null)
      ? Long.fromValue(object.maxHours)
      : Long.ZERO;
    message.price = object.price ?? "";
    message.renewalPricePolicy = object.renewalPricePolicy ?? "";
    return message;
  },
};

function createBaseEventEnd(): EventEnd {
  return { id: Long.UZERO, nodeAddress: "", provAddress: "" };
}

export const EventEnd = {
  encode(message: EventEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(26).string(message.provAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEnd();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEnd {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
    };
  },

  toJSON(message: EventEnd): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<EventEnd>): EventEnd {
    return EventEnd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventEnd>): EventEnd {
    const message = createBaseEventEnd();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    return message;
  },
};

function createBaseEventPay(): EventPay {
  return { id: Long.UZERO, nodeAddress: "", provAddress: "", payment: "", stakingReward: "" };
}

export const EventPay = {
  encode(message: EventPay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(26).string(message.provAddress);
    }
    if (message.payment !== "") {
      writer.uint32(34).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(42).string(message.stakingReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPay();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stakingReward = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPay {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
    };
  },

  toJSON(message: EventPay): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (message.payment !== "") {
      obj.payment = message.payment;
    }
    if (message.stakingReward !== "") {
      obj.stakingReward = message.stakingReward;
    }
    return obj;
  },

  create(base?: DeepPartial<EventPay>): EventPay {
    return EventPay.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPay>): EventPay {
    const message = createBaseEventPay();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    return message;
  },
};

function createBaseEventRefund(): EventRefund {
  return { id: Long.UZERO, provAddress: "", amount: "" };
}

export const EventRefund = {
  encode(message: EventRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefund {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefund();
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

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRefund {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: EventRefund): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRefund>): EventRefund {
    return EventRefund.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRefund>): EventRefund {
    const message = createBaseEventRefund();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventRenew(): EventRenew {
  return { id: Long.UZERO, nodeAddress: "", provAddress: "", maxHours: Long.ZERO, price: "" };
}

export const EventRenew = {
  encode(message: EventRenew, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(26).string(message.provAddress);
    }
    if (!message.maxHours.isZero()) {
      writer.uint32(32).int64(message.maxHours);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRenew {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRenew();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxHours = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.price = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRenew {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      maxHours: isSet(object.maxHours) ? Long.fromValue(object.maxHours) : Long.ZERO,
      price: isSet(object.price) ? globalThis.String(object.price) : "",
    };
  },

  toJSON(message: EventRenew): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (!message.maxHours.isZero()) {
      obj.maxHours = (message.maxHours || Long.ZERO).toString();
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRenew>): EventRenew {
    return EventRenew.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRenew>): EventRenew {
    const message = createBaseEventRenew();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.maxHours = (object.maxHours !== undefined && object.maxHours !== null)
      ? Long.fromValue(object.maxHours)
      : Long.ZERO;
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { id: Long.UZERO, nodeAddress: "", provAddress: "", hours: Long.ZERO, renewalPricePolicy: "", payoutAt: "" };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(26).string(message.provAddress);
    }
    if (!message.hours.isZero()) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.renewalPricePolicy !== "") {
      writer.uint32(42).string(message.renewalPricePolicy);
    }
    if (message.payoutAt !== "") {
      writer.uint32(50).string(message.payoutAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdate();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provAddress = reader.string();
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

          message.renewalPricePolicy = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payoutAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdate {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? globalThis.String(object.renewalPricePolicy) : "",
      payoutAt: isSet(object.payoutAt) ? globalThis.String(object.payoutAt) : "",
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.renewalPricePolicy !== "") {
      obj.renewalPricePolicy = message.renewalPricePolicy;
    }
    if (message.payoutAt !== "") {
      obj.payoutAt = message.payoutAt;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.renewalPricePolicy = object.renewalPricePolicy ?? "";
    message.payoutAt = object.payoutAt ?? "";
    return message;
  },
};

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
