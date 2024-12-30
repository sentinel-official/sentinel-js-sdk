/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.session.v1";

export interface EventPay {
  id: Long;
  node: string;
  subscription: Long;
  amount?: Coin | undefined;
}

export interface EventStart {
  id: Long;
  node: string;
  subscription: Long;
}

export interface EventSetStatus {
  id: Long;
  node: string;
  subscription: Long;
  status: Status;
}

export interface EventUpdate {
  id: Long;
  node: string;
  subscription: Long;
}

function createBaseEventPay(): EventPay {
  return { id: Long.UZERO, node: "", subscription: Long.UZERO, amount: undefined };
}

export const EventPay = {
  encode(message: EventPay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (!message.subscription.isZero()) {
      writer.uint32(24).uint64(message.subscription);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
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

          message.node = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscription = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
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
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      subscription: isSet(object.subscription) ? Long.fromValue(object.subscription) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: EventPay): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (!message.subscription.isZero()) {
      obj.subscription = (message.subscription || Long.UZERO).toString();
    }
    if (message.amount !== undefined) {
      obj.amount = Coin.toJSON(message.amount);
    }
    return obj;
  },

  create(base?: DeepPartial<EventPay>): EventPay {
    return EventPay.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPay>): EventPay {
    const message = createBaseEventPay();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Long.fromValue(object.subscription)
      : Long.UZERO;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseEventStart(): EventStart {
  return { id: Long.UZERO, node: "", subscription: Long.UZERO };
}

export const EventStart = {
  encode(message: EventStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (!message.subscription.isZero()) {
      writer.uint32(24).uint64(message.subscription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStart();
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

          message.node = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscription = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventStart {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      subscription: isSet(object.subscription) ? Long.fromValue(object.subscription) : Long.UZERO,
    };
  },

  toJSON(message: EventStart): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (!message.subscription.isZero()) {
      obj.subscription = (message.subscription || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventStart>): EventStart {
    return EventStart.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventStart>): EventStart {
    const message = createBaseEventStart();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Long.fromValue(object.subscription)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventSetStatus(): EventSetStatus {
  return { id: Long.UZERO, node: "", subscription: Long.UZERO, status: 0 };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (!message.subscription.isZero()) {
      writer.uint32(24).uint64(message.subscription);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetStatus();
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

          message.node = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscription = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): EventSetStatus {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      subscription: isSet(object.subscription) ? Long.fromValue(object.subscription) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (!message.subscription.isZero()) {
      obj.subscription = (message.subscription || Long.UZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<EventSetStatus>): EventSetStatus {
    return EventSetStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus {
    const message = createBaseEventSetStatus();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Long.fromValue(object.subscription)
      : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { id: Long.UZERO, node: "", subscription: Long.UZERO };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (!message.subscription.isZero()) {
      writer.uint32(24).uint64(message.subscription);
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

          message.node = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscription = reader.uint64() as Long;
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
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      subscription: isSet(object.subscription) ? Long.fromValue(object.subscription) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (!message.subscription.isZero()) {
      obj.subscription = (message.subscription || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Long.fromValue(object.subscription)
      : Long.UZERO;
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
