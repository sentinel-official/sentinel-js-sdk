/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.subscription.v3";

export interface Session {
  id: Long;
  accAddress: string;
  nodeAddress: string;
  subscriptionId: Long;
  downloadBytes: string;
  uploadBytes: string;
  duration?: Duration | undefined;
  status: Status;
  inactiveAt?: Date | undefined;
  statusAt?: Date | undefined;
}

function createBaseSession(): Session {
  return {
    id: Long.UZERO,
    accAddress: "",
    nodeAddress: "",
    subscriptionId: Long.UZERO,
    downloadBytes: "",
    uploadBytes: "",
    duration: undefined,
    status: 0,
    inactiveAt: undefined,
    statusAt: undefined,
  };
}

export const Session = {
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(18).string(message.accAddress);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(32).uint64(message.subscriptionId);
    }
    if (message.downloadBytes !== "") {
      writer.uint32(42).string(message.downloadBytes);
    }
    if (message.uploadBytes !== "") {
      writer.uint32(50).string(message.uploadBytes);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
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

          message.subscriptionId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.downloadBytes = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.uploadBytes = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.statusAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
      downloadBytes: isSet(object.downloadBytes) ? globalThis.String(object.downloadBytes) : "",
      uploadBytes: isSet(object.uploadBytes) ? globalThis.String(object.uploadBytes) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Session): unknown {
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
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
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
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.inactiveAt !== undefined) {
      obj.inactiveAt = message.inactiveAt.toISOString();
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Session>): Session {
    return Session.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Session>): Session {
    const message = createBaseSession();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    message.downloadBytes = object.downloadBytes ?? "";
    message.uploadBytes = object.uploadBytes ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.status = object.status ?? 0;
    message.inactiveAt = object.inactiveAt ?? undefined;
    message.statusAt = object.statusAt ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
