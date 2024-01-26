/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "sentinel.node.v2";

export interface Params {
  deposit?: Coin | undefined;
  activeDuration?: Duration | undefined;
  maxGigabytePrices: Coin[];
  minGigabytePrices: Coin[];
  maxHourlyPrices: Coin[];
  minHourlyPrices: Coin[];
  maxSubscriptionGigabytes: Long;
  minSubscriptionGigabytes: Long;
  maxSubscriptionHours: Long;
  minSubscriptionHours: Long;
  stakingShare: string;
}

function createBaseParams(): Params {
  return {
    deposit: undefined,
    activeDuration: undefined,
    maxGigabytePrices: [],
    minGigabytePrices: [],
    maxHourlyPrices: [],
    minHourlyPrices: [],
    maxSubscriptionGigabytes: Long.ZERO,
    minSubscriptionGigabytes: Long.ZERO,
    maxSubscriptionHours: Long.ZERO,
    minSubscriptionHours: Long.ZERO,
    stakingShare: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.activeDuration !== undefined) {
      Duration.encode(message.activeDuration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.maxGigabytePrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minGigabytePrices) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.maxHourlyPrices) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.minHourlyPrices) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (!message.maxSubscriptionGigabytes.isZero()) {
      writer.uint32(56).int64(message.maxSubscriptionGigabytes);
    }
    if (!message.minSubscriptionGigabytes.isZero()) {
      writer.uint32(64).int64(message.minSubscriptionGigabytes);
    }
    if (!message.maxSubscriptionHours.isZero()) {
      writer.uint32(72).int64(message.maxSubscriptionHours);
    }
    if (!message.minSubscriptionHours.isZero()) {
      writer.uint32(80).int64(message.minSubscriptionHours);
    }
    if (message.stakingShare !== "") {
      writer.uint32(90).string(message.stakingShare);
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

          message.activeDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxGigabytePrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minGigabytePrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.maxHourlyPrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.minHourlyPrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxSubscriptionGigabytes = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.minSubscriptionGigabytes = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.maxSubscriptionHours = reader.int64() as Long;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.minSubscriptionHours = reader.int64() as Long;
          continue;
        case 11:
          if (tag !== 90) {
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
      activeDuration: isSet(object.activeDuration) ? Duration.fromJSON(object.activeDuration) : undefined,
      maxGigabytePrices: globalThis.Array.isArray(object?.maxGigabytePrices)
        ? object.maxGigabytePrices.map((e: any) => Coin.fromJSON(e))
        : [],
      minGigabytePrices: globalThis.Array.isArray(object?.minGigabytePrices)
        ? object.minGigabytePrices.map((e: any) => Coin.fromJSON(e))
        : [],
      maxHourlyPrices: globalThis.Array.isArray(object?.maxHourlyPrices)
        ? object.maxHourlyPrices.map((e: any) => Coin.fromJSON(e))
        : [],
      minHourlyPrices: globalThis.Array.isArray(object?.minHourlyPrices)
        ? object.minHourlyPrices.map((e: any) => Coin.fromJSON(e))
        : [],
      maxSubscriptionGigabytes: isSet(object.maxSubscriptionGigabytes)
        ? Long.fromValue(object.maxSubscriptionGigabytes)
        : Long.ZERO,
      minSubscriptionGigabytes: isSet(object.minSubscriptionGigabytes)
        ? Long.fromValue(object.minSubscriptionGigabytes)
        : Long.ZERO,
      maxSubscriptionHours: isSet(object.maxSubscriptionHours)
        ? Long.fromValue(object.maxSubscriptionHours)
        : Long.ZERO,
      minSubscriptionHours: isSet(object.minSubscriptionHours)
        ? Long.fromValue(object.minSubscriptionHours)
        : Long.ZERO,
      stakingShare: isSet(object.stakingShare) ? globalThis.String(object.stakingShare) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    if (message.activeDuration !== undefined) {
      obj.activeDuration = Duration.toJSON(message.activeDuration);
    }
    if (message.maxGigabytePrices?.length) {
      obj.maxGigabytePrices = message.maxGigabytePrices.map((e) => Coin.toJSON(e));
    }
    if (message.minGigabytePrices?.length) {
      obj.minGigabytePrices = message.minGigabytePrices.map((e) => Coin.toJSON(e));
    }
    if (message.maxHourlyPrices?.length) {
      obj.maxHourlyPrices = message.maxHourlyPrices.map((e) => Coin.toJSON(e));
    }
    if (message.minHourlyPrices?.length) {
      obj.minHourlyPrices = message.minHourlyPrices.map((e) => Coin.toJSON(e));
    }
    if (!message.maxSubscriptionGigabytes.isZero()) {
      obj.maxSubscriptionGigabytes = (message.maxSubscriptionGigabytes || Long.ZERO).toString();
    }
    if (!message.minSubscriptionGigabytes.isZero()) {
      obj.minSubscriptionGigabytes = (message.minSubscriptionGigabytes || Long.ZERO).toString();
    }
    if (!message.maxSubscriptionHours.isZero()) {
      obj.maxSubscriptionHours = (message.maxSubscriptionHours || Long.ZERO).toString();
    }
    if (!message.minSubscriptionHours.isZero()) {
      obj.minSubscriptionHours = (message.minSubscriptionHours || Long.ZERO).toString();
    }
    if (message.stakingShare !== "") {
      obj.stakingShare = message.stakingShare;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    message.activeDuration = (object.activeDuration !== undefined && object.activeDuration !== null)
      ? Duration.fromPartial(object.activeDuration)
      : undefined;
    message.maxGigabytePrices = object.maxGigabytePrices?.map((e) => Coin.fromPartial(e)) || [];
    message.minGigabytePrices = object.minGigabytePrices?.map((e) => Coin.fromPartial(e)) || [];
    message.maxHourlyPrices = object.maxHourlyPrices?.map((e) => Coin.fromPartial(e)) || [];
    message.minHourlyPrices = object.minHourlyPrices?.map((e) => Coin.fromPartial(e)) || [];
    message.maxSubscriptionGigabytes =
      (object.maxSubscriptionGigabytes !== undefined && object.maxSubscriptionGigabytes !== null)
        ? Long.fromValue(object.maxSubscriptionGigabytes)
        : Long.ZERO;
    message.minSubscriptionGigabytes =
      (object.minSubscriptionGigabytes !== undefined && object.minSubscriptionGigabytes !== null)
        ? Long.fromValue(object.minSubscriptionGigabytes)
        : Long.ZERO;
    message.maxSubscriptionHours = (object.maxSubscriptionHours !== undefined && object.maxSubscriptionHours !== null)
      ? Long.fromValue(object.maxSubscriptionHours)
      : Long.ZERO;
    message.minSubscriptionHours = (object.minSubscriptionHours !== undefined && object.minSubscriptionHours !== null)
      ? Long.fromValue(object.minSubscriptionHours)
      : Long.ZERO;
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
