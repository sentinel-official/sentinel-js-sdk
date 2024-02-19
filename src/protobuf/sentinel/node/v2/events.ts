/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v2";

export interface EventRegister {
  address: string;
}

export interface EventUpdateDetails {
  address: string;
  gigabytePrices: string;
  hourlyPrices: string;
  remoteUrl: string;
}

export interface EventUpdateStatus {
  status: Status;
  address: string;
}

export interface EventCreateSubscription {
  address: string;
  nodeAddress: string;
  id: Long;
}

function createBaseEventRegister(): EventRegister {
  return { address: "" };
}

export const EventRegister = {
  encode(message: EventRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRegister {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: EventRegister): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRegister>): EventRegister {
    return EventRegister.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRegister>): EventRegister {
    const message = createBaseEventRegister();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventUpdateDetails(): EventUpdateDetails {
  return { address: "", gigabytePrices: "", hourlyPrices: "", remoteUrl: "" };
}

export const EventUpdateDetails = {
  encode(message: EventUpdateDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.gigabytePrices !== "") {
      writer.uint32(18).string(message.gigabytePrices);
    }
    if (message.hourlyPrices !== "") {
      writer.uint32(26).string(message.hourlyPrices);
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
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

          message.gigabytePrices = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.remoteUrl = reader.string();
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
      gigabytePrices: isSet(object.gigabytePrices) ? globalThis.String(object.gigabytePrices) : "",
      hourlyPrices: isSet(object.hourlyPrices) ? globalThis.String(object.hourlyPrices) : "",
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: EventUpdateDetails): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.gigabytePrices !== "") {
      obj.gigabytePrices = message.gigabytePrices;
    }
    if (message.hourlyPrices !== "") {
      obj.hourlyPrices = message.hourlyPrices;
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    return EventUpdateDetails.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.address = object.address ?? "";
    message.gigabytePrices = object.gigabytePrices ?? "";
    message.hourlyPrices = object.hourlyPrices ?? "";
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { status: 0, address: "" };
}

export const EventUpdateStatus = {
  encode(message: EventUpdateStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
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
    return obj;
  },

  create(base?: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    return EventUpdateStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventCreateSubscription(): EventCreateSubscription {
  return { address: "", nodeAddress: "", id: Long.UZERO };
}

export const EventCreateSubscription = {
  encode(message: EventCreateSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateSubscription();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateSubscription {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: EventCreateSubscription): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<EventCreateSubscription>): EventCreateSubscription {
    return EventCreateSubscription.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreateSubscription>): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
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
