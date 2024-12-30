/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.lease.v1";

export interface Params {
  maxLeaseHours: Long;
  minLeaseHours: Long;
  stakingShare: string;
}

function createBaseParams(): Params {
  return { maxLeaseHours: Long.ZERO, minLeaseHours: Long.ZERO, stakingShare: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxLeaseHours.isZero()) {
      writer.uint32(8).int64(message.maxLeaseHours);
    }
    if (!message.minLeaseHours.isZero()) {
      writer.uint32(16).int64(message.minLeaseHours);
    }
    if (message.stakingShare !== "") {
      writer.uint32(26).string(message.stakingShare);
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
          if (tag !== 8) {
            break;
          }

          message.maxLeaseHours = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minLeaseHours = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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
      maxLeaseHours: isSet(object.maxLeaseHours) ? Long.fromValue(object.maxLeaseHours) : Long.ZERO,
      minLeaseHours: isSet(object.minLeaseHours) ? Long.fromValue(object.minLeaseHours) : Long.ZERO,
      stakingShare: isSet(object.stakingShare) ? globalThis.String(object.stakingShare) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (!message.maxLeaseHours.isZero()) {
      obj.maxLeaseHours = (message.maxLeaseHours || Long.ZERO).toString();
    }
    if (!message.minLeaseHours.isZero()) {
      obj.minLeaseHours = (message.minLeaseHours || Long.ZERO).toString();
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
    message.maxLeaseHours = (object.maxLeaseHours !== undefined && object.maxLeaseHours !== null)
      ? Long.fromValue(object.maxLeaseHours)
      : Long.ZERO;
    message.minLeaseHours = (object.minLeaseHours !== undefined && object.minLeaseHours !== null)
      ? Long.fromValue(object.minLeaseHours)
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
