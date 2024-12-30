/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v1";

export interface EventRegister {
  address: string;
  provider: string;
}

export interface EventSetStatus {
  address: string;
  status: Status;
}

export interface EventUpdate {
  address: string;
  provider: string;
}

function createBaseEventRegister(): EventRegister {
  return { address: "", provider: "" };
}

export const EventRegister = {
  encode(message: EventRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegister();
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

  fromJSON(object: any): EventRegister {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
    };
  },

  toJSON(message: EventRegister): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRegister>): EventRegister {
    return EventRegister.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRegister>): EventRegister {
    const message = createBaseEventRegister();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseEventSetStatus(): EventSetStatus {
  return { address: "", status: 0 };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
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
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { address: "", provider: "" };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
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
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

  fromJSON(object: any): EventUpdate {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
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
