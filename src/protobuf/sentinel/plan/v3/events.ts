/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v3";

export interface EventCreate {
  id: Long;
  provAddress: string;
  gigabytes: Long;
  hours: Long;
  prices: string;
  private: boolean;
}

export interface EventLinkNode {
  id: Long;
  provAddress: string;
  nodeAddress: string;
}

export interface EventUnlinkNode {
  id: Long;
  provAddress: string;
  nodeAddress: string;
}

export interface EventUpdate {
  id: Long;
  provAddress: string;
  status: Status;
}

function createBaseEventCreate(): EventCreate {
  return { id: Long.UZERO, provAddress: "", gigabytes: Long.ZERO, hours: Long.ZERO, prices: "", private: false };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (!message.gigabytes.isZero()) {
      writer.uint32(24).int64(message.gigabytes);
    }
    if (!message.hours.isZero()) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.prices !== "") {
      writer.uint32(42).string(message.prices);
    }
    if (message.private === true) {
      writer.uint32(48).bool(message.private);
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

          message.provAddress = reader.string();
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

          message.prices = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.private = reader.bool();
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
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      prices: isSet(object.prices) ? globalThis.String(object.prices) : "",
      private: isSet(object.private) ? globalThis.Boolean(object.private) : false,
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (!message.gigabytes.isZero()) {
      obj.gigabytes = (message.gigabytes || Long.ZERO).toString();
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.prices !== "") {
      obj.prices = message.prices;
    }
    if (message.private === true) {
      obj.private = message.private;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.gigabytes = (object.gigabytes !== undefined && object.gigabytes !== null)
      ? Long.fromValue(object.gigabytes)
      : Long.ZERO;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.prices = object.prices ?? "";
    message.private = object.private ?? false;
    return message;
  },
};

function createBaseEventLinkNode(): EventLinkNode {
  return { id: Long.UZERO, provAddress: "", nodeAddress: "" };
}

export const EventLinkNode = {
  encode(message: EventLinkNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLinkNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLinkNode();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventLinkNode {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
    };
  },

  toJSON(message: EventLinkNode): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<EventLinkNode>): EventLinkNode {
    return EventLinkNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventLinkNode>): EventLinkNode {
    const message = createBaseEventLinkNode();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
};

function createBaseEventUnlinkNode(): EventUnlinkNode {
  return { id: Long.UZERO, provAddress: "", nodeAddress: "" };
}

export const EventUnlinkNode = {
  encode(message: EventUnlinkNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnlinkNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnlinkNode();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUnlinkNode {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
    };
  },

  toJSON(message: EventUnlinkNode): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<EventUnlinkNode>): EventUnlinkNode {
    return EventUnlinkNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUnlinkNode>): EventUnlinkNode {
    const message = createBaseEventUnlinkNode();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { id: Long.UZERO, provAddress: "", status: 0 };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provAddress !== "") {
      writer.uint32(18).string(message.provAddress);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
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

          message.provAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): EventUpdate {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provAddress: isSet(object.provAddress) ? globalThis.String(object.provAddress) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provAddress !== "") {
      obj.provAddress = message.provAddress;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provAddress = object.provAddress ?? "";
    message.status = object.status ?? 0;
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
