/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.types.v1";

export interface Price {
  denom: string;
  baseValue: string;
  quoteValue: string;
}

function createBasePrice(): Price {
  return { denom: "", baseValue: "", quoteValue: "" };
}

export const Price = {
  encode(message: Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.baseValue !== "") {
      writer.uint32(18).string(message.baseValue);
    }
    if (message.quoteValue !== "") {
      writer.uint32(26).string(message.quoteValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Price {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.baseValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Price {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      baseValue: isSet(object.baseValue) ? globalThis.String(object.baseValue) : "",
      quoteValue: isSet(object.quoteValue) ? globalThis.String(object.quoteValue) : "",
    };
  },

  toJSON(message: Price): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.baseValue !== "") {
      obj.baseValue = message.baseValue;
    }
    if (message.quoteValue !== "") {
      obj.quoteValue = message.quoteValue;
    }
    return obj;
  },

  create(base?: DeepPartial<Price>): Price {
    return Price.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Price>): Price {
    const message = createBasePrice();
    message.denom = object.denom ?? "";
    message.baseValue = object.baseValue ?? "";
    message.quoteValue = object.quoteValue ?? "";
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
