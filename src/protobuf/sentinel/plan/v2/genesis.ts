/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Plan } from "./plan";

export const protobufPackage = "sentinel.plan.v2";

export interface GenesisPlan {
  plan?: Plan | undefined;
  nodes: string[];
}

function createBaseGenesisPlan(): GenesisPlan {
  return { plan: undefined, nodes: [] };
}

export const GenesisPlan = {
  encode(message: GenesisPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nodes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPlan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisPlan {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: GenesisPlan): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    if (message.nodes?.length) {
      obj.nodes = message.nodes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisPlan>, I>>(base?: I): GenesisPlan {
    return GenesisPlan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisPlan>, I>>(object: I): GenesisPlan {
    const message = createBaseGenesisPlan();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    message.nodes = object.nodes?.map((e) => e) || [];
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
