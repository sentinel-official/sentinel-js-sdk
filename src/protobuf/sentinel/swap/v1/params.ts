/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.swap.v1";

export interface Params {
  swapEnabled: boolean;
  swapDenom: string;
  approveBy: string;
}

function createBaseParams(): Params {
  return { swapEnabled: false, swapDenom: "", approveBy: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapEnabled === true) {
      writer.uint32(8).bool(message.swapEnabled);
    }
    if (message.swapDenom !== "") {
      writer.uint32(18).string(message.swapDenom);
    }
    if (message.approveBy !== "") {
      writer.uint32(26).string(message.approveBy);
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

          message.swapEnabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.approveBy = reader.string();
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
      swapEnabled: isSet(object.swapEnabled) ? globalThis.Boolean(object.swapEnabled) : false,
      swapDenom: isSet(object.swapDenom) ? globalThis.String(object.swapDenom) : "",
      approveBy: isSet(object.approveBy) ? globalThis.String(object.approveBy) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.swapEnabled === true) {
      obj.swapEnabled = message.swapEnabled;
    }
    if (message.swapDenom !== "") {
      obj.swapDenom = message.swapDenom;
    }
    if (message.approveBy !== "") {
      obj.approveBy = message.approveBy;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.swapEnabled = object.swapEnabled ?? false;
    message.swapDenom = object.swapDenom ?? "";
    message.approveBy = object.approveBy ?? "";
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
