/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "sentinel.mint.v1";

export interface Inflation {
  max: string;
  min: string;
  rateChange: string;
  timestamp?: Date | undefined;
}

function createBaseInflation(): Inflation {
  return { max: "", min: "", rateChange: "", timestamp: undefined };
}

export const Inflation = {
  encode(message: Inflation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max !== "") {
      writer.uint32(10).string(message.max);
    }
    if (message.min !== "") {
      writer.uint32(18).string(message.min);
    }
    if (message.rateChange !== "") {
      writer.uint32(26).string(message.rateChange);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inflation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.max = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.min = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rateChange = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Inflation {
    return {
      max: isSet(object.max) ? globalThis.String(object.max) : "",
      min: isSet(object.min) ? globalThis.String(object.min) : "",
      rateChange: isSet(object.rateChange) ? globalThis.String(object.rateChange) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: Inflation): unknown {
    const obj: any = {};
    if (message.max !== "") {
      obj.max = message.max;
    }
    if (message.min !== "") {
      obj.min = message.min;
    }
    if (message.rateChange !== "") {
      obj.rateChange = message.rateChange;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Inflation>, I>>(base?: I): Inflation {
    return Inflation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Inflation>, I>>(object: I): Inflation {
    const message = createBaseInflation();
    message.max = object.max ?? "";
    message.min = object.min ?? "";
    message.rateChange = object.rateChange ?? "";
    message.timestamp = object.timestamp ?? undefined;
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
