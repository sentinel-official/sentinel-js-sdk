/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Allocation } from "./allocation";
import { Params } from "./params";

export const protobufPackage = "sentinel.subscription.v2";

export interface GenesisSubscription {
  subscription?: Any | undefined;
  allocations: Allocation[];
}

export interface GenesisState {
  subscriptions: GenesisSubscription[];
  params?: Params | undefined;
}

function createBaseGenesisSubscription(): GenesisSubscription {
  return { subscription: undefined, allocations: [] };
}

export const GenesisSubscription = {
  encode(message: GenesisSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      Any.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscription = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisSubscription {
    return {
      subscription: isSet(object.subscription) ? Any.fromJSON(object.subscription) : undefined,
      allocations: globalThis.Array.isArray(object?.allocations)
        ? object.allocations.map((e: any) => Allocation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisSubscription): unknown {
    const obj: any = {};
    if (message.subscription !== undefined) {
      obj.subscription = Any.toJSON(message.subscription);
    }
    if (message.allocations?.length) {
      obj.allocations = message.allocations.map((e) => Allocation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisSubscription>, I>>(base?: I): GenesisSubscription {
    return GenesisSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisSubscription>, I>>(object: I): GenesisSubscription {
    const message = createBaseGenesisSubscription();
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Any.fromPartial(object.subscription)
      : undefined;
    message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { subscriptions: [], params: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      GenesisSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(GenesisSubscription.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => GenesisSubscription.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => GenesisSubscription.toJSON(e));
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.subscriptions = object.subscriptions?.map((e) => GenesisSubscription.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
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
