/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Price } from "../../types/v1/price";
import { RenewalPricePolicy, renewalPricePolicyFromJSON, renewalPricePolicyToJSON } from "../../types/v1/renewal";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.plan.v3";

export interface MsgCreatePlanRequest {
  from: string;
  gigabytes: Long;
  hours: Long;
  prices: Price[];
  private: boolean;
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

export interface MsgUpdatePlanStatusRequest {
  from: string;
  id: Long;
  status: Status;
}

export interface MsgStartSessionRequest {
  from: string;
  id: Long;
  denom: string;
  renewalPricePolicy: RenewalPricePolicy;
  nodeAddress: string;
}

export interface MsgCreatePlanResponse {
  id: Long;
}

export interface MsgLinkNodeResponse {
}

export interface MsgUnlinkNodeResponse {
}

export interface MsgUpdatePlanStatusResponse {
}

export interface MsgStartSessionResponse {
  id: Long;
}

function createBaseMsgCreatePlanRequest(): MsgCreatePlanRequest {
  return { from: "", gigabytes: Long.ZERO, hours: Long.ZERO, prices: [], private: false };
}

export const MsgCreatePlanRequest = {
  encode(message: MsgCreatePlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.gigabytes.isZero()) {
      writer.uint32(16).int64(message.gigabytes);
    }
    if (!message.hours.isZero()) {
      writer.uint32(24).int64(message.hours);
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.private === true) {
      writer.uint32(40).bool(message.private);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePlanRequest();
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

          message.gigabytes = reader.int64() as Long;
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

          message.prices.push(Price.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.private = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePlanRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      prices: globalThis.Array.isArray(object?.prices) ? object.prices.map((e: any) => Price.fromJSON(e)) : [],
      private: isSet(object.private) ? globalThis.Boolean(object.private) : false,
    };
  },

  toJSON(message: MsgCreatePlanRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.gigabytes.isZero()) {
      obj.gigabytes = (message.gigabytes || Long.ZERO).toString();
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.prices?.length) {
      obj.prices = message.prices.map((e) => Price.toJSON(e));
    }
    if (message.private === true) {
      obj.private = message.private;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePlanRequest>): MsgCreatePlanRequest {
    return MsgCreatePlanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreatePlanRequest>): MsgCreatePlanRequest {
    const message = createBaseMsgCreatePlanRequest();
    message.from = object.from ?? "";
    message.gigabytes = (object.gigabytes !== undefined && object.gigabytes !== null)
      ? Long.fromValue(object.gigabytes)
      : Long.ZERO;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.prices = object.prices?.map((e) => Price.fromPartial(e)) || [];
    message.private = object.private ?? false;
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

function createBaseMsgUpdatePlanStatusRequest(): MsgUpdatePlanStatusRequest {
  return { from: "", id: Long.UZERO, status: 0 };
}

export const MsgUpdatePlanStatusRequest = {
  encode(message: MsgUpdatePlanStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePlanStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePlanStatusRequest();
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

  fromJSON(object: any): MsgUpdatePlanStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdatePlanStatusRequest): unknown {
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

  create(base?: DeepPartial<MsgUpdatePlanStatusRequest>): MsgUpdatePlanStatusRequest {
    return MsgUpdatePlanStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdatePlanStatusRequest>): MsgUpdatePlanStatusRequest {
    const message = createBaseMsgUpdatePlanStatusRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgStartSessionRequest(): MsgStartSessionRequest {
  return { from: "", id: Long.UZERO, denom: "", renewalPricePolicy: 0, nodeAddress: "" };
}

export const MsgStartSessionRequest = {
  encode(message: MsgStartSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.renewalPricePolicy !== 0) {
      writer.uint32(32).int32(message.renewalPricePolicy);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(42).string(message.nodeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartSessionRequest();
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.renewalPricePolicy = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgStartSessionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
    };
  },

  toJSON(message: MsgStartSessionRequest): unknown {
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
    if (message.renewalPricePolicy !== 0) {
      obj.renewalPricePolicy = renewalPricePolicyToJSON(message.renewalPricePolicy);
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartSessionRequest>): MsgStartSessionRequest {
    return MsgStartSessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartSessionRequest>): MsgStartSessionRequest {
    const message = createBaseMsgStartSessionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
};

function createBaseMsgCreatePlanResponse(): MsgCreatePlanResponse {
  return { id: Long.UZERO };
}

export const MsgCreatePlanResponse = {
  encode(message: MsgCreatePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePlanResponse();
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

  fromJSON(object: any): MsgCreatePlanResponse {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: MsgCreatePlanResponse): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePlanResponse>): MsgCreatePlanResponse {
    return MsgCreatePlanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreatePlanResponse>): MsgCreatePlanResponse {
    const message = createBaseMsgCreatePlanResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
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

function createBaseMsgUpdatePlanStatusResponse(): MsgUpdatePlanStatusResponse {
  return {};
}

export const MsgUpdatePlanStatusResponse = {
  encode(_: MsgUpdatePlanStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePlanStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePlanStatusResponse();
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

  fromJSON(_: any): MsgUpdatePlanStatusResponse {
    return {};
  },

  toJSON(_: MsgUpdatePlanStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePlanStatusResponse>): MsgUpdatePlanStatusResponse {
    return MsgUpdatePlanStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdatePlanStatusResponse>): MsgUpdatePlanStatusResponse {
    const message = createBaseMsgUpdatePlanStatusResponse();
    return message;
  },
};

function createBaseMsgStartSessionResponse(): MsgStartSessionResponse {
  return { id: Long.UZERO };
}

export const MsgStartSessionResponse = {
  encode(message: MsgStartSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartSessionResponse();
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

  fromJSON(object: any): MsgStartSessionResponse {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: MsgStartSessionResponse): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartSessionResponse>): MsgStartSessionResponse {
    return MsgStartSessionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartSessionResponse>): MsgStartSessionResponse {
    const message = createBaseMsgStartSessionResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

export interface MsgService {
  MsgCreatePlan(request: MsgCreatePlanRequest): Promise<MsgCreatePlanResponse>;
  MsgLinkNode(request: MsgLinkNodeRequest): Promise<MsgLinkNodeResponse>;
  MsgUnlinkNode(request: MsgUnlinkNodeRequest): Promise<MsgUnlinkNodeResponse>;
  MsgUpdatePlanStatus(request: MsgUpdatePlanStatusRequest): Promise<MsgUpdatePlanStatusResponse>;
  MsgStartSession(request: MsgStartSessionRequest): Promise<MsgStartSessionResponse>;
}

export const MsgServiceServiceName = "sentinel.plan.v3.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgCreatePlan = this.MsgCreatePlan.bind(this);
    this.MsgLinkNode = this.MsgLinkNode.bind(this);
    this.MsgUnlinkNode = this.MsgUnlinkNode.bind(this);
    this.MsgUpdatePlanStatus = this.MsgUpdatePlanStatus.bind(this);
    this.MsgStartSession = this.MsgStartSession.bind(this);
  }
  MsgCreatePlan(request: MsgCreatePlanRequest): Promise<MsgCreatePlanResponse> {
    const data = MsgCreatePlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCreatePlan", data);
    return promise.then((data) => MsgCreatePlanResponse.decode(_m0.Reader.create(data)));
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

  MsgUpdatePlanStatus(request: MsgUpdatePlanStatusRequest): Promise<MsgUpdatePlanStatusResponse> {
    const data = MsgUpdatePlanStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdatePlanStatus", data);
    return promise.then((data) => MsgUpdatePlanStatusResponse.decode(_m0.Reader.create(data)));
  }

  MsgStartSession(request: MsgStartSessionRequest): Promise<MsgStartSessionResponse> {
    const data = MsgStartSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStartSession", data);
    return promise.then((data) => MsgStartSessionResponse.decode(_m0.Reader.create(data)));
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
