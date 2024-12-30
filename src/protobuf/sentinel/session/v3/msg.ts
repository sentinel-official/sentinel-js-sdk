/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "../v2/params";

export const protobufPackage = "sentinel.session.v3";

export interface MsgCancelSessionRequest {
  from: string;
  id: Long;
}

export interface MsgUpdateSessionRequest {
  from: string;
  id: Long;
  downloadBytes: string;
  uploadBytes: string;
  duration?: Duration | undefined;
  signature: Uint8Array;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgCancelSessionResponse {
}

export interface MsgUpdateSessionResponse {
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgCancelSessionRequest(): MsgCancelSessionRequest {
  return { from: "", id: Long.UZERO };
}

export const MsgCancelSessionRequest = {
  encode(message: MsgCancelSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSessionRequest();
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

  fromJSON(object: any): MsgCancelSessionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelSessionRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSessionRequest>): MsgCancelSessionRequest {
    return MsgCancelSessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCancelSessionRequest>): MsgCancelSessionRequest {
    const message = createBaseMsgCancelSessionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateSessionRequest(): MsgUpdateSessionRequest {
  return {
    from: "",
    id: Long.UZERO,
    downloadBytes: "",
    uploadBytes: "",
    duration: undefined,
    signature: new Uint8Array(0),
  };
}

export const MsgUpdateSessionRequest = {
  encode(message: MsgUpdateSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.downloadBytes !== "") {
      writer.uint32(26).string(message.downloadBytes);
    }
    if (message.uploadBytes !== "") {
      writer.uint32(34).string(message.uploadBytes);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(50).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSessionRequest();
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

          message.downloadBytes = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uploadBytes = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): MsgUpdateSessionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      downloadBytes: isSet(object.downloadBytes) ? globalThis.String(object.downloadBytes) : "",
      uploadBytes: isSet(object.uploadBytes) ? globalThis.String(object.uploadBytes) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgUpdateSessionRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
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
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSessionRequest>): MsgUpdateSessionRequest {
    return MsgUpdateSessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateSessionRequest>): MsgUpdateSessionRequest {
    const message = createBaseMsgUpdateSessionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.downloadBytes = object.downloadBytes ?? "";
    message.uploadBytes = object.uploadBytes ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgUpdateParamsRequest(): MsgUpdateParamsRequest {
  return { from: "", params: undefined };
}

export const MsgUpdateParamsRequest = {
  encode(message: MsgUpdateParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsRequest();
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

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParamsRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParamsRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsRequest>): MsgUpdateParamsRequest {
    return MsgUpdateParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateParamsRequest>): MsgUpdateParamsRequest {
    const message = createBaseMsgUpdateParamsRequest();
    message.from = object.from ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgCancelSessionResponse(): MsgCancelSessionResponse {
  return {};
}

export const MsgCancelSessionResponse = {
  encode(_: MsgCancelSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSessionResponse();
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

  fromJSON(_: any): MsgCancelSessionResponse {
    return {};
  },

  toJSON(_: MsgCancelSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSessionResponse>): MsgCancelSessionResponse {
    return MsgCancelSessionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCancelSessionResponse>): MsgCancelSessionResponse {
    const message = createBaseMsgCancelSessionResponse();
    return message;
  },
};

function createBaseMsgUpdateSessionResponse(): MsgUpdateSessionResponse {
  return {};
}

export const MsgUpdateSessionResponse = {
  encode(_: MsgUpdateSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSessionResponse();
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

  fromJSON(_: any): MsgUpdateSessionResponse {
    return {};
  },

  toJSON(_: MsgUpdateSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSessionResponse>): MsgUpdateSessionResponse {
    return MsgUpdateSessionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateSessionResponse>): MsgUpdateSessionResponse {
    const message = createBaseMsgUpdateSessionResponse();
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

export interface MsgService {
  MsgCancelSession(request: MsgCancelSessionRequest): Promise<MsgCancelSessionResponse>;
  MsgUpdateSession(request: MsgUpdateSessionRequest): Promise<MsgUpdateSessionResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.session.v3.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgCancelSession = this.MsgCancelSession.bind(this);
    this.MsgUpdateSession = this.MsgUpdateSession.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgCancelSession(request: MsgCancelSessionRequest): Promise<MsgCancelSessionResponse> {
    const data = MsgCancelSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCancelSession", data);
    return promise.then((data) => MsgCancelSessionResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateSession(request: MsgUpdateSessionRequest): Promise<MsgUpdateSessionResponse> {
    const data = MsgUpdateSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateSession", data);
    return promise.then((data) => MsgUpdateSessionResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
