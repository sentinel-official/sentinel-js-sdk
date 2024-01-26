/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Deposit } from "../../deposit/v1/deposit";
import { GenesisState as GenesisState1 } from "../../node/v2/genesis";
import { GenesisPlan } from "../../plan/v2/genesis";
import { GenesisState as GenesisState2 } from "../../provider/v2/genesis";
import { GenesisState as GenesisState3 } from "../../session/v2/genesis";
import { GenesisState as GenesisState4 } from "../../subscription/v2/genesis";

export const protobufPackage = "sentinel.vpn.v1";

export interface GenesisState {
  deposits: Deposit[];
  nodes?: GenesisState1 | undefined;
  plans: GenesisPlan[];
  providers?: GenesisState2 | undefined;
  sessions?: GenesisState3 | undefined;
  subscriptions?: GenesisState4 | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    deposits: [],
    nodes: undefined,
    plans: [],
    providers: undefined,
    sessions: undefined,
    subscriptions: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodes !== undefined) {
      GenesisState1.encode(message.nodes, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.plans) {
      GenesisPlan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.providers !== undefined) {
      GenesisState2.encode(message.providers, writer.uint32(34).fork()).ldelim();
    }
    if (message.sessions !== undefined) {
      GenesisState3.encode(message.sessions, writer.uint32(42).fork()).ldelim();
    }
    if (message.subscriptions !== undefined) {
      GenesisState4.encode(message.subscriptions, writer.uint32(50).fork()).ldelim();
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

          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodes = GenesisState1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.plans.push(GenesisPlan.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.providers = GenesisState2.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sessions = GenesisState3.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.subscriptions = GenesisState4.decode(reader, reader.uint32());
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
      deposits: globalThis.Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      nodes: isSet(object.nodes) ? GenesisState1.fromJSON(object.nodes) : undefined,
      plans: globalThis.Array.isArray(object?.plans) ? object.plans.map((e: any) => GenesisPlan.fromJSON(e)) : [],
      providers: isSet(object.providers) ? GenesisState2.fromJSON(object.providers) : undefined,
      sessions: isSet(object.sessions) ? GenesisState3.fromJSON(object.sessions) : undefined,
      subscriptions: isSet(object.subscriptions) ? GenesisState4.fromJSON(object.subscriptions) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.deposits?.length) {
      obj.deposits = message.deposits.map((e) => Deposit.toJSON(e));
    }
    if (message.nodes !== undefined) {
      obj.nodes = GenesisState1.toJSON(message.nodes);
    }
    if (message.plans?.length) {
      obj.plans = message.plans.map((e) => GenesisPlan.toJSON(e));
    }
    if (message.providers !== undefined) {
      obj.providers = GenesisState2.toJSON(message.providers);
    }
    if (message.sessions !== undefined) {
      obj.sessions = GenesisState3.toJSON(message.sessions);
    }
    if (message.subscriptions !== undefined) {
      obj.subscriptions = GenesisState4.toJSON(message.subscriptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    message.nodes = (object.nodes !== undefined && object.nodes !== null)
      ? GenesisState1.fromPartial(object.nodes)
      : undefined;
    message.plans = object.plans?.map((e) => GenesisPlan.fromPartial(e)) || [];
    message.providers = (object.providers !== undefined && object.providers !== null)
      ? GenesisState2.fromPartial(object.providers)
      : undefined;
    message.sessions = (object.sessions !== undefined && object.sessions !== null)
      ? GenesisState3.fromPartial(object.sessions)
      : undefined;
    message.subscriptions = (object.subscriptions !== undefined && object.subscriptions !== null)
      ? GenesisState4.fromPartial(object.subscriptions)
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
