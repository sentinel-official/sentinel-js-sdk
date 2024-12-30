/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "sentinel.session.v3";

export interface Proof {
  id: Long;
  downloadBytes: string;
  uploadBytes: string;
  duration?: Duration | undefined;
}

function createBaseProof(): Proof {
  return { id: Long.UZERO, downloadBytes: "", uploadBytes: "", duration: undefined };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.downloadBytes !== "") {
      writer.uint32(18).string(message.downloadBytes);
    }
    if (message.uploadBytes !== "") {
      writer.uint32(26).string(message.uploadBytes);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
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

          message.downloadBytes = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uploadBytes = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      downloadBytes: isSet(object.downloadBytes) ? globalThis.String(object.downloadBytes) : "",
      uploadBytes: isSet(object.uploadBytes) ? globalThis.String(object.uploadBytes) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.downloadBytes !== "") {
      obj.downloadBytes = message.downloadBytes;
    }
    if (message.uploadBytes !== "") {
      obj.uploadBytes = message.uploadBytes;
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create(base?: DeepPartial<Proof>): Proof {
    return Proof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.downloadBytes = object.downloadBytes ?? "";
    message.uploadBytes = object.uploadBytes ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
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
