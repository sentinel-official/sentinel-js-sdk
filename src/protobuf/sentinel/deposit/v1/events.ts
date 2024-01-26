/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.deposit.v1";

export interface EventAdd {
  address: string;
  coins: string;
}

export interface EventSubtract {
  address: string;
  coins: string;
}

function createBaseEventAdd(): EventAdd {
  return { address: "", coins: "" };
}

export const EventAdd = {
  encode(message: EventAdd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
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
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coins = reader.string();
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      coins: isSet(object.coins) ? globalThis.String(object.coins) : "",
    };
  },

  toJSON(message: EventAdd): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.coins !== "") {
      obj.coins = message.coins;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAdd>, I>>(base?: I): EventAdd {
    return EventAdd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventAdd>, I>>(object: I): EventAdd {
    const message = createBaseEventAdd();
    message.address = object.address ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
};

function createBaseEventSubtract(): EventSubtract {
  return { address: "", coins: "" };
}

export const EventSubtract = {
  encode(message: EventSubtract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubtract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubtract();
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

          message.coins = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSubtract {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      coins: isSet(object.coins) ? globalThis.String(object.coins) : "",
    };
  },

  toJSON(message: EventSubtract): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.coins !== "") {
      obj.coins = message.coins;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSubtract>, I>>(base?: I): EventSubtract {
    return EventSubtract.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventSubtract>, I>>(object: I): EventSubtract {
    const message = createBaseEventSubtract();
    message.address = object.address ?? "";
    message.coins = object.coins ?? "";
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
