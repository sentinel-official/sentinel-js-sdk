/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.provider.v1";

export interface MsgRegisterRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

export interface MsgUpdateRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

export interface MsgRegisterResponse {
}

export interface MsgUpdateResponse {
}

function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return { from: "", name: "", identity: "", website: "", description: "" };
}

export const MsgRegisterRequest = {
  encode(message: MsgRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgRegisterRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgRegisterRequest): unknown {
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

  create(base?: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    return MsgRegisterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return { from: "", name: "", identity: "", website: "", description: "" };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgUpdateRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
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

  create(base?: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    return MsgUpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
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
  MsgUpdate(request: MsgUpdateRequest): Promise<MsgUpdateResponse>;
}

export const MsgServiceServiceName = "sentinel.provider.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgRegister = this.MsgRegister.bind(this);
    this.MsgUpdate = this.MsgUpdate.bind(this);
  }
  MsgRegister(request: MsgRegisterRequest): Promise<MsgRegisterResponse> {
    const data = MsgRegisterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRegister", data);
    return promise.then((data) => MsgRegisterResponse.decode(_m0.Reader.create(data)));
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
