/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v2";

export interface MsgCreateRequest {
  from: string;
  duration?: Duration | undefined;
  gigabytes: Long;
  prices: Coin[];
}

export interface MsgLinkNodeRequest {
  from: string;
  id: Long;
  nodeAddress: string;
}

export interface MsgUnlinkNodeRequest {
  from: string;
  id: Long;
  nodeAddress: string;
}

export interface MsgUpdateStatusRequest {
  from: string;
  id: Long;
  status: Status;
}

export interface MsgSubscribeRequest {
  from: string;
  id: Long;
  denom: string;
}

export interface MsgCreateResponse {
}

export interface MsgLinkNodeResponse {
}

export interface MsgUnlinkNodeResponse {
}

export interface MsgUpdateStatusResponse {
}

export interface MsgSubscribeResponse {
}

function createBaseMsgCreateRequest(): MsgCreateRequest {
  return { from: "", duration: undefined, gigabytes: Long.ZERO, prices: [] };
}

export const MsgCreateRequest = {
  encode(message: MsgCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.gigabytes.isZero()) {
      writer.uint32(24).int64(message.gigabytes);
    }
    for (const v of message.prices) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();
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

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gigabytes = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.prices.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      prices: globalThis.Array.isArray(object?.prices) ? object.prices.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (!message.gigabytes.isZero()) {
      obj.gigabytes = (message.gigabytes || Long.ZERO).toString();
    }
    if (message.prices?.length) {
      obj.prices = message.prices.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateRequest>): MsgCreateRequest {
    return MsgCreateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.from = object.from ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.gigabytes = (object.gigabytes !== undefined && object.gigabytes !== null)
      ? Long.fromValue(object.gigabytes)
      : Long.ZERO;
    message.prices = object.prices?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgLinkNodeRequest(): MsgLinkNodeRequest {
  return { from: "", id: Long.UZERO, nodeAddress: "" };
}

export const MsgLinkNodeRequest = {
  encode(message: MsgLinkNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkNodeRequest();
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

          message.nodeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLinkNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
    };
  },

  toJSON(message: MsgLinkNodeRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgLinkNodeRequest>): MsgLinkNodeRequest {
    return MsgLinkNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgLinkNodeRequest>): MsgLinkNodeRequest {
    const message = createBaseMsgLinkNodeRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
};

function createBaseMsgUnlinkNodeRequest(): MsgUnlinkNodeRequest {
  return { from: "", id: Long.UZERO, nodeAddress: "" };
}

export const MsgUnlinkNodeRequest = {
  encode(message: MsgUnlinkNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkNodeRequest();
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

          message.nodeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnlinkNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
    };
  },

  toJSON(message: MsgUnlinkNodeRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUnlinkNodeRequest>): MsgUnlinkNodeRequest {
    return MsgUnlinkNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUnlinkNodeRequest>): MsgUnlinkNodeRequest {
    const message = createBaseMsgUnlinkNodeRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
};

function createBaseMsgUpdateStatusRequest(): MsgUpdateStatusRequest {
  return { from: "", id: Long.UZERO, status: 0 };
}

export const MsgUpdateStatusRequest = {
  encode(message: MsgUpdateStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStatusRequest();
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

  fromJSON(object: any): MsgUpdateStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateStatusRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateStatusRequest>): MsgUpdateStatusRequest {
    return MsgUpdateStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateStatusRequest>): MsgUpdateStatusRequest {
    const message = createBaseMsgUpdateStatusRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgSubscribeRequest(): MsgSubscribeRequest {
  return { from: "", id: Long.UZERO, denom: "" };
}

export const MsgSubscribeRequest = {
  encode(message: MsgSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeRequest();
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

  fromJSON(object: any): MsgSubscribeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgSubscribeRequest): unknown {
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

  create(base?: DeepPartial<MsgSubscribeRequest>): MsgSubscribeRequest {
    return MsgSubscribeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubscribeRequest>): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
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

  fromJSON(_: any): MsgCreateResponse {
    return {};
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    return MsgCreateResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
};

function createBaseMsgLinkNodeResponse(): MsgLinkNodeResponse {
  return {};
}

export const MsgLinkNodeResponse = {
  encode(_: MsgLinkNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkNodeResponse();
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

  fromJSON(_: any): MsgLinkNodeResponse {
    return {};
  },

  toJSON(_: MsgLinkNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLinkNodeResponse>): MsgLinkNodeResponse {
    return MsgLinkNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgLinkNodeResponse>): MsgLinkNodeResponse {
    const message = createBaseMsgLinkNodeResponse();
    return message;
  },
};

function createBaseMsgUnlinkNodeResponse(): MsgUnlinkNodeResponse {
  return {};
}

export const MsgUnlinkNodeResponse = {
  encode(_: MsgUnlinkNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkNodeResponse();
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

  fromJSON(_: any): MsgUnlinkNodeResponse {
    return {};
  },

  toJSON(_: MsgUnlinkNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnlinkNodeResponse>): MsgUnlinkNodeResponse {
    return MsgUnlinkNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUnlinkNodeResponse>): MsgUnlinkNodeResponse {
    const message = createBaseMsgUnlinkNodeResponse();
    return message;
  },
};

function createBaseMsgUpdateStatusResponse(): MsgUpdateStatusResponse {
  return {};
}

export const MsgUpdateStatusResponse = {
  encode(_: MsgUpdateStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStatusResponse();
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

  fromJSON(_: any): MsgUpdateStatusResponse {
    return {};
  },

  toJSON(_: MsgUpdateStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateStatusResponse>): MsgUpdateStatusResponse {
    return MsgUpdateStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateStatusResponse>): MsgUpdateStatusResponse {
    const message = createBaseMsgUpdateStatusResponse();
    return message;
  },
};

function createBaseMsgSubscribeResponse(): MsgSubscribeResponse {
  return {};
}

export const MsgSubscribeResponse = {
  encode(_: MsgSubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeResponse();
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

  fromJSON(_: any): MsgSubscribeResponse {
    return {};
  },

  toJSON(_: MsgSubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSubscribeResponse>): MsgSubscribeResponse {
    return MsgSubscribeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSubscribeResponse>): MsgSubscribeResponse {
    const message = createBaseMsgSubscribeResponse();
    return message;
  },
};

export interface MsgService {
  MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
  MsgLinkNode(request: MsgLinkNodeRequest): Promise<MsgLinkNodeResponse>;
  MsgUnlinkNode(request: MsgUnlinkNodeRequest): Promise<MsgUnlinkNodeResponse>;
  MsgUpdateStatus(request: MsgUpdateStatusRequest): Promise<MsgUpdateStatusResponse>;
  MsgSubscribe(request: MsgSubscribeRequest): Promise<MsgSubscribeResponse>;
}

export const MsgServiceServiceName = "sentinel.plan.v2.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgCreate = this.MsgCreate.bind(this);
    this.MsgLinkNode = this.MsgLinkNode.bind(this);
    this.MsgUnlinkNode = this.MsgUnlinkNode.bind(this);
    this.MsgUpdateStatus = this.MsgUpdateStatus.bind(this);
    this.MsgSubscribe = this.MsgSubscribe.bind(this);
  }
  MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse> {
    const data = MsgCreateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCreate", data);
    return promise.then((data) => MsgCreateResponse.decode(_m0.Reader.create(data)));
  }

  MsgLinkNode(request: MsgLinkNodeRequest): Promise<MsgLinkNodeResponse> {
    const data = MsgLinkNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgLinkNode", data);
    return promise.then((data) => MsgLinkNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgUnlinkNode(request: MsgUnlinkNodeRequest): Promise<MsgUnlinkNodeResponse> {
    const data = MsgUnlinkNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUnlinkNode", data);
    return promise.then((data) => MsgUnlinkNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateStatus(request: MsgUpdateStatusRequest): Promise<MsgUpdateStatusResponse> {
    const data = MsgUpdateStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateStatus", data);
    return promise.then((data) => MsgUpdateStatusResponse.decode(_m0.Reader.create(data)));
  }

  MsgSubscribe(request: MsgSubscribeRequest): Promise<MsgSubscribeResponse> {
    const data = MsgSubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSubscribe", data);
    return promise.then((data) => MsgSubscribeResponse.decode(_m0.Reader.create(data)));
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
