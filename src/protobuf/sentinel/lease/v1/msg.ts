/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RenewalPricePolicy, renewalPricePolicyFromJSON, renewalPricePolicyToJSON } from "../../types/v1/renewal";
import { Params } from "./params";

export const protobufPackage = "sentinel.lease.v1";

export interface MsgEndLeaseRequest {
  from: string;
  id: Long;
}

export interface MsgRenewLeaseRequest {
  from: string;
  id: Long;
  hours: Long;
  denom: string;
}

export interface MsgStartLeaseRequest {
  from: string;
  nodeAddress: string;
  hours: Long;
  denom: string;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface MsgUpdateLeaseRequest {
  from: string;
  id: Long;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgEndLeaseResponse {
}

export interface MsgRenewLeaseResponse {
}

export interface MsgStartLeaseResponse {
  id: Long;
}

export interface MsgUpdateLeaseResponse {
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgEndLeaseRequest(): MsgEndLeaseRequest {
  return { from: "", id: Long.UZERO };
}

export const MsgEndLeaseRequest = {
  encode(message: MsgEndLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndLeaseRequest();
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

  fromJSON(object: any): MsgEndLeaseRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgEndLeaseRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgEndLeaseRequest>): MsgEndLeaseRequest {
    return MsgEndLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgEndLeaseRequest>): MsgEndLeaseRequest {
    const message = createBaseMsgEndLeaseRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgRenewLeaseRequest(): MsgRenewLeaseRequest {
  return { from: "", id: Long.UZERO, hours: Long.ZERO, denom: "" };
}

export const MsgRenewLeaseRequest = {
  encode(message: MsgRenewLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.hours.isZero()) {
      writer.uint32(24).int64(message.hours);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewLeaseRequest();
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

          message.hours = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgRenewLeaseRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgRenewLeaseRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRenewLeaseRequest>): MsgRenewLeaseRequest {
    return MsgRenewLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRenewLeaseRequest>): MsgRenewLeaseRequest {
    const message = createBaseMsgRenewLeaseRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgStartLeaseRequest(): MsgStartLeaseRequest {
  return { from: "", nodeAddress: "", hours: Long.ZERO, denom: "", renewalPricePolicy: 0 };
}

export const MsgStartLeaseRequest = {
  encode(message: MsgStartLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.hours.isZero()) {
      writer.uint32(24).int64(message.hours);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.renewalPricePolicy !== 0) {
      writer.uint32(40).int32(message.renewalPricePolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartLeaseRequest();
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

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hours = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.renewalPricePolicy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStartLeaseRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
    };
  },

  toJSON(message: MsgStartLeaseRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.renewalPricePolicy !== 0) {
      obj.renewalPricePolicy = renewalPricePolicyToJSON(message.renewalPricePolicy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartLeaseRequest>): MsgStartLeaseRequest {
    return MsgStartLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartLeaseRequest>): MsgStartLeaseRequest {
    const message = createBaseMsgStartLeaseRequest();
    message.from = object.from ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.denom = object.denom ?? "";
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    return message;
  },
};

function createBaseMsgUpdateLeaseRequest(): MsgUpdateLeaseRequest {
  return { from: "", id: Long.UZERO, renewalPricePolicy: 0 };
}

export const MsgUpdateLeaseRequest = {
  encode(message: MsgUpdateLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.renewalPricePolicy !== 0) {
      writer.uint32(24).int32(message.renewalPricePolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLeaseRequest();
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

          message.renewalPricePolicy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLeaseRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
    };
  },

  toJSON(message: MsgUpdateLeaseRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.renewalPricePolicy !== 0) {
      obj.renewalPricePolicy = renewalPricePolicyToJSON(message.renewalPricePolicy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateLeaseRequest>): MsgUpdateLeaseRequest {
    return MsgUpdateLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateLeaseRequest>): MsgUpdateLeaseRequest {
    const message = createBaseMsgUpdateLeaseRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
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

function createBaseMsgEndLeaseResponse(): MsgEndLeaseResponse {
  return {};
}

export const MsgEndLeaseResponse = {
  encode(_: MsgEndLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndLeaseResponse();
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

  fromJSON(_: any): MsgEndLeaseResponse {
    return {};
  },

  toJSON(_: MsgEndLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgEndLeaseResponse>): MsgEndLeaseResponse {
    return MsgEndLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgEndLeaseResponse>): MsgEndLeaseResponse {
    const message = createBaseMsgEndLeaseResponse();
    return message;
  },
};

function createBaseMsgRenewLeaseResponse(): MsgRenewLeaseResponse {
  return {};
}

export const MsgRenewLeaseResponse = {
  encode(_: MsgRenewLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewLeaseResponse();
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

  fromJSON(_: any): MsgRenewLeaseResponse {
    return {};
  },

  toJSON(_: MsgRenewLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRenewLeaseResponse>): MsgRenewLeaseResponse {
    return MsgRenewLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRenewLeaseResponse>): MsgRenewLeaseResponse {
    const message = createBaseMsgRenewLeaseResponse();
    return message;
  },
};

function createBaseMsgStartLeaseResponse(): MsgStartLeaseResponse {
  return { id: Long.UZERO };
}

export const MsgStartLeaseResponse = {
  encode(message: MsgStartLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): MsgStartLeaseResponse {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: MsgStartLeaseResponse): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartLeaseResponse>): MsgStartLeaseResponse {
    return MsgStartLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartLeaseResponse>): MsgStartLeaseResponse {
    const message = createBaseMsgStartLeaseResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateLeaseResponse(): MsgUpdateLeaseResponse {
  return {};
}

export const MsgUpdateLeaseResponse = {
  encode(_: MsgUpdateLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLeaseResponse();
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

  fromJSON(_: any): MsgUpdateLeaseResponse {
    return {};
  },

  toJSON(_: MsgUpdateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateLeaseResponse>): MsgUpdateLeaseResponse {
    return MsgUpdateLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateLeaseResponse>): MsgUpdateLeaseResponse {
    const message = createBaseMsgUpdateLeaseResponse();
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
  MsgEndLease(request: MsgEndLeaseRequest): Promise<MsgEndLeaseResponse>;
  MsgRenewLease(request: MsgRenewLeaseRequest): Promise<MsgRenewLeaseResponse>;
  MsgStartLease(request: MsgStartLeaseRequest): Promise<MsgStartLeaseResponse>;
  MsgUpdateLease(request: MsgUpdateLeaseRequest): Promise<MsgUpdateLeaseResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.lease.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgEndLease = this.MsgEndLease.bind(this);
    this.MsgRenewLease = this.MsgRenewLease.bind(this);
    this.MsgStartLease = this.MsgStartLease.bind(this);
    this.MsgUpdateLease = this.MsgUpdateLease.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgEndLease(request: MsgEndLeaseRequest): Promise<MsgEndLeaseResponse> {
    const data = MsgEndLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgEndLease", data);
    return promise.then((data) => MsgEndLeaseResponse.decode(_m0.Reader.create(data)));
  }

  MsgRenewLease(request: MsgRenewLeaseRequest): Promise<MsgRenewLeaseResponse> {
    const data = MsgRenewLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRenewLease", data);
    return promise.then((data) => MsgRenewLeaseResponse.decode(_m0.Reader.create(data)));
  }

  MsgStartLease(request: MsgStartLeaseRequest): Promise<MsgStartLeaseResponse> {
    const data = MsgStartLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStartLease", data);
    return promise.then((data) => MsgStartLeaseResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateLease(request: MsgUpdateLeaseRequest): Promise<MsgUpdateLeaseResponse> {
    const data = MsgUpdateLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateLease", data);
    return promise.then((data) => MsgUpdateLeaseResponse.decode(_m0.Reader.create(data)));
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
