/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.session.v3";

export interface EventPay {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
}

export interface EventRefund {
  id: Long;
  accAddress: string;
  amount: string;
}

export interface EventUpdateDetails {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  downloadBytes: string;
  uploadBytes: string;
  duration?: Duration | undefined;
}

export interface EventUpdateStatus {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  status: Status;
  statusAt: string;
}

function createBaseEventPay(): EventPay {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", payment: "", stakingReward: "" };
}

export const EventPay = {
  encode(message: EventPay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.payment !== "") {
      writer.uint32(34).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(42).string(message.stakingReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stakingReward = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPay {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? globalThis.String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? globalThis.String(object.stakingReward) : "",
    };
  },

  toJSON(message: EventPay): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.payment !== "") {
      obj.payment = message.payment;
    }
    if (message.stakingReward !== "") {
      obj.stakingReward = message.stakingReward;
    }
    return obj;
  },

  create(base?: DeepPartial<EventPay>): EventPay {
    return EventPay.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventPay>): EventPay {
    const message = createBaseEventPay();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    return message;
  },
};

function createBaseEventRefund(): EventRefund {
  return { id: Long.UZERO, accAddress: "", amount: "" };
}

export const EventRefund = {
  encode(message: EventRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefund {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRefund {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: EventRefund): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create(base?: DeepPartial<EventRefund>): EventRefund {
    return EventRefund.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventRefund>): EventRefund {
    const message = createBaseEventRefund();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventUpdateDetails(): EventUpdateDetails {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", downloadBytes: "", uploadBytes: "", duration: undefined };
}

export const EventUpdateDetails = {
  encode(message: EventUpdateDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.downloadBytes !== "") {
      writer.uint32(34).string(message.downloadBytes);
    }
    if (message.uploadBytes !== "") {
      writer.uint32(42).string(message.uploadBytes);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(50).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.downloadBytes = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uploadBytes = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      downloadBytes: isSet(object.downloadBytes) ? globalThis.String(object.downloadBytes) : "",
      uploadBytes: isSet(object.uploadBytes) ? globalThis.String(object.uploadBytes) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: EventUpdateDetails): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.downloadBytes !== "") {
      obj.downloadBytes = message.downloadBytes;
    }
    if (message.uploadBytes !== "") {
      obj.uploadBytes = message.uploadBytes;
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    return EventUpdateDetails.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateDetails>): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.downloadBytes = object.downloadBytes ?? "";
    message.uploadBytes = object.uploadBytes ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseEventUpdateStatus(): EventUpdateStatus {
  return { id: Long.UZERO, accAddress: "", nodeAddress: "", status: 0, statusAt: "" };
}

export const EventUpdateStatus = {
  encode(message: EventUpdateStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.statusAt !== "") {
      writer.uint32(42).string(message.statusAt);
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

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accAddress = reader.string();
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

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statusAt = reader.string();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? globalThis.String(object.statusAt) : "",
    };
  },

  toJSON(message: EventUpdateStatus): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.statusAt !== "") {
      obj.statusAt = message.statusAt;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    return EventUpdateStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt ?? "";
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
