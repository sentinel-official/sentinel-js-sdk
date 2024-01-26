/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.session.v2";

export interface EventStart {
  address: string;
  nodeAddress: string;
  id: Long;
  planId: Long;
  subscriptionId: Long;
}

export interface EventUpdateDetails {
  address: string;
  nodeAddress: string;
  id: Long;
  planId: Long;
  subscriptionId: Long;
}

export interface EventUpdateStatus {
  status: Status;
  address: string;
  nodeAddress: string;
  id: Long;
  planId: Long;
  subscriptionId: Long;
}

function createBaseEventStart(): EventStart {
  return { address: "", nodeAddress: "", id: Long.UZERO, planId: Long.UZERO, subscriptionId: Long.UZERO };
}

export const EventStart = {
  encode(message: EventStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(32).uint64(message.planId);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(40).uint64(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subscriptionId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventStart {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
    };
  },

  toJSON(message: EventStart): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventStart>, I>>(base?: I): EventStart {
    return EventStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventStart>, I>>(object: I): EventStart {
    const message = createBaseEventStart();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventUpdateDetails(): EventUpdateDetails {
  return { address: "", nodeAddress: "", id: Long.UZERO, planId: Long.UZERO, subscriptionId: Long.UZERO };
}

export const EventUpdateDetails = {
  encode(message: EventUpdateDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(32).uint64(message.planId);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(40).uint64(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subscriptionId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateDetails {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateDetails): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateDetails>, I>>(base?: I): EventUpdateDetails {
    return EventUpdateDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateDetails>, I>>(object: I): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { status: 0, address: "", nodeAddress: "", id: Long.UZERO, planId: Long.UZERO, subscriptionId: Long.UZERO };
}

export const EventUpdateStatus = {
  encode(message: EventUpdateStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }
    if (!message.planId.isZero()) {
      writer.uint32(40).uint64(message.planId);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(48).uint64(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.planId = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.subscriptionId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      planId: isSet(object.planId) ? Long.fromValue(object.planId) : Long.UZERO,
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateStatus): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.planId.isZero()) {
      obj.planId = (message.planId || Long.UZERO).toString();
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateStatus>, I>>(base?: I): EventUpdateStatus {
    return EventUpdateStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateStatus>, I>>(object: I): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.planId = (object.planId !== undefined && object.planId !== null)
      ? Long.fromValue(object.planId)
      : Long.UZERO;
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
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
