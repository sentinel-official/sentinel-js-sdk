/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v1";

export interface EventAdd {
  id: Long;
  provider: string;
}

export interface EventAddNode {
  id: Long;
  node: string;
  provider: string;
}

export interface EventRemoveNode {
  id: Long;
  node: string;
  provider: string;
}

export interface EventSetStatus {
  id: Long;
  provider: string;
  status: Status;
}

function createBaseEventAdd(): EventAdd {
  return { id: Long.UZERO, provider: "" };
}

export const EventAdd = {
  encode(message: EventAdd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAdd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdd();
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

          message.provider = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAdd {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
    };
  },

  toJSON(message: EventAdd): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    return obj;
  },

  create(base?: DeepPartial<EventAdd>): EventAdd {
    return EventAdd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventAdd>): EventAdd {
    const message = createBaseEventAdd();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseEventAddNode(): EventAddNode {
  return { id: Long.UZERO, node: "", provider: "" };
}

export const EventAddNode = {
  encode(message: EventAddNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddNode();
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
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAddNode {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
    };
  },

  toJSON(message: EventAddNode): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    return obj;
  },

  create(base?: DeepPartial<EventAddNode>): EventAddNode {
    return EventAddNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventAddNode>): EventAddNode {
    const message = createBaseEventAddNode();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseEventRemoveNode(): EventRemoveNode {
  return { id: Long.UZERO, node: "", provider: "" };
}

export const EventRemoveNode = {
  encode(message: EventRemoveNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveNode();
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
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRemoveNode {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
    };
  },

  toJSON(message: EventRemoveNode): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRemoveNode>): EventRemoveNode {
    return EventRemoveNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRemoveNode>): EventRemoveNode {
    const message = createBaseEventRemoveNode();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseEventSetStatus(): EventSetStatus {
  return { id: Long.UZERO, provider: "", status: 0 };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
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

          message.provider = reader.string();
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

  fromJSON(object: any): EventSetStatus {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
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
    message.provider = object.provider ?? "";
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
