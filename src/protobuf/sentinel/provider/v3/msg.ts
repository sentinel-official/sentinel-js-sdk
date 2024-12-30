/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Params } from "../v2/params";

export const protobufPackage = "sentinel.provider.v3";

export interface MsgRegisterProviderRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

export interface MsgUpdateProviderDetailsRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

export interface MsgUpdateProviderStatusRequest {
  from: string;
  status: Status;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgRegisterProviderResponse {
}

export interface MsgUpdateProviderDetailsResponse {
}

export interface MsgUpdateProviderStatusResponse {
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgRegisterProviderRequest(): MsgRegisterProviderRequest {
  return { from: "", name: "", identity: "", website: "", description: "" };
}

export const MsgRegisterProviderRequest = {
  encode(message: MsgRegisterProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterProviderRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterProviderRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgRegisterProviderRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterProviderRequest>): MsgRegisterProviderRequest {
    return MsgRegisterProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRegisterProviderRequest>): MsgRegisterProviderRequest {
    const message = createBaseMsgRegisterProviderRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateProviderDetailsRequest(): MsgUpdateProviderDetailsRequest {
  return { from: "", name: "", identity: "", website: "", description: "" };
}

export const MsgUpdateProviderDetailsRequest = {
  encode(message: MsgUpdateProviderDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderDetailsRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProviderDetailsRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateProviderDetailsRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProviderDetailsRequest>): MsgUpdateProviderDetailsRequest {
    return MsgUpdateProviderDetailsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateProviderDetailsRequest>): MsgUpdateProviderDetailsRequest {
    const message = createBaseMsgUpdateProviderDetailsRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateProviderStatusRequest(): MsgUpdateProviderStatusRequest {
  return { from: "", status: 0 };
}

export const MsgUpdateProviderStatusRequest = {
  encode(message: MsgUpdateProviderStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderStatusRequest();
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

  fromJSON(object: any): MsgUpdateProviderStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateProviderStatusRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProviderStatusRequest>): MsgUpdateProviderStatusRequest {
    return MsgUpdateProviderStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateProviderStatusRequest>): MsgUpdateProviderStatusRequest {
    const message = createBaseMsgUpdateProviderStatusRequest();
    message.from = object.from ?? "";
    message.status = object.status ?? 0;
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

function createBaseMsgRegisterProviderResponse(): MsgRegisterProviderResponse {
  return {};
}

export const MsgRegisterProviderResponse = {
  encode(_: MsgRegisterProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterProviderResponse();
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

  fromJSON(_: any): MsgRegisterProviderResponse {
    return {};
  },

  toJSON(_: MsgRegisterProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterProviderResponse>): MsgRegisterProviderResponse {
    return MsgRegisterProviderResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRegisterProviderResponse>): MsgRegisterProviderResponse {
    const message = createBaseMsgRegisterProviderResponse();
    return message;
  },
};

function createBaseMsgUpdateProviderDetailsResponse(): MsgUpdateProviderDetailsResponse {
  return {};
}

export const MsgUpdateProviderDetailsResponse = {
  encode(_: MsgUpdateProviderDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderDetailsResponse();
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

  fromJSON(_: any): MsgUpdateProviderDetailsResponse {
    return {};
  },

  toJSON(_: MsgUpdateProviderDetailsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProviderDetailsResponse>): MsgUpdateProviderDetailsResponse {
    return MsgUpdateProviderDetailsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateProviderDetailsResponse>): MsgUpdateProviderDetailsResponse {
    const message = createBaseMsgUpdateProviderDetailsResponse();
    return message;
  },
};

function createBaseMsgUpdateProviderStatusResponse(): MsgUpdateProviderStatusResponse {
  return {};
}

export const MsgUpdateProviderStatusResponse = {
  encode(_: MsgUpdateProviderStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderStatusResponse();
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

  fromJSON(_: any): MsgUpdateProviderStatusResponse {
    return {};
  },

  toJSON(_: MsgUpdateProviderStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProviderStatusResponse>): MsgUpdateProviderStatusResponse {
    return MsgUpdateProviderStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateProviderStatusResponse>): MsgUpdateProviderStatusResponse {
    const message = createBaseMsgUpdateProviderStatusResponse();
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
  MsgRegisterProvider(request: MsgRegisterProviderRequest): Promise<MsgRegisterProviderResponse>;
  MsgUpdateProviderDetails(request: MsgUpdateProviderDetailsRequest): Promise<MsgUpdateProviderDetailsResponse>;
  MsgUpdateProviderStatus(request: MsgUpdateProviderStatusRequest): Promise<MsgUpdateProviderStatusResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.provider.v3.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgRegisterProvider = this.MsgRegisterProvider.bind(this);
    this.MsgUpdateProviderDetails = this.MsgUpdateProviderDetails.bind(this);
    this.MsgUpdateProviderStatus = this.MsgUpdateProviderStatus.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgRegisterProvider(request: MsgRegisterProviderRequest): Promise<MsgRegisterProviderResponse> {
    const data = MsgRegisterProviderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRegisterProvider", data);
    return promise.then((data) => MsgRegisterProviderResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateProviderDetails(request: MsgUpdateProviderDetailsRequest): Promise<MsgUpdateProviderDetailsResponse> {
    const data = MsgUpdateProviderDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateProviderDetails", data);
    return promise.then((data) => MsgUpdateProviderDetailsResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateProviderStatus(request: MsgUpdateProviderStatusRequest): Promise<MsgUpdateProviderStatusResponse> {
    const data = MsgUpdateProviderStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateProviderStatus", data);
    return promise.then((data) => MsgUpdateProviderStatusResponse.decode(_m0.Reader.create(data)));
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
