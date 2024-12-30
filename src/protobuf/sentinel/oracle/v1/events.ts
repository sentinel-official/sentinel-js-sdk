/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.oracle.v1";

export interface EventCreate {
  denom: string;
  decimals: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

export interface EventDelete {
  denom: string;
}

export interface EventUpdate {
  denom: string;
  decimals: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

function createBaseEventCreate(): EventCreate {
  return { denom: "", decimals: Long.ZERO, baseAssetDenom: "", quoteAssetDenom: "" };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(24).int64(message.decimals);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(34).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(42).string(message.quoteAssetDenom);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseAssetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteAssetDenom = reader.string();
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
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? globalThis.String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? globalThis.String(object.quoteAssetDenom) : "",
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (!message.decimals.isZero()) {
      obj.decimals = (message.decimals || Long.ZERO).toString();
    }
    if (message.baseAssetDenom !== "") {
      obj.baseAssetDenom = message.baseAssetDenom;
    }
    if (message.quoteAssetDenom !== "") {
      obj.quoteAssetDenom = message.quoteAssetDenom;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreate>): EventCreate {
    return EventCreate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
};

function createBaseEventDelete(): EventDelete {
  return { denom: "" };
}

export const EventDelete = {
  encode(message: EventDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventDelete {
    return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
  },

  toJSON(message: EventDelete): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<EventDelete>): EventDelete {
    return EventDelete.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventDelete>): EventDelete {
    const message = createBaseEventDelete();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { denom: "", decimals: Long.ZERO, baseAssetDenom: "", quoteAssetDenom: "" };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(24).int64(message.decimals);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(34).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(42).string(message.quoteAssetDenom);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseAssetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteAssetDenom = reader.string();
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
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? globalThis.String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? globalThis.String(object.quoteAssetDenom) : "",
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (!message.decimals.isZero()) {
      obj.decimals = (message.decimals || Long.ZERO).toString();
    }
    if (message.baseAssetDenom !== "") {
      obj.baseAssetDenom = message.baseAssetDenom;
    }
    if (message.quoteAssetDenom !== "") {
      obj.quoteAssetDenom = message.quoteAssetDenom;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdate>): EventUpdate {
    return EventUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
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
