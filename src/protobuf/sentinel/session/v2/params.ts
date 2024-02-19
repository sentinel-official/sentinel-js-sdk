/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "sentinel.session.v2";

export interface Params {
  statusChangeDelay?: Duration | undefined;
  proofVerificationEnabled: boolean;
}

function createBaseParams(): Params {
  return { statusChangeDelay: undefined, proofVerificationEnabled: false };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusChangeDelay !== undefined) {
      Duration.encode(message.statusChangeDelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofVerificationEnabled === true) {
      writer.uint32(16).bool(message.proofVerificationEnabled);
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

          message.statusChangeDelay = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.proofVerificationEnabled = reader.bool();
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
      statusChangeDelay: isSet(object.statusChangeDelay) ? Duration.fromJSON(object.statusChangeDelay) : undefined,
      proofVerificationEnabled: isSet(object.proofVerificationEnabled)
        ? globalThis.Boolean(object.proofVerificationEnabled)
        : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.statusChangeDelay !== undefined) {
      obj.statusChangeDelay = Duration.toJSON(message.statusChangeDelay);
    }
    if (message.proofVerificationEnabled === true) {
      obj.proofVerificationEnabled = message.proofVerificationEnabled;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.statusChangeDelay = (object.statusChangeDelay !== undefined && object.statusChangeDelay !== null)
      ? Duration.fromPartial(object.statusChangeDelay)
      : undefined;
    message.proofVerificationEnabled = object.proofVerificationEnabled ?? false;
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
