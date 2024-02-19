/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.subscription.v1";

export interface Quota {
  address: string;
  allocated: string;
  consumed: string;
}

function createBaseQuota(): Quota {
  return { address: "", allocated: "", consumed: "" };
}

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.allocated !== "") {
      writer.uint32(18).string(message.allocated);
    }
    if (message.consumed !== "") {
      writer.uint32(26).string(message.consumed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();
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

          message.allocated = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.consumed = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quota {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      allocated: isSet(object.allocated) ? globalThis.String(object.allocated) : "",
      consumed: isSet(object.consumed) ? globalThis.String(object.consumed) : "",
    };
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.allocated !== "") {
      obj.allocated = message.allocated;
    }
    if (message.consumed !== "") {
      obj.consumed = message.consumed;
    }
    return obj;
  },

  create(base?: DeepPartial<Quota>): Quota {
    return Quota.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = createBaseQuota();
    message.address = object.address ?? "";
    message.allocated = object.allocated ?? "";
    message.consumed = object.consumed ?? "";
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
