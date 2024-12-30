/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState1 } from "../../deposit/v1/genesis";
import { GenesisState as GenesisState2 } from "../../lease/v1/genesis";
import { GenesisState as GenesisState3 } from "../../node/v3/genesis";
import { GenesisState as GenesisState4 } from "../../plan/v3/genesis";
import { GenesisState as GenesisState5 } from "../../provider/v2/genesis";
import { GenesisState as GenesisState6 } from "../../session/v3/genesis";
import { GenesisState as GenesisState7 } from "../../subscription/v3/genesis";

export const protobufPackage = "sentinel.vpn.v1";

export interface GenesisState {
  deposit?: GenesisState1 | undefined;
  lease?: GenesisState2 | undefined;
  node?: GenesisState3 | undefined;
  plan?: GenesisState4 | undefined;
  provider?: GenesisState5 | undefined;
  session?: GenesisState6 | undefined;
  subscription?: GenesisState7 | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    deposit: undefined,
    lease: undefined,
    node: undefined,
    plan: undefined,
    provider: undefined,
    session: undefined,
    subscription: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      GenesisState1.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.lease !== undefined) {
      GenesisState2.encode(message.lease, writer.uint32(18).fork()).ldelim();
    }
    if (message.node !== undefined) {
      GenesisState3.encode(message.node, writer.uint32(26).fork()).ldelim();
    }
    if (message.plan !== undefined) {
      GenesisState4.encode(message.plan, writer.uint32(34).fork()).ldelim();
    }
    if (message.provider !== undefined) {
      GenesisState5.encode(message.provider, writer.uint32(42).fork()).ldelim();
    }
    if (message.session !== undefined) {
      GenesisState6.encode(message.session, writer.uint32(50).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      GenesisState7.encode(message.subscription, writer.uint32(58).fork()).ldelim();
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

          message.deposit = GenesisState1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lease = GenesisState2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.node = GenesisState3.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.plan = GenesisState4.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.provider = GenesisState5.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.session = GenesisState6.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subscription = GenesisState7.decode(reader, reader.uint32());
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
      deposit: isSet(object.deposit) ? GenesisState1.fromJSON(object.deposit) : undefined,
      lease: isSet(object.lease) ? GenesisState2.fromJSON(object.lease) : undefined,
      node: isSet(object.node) ? GenesisState3.fromJSON(object.node) : undefined,
      plan: isSet(object.plan) ? GenesisState4.fromJSON(object.plan) : undefined,
      provider: isSet(object.provider) ? GenesisState5.fromJSON(object.provider) : undefined,
      session: isSet(object.session) ? GenesisState6.fromJSON(object.session) : undefined,
      subscription: isSet(object.subscription) ? GenesisState7.fromJSON(object.subscription) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.deposit !== undefined) {
      obj.deposit = GenesisState1.toJSON(message.deposit);
    }
    if (message.lease !== undefined) {
      obj.lease = GenesisState2.toJSON(message.lease);
    }
    if (message.node !== undefined) {
      obj.node = GenesisState3.toJSON(message.node);
    }
    if (message.plan !== undefined) {
      obj.plan = GenesisState4.toJSON(message.plan);
    }
    if (message.provider !== undefined) {
      obj.provider = GenesisState5.toJSON(message.provider);
    }
    if (message.session !== undefined) {
      obj.session = GenesisState6.toJSON(message.session);
    }
    if (message.subscription !== undefined) {
      obj.subscription = GenesisState7.toJSON(message.subscription);
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? GenesisState1.fromPartial(object.deposit)
      : undefined;
    message.lease = (object.lease !== undefined && object.lease !== null)
      ? GenesisState2.fromPartial(object.lease)
      : undefined;
    message.node = (object.node !== undefined && object.node !== null)
      ? GenesisState3.fromPartial(object.node)
      : undefined;
    message.plan = (object.plan !== undefined && object.plan !== null)
      ? GenesisState4.fromPartial(object.plan)
      : undefined;
    message.provider = (object.provider !== undefined && object.provider !== null)
      ? GenesisState5.fromPartial(object.provider)
      : undefined;
    message.session = (object.session !== undefined && object.session !== null)
      ? GenesisState6.fromPartial(object.session)
      : undefined;
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? GenesisState7.fromPartial(object.subscription)
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
