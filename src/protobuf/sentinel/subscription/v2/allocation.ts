/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.subscription.v2";

export interface Allocation {
  id: Long;
  address: string;
  grantedBytes: string;
  utilisedBytes: string;
}

function createBaseAllocation(): Allocation {
  return { id: Long.UZERO, address: "", grantedBytes: "", utilisedBytes: "" };
}

export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.grantedBytes !== "") {
      writer.uint32(26).string(message.grantedBytes);
    }
    if (message.utilisedBytes !== "") {
      writer.uint32(34).string(message.utilisedBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.grantedBytes = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.utilisedBytes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      grantedBytes: isSet(object.grantedBytes) ? globalThis.String(object.grantedBytes) : "",
      utilisedBytes: isSet(object.utilisedBytes) ? globalThis.String(object.utilisedBytes) : "",
    };
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.grantedBytes !== "") {
      obj.grantedBytes = message.grantedBytes;
    }
    if (message.utilisedBytes !== "") {
      obj.utilisedBytes = message.utilisedBytes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Allocation>, I>>(base?: I): Allocation {
    return Allocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Allocation>, I>>(object: I): Allocation {
    const message = createBaseAllocation();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.grantedBytes = object.grantedBytes ?? "";
    message.utilisedBytes = object.utilisedBytes ?? "";
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
