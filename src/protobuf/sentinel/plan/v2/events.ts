/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v2";

export interface EventCreate {
  address: string;
  id: Long;
}

export interface EventLinkNode {
  address: string;
  nodeAddress: string;
  id: Long;
}

export interface EventUnlinkNode {
  address: string;
  nodeAddress: string;
  id: Long;
}

export interface EventUpdateStatus {
  status: Status;
  address: string;
  id: Long;
}

export interface EventCreateSubscription {
  address: string;
  providerAddress: string;
  id: Long;
  planId: Long;
}

function createBaseEventCreate(): EventCreate {
  return { address: "", id: Long.UZERO };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
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

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): EventCreate {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.address = object.address ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventLinkNode(): EventLinkNode {
  return { address: "", nodeAddress: "", id: Long.UZERO };
}

export const EventLinkNode = {
  encode(message: EventLinkNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLinkNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLinkNode();
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

  fromJSON(object: any): EventLinkNode {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventLinkNode): unknown {
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

  create(base?: DeepPartial<EventLinkNode>): EventLinkNode {
    return EventLinkNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventLinkNode>): EventLinkNode {
    const message = createBaseEventLinkNode();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventUnlinkNode(): EventUnlinkNode {
  return { address: "", nodeAddress: "", id: Long.UZERO };
}

export const EventUnlinkNode = {
  encode(message: EventUnlinkNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnlinkNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnlinkNode();
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

  fromJSON(object: any): EventUnlinkNode {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventUnlinkNode): unknown {
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

  create(base?: DeepPartial<EventUnlinkNode>): EventUnlinkNode {
    return EventUnlinkNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUnlinkNode>): EventUnlinkNode {
    const message = createBaseEventUnlinkNode();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { status: 0, address: "", id: Long.UZERO };
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
    return message;
  },
};

function createBaseEventCreateSubscription(): EventCreateSubscription {
  return { address: "", providerAddress: "", id: Long.UZERO, planId: Long.UZERO };
}

export const EventCreateSubscription = {
  encode(message: EventCreateSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(32).uint64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateSubscription();
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

          message.providerAddress = reader.string();
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

  fromJSON(object: any): EventCreateSubscription {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      providerAddress: isSet(object.providerAddress) ? globalThis.String(object.providerAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
    };
  },

  toJSON(message: EventCreateSubscription): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.providerAddress !== "") {
      obj.providerAddress = message.providerAddress;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreateSubscription>): EventCreateSubscription {
    return EventCreateSubscription.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreateSubscription>): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    message.address = object.address ?? "";
    message.providerAddress = object.providerAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
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
