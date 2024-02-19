/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v2";

export interface EventUpdateStatus {
  status: Status;
  address: string;
  id: Long;
  planId: Long;
}

export interface EventAllocate {
  address: string;
  grantedBytes: string;
  utilisedBytes: string;
  id: Long;
}

export interface EventCreatePayout {
  address: string;
  nodeAddress: string;
  id: Long;
}

export interface EventPayForPayout {
  address: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
  id: Long;
}

export interface EventPayForPlan {
  address: string;
  payment: string;
  providerAddress: string;
  stakingReward: string;
  id: Long;
}

export interface EventPayForSession {
  address: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
  sessionId: Long;
  subscriptionId: Long;
}

export interface EventRefund {
  address: string;
  amount: string;
  id: Long;
}

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { status: 0, address: "", id: Long.UZERO, planId: Long.UZERO };
}

export const EventUpdateStatus = {
  encode(message: EventUpdateStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(32).uint64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateStatus): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    return EventUpdateStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventAllocate(): EventAllocate {
  return { address: "", grantedBytes: "", utilisedBytes: "", id: Long.UZERO };
}

export const EventAllocate = {
  encode(message: EventAllocate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.grantedBytes !== "") {
      writer.uint32(18).string(message.grantedBytes);
    }
    if (message.utilisedBytes !== "") {
      writer.uint32(26).string(message.utilisedBytes);
    }
    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
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
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grantedBytes = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.utilisedBytes = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.id = reader.uint64() as Long;
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      grantedBytes: isSet(object.grantedBytes) ? globalThis.String(object.grantedBytes) : "",
      utilisedBytes: isSet(object.utilisedBytes) ? globalThis.String(object.utilisedBytes) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventAllocate): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.grantedBytes !== "") {
      obj.grantedBytes = message.grantedBytes;
    }
    if (message.utilisedBytes !== "") {
      obj.utilisedBytes = message.utilisedBytes;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventAllocate>): EventAllocate {
    return EventAllocate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventAllocate>): EventAllocate {
    const message = createBaseEventAllocate();
    message.address = object.address ?? "";
    message.grantedBytes = object.grantedBytes ?? "";
    message.utilisedBytes = object.utilisedBytes ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventCreatePayout(): EventCreatePayout {
  return { address: "", nodeAddress: "", id: Long.UZERO };
}

export const EventCreatePayout = {
  encode(message: EventCreatePayout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePayout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePayout();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreatePayout {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventCreatePayout): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreatePayout>): EventCreatePayout {
    return EventCreatePayout.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreatePayout>): EventCreatePayout {
    const message = createBaseEventCreatePayout();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventPayForPayout(): EventPayForPayout {
  return { address: "", nodeAddress: "", payment: "", stakingReward: "", id: Long.UZERO };
}

export const EventPayForPayout = {
  encode(message: EventPayForPayout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.payment !== "") {
      writer.uint32(26).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (!message.id.isZero()) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayForPayout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayForPayout();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stakingReward = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPayForPayout {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventPayForPayout): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.payment !== "") {
      obj.payment = message.payment;
    }
    if (message.stakingReward !== "") {
      obj.stakingReward = message.stakingReward;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventPayForPayout>): EventPayForPayout {
    return EventPayForPayout.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPayForPayout>): EventPayForPayout {
    const message = createBaseEventPayForPayout();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventPayForPlan(): EventPayForPlan {
  return { address: "", payment: "", providerAddress: "", stakingReward: "", id: Long.UZERO };
}

export const EventPayForPlan = {
  encode(message: EventPayForPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.payment !== "") {
      writer.uint32(18).string(message.payment);
    }
    if (message.providerAddress !== "") {
      writer.uint32(26).string(message.providerAddress);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (!message.id.isZero()) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayForPlan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayForPlan();
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

          message.payment = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.providerAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stakingReward = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPayForPlan {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      providerAddress: isSet(object.providerAddress) ? globalThis.String(object.providerAddress) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventPayForPlan): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.payment !== "") {
      obj.payment = message.payment;
    }
    if (message.providerAddress !== "") {
      obj.providerAddress = message.providerAddress;
    }
    if (message.stakingReward !== "") {
      obj.stakingReward = message.stakingReward;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventPayForPlan>): EventPayForPlan {
    return EventPayForPlan.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPayForPlan>): EventPayForPlan {
    const message = createBaseEventPayForPlan();
    message.address = object.address ?? "";
    message.payment = object.payment ?? "";
    message.providerAddress = object.providerAddress ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventPayForSession(): EventPayForSession {
  return {
    address: "",
    nodeAddress: "",
    payment: "",
    stakingReward: "",
    sessionId: Long.UZERO,
    subscriptionId: Long.UZERO,
  };
}

export const EventPayForSession = {
  encode(message: EventPayForSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.payment !== "") {
      writer.uint32(26).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (!message.sessionId.isZero()) {
      writer.uint32(40).uint64(message.sessionId);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(48).uint64(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayForSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayForSession();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stakingReward = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sessionId = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
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

  fromJSON(object: any): EventPayForSession {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
      sessionId: isSet(object.sessionId) ? Long.fromValue(object.sessionId) : Long.UZERO,
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
    };
  },

  toJSON(message: EventPayForSession): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.payment !== "") {
      obj.payment = message.payment;
    }
    if (message.stakingReward !== "") {
      obj.stakingReward = message.stakingReward;
    }
    if (!message.sessionId.isZero()) {
      obj.sessionId = (message.sessionId || Long.UZERO).toString();
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventPayForSession>): EventPayForSession {
    return EventPayForSession.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPayForSession>): EventPayForSession {
    const message = createBaseEventPayForSession();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.sessionId = (object.sessionId !== undefined && object.sessionId !== null)
      ? Long.fromValue(object.sessionId)
      : Long.UZERO;
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventRefund(): EventRefund {
  return { address: "", amount: "", id: Long.UZERO };
}

export const EventRefund = {
  encode(message: EventRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
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
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint64() as Long;
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventRefund): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventRefund>): EventRefund {
    return EventRefund.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRefund>): EventRefund {
    const message = createBaseEventRefund();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
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
