/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.oracle.v1";

export interface Asset {
  denom: string;
  decimals: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
  price: string;
  height: Long;
}

function createBaseAsset(): Asset {
  return { denom: "", decimals: Long.ZERO, baseAssetDenom: "", quoteAssetDenom: "", price: "", height: Long.ZERO };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(16).int64(message.decimals);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(26).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(34).string(message.quoteAssetDenom);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (!message.height.isZero()) {
      writer.uint32(48).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
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
          if (tag !== 16) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baseAssetDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.quoteAssetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.price = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? globalThis.String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? globalThis.String(object.quoteAssetDenom) : "",
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: Asset): unknown {
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
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (!message.height.isZero()) {
      obj.height = (message.height || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Asset>): Asset {
    return Asset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    message.price = object.price ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
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
