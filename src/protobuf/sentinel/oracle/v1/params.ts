/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "sentinel.oracle.v1";

export interface Params {
  blockInterval: Long;
  channelId: string;
  portId: string;
  timeout?: Duration | undefined;
}

function createBaseParams(): Params {
  return { blockInterval: Long.ZERO, channelId: "", portId: "", timeout: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockInterval.isZero()) {
      writer.uint32(8).int64(message.blockInterval);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(34).fork()).ldelim();
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

          message.blockInterval = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
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
      blockInterval: isSet(object.blockInterval) ? Long.fromValue(object.blockInterval) : Long.ZERO,
      channelId: isSet(object.channelId) ? globalThis.String(object.channelId) : "",
      portId: isSet(object.portId) ? globalThis.String(object.portId) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (!message.blockInterval.isZero()) {
      obj.blockInterval = (message.blockInterval || Long.ZERO).toString();
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.blockInterval = (object.blockInterval !== undefined && object.blockInterval !== null)
      ? Long.fromValue(object.blockInterval)
      : Long.ZERO;
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
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
