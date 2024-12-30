/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "sentinel.node.v1";

export interface Params {
  deposit?: Coin | undefined;
  inactiveDuration?: Duration | undefined;
  maxPrice: Coin[];
  minPrice: Coin[];
  stakingShare: string;
}

function createBaseParams(): Params {
  return { deposit: undefined, inactiveDuration: undefined, maxPrice: [], minPrice: [], stakingShare: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.inactiveDuration !== undefined) {
      Duration.encode(message.inactiveDuration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.maxPrice) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minPrice) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakingShare !== "") {
      writer.uint32(42).string(message.stakingShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inactiveDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxPrice.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minPrice.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stakingShare = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      inactiveDuration: isSet(object.inactiveDuration) ? Duration.fromJSON(object.inactiveDuration) : undefined,
      maxPrice: globalThis.Array.isArray(object?.maxPrice) ? object.maxPrice.map((e: any) => Coin.fromJSON(e)) : [],
      minPrice: globalThis.Array.isArray(object?.minPrice) ? object.minPrice.map((e: any) => Coin.fromJSON(e)) : [],
      stakingShare: isSet(object.stakingShare) ? globalThis.String(object.stakingShare) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    if (message.inactiveDuration !== undefined) {
      obj.inactiveDuration = Duration.toJSON(message.inactiveDuration);
    }
    if (message.maxPrice?.length) {
      obj.maxPrice = message.maxPrice.map((e) => Coin.toJSON(e));
    }
    if (message.minPrice?.length) {
      obj.minPrice = message.minPrice.map((e) => Coin.toJSON(e));
    }
    if (message.stakingShare !== "") {
      obj.stakingShare = message.stakingShare;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    message.inactiveDuration = (object.inactiveDuration !== undefined && object.inactiveDuration !== null)
      ? Duration.fromPartial(object.inactiveDuration)
      : undefined;
    message.maxPrice = object.maxPrice?.map((e) => Coin.fromPartial(e)) || [];
    message.minPrice = object.minPrice?.map((e) => Coin.fromPartial(e)) || [];
    message.stakingShare = object.stakingShare ?? "";
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
