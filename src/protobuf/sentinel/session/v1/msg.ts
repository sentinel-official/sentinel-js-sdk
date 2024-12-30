/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";

export const protobufPackage = "sentinel.session.v1";

export interface MsgEndRequest {
  from: string;
  id: Long;
  rating: Long;
}

export interface MsgStartRequest {
  from: string;
  id: Long;
  node: string;
}

export interface MsgUpdateRequest {
  from: string;
  proof?: Proof | undefined;
  signature: Uint8Array;
}

export interface MsgEndResponse {
}

export interface MsgStartResponse {
}

export interface MsgUpdateResponse {
}

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

  create(base?: DeepPartial<MsgEndRequest>): MsgEndRequest {
    return MsgEndRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgEndRequest>): MsgEndRequest {
    const message = createBaseMsgEndRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.rating = (object.rating !== undefined && object.rating !== null)
      ? Long.fromValue(object.rating)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgStartRequest(): MsgStartRequest {
  return { from: "", id: Long.UZERO, node: "" };
}

export const MsgStartRequest = {
  encode(message: MsgStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.node !== "") {
      writer.uint32(26).string(message.node);
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

          message.node = reader.string();
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
      node: isSet(object.node) ? globalThis.String(object.node) : "",
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
    if (message.node !== "") {
      obj.node = message.node;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartRequest>): MsgStartRequest {
    return MsgStartRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartRequest>): MsgStartRequest {
    const message = createBaseMsgStartRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    return message;
  },
};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return { from: "", proof: undefined, signature: new Uint8Array(0) };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequest();
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

  fromJSON(object: any): MsgUpdateRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
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

  create(base?: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    return MsgUpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.signature = object.signature ?? new Uint8Array(0);
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

  create(base?: DeepPartial<MsgEndResponse>): MsgEndResponse {
    return MsgEndResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgEndResponse>): MsgEndResponse {
    const message = createBaseMsgEndResponse();
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

  create(base?: DeepPartial<MsgStartResponse>): MsgStartResponse {
    return MsgStartResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgStartResponse>): MsgStartResponse {
    const message = createBaseMsgStartResponse();
    return message;
  },
};

function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return {};
}

export const MsgUpdateResponse = {
  encode(_: MsgUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponse();
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

  fromJSON(_: any): MsgUpdateResponse {
    return {};
  },

  toJSON(_: MsgUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse {
    return MsgUpdateResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    return message;
  },
};

export interface MsgService {
  MsgStart(request: MsgStartRequest): Promise<MsgStartResponse>;
  MsgUpdate(request: MsgUpdateRequest): Promise<MsgUpdateResponse>;
  MsgEnd(request: MsgEndRequest): Promise<MsgEndResponse>;
}

export const MsgServiceServiceName = "sentinel.session.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgStart = this.MsgStart.bind(this);
    this.MsgUpdate = this.MsgUpdate.bind(this);
    this.MsgEnd = this.MsgEnd.bind(this);
  }
  MsgStart(request: MsgStartRequest): Promise<MsgStartResponse> {
    const data = MsgStartRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStart", data);
    return promise.then((data) => MsgStartResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdate(request: MsgUpdateRequest): Promise<MsgUpdateResponse> {
    const data = MsgUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdate", data);
    return promise.then((data) => MsgUpdateResponse.decode(_m0.Reader.create(data)));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
