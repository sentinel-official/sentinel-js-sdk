/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.provider.v2";

export interface EventRegister {
  address: string;
}

export interface EventUpdate {
  address: string;
}

function createBaseEventRegister(): EventRegister {
  return { address: "" };
}

export const EventRegister = {
  encode(message: EventRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRegister {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: EventRegister): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRegister>, I>>(base?: I): EventRegister {
    return EventRegister.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventRegister>, I>>(object: I): EventRegister {
    const message = createBaseEventRegister();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventUpdate(): EventUpdate {
  return { address: "" };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdate {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdate>, I>>(base?: I): EventUpdate {
    return EventUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdate>, I>>(object: I): EventUpdate {
    const message = createBaseEventUpdate();
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
