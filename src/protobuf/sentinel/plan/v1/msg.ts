/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v1";

export interface MsgAddRequest {
  from: string;
  price: Coin[];
  validity?: Duration | undefined;
  bytes: string;
}

export interface MsgAddNodeRequest {
  from: string;
  id: Long;
  address: string;
}

export interface MsgRemoveNodeRequest {
  from: string;
  id: Long;
  address: string;
}

export interface MsgSetStatusRequest {
  from: string;
  id: Long;
  status: Status;
}

export interface MsgAddResponse {
}

export interface MsgAddNodeResponse {
}

export interface MsgRemoveNodeResponse {
}

export interface MsgSetStatusResponse {
}

function createBaseMsgAddRequest(): MsgAddRequest {
  return { from: "", price: [], validity: undefined, bytes: "" };
}

export const MsgAddRequest = {
  encode(message: MsgAddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Duration.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRequest();
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

          message.price.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validity = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgAddRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      price: globalThis.Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      validity: isSet(object.validity) ? Duration.fromJSON(object.validity) : undefined,
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
    };
  },

  toJSON(message: MsgAddRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.price?.length) {
      obj.price = message.price.map((e) => Coin.toJSON(e));
    }
    if (message.validity !== undefined) {
      obj.validity = Duration.toJSON(message.validity);
    }
    if (message.bytes !== "") {
      obj.bytes = message.bytes;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAddRequest>): MsgAddRequest {
    return MsgAddRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAddRequest>): MsgAddRequest {
    const message = createBaseMsgAddRequest();
    message.from = object.from ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.validity = (object.validity !== undefined && object.validity !== null)
      ? Duration.fromPartial(object.validity)
      : undefined;
    message.bytes = object.bytes ?? "";
    return message;
  },
};

function createBaseMsgAddNodeRequest(): MsgAddNodeRequest {
  return { from: "", id: Long.UZERO, address: "" };
}

export const MsgAddNodeRequest = {
  encode(message: MsgAddNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddNodeRequest();
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

  fromJSON(object: any): MsgAddNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: MsgAddNodeRequest): unknown {
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

  create(base?: DeepPartial<MsgAddNodeRequest>): MsgAddNodeRequest {
    return MsgAddNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAddNodeRequest>): MsgAddNodeRequest {
    const message = createBaseMsgAddNodeRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgRemoveNodeRequest(): MsgRemoveNodeRequest {
  return { from: "", id: Long.UZERO, address: "" };
}

export const MsgRemoveNodeRequest = {
  encode(message: MsgRemoveNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNodeRequest();
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

  fromJSON(object: any): MsgRemoveNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: MsgRemoveNodeRequest): unknown {
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

  create(base?: DeepPartial<MsgRemoveNodeRequest>): MsgRemoveNodeRequest {
    return MsgRemoveNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRemoveNodeRequest>): MsgRemoveNodeRequest {
    const message = createBaseMsgRemoveNodeRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgSetStatusRequest(): MsgSetStatusRequest {
  return { from: "", id: Long.UZERO, status: 0 };
}

export const MsgSetStatusRequest = {
  encode(message: MsgSetStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgSetStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgSetStatusRequest): unknown {
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

  create(base?: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    return MsgSetStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    const message = createBaseMsgSetStatusRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgAddResponse(): MsgAddResponse {
  return {};
}

export const MsgAddResponse = {
  encode(_: MsgAddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddResponse();
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

  fromJSON(_: any): MsgAddResponse {
    return {};
  },

  toJSON(_: MsgAddResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddResponse>): MsgAddResponse {
    return MsgAddResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgAddResponse>): MsgAddResponse {
    const message = createBaseMsgAddResponse();
    return message;
  },
};

function createBaseMsgAddNodeResponse(): MsgAddNodeResponse {
  return {};
}

export const MsgAddNodeResponse = {
  encode(_: MsgAddNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddNodeResponse();
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

  fromJSON(_: any): MsgAddNodeResponse {
    return {};
  },

  toJSON(_: MsgAddNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddNodeResponse>): MsgAddNodeResponse {
    return MsgAddNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgAddNodeResponse>): MsgAddNodeResponse {
    const message = createBaseMsgAddNodeResponse();
    return message;
  },
};

function createBaseMsgRemoveNodeResponse(): MsgRemoveNodeResponse {
  return {};
}

export const MsgRemoveNodeResponse = {
  encode(_: MsgRemoveNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNodeResponse();
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

  fromJSON(_: any): MsgRemoveNodeResponse {
    return {};
  },

  toJSON(_: MsgRemoveNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveNodeResponse>): MsgRemoveNodeResponse {
    return MsgRemoveNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRemoveNodeResponse>): MsgRemoveNodeResponse {
    const message = createBaseMsgRemoveNodeResponse();
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

export interface MsgService {
  MsgAdd(request: MsgAddRequest): Promise<MsgAddResponse>;
  MsgAddNode(request: MsgAddNodeRequest): Promise<MsgAddNodeResponse>;
  MsgRemoveNode(request: MsgRemoveNodeRequest): Promise<MsgRemoveNodeResponse>;
  MsgSetStatus(request: MsgSetStatusRequest): Promise<MsgSetStatusResponse>;
}

export const MsgServiceServiceName = "sentinel.plan.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgAdd = this.MsgAdd.bind(this);
    this.MsgAddNode = this.MsgAddNode.bind(this);
    this.MsgRemoveNode = this.MsgRemoveNode.bind(this);
    this.MsgSetStatus = this.MsgSetStatus.bind(this);
  }
  MsgAdd(request: MsgAddRequest): Promise<MsgAddResponse> {
    const data = MsgAddRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgAdd", data);
    return promise.then((data) => MsgAddResponse.decode(_m0.Reader.create(data)));
  }

  MsgAddNode(request: MsgAddNodeRequest): Promise<MsgAddNodeResponse> {
    const data = MsgAddNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgAddNode", data);
    return promise.then((data) => MsgAddNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgRemoveNode(request: MsgRemoveNodeRequest): Promise<MsgRemoveNodeResponse> {
    const data = MsgRemoveNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRemoveNode", data);
    return promise.then((data) => MsgRemoveNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgSetStatus(request: MsgSetStatusRequest): Promise<MsgSetStatusResponse> {
    const data = MsgSetStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSetStatus", data);
    return promise.then((data) => MsgSetStatusResponse.decode(_m0.Reader.create(data)));
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
