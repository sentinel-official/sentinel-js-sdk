/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "sentinel.subscription.v1";

export interface MsgAddQuotaRequest {
  from: string;
  id: Long;
  address: string;
  bytes: string;
}

export interface MsgCancelRequest {
  from: string;
  id: Long;
}

export interface MsgSubscribeToNodeRequest {
  from: string;
  address: string;
  deposit?: Coin | undefined;
}

export interface MsgSubscribeToPlanRequest {
  from: string;
  id: Long;
  denom: string;
}

export interface MsgUpdateQuotaRequest {
  from: string;
  id: Long;
  address: string;
  bytes: string;
}

export interface MsgAddQuotaResponse {
}

export interface MsgCancelResponse {
}

export interface MsgSubscribeToNodeResponse {
}

export interface MsgSubscribeToPlanResponse {
}

export interface MsgUpdateQuotaResponse {
}

function createBaseMsgAddQuotaRequest(): MsgAddQuotaRequest {
  return { from: "", id: Long.UZERO, address: "", bytes: "" };
}

export const MsgAddQuotaRequest = {
  encode(message: MsgAddQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddQuotaRequest();
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

  fromJSON(object: any): MsgAddQuotaRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
    };
  },

  toJSON(message: MsgAddQuotaRequest): unknown {
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

  create(base?: DeepPartial<MsgAddQuotaRequest>): MsgAddQuotaRequest {
    return MsgAddQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAddQuotaRequest>): MsgAddQuotaRequest {
    const message = createBaseMsgAddQuotaRequest();
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

function createBaseMsgSubscribeToNodeRequest(): MsgSubscribeToNodeRequest {
  return { from: "", address: "", deposit: undefined };
}

export const MsgSubscribeToNodeRequest = {
  encode(message: MsgSubscribeToNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToNodeRequest();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubscribeToNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
    };
  },

  toJSON(message: MsgSubscribeToNodeRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.deposit !== undefined) {
      obj.deposit = Coin.toJSON(message.deposit);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubscribeToNodeRequest>): MsgSubscribeToNodeRequest {
    return MsgSubscribeToNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubscribeToNodeRequest>): MsgSubscribeToNodeRequest {
    const message = createBaseMsgSubscribeToNodeRequest();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    return message;
  },
};

function createBaseMsgSubscribeToPlanRequest(): MsgSubscribeToPlanRequest {
  return { from: "", id: Long.UZERO, denom: "" };
}

export const MsgSubscribeToPlanRequest = {
  encode(message: MsgSubscribeToPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToPlanRequest();
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

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubscribeToPlanRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgSubscribeToPlanRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubscribeToPlanRequest>): MsgSubscribeToPlanRequest {
    return MsgSubscribeToPlanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubscribeToPlanRequest>): MsgSubscribeToPlanRequest {
    const message = createBaseMsgSubscribeToPlanRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgUpdateQuotaRequest(): MsgUpdateQuotaRequest {
  return { from: "", id: Long.UZERO, address: "", bytes: "" };
}

export const MsgUpdateQuotaRequest = {
  encode(message: MsgUpdateQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuotaRequest();
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

  fromJSON(object: any): MsgUpdateQuotaRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
    };
  },

  toJSON(message: MsgUpdateQuotaRequest): unknown {
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

  create(base?: DeepPartial<MsgUpdateQuotaRequest>): MsgUpdateQuotaRequest {
    return MsgUpdateQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateQuotaRequest>): MsgUpdateQuotaRequest {
    const message = createBaseMsgUpdateQuotaRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  },
};

function createBaseMsgAddQuotaResponse(): MsgAddQuotaResponse {
  return {};
}

export const MsgAddQuotaResponse = {
  encode(_: MsgAddQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddQuotaResponse();
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

  fromJSON(_: any): MsgAddQuotaResponse {
    return {};
  },

  toJSON(_: MsgAddQuotaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddQuotaResponse>): MsgAddQuotaResponse {
    return MsgAddQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgAddQuotaResponse>): MsgAddQuotaResponse {
    const message = createBaseMsgAddQuotaResponse();
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

function createBaseMsgSubscribeToNodeResponse(): MsgSubscribeToNodeResponse {
  return {};
}

export const MsgSubscribeToNodeResponse = {
  encode(_: MsgSubscribeToNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToNodeResponse();
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

  fromJSON(_: any): MsgSubscribeToNodeResponse {
    return {};
  },

  toJSON(_: MsgSubscribeToNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSubscribeToNodeResponse>): MsgSubscribeToNodeResponse {
    return MsgSubscribeToNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSubscribeToNodeResponse>): MsgSubscribeToNodeResponse {
    const message = createBaseMsgSubscribeToNodeResponse();
    return message;
  },
};

function createBaseMsgSubscribeToPlanResponse(): MsgSubscribeToPlanResponse {
  return {};
}

export const MsgSubscribeToPlanResponse = {
  encode(_: MsgSubscribeToPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToPlanResponse();
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

  fromJSON(_: any): MsgSubscribeToPlanResponse {
    return {};
  },

  toJSON(_: MsgSubscribeToPlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSubscribeToPlanResponse>): MsgSubscribeToPlanResponse {
    return MsgSubscribeToPlanResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSubscribeToPlanResponse>): MsgSubscribeToPlanResponse {
    const message = createBaseMsgSubscribeToPlanResponse();
    return message;
  },
};

function createBaseMsgUpdateQuotaResponse(): MsgUpdateQuotaResponse {
  return {};
}

export const MsgUpdateQuotaResponse = {
  encode(_: MsgUpdateQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuotaResponse();
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

  fromJSON(_: any): MsgUpdateQuotaResponse {
    return {};
  },

  toJSON(_: MsgUpdateQuotaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateQuotaResponse>): MsgUpdateQuotaResponse {
    return MsgUpdateQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateQuotaResponse>): MsgUpdateQuotaResponse {
    const message = createBaseMsgUpdateQuotaResponse();
    return message;
  },
};

export interface MsgService {
  MsgAddQuota(request: MsgAddQuotaRequest): Promise<MsgAddQuotaResponse>;
  MsgCancel(request: MsgCancelRequest): Promise<MsgCancelResponse>;
  MsgSubscribeToNode(request: MsgSubscribeToNodeRequest): Promise<MsgSubscribeToNodeResponse>;
  MsgSubscribeToPlan(request: MsgSubscribeToPlanRequest): Promise<MsgSubscribeToPlanResponse>;
  MsgUpdateQuota(request: MsgUpdateQuotaRequest): Promise<MsgUpdateQuotaResponse>;
}

export const MsgServiceServiceName = "sentinel.subscription.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgAddQuota = this.MsgAddQuota.bind(this);
    this.MsgCancel = this.MsgCancel.bind(this);
    this.MsgSubscribeToNode = this.MsgSubscribeToNode.bind(this);
    this.MsgSubscribeToPlan = this.MsgSubscribeToPlan.bind(this);
    this.MsgUpdateQuota = this.MsgUpdateQuota.bind(this);
  }
  MsgAddQuota(request: MsgAddQuotaRequest): Promise<MsgAddQuotaResponse> {
    const data = MsgAddQuotaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgAddQuota", data);
    return promise.then((data) => MsgAddQuotaResponse.decode(_m0.Reader.create(data)));
  }

  MsgCancel(request: MsgCancelRequest): Promise<MsgCancelResponse> {
    const data = MsgCancelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCancel", data);
    return promise.then((data) => MsgCancelResponse.decode(_m0.Reader.create(data)));
  }

  MsgSubscribeToNode(request: MsgSubscribeToNodeRequest): Promise<MsgSubscribeToNodeResponse> {
    const data = MsgSubscribeToNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSubscribeToNode", data);
    return promise.then((data) => MsgSubscribeToNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgSubscribeToPlan(request: MsgSubscribeToPlanRequest): Promise<MsgSubscribeToPlanResponse> {
    const data = MsgSubscribeToPlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSubscribeToPlan", data);
    return promise.then((data) => MsgSubscribeToPlanResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateQuota(request: MsgUpdateQuotaRequest): Promise<MsgUpdateQuotaResponse> {
    const data = MsgUpdateQuotaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateQuota", data);
    return promise.then((data) => MsgUpdateQuotaResponse.decode(_m0.Reader.create(data)));
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
