/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";

export const protobufPackage = "sentinel.session.v2";

/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequest {
  from: string;
  id: Long;
  address: string;
}

/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequest {
  from: string;
  proof?: Proof | undefined;
  signature: Uint8Array;
}

/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequest {
  from: string;
  id: Long;
  rating: Long;
}

/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponse {
}

/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {
}

/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponse {
}

function createBaseMsgStartRequest(): MsgStartRequest {
  return { from: "", id: Long.UZERO, address: "" };
}

export const MsgStartRequest = {
  encode(message: MsgStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgStartRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: MsgStartRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStartRequest>, I>>(base?: I): MsgStartRequest {
    return MsgStartRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStartRequest>, I>>(object: I): MsgStartRequest {
    const message = createBaseMsgStartRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgUpdateDetailsRequest(): MsgUpdateDetailsRequest {
  return { from: "", proof: undefined, signature: new Uint8Array(0) };
}

export const MsgUpdateDetailsRequest = {
  encode(message: MsgUpdateDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = Proof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDetailsRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgUpdateDetailsRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.proof !== undefined) {
      obj.proof = Proof.toJSON(message.proof);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDetailsRequest>, I>>(base?: I): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDetailsRequest>, I>>(object: I): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    message.from = object.from ?? "";
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgEndRequest(): MsgEndRequest {
  return { from: "", id: Long.UZERO, rating: Long.UZERO };
}

export const MsgEndRequest = {
  encode(message: MsgEndRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.rating.isZero()) {
      writer.uint32(24).uint64(message.rating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rating = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEndRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      rating: isSet(object.rating) ? Long.fromValue(object.rating) : Long.UZERO,
    };
  },

  toJSON(message: MsgEndRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.rating.isZero()) {
      obj.rating = (message.rating || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEndRequest>, I>>(base?: I): MsgEndRequest {
    return MsgEndRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEndRequest>, I>>(object: I): MsgEndRequest {
    const message = createBaseMsgEndRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.rating = (object.rating !== undefined && object.rating !== null)
      ? Long.fromValue(object.rating)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgStartResponse(): MsgStartResponse {
  return {};
}

export const MsgStartResponse = {
  encode(_: MsgStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgStartResponse {
    return {};
  },

  toJSON(_: MsgStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStartResponse>, I>>(base?: I): MsgStartResponse {
    return MsgStartResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStartResponse>, I>>(_: I): MsgStartResponse {
    const message = createBaseMsgStartResponse();
    return message;
  },
};

function createBaseMsgUpdateDetailsResponse(): MsgUpdateDetailsResponse {
  return {};
}

export const MsgUpdateDetailsResponse = {
  encode(_: MsgUpdateDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDetailsResponse {
    return {};
  },

  toJSON(_: MsgUpdateDetailsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDetailsResponse>, I>>(base?: I): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDetailsResponse>, I>>(_: I): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
    return message;
  },
};

function createBaseMsgEndResponse(): MsgEndResponse {
  return {};
}

export const MsgEndResponse = {
  encode(_: MsgEndResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgEndResponse {
    return {};
  },

  toJSON(_: MsgEndResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEndResponse>, I>>(base?: I): MsgEndResponse {
    return MsgEndResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEndResponse>, I>>(_: I): MsgEndResponse {
    const message = createBaseMsgEndResponse();
    return message;
  },
};

export interface MsgService {
  MsgStart(request: MsgStartRequest): Promise<MsgStartResponse>;
  MsgUpdateDetails(request: MsgUpdateDetailsRequest): Promise<MsgUpdateDetailsResponse>;
  MsgEnd(request: MsgEndRequest): Promise<MsgEndResponse>;
}

export const MsgServiceServiceName = "sentinel.session.v2.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgStart = this.MsgStart.bind(this);
    this.MsgUpdateDetails = this.MsgUpdateDetails.bind(this);
    this.MsgEnd = this.MsgEnd.bind(this);
  }
  MsgStart(request: MsgStartRequest): Promise<MsgStartResponse> {
    const data = MsgStartRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStart", data);
    return promise.then((data) => MsgStartResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateDetails(request: MsgUpdateDetailsRequest): Promise<MsgUpdateDetailsResponse> {
    const data = MsgUpdateDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateDetails", data);
    return promise.then((data) => MsgUpdateDetailsResponse.decode(_m0.Reader.create(data)));
  }

  MsgEnd(request: MsgEndRequest): Promise<MsgEndResponse> {
    const data = MsgEndRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgEnd", data);
    return promise.then((data) => MsgEndResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
