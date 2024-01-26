/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Bandwidth } from "../../types/v1/bandwidth";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.session.v2";

export interface Session {
  id: Long;
  subscriptionId: Long;
  nodeAddress: string;
  address: string;
  bandwidth?: Bandwidth | undefined;
  duration?: Duration | undefined;
  inactiveAt?: Date | undefined;
  status: Status;
  statusAt?: Date | undefined;
}

function createBaseSession(): Session {
  return {
    id: Long.UZERO,
    subscriptionId: Long.UZERO,
    nodeAddress: "",
    address: "",
    bandwidth: undefined,
    duration: undefined,
    inactiveAt: undefined,
    status: 0,
    statusAt: undefined,
  };
}

export const Session = {
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.subscriptionId.isZero()) {
      writer.uint32(16).uint64(message.subscriptionId);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.bandwidth !== undefined) {
      Bandwidth.encode(message.bandwidth, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(50).fork()).ldelim();
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(toTimestamp(message.inactiveAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(74).fork()).ldelim();
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
          if (tag !== 16) {
            break;
          }

          message.subscriptionId = reader.uint64() as Long;
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

          message.address = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bandwidth = Bandwidth.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.inactiveAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      subscriptionId: isSet(object.subscriptionId) ? Long.fromValue(object.subscriptionId) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      bandwidth: isSet(object.bandwidth) ? Bandwidth.fromJSON(object.bandwidth) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined,
    };
  },

  toJSON(message: Session): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.subscriptionId.isZero()) {
      obj.subscriptionId = (message.subscriptionId || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.bandwidth !== undefined) {
      obj.bandwidth = Bandwidth.toJSON(message.bandwidth);
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (message.inactiveAt !== undefined) {
      obj.inactiveAt = message.inactiveAt.toISOString();
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.statusAt !== undefined) {
      obj.statusAt = message.statusAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Session>, I>>(base?: I): Session {
    return Session.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.subscriptionId = (object.subscriptionId !== undefined && object.subscriptionId !== null)
      ? Long.fromValue(object.subscriptionId)
      : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    message.address = object.address ?? "";
    message.bandwidth = (object.bandwidth !== undefined && object.bandwidth !== null)
      ? Bandwidth.fromPartial(object.bandwidth)
      : undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.inactiveAt = object.inactiveAt ?? undefined;
    message.status = object.status ?? 0;
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
