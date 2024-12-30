/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "sentinel.oracle.v1";

export interface MsgCreateAssetRequest {
  from: string;
  denom: string;
  decimals: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

export interface MsgDeleteAssetRequest {
  from: string;
  denom: string;
}

export interface MsgUpdateAssetRequest {
  from: string;
  denom: string;
  decimals: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgCreateAssetResponse {
}

export interface MsgDeleteAssetResponse {
}

export interface MsgUpdateAssetResponse {
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreateAssetRequest(): MsgCreateAssetRequest {
  return { from: "", denom: "", decimals: Long.ZERO, baseAssetDenom: "", quoteAssetDenom: "" };
}

export const MsgCreateAssetRequest = {
  encode(message: MsgCreateAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(24).int64(message.decimals);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(34).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(42).string(message.quoteAssetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetRequest();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseAssetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteAssetDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAssetRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? globalThis.String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? globalThis.String(object.quoteAssetDenom) : "",
    };
  },

  toJSON(message: MsgCreateAssetRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (!message.decimals.isZero()) {
      obj.decimals = (message.decimals || Long.ZERO).toString();
    }
    if (message.baseAssetDenom !== "") {
      obj.baseAssetDenom = message.baseAssetDenom;
    }
    if (message.quoteAssetDenom !== "") {
      obj.quoteAssetDenom = message.quoteAssetDenom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateAssetRequest>): MsgCreateAssetRequest {
    return MsgCreateAssetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateAssetRequest>): MsgCreateAssetRequest {
    const message = createBaseMsgCreateAssetRequest();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
};

function createBaseMsgDeleteAssetRequest(): MsgDeleteAssetRequest {
  return { from: "", denom: "" };
}

export const MsgDeleteAssetRequest = {
  encode(message: MsgDeleteAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAssetRequest();
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

  fromJSON(object: any): MsgDeleteAssetRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeleteAssetRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteAssetRequest>): MsgDeleteAssetRequest {
    return MsgDeleteAssetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgDeleteAssetRequest>): MsgDeleteAssetRequest {
    const message = createBaseMsgDeleteAssetRequest();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgUpdateAssetRequest(): MsgUpdateAssetRequest {
  return { from: "", denom: "", decimals: Long.ZERO, baseAssetDenom: "", quoteAssetDenom: "" };
}

export const MsgUpdateAssetRequest = {
  encode(message: MsgUpdateAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(24).int64(message.decimals);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(34).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(42).string(message.quoteAssetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetRequest();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseAssetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteAssetDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAssetRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? globalThis.String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? globalThis.String(object.quoteAssetDenom) : "",
    };
  },

  toJSON(message: MsgUpdateAssetRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (!message.decimals.isZero()) {
      obj.decimals = (message.decimals || Long.ZERO).toString();
    }
    if (message.baseAssetDenom !== "") {
      obj.baseAssetDenom = message.baseAssetDenom;
    }
    if (message.quoteAssetDenom !== "") {
      obj.quoteAssetDenom = message.quoteAssetDenom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest {
    return MsgUpdateAssetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest {
    const message = createBaseMsgUpdateAssetRequest();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
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

function createBaseMsgCreateAssetResponse(): MsgCreateAssetResponse {
  return {};
}

export const MsgCreateAssetResponse = {
  encode(_: MsgCreateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetResponse();
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

  fromJSON(_: any): MsgCreateAssetResponse {
    return {};
  },

  toJSON(_: MsgCreateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateAssetResponse>): MsgCreateAssetResponse {
    return MsgCreateAssetResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCreateAssetResponse>): MsgCreateAssetResponse {
    const message = createBaseMsgCreateAssetResponse();
    return message;
  },
};

function createBaseMsgDeleteAssetResponse(): MsgDeleteAssetResponse {
  return {};
}

export const MsgDeleteAssetResponse = {
  encode(_: MsgDeleteAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAssetResponse();
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

  fromJSON(_: any): MsgDeleteAssetResponse {
    return {};
  },

  toJSON(_: MsgDeleteAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteAssetResponse>): MsgDeleteAssetResponse {
    return MsgDeleteAssetResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgDeleteAssetResponse>): MsgDeleteAssetResponse {
    const message = createBaseMsgDeleteAssetResponse();
    return message;
  },
};

function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return {};
}

export const MsgUpdateAssetResponse = {
  encode(_: MsgUpdateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();
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

  fromJSON(_: any): MsgUpdateAssetResponse {
    return {};
  },

  toJSON(_: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
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
  MsgCreateAsset(request: MsgCreateAssetRequest): Promise<MsgCreateAssetResponse>;
  MsgDeleteAsset(request: MsgDeleteAssetRequest): Promise<MsgDeleteAssetResponse>;
  MsgUpdateAsset(request: MsgUpdateAssetRequest): Promise<MsgUpdateAssetResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.oracle.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgCreateAsset = this.MsgCreateAsset.bind(this);
    this.MsgDeleteAsset = this.MsgDeleteAsset.bind(this);
    this.MsgUpdateAsset = this.MsgUpdateAsset.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgCreateAsset(request: MsgCreateAssetRequest): Promise<MsgCreateAssetResponse> {
    const data = MsgCreateAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCreateAsset", data);
    return promise.then((data) => MsgCreateAssetResponse.decode(_m0.Reader.create(data)));
  }

  MsgDeleteAsset(request: MsgDeleteAssetRequest): Promise<MsgDeleteAssetResponse> {
    const data = MsgDeleteAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgDeleteAsset", data);
    return promise.then((data) => MsgDeleteAssetResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateAsset(request: MsgUpdateAssetRequest): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateAsset", data);
    return promise.then((data) => MsgUpdateAssetResponse.decode(_m0.Reader.create(data)));
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
