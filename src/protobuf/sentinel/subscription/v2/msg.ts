/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.subscription.v2";

export interface MsgAllocateRequest {
  from: string;
  id: Long;
  address: string;
  bytes: string;
}

export interface MsgCancelRequest {
  from: string;
  id: Long;
}

export interface MsgAllocateResponse {
}

export interface MsgCancelResponse {
}

function createBaseMsgAllocateRequest(): MsgAllocateRequest {
  return { from: "", id: Long.UZERO, address: "", bytes: "" };
}

export const MsgAllocateRequest = {
  encode(message: MsgAllocateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAllocateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocateRequest();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bytes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAllocateRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
    };
  },

  toJSON(message: MsgAllocateRequest): unknown {
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
    if (message.bytes !== "") {
      obj.bytes = message.bytes;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAllocateRequest>): MsgAllocateRequest {
    return MsgAllocateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAllocateRequest>): MsgAllocateRequest {
    const message = createBaseMsgAllocateRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  },
};

function createBaseMsgCancelRequest(): MsgCancelRequest {
  return { from: "", id: Long.UZERO };
}

export const MsgCancelRequest = {
  encode(message: MsgCancelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCancelRequest>): MsgCancelRequest {
    return MsgCancelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCancelRequest>): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgAllocateResponse(): MsgAllocateResponse {
  return {};
}

export const MsgAllocateResponse = {
  encode(_: MsgAllocateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAllocateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocateResponse();
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

  fromJSON(_: any): MsgAllocateResponse {
    return {};
  },

  toJSON(_: MsgAllocateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAllocateResponse>): MsgAllocateResponse {
    return MsgAllocateResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgAllocateResponse>): MsgAllocateResponse {
    const message = createBaseMsgAllocateResponse();
    return message;
  },
};

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();
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

  fromJSON(_: any): MsgCancelResponse {
    return {};
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    return MsgCancelResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
};

export interface MsgService {
  MsgAllocate(request: MsgAllocateRequest): Promise<MsgAllocateResponse>;
  MsgCancel(request: MsgCancelRequest): Promise<MsgCancelResponse>;
}

export const MsgServiceServiceName = "sentinel.subscription.v2.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgAllocate = this.MsgAllocate.bind(this);
    this.MsgCancel = this.MsgCancel.bind(this);
  }
  MsgAllocate(request: MsgAllocateRequest): Promise<MsgAllocateResponse> {
    const data = MsgAllocateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgAllocate", data);
    return promise.then((data) => MsgAllocateResponse.decode(_m0.Reader.create(data)));
  }

  MsgCancel(request: MsgCancelRequest): Promise<MsgCancelResponse> {
    const data = MsgCancelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCancel", data);
    return promise.then((data) => MsgCancelResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
