/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.provider.v1";

export interface Provider {
  address: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

function createBaseProvider(): Provider {
  return { address: "", name: "", identity: "", website: "", description: "" };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Provider>, I>>(base?: I): Provider {
    return Provider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
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
