/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Quota } from "./quota";
import { Subscription } from "./subscription";

export const protobufPackage = "sentinel.subscription.v1";

export interface GenesisSubscription {
  subscription?: Subscription | undefined;
  quotas: Quota[];
}

export interface GenesisState {
  subscriptions: GenesisSubscription[];
  params?: Params | undefined;
}

function createBaseGenesisSubscription(): GenesisSubscription {
  return { subscription: undefined, quotas: [] };
}

export const GenesisSubscription = {
  encode(message: GenesisSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.quotas) {
      Quota.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.subscription = Subscription.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quotas.push(Quota.decode(reader, reader.uint32()));
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
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
      quotas: globalThis.Array.isArray(object?.quotas) ? object.quotas.map((e: any) => Quota.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisSubscription): unknown {
    const obj: any = {};
    if (message.subscription !== undefined) {
      obj.subscription = Subscription.toJSON(message.subscription);
    }
    if (message.quotas?.length) {
      obj.quotas = message.quotas.map((e) => Quota.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisSubscription>): GenesisSubscription {
    return GenesisSubscription.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisSubscription>): GenesisSubscription {
    const message = createBaseGenesisSubscription();
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Subscription.fromPartial(object.subscription)
      : undefined;
    message.quotas = object.quotas?.map((e) => Quota.fromPartial(e)) || [];
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

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
