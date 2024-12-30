/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v3";

export interface EventAllocate {
  id: Long;
  accAddress: string;
  grantedBytes: string;
  utilisedBytes: string;
}

export interface EventCreate {
  id: Long;
  planId: Long;
  accAddress: string;
  provAddress: string;
  price: string;
}

export interface EventCreateSession {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  subscriptionId: Long;
}

export interface EventPay {
  id: Long;
  planId: Long;
  accAddress: string;
  provAddress: string;
  payment: string;
  stakingReward: string;
}

export interface EventRenew {
  id: Long;
  planId: Long;
  accAddress: string;
  provAddress: string;
  price: string;
}

export interface EventUpdate {
  id: Long;
  planId: Long;
  accAddress: string;
  renewalPricePolicy: string;
  status: Status;
  inactiveAt: string;
  statusAt: string;
}

function createBaseEventAllocate(): EventAllocate {
  return { id: Long.UZERO, accAddress: "", grantedBytes: "", utilisedBytes: "" };
}

export const EventAllocate = {
  encode(message: EventAllocate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.grantedBytes !== "") {
      writer.uint32(26).string(message.grantedBytes);
    }
    if (message.utilisedBytes !== "") {
      writer.uint32(34).string(message.utilisedBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAllocate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllocate();
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
          if (tag !== 26) {
            break;
          }

          message.grantedBytes = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.utilisedBytes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAllocate {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      grantedBytes: isSet(object.grantedBytes) ? globalThis.String(object.grantedBytes) : "",
      utilisedBytes: isSet(object.utilisedBytes) ? globalThis.String(object.utilisedBytes) : "",
    };
  },

  toJSON(message: EventAllocate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.grantedBytes !== "") {
      obj.grantedBytes = message.grantedBytes;
    }
    if (message.utilisedBytes !== "") {
      obj.utilisedBytes = message.utilisedBytes;
    }
    return obj;
  },

  create(base?: DeepPartial<EventAllocate>): EventAllocate {
    return EventAllocate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventAllocate>): EventAllocate {
    const message = createBaseEventAllocate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.grantedBytes = object.grantedBytes ?? "";
    message.utilisedBytes = object.utilisedBytes ?? "";
    return message;
  },
};

function createBaseEventCreate(): EventCreate {
  return { id: Long.UZERO, planId: Long.UZERO, accAddress: "", provAddress: "", price: "" };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.accAddress !== "") {
      writer.uint32(26).string(message.accAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(34).string(message.provAddress);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
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
          if (tag !== 16) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.provAddress = reader.string();
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

  fromJSON(object: any): EventCreate {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      price: isSet(object.price) ? globalThis.String(object.price) : "",
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseEventCreateSession(): EventCreateSession {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", subscriptionId: Long.UZERO };
}

export const EventCreateSession = {
  encode(message: EventCreateSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(32).uint64(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateSession();
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
          if (tag !== 26) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.subscriptionId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateSession {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
    };
  },

  toJSON(message: EventCreateSession): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreateSession>): EventCreateSession {
    return EventCreateSession.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreateSession>): EventCreateSession {
    const message = createBaseEventCreateSession();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventPay(): EventPay {
  return { id: Long.UZERO, planId: Long.UZERO, accAddress: "", provAddress: "", payment: "", stakingReward: "" };
}

export const EventPay = {
  encode(message: EventPay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.accAddress !== "") {
      writer.uint32(26).string(message.accAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(34).string(message.provAddress);
    }
    if (message.payment !== "") {
      writer.uint32(42).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(50).string(message.stakingReward);
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
          if (tag !== 16) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.provAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payment = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
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
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
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
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    return message;
  },
};

function createBaseEventRenew(): EventRenew {
  return { id: Long.UZERO, planId: Long.UZERO, accAddress: "", provAddress: "", price: "" };
}

export const EventRenew = {
  encode(message: EventRenew, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.accAddress !== "") {
      writer.uint32(26).string(message.accAddress);
    }
    if (message.provAddress !== "") {
      writer.uint32(34).string(message.provAddress);
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
          if (tag !== 16) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.provAddress = reader.string();
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
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      price: isSet(object.price) ? globalThis.String(object.price) : "",
    };
  },

  toJSON(message: EventRenew): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
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
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.provAddress = object.provAddress ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return {
    id: Long.UZERO,
    planId: Long.UZERO,
    accAddress: "",
    renewalPricePolicy: "",
    status: 0,
    inactiveAt: "",
    statusAt: "",
  };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.accAddress !== "") {
      writer.uint32(26).string(message.accAddress);
    }
    if (message.renewalPricePolicy !== "") {
      writer.uint32(34).string(message.renewalPricePolicy);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.inactiveAt !== "") {
      writer.uint32(50).string(message.inactiveAt);
    }
    if (message.statusAt !== "") {
      writer.uint32(58).string(message.statusAt);
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
          if (tag !== 16) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.renewalPricePolicy = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.inactiveAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statusAt = reader.string();
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
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? globalThis.String(object.renewalPricePolicy) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      inactiveAt: isSet(object.inactiveAt) ? globalThis.String(object.inactiveAt) : "",
      statusAt: isSet(object.statusAt) ? globalThis.String(object.statusAt) : "",
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.renewalPricePolicy !== "") {
      obj.renewalPricePolicy = message.renewalPricePolicy;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.inactiveAt !== "") {
      obj.inactiveAt = message.inactiveAt;
    }
    if (message.statusAt !== "") {
      obj.statusAt = message.statusAt;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.renewalPricePolicy = object.renewalPricePolicy ?? "";
    message.status = object.status ?? 0;
    message.inactiveAt = object.inactiveAt ?? "";
    message.statusAt = object.statusAt ?? "";
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
