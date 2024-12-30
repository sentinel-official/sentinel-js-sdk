/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v1";

export interface EventAddQuota {
  id: Long;
  address: string;
}

export interface EventSetStatus {
  id: Long;
  status: Status;
}

export interface EventSubscribe {
  id: Long;
  node: string;
  plan: Long;
}

export interface EventUpdateQuota {
  id: Long;
  address: string;
}

function createBaseEventAddQuota(): EventAddQuota {
  return { id: Long.UZERO, address: "" };
}

export const EventAddQuota = {
  encode(message: EventAddQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddQuota {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddQuota();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAddQuota {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: EventAddQuota): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventAddQuota>): EventAddQuota {
    return EventAddQuota.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventAddQuota>): EventAddQuota {
    const message = createBaseEventAddQuota();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventSetStatus(): EventSetStatus {
  return { id: Long.UZERO, status: 0 };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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

  fromJSON(object: any): EventSetStatus {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
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
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseEventSubscribe(): EventSubscribe {
  return { id: Long.UZERO, node: "", plan: Long.UZERO };
}

export const EventSubscribe = {
  encode(message: EventSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (!message.plan.isZero()) {
      writer.uint32(24).uint64(message.plan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubscribe();
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

          message.plan = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSubscribe {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      node: isSet(object.node) ? globalThis.String(object.node) : "",
      plan: isSet(object.plan) ? Long.fromValue(object.plan) : Long.UZERO,
    };
  },

  toJSON(message: EventSubscribe): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.node !== "") {
      obj.node = message.node;
    }
    if (!message.plan.isZero()) {
      obj.plan = (message.plan || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<EventSubscribe>): EventSubscribe {
    return EventSubscribe.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventSubscribe>): EventSubscribe {
    const message = createBaseEventSubscribe();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.plan = (object.plan !== undefined && object.plan !== null) ? Long.fromValue(object.plan) : Long.UZERO;
    return message;
  },
};

function createBaseEventUpdateQuota(): EventUpdateQuota {
  return { id: Long.UZERO, address: "" };
}

export const EventUpdateQuota = {
  encode(message: EventUpdateQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateQuota {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateQuota();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateQuota {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: EventUpdateQuota): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateQuota>): EventUpdateQuota {
    return EventUpdateQuota.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateQuota>): EventUpdateQuota {
    const message = createBaseEventUpdateQuota();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
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
