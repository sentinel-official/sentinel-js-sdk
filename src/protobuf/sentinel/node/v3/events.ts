/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v3";

export interface EventCreate {
  nodeAddress: string;
  gigabytePrices: string;
  hourlyPrices: string;
  remoteUrl: string;
}

export interface EventPay {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
}

export interface EventRefund {
  id: Long;
  accAddress: string;
  amount: string;
}

export interface EventUpdateDetails {
  nodeAddress: string;
  gigabytePrices: string;
  hourlyPrices: string;
  remoteUrl: string;
}

export interface EventUpdateStatus {
  nodeAddress: string;
  status: Status;
}

export interface EventCreateSession {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  price: string;
  maxGigabytes: Long;
  maxHours: Long;
}

function createBaseEventCreate(): EventCreate {
  return { nodeAddress: "", gigabytePrices: "", hourlyPrices: "", remoteUrl: "" };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress !== "") {
      writer.uint32(10).string(message.nodeAddress);
    }
    if (message.gigabytePrices !== "") {
      writer.uint32(18).string(message.gigabytePrices);
    }
    if (message.hourlyPrices !== "") {
      writer.uint32(26).string(message.hourlyPrices);
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
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
          if (tag !== 10) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gigabytePrices = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.remoteUrl = reader.string();
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
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      gigabytePrices: isSet(object.gigabytePrices) ? globalThis.String(object.gigabytePrices) : "",
      hourlyPrices: isSet(object.hourlyPrices) ? globalThis.String(object.hourlyPrices) : "",
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.gigabytePrices !== "") {
      obj.gigabytePrices = message.gigabytePrices;
    }
    if (message.hourlyPrices !== "") {
      obj.hourlyPrices = message.hourlyPrices;
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytePrices = object.gigabytePrices ?? "";
    message.hourlyPrices = object.hourlyPrices ?? "";
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseEventPay(): EventPay {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", payment: "", stakingReward: "" };
}

export const EventPay = {
  encode(message: EventPay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
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

          message.accAddress = reader.string();
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
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
    };
  },

  toJSON(message: EventPay): unknown {
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
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    return message;
  },
};

function createBaseEventRefund(): EventRefund {
  return { id: Long.UZERO, accAddress: "", amount: "" };
}

export const EventRefund = {
  encode(message: EventRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
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

          message.accAddress = reader.string();
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
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: EventRefund): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
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
    message.accAddress = object.accAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventUpdateDetails(): EventUpdateDetails {
  return { nodeAddress: "", gigabytePrices: "", hourlyPrices: "", remoteUrl: "" };
}

export const EventUpdateDetails = {
  encode(message: EventUpdateDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress !== "") {
      writer.uint32(10).string(message.nodeAddress);
    }
    if (message.gigabytePrices !== "") {
      writer.uint32(18).string(message.gigabytePrices);
    }
    if (message.hourlyPrices !== "") {
      writer.uint32(26).string(message.hourlyPrices);
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gigabytePrices = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.remoteUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateDetails {
    return {
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      gigabytePrices: isSet(object.gigabytePrices) ? globalThis.String(object.gigabytePrices) : "",
      hourlyPrices: isSet(object.hourlyPrices) ? globalThis.String(object.hourlyPrices) : "",
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: EventUpdateDetails): unknown {
    const obj: any = {};
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.gigabytePrices !== "") {
      obj.gigabytePrices = message.gigabytePrices;
    }
    if (message.hourlyPrices !== "") {
      obj.hourlyPrices = message.hourlyPrices;
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    return EventUpdateDetails.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytePrices = object.gigabytePrices ?? "";
    message.hourlyPrices = object.hourlyPrices ?? "";
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { nodeAddress: "", status: 0 };
}

export const EventUpdateStatus = {
  encode(message: EventUpdateStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress !== "") {
      writer.uint32(10).string(message.nodeAddress);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
          if (tag !== 10) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
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
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventUpdateStatus): unknown {
    const obj: any = {};
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    return EventUpdateStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.nodeAddress = object.nodeAddress ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseEventCreateSession(): EventCreateSession {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", price: "", maxGigabytes: Long.ZERO, maxHours: Long.ZERO };
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
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (!message.maxGigabytes.isZero()) {
      writer.uint32(40).int64(message.maxGigabytes);
    }
    if (!message.maxHours.isZero()) {
      writer.uint32(48).int64(message.maxHours);
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
          if (tag !== 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxGigabytes = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxHours = reader.int64() as Long;
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
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      maxGigabytes: isSet(object.maxGigabytes) ? Long.fromValue(object.maxGigabytes) : Long.ZERO,
      maxHours: isSet(object.maxHours) ? Long.fromValue(object.maxHours) : Long.ZERO,
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
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (!message.maxGigabytes.isZero()) {
      obj.maxGigabytes = (message.maxGigabytes || Long.ZERO).toString();
    }
    if (!message.maxHours.isZero()) {
      obj.maxHours = (message.maxHours || Long.ZERO).toString();
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
    message.price = object.price ?? "";
    message.maxGigabytes = (object.maxGigabytes !== undefined && object.maxGigabytes !== null)
      ? Long.fromValue(object.maxGigabytes)
      : Long.ZERO;
    message.maxHours = (object.maxHours !== undefined && object.maxHours !== null)
      ? Long.fromValue(object.maxHours)
      : Long.ZERO;
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
