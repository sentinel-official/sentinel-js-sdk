/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v1";

export interface MsgRegisterRequest {
  from: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
}

export interface MsgSetStatusRequest {
  from: string;
  status: Status;
}

export interface MsgUpdateRequest {
  from: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
}

export interface MsgRegisterResponse {
}

export interface MsgSetStatusResponse {
}

export interface MsgUpdateResponse {
}

function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return { from: "", provider: "", price: [], remoteUrl: "" };
}

export const MsgRegisterRequest = {
  encode(message: MsgRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterRequest();
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

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgRegisterRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      price: globalThis.Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgRegisterRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.price?.length) {
      obj.price = message.price.map((e) => Coin.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    return MsgRegisterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgSetStatusRequest(): MsgSetStatusRequest {
  return { from: "", status: 0 };
}

export const MsgSetStatusRequest = {
  encode(message: MsgSetStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStatusRequest();
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

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgSetStatusRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    return MsgSetStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    const message = createBaseMsgSetStatusRequest();
    message.from = object.from ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return { from: "", provider: "", price: [], remoteUrl: "" };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
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

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgUpdateRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      price: globalThis.Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.price?.length) {
      obj.price = message.price.map((e) => Coin.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    return MsgUpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}

export const MsgRegisterResponse = {
  encode(_: MsgRegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResponse();
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

  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },

  toJSON(_: MsgRegisterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    return MsgRegisterResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
};

function createBaseMsgSetStatusResponse(): MsgSetStatusResponse {
  return {};
}

export const MsgSetStatusResponse = {
  encode(_: MsgSetStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStatusResponse();
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

  fromJSON(_: any): MsgSetStatusResponse {
    return {};
  },

  toJSON(_: MsgSetStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetStatusResponse>): MsgSetStatusResponse {
    return MsgSetStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSetStatusResponse>): MsgSetStatusResponse {
    const message = createBaseMsgSetStatusResponse();
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
  MsgRegister(request: MsgRegisterRequest): Promise<MsgRegisterResponse>;
  MsgSetStatus(request: MsgSetStatusRequest): Promise<MsgSetStatusResponse>;
  MsgUpdate(request: MsgUpdateRequest): Promise<MsgUpdateResponse>;
}

export const MsgServiceServiceName = "sentinel.node.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgRegister = this.MsgRegister.bind(this);
    this.MsgSetStatus = this.MsgSetStatus.bind(this);
    this.MsgUpdate = this.MsgUpdate.bind(this);
  }
  MsgRegister(request: MsgRegisterRequest): Promise<MsgRegisterResponse> {
    const data = MsgRegisterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRegister", data);
    return promise.then((data) => MsgRegisterResponse.decode(_m0.Reader.create(data)));
  }

  MsgSetStatus(request: MsgSetStatusRequest): Promise<MsgSetStatusResponse> {
    const data = MsgSetStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSetStatus", data);
    return promise.then((data) => MsgSetStatusResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdate(request: MsgUpdateRequest): Promise<MsgUpdateResponse> {
    const data = MsgUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdate", data);
    return promise.then((data) => MsgUpdateResponse.decode(_m0.Reader.create(data)));
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
