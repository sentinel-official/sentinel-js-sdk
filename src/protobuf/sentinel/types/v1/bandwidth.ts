/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.types.v1";

export interface Bandwidth {
  upload: string;
  download: string;
}

function createBaseBandwidth(): Bandwidth {
  return { upload: "", download: "" };
}

export const Bandwidth = {
  encode(message: Bandwidth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upload !== "") {
      writer.uint32(10).string(message.upload);
    }
    if (message.download !== "") {
      writer.uint32(18).string(message.download);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bandwidth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandwidth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.upload = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.download = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bandwidth {
    return {
      upload: isSet(object.upload) ? globalThis.String(object.upload) : "",
      download: isSet(object.download) ? globalThis.String(object.download) : "",
    };
  },

  toJSON(message: Bandwidth): unknown {
    const obj: any = {};
    if (message.upload !== "") {
      obj.upload = message.upload;
    }
    if (message.download !== "") {
      obj.download = message.download;
    }
    return obj;
  },

  create(base?: DeepPartial<Bandwidth>): Bandwidth {
    return Bandwidth.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Bandwidth>): Bandwidth {
    const message = createBaseBandwidth();
    message.upload = object.upload ?? "";
    message.download = object.download ?? "";
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
