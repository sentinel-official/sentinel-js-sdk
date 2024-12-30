/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Price } from "../../types/v1/price";

export const protobufPackage = "sentinel.node.v3";

export interface Params {
  deposit?: Coin | undefined;
  activeDuration?: Duration | undefined;
  minGigabytePrices: Price[];
  minHourlyPrices: Price[];
  maxSessionGigabytes: Long;
  minSessionGigabytes: Long;
  maxSessionHours: Long;
  minSessionHours: Long;
  stakingShare: string;
}

function createBaseParams(): Params {
  return {
    deposit: undefined,
    activeDuration: undefined,
    minGigabytePrices: [],
    minHourlyPrices: [],
    maxSessionGigabytes: Long.ZERO,
    minSessionGigabytes: Long.ZERO,
    maxSessionHours: Long.ZERO,
    minSessionHours: Long.ZERO,
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
    for (const v of message.minGigabytePrices) {
      Price.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minHourlyPrices) {
      Price.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.maxSessionGigabytes.isZero()) {
      writer.uint32(40).int64(message.maxSessionGigabytes);
    }
    if (!message.minSessionGigabytes.isZero()) {
      writer.uint32(48).int64(message.minSessionGigabytes);
    }
    if (!message.maxSessionHours.isZero()) {
      writer.uint32(56).int64(message.maxSessionHours);
    }
    if (!message.minSessionHours.isZero()) {
      writer.uint32(64).int64(message.minSessionHours);
    }
    if (message.stakingShare !== "") {
      writer.uint32(74).string(message.stakingShare);
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

          message.minGigabytePrices.push(Price.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minHourlyPrices.push(Price.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxSessionGigabytes = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.minSessionGigabytes = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxSessionHours = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.minSessionHours = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
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
      minGigabytePrices: globalThis.Array.isArray(object?.minGigabytePrices)
        ? object.minGigabytePrices.map((e: any) => Price.fromJSON(e))
        : [],
      minHourlyPrices: globalThis.Array.isArray(object?.minHourlyPrices)
        ? object.minHourlyPrices.map((e: any) => Price.fromJSON(e))
        : [],
      maxSessionGigabytes: isSet(object.maxSessionGigabytes) ? Long.fromValue(object.maxSessionGigabytes) : Long.ZERO,
      minSessionGigabytes: isSet(object.minSessionGigabytes) ? Long.fromValue(object.minSessionGigabytes) : Long.ZERO,
      maxSessionHours: isSet(object.maxSessionHours) ? Long.fromValue(object.maxSessionHours) : Long.ZERO,
      minSessionHours: isSet(object.minSessionHours) ? Long.fromValue(object.minSessionHours) : Long.ZERO,
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
    if (message.minGigabytePrices?.length) {
      obj.minGigabytePrices = message.minGigabytePrices.map((e) => Price.toJSON(e));
    }
    if (message.minHourlyPrices?.length) {
      obj.minHourlyPrices = message.minHourlyPrices.map((e) => Price.toJSON(e));
    }
    if (!message.maxSessionGigabytes.isZero()) {
      obj.maxSessionGigabytes = (message.maxSessionGigabytes || Long.ZERO).toString();
    }
    if (!message.minSessionGigabytes.isZero()) {
      obj.minSessionGigabytes = (message.minSessionGigabytes || Long.ZERO).toString();
    }
    if (!message.maxSessionHours.isZero()) {
      obj.maxSessionHours = (message.maxSessionHours || Long.ZERO).toString();
    }
    if (!message.minSessionHours.isZero()) {
      obj.minSessionHours = (message.minSessionHours || Long.ZERO).toString();
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
    message.activeDuration = (object.activeDuration !== undefined && object.activeDuration !== null)
      ? Duration.fromPartial(object.activeDuration)
      : undefined;
    message.minGigabytePrices = object.minGigabytePrices?.map((e) => Price.fromPartial(e)) || [];
    message.minHourlyPrices = object.minHourlyPrices?.map((e) => Price.fromPartial(e)) || [];
    message.maxSessionGigabytes = (object.maxSessionGigabytes !== undefined && object.maxSessionGigabytes !== null)
      ? Long.fromValue(object.maxSessionGigabytes)
      : Long.ZERO;
    message.minSessionGigabytes = (object.minSessionGigabytes !== undefined && object.minSessionGigabytes !== null)
      ? Long.fromValue(object.minSessionGigabytes)
      : Long.ZERO;
    message.maxSessionHours = (object.maxSessionHours !== undefined && object.maxSessionHours !== null)
      ? Long.fromValue(object.maxSessionHours)
      : Long.ZERO;
    message.minSessionHours = (object.minSessionHours !== undefined && object.minSessionHours !== null)
      ? Long.fromValue(object.minSessionHours)
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
