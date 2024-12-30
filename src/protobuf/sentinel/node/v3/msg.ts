/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Price } from "../../types/v1/price";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Params } from "./params";

export const protobufPackage = "sentinel.node.v3";

export interface MsgRegisterNodeRequest {
  from: string;
  gigabytePrices: Price[];
  hourlyPrices: Price[];
  remoteUrl: string;
}

export interface MsgUpdateNodeDetailsRequest {
  from: string;
  gigabytePrices: Price[];
  hourlyPrices: Price[];
  remoteUrl: string;
}

export interface MsgUpdateNodeStatusRequest {
  from: string;
  status: Status;
}

export interface MsgStartSessionRequest {
  from: string;
  nodeAddress: string;
  gigabytes: Long;
  hours: Long;
  denom: string;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgRegisterNodeResponse {
}

export interface MsgUpdateNodeDetailsResponse {
}

export interface MsgUpdateNodeStatusResponse {
}

export interface MsgStartSessionResponse {
  id: Long;
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgRegisterNodeRequest(): MsgRegisterNodeRequest {
  return { from: "", gigabytePrices: [], hourlyPrices: [], remoteUrl: "" };
}

export const MsgRegisterNodeRequest = {
  encode(message: MsgRegisterNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Price.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Price.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNodeRequest();
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

          message.gigabytePrices.push(Price.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices.push(Price.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgRegisterNodeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      gigabytePrices: globalThis.Array.isArray(object?.gigabytePrices)
        ? object.gigabytePrices.map((e: any) => Price.fromJSON(e))
        : [],
      hourlyPrices: globalThis.Array.isArray(object?.hourlyPrices)
        ? object.hourlyPrices.map((e: any) => Price.fromJSON(e))
        : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgRegisterNodeRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.gigabytePrices?.length) {
      obj.gigabytePrices = message.gigabytePrices.map((e) => Price.toJSON(e));
    }
    if (message.hourlyPrices?.length) {
      obj.hourlyPrices = message.hourlyPrices.map((e) => Price.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterNodeRequest>): MsgRegisterNodeRequest {
    return MsgRegisterNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRegisterNodeRequest>): MsgRegisterNodeRequest {
    const message = createBaseMsgRegisterNodeRequest();
    message.from = object.from ?? "";
    message.gigabytePrices = object.gigabytePrices?.map((e) => Price.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map((e) => Price.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgUpdateNodeDetailsRequest(): MsgUpdateNodeDetailsRequest {
  return { from: "", gigabytePrices: [], hourlyPrices: [], remoteUrl: "" };
}

export const MsgUpdateNodeDetailsRequest = {
  encode(message: MsgUpdateNodeDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Price.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Price.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeDetailsRequest();
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

          message.gigabytePrices.push(Price.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices.push(Price.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgUpdateNodeDetailsRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      gigabytePrices: globalThis.Array.isArray(object?.gigabytePrices)
        ? object.gigabytePrices.map((e: any) => Price.fromJSON(e))
        : [],
      hourlyPrices: globalThis.Array.isArray(object?.hourlyPrices)
        ? object.hourlyPrices.map((e: any) => Price.fromJSON(e))
        : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgUpdateNodeDetailsRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.gigabytePrices?.length) {
      obj.gigabytePrices = message.gigabytePrices.map((e) => Price.toJSON(e));
    }
    if (message.hourlyPrices?.length) {
      obj.hourlyPrices = message.hourlyPrices.map((e) => Price.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateNodeDetailsRequest>): MsgUpdateNodeDetailsRequest {
    return MsgUpdateNodeDetailsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateNodeDetailsRequest>): MsgUpdateNodeDetailsRequest {
    const message = createBaseMsgUpdateNodeDetailsRequest();
    message.from = object.from ?? "";
    message.gigabytePrices = object.gigabytePrices?.map((e) => Price.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map((e) => Price.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgUpdateNodeStatusRequest(): MsgUpdateNodeStatusRequest {
  return { from: "", status: 0 };
}

export const MsgUpdateNodeStatusRequest = {
  encode(message: MsgUpdateNodeStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeStatusRequest();
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

  fromJSON(object: any): MsgUpdateNodeStatusRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateNodeStatusRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateNodeStatusRequest>): MsgUpdateNodeStatusRequest {
    return MsgUpdateNodeStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateNodeStatusRequest>): MsgUpdateNodeStatusRequest {
    const message = createBaseMsgUpdateNodeStatusRequest();
    message.from = object.from ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgStartSessionRequest(): MsgStartSessionRequest {
  return { from: "", nodeAddress: "", gigabytes: Long.ZERO, hours: Long.ZERO, denom: "" };
}

export const MsgStartSessionRequest = {
  encode(message: MsgStartSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (!message.gigabytes.isZero()) {
      writer.uint32(24).int64(message.gigabytes);
    }
    if (!message.hours.isZero()) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
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
          if (tag !== 18) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gigabytes = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hours = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgStartSessionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgStartSessionRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (!message.gigabytes.isZero()) {
      obj.gigabytes = (message.gigabytes || Long.ZERO).toString();
    }
    if (!message.hours.isZero()) {
      obj.hours = (message.hours || Long.ZERO).toString();
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartSessionRequest>): MsgStartSessionRequest {
    return MsgStartSessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartSessionRequest>): MsgStartSessionRequest {
    const message = createBaseMsgStartSessionRequest();
    message.from = object.from ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytes = (object.gigabytes !== undefined && object.gigabytes !== null)
      ? Long.fromValue(object.gigabytes)
      : Long.ZERO;
    message.hours = (object.hours !== undefined && object.hours !== null) ? Long.fromValue(object.hours) : Long.ZERO;
    message.denom = object.denom ?? "";
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

function createBaseMsgRegisterNodeResponse(): MsgRegisterNodeResponse {
  return {};
}

export const MsgRegisterNodeResponse = {
  encode(_: MsgRegisterNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNodeResponse();
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

  fromJSON(_: any): MsgRegisterNodeResponse {
    return {};
  },

  toJSON(_: MsgRegisterNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterNodeResponse>): MsgRegisterNodeResponse {
    return MsgRegisterNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRegisterNodeResponse>): MsgRegisterNodeResponse {
    const message = createBaseMsgRegisterNodeResponse();
    return message;
  },
};

function createBaseMsgUpdateNodeDetailsResponse(): MsgUpdateNodeDetailsResponse {
  return {};
}

export const MsgUpdateNodeDetailsResponse = {
  encode(_: MsgUpdateNodeDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeDetailsResponse();
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

  fromJSON(_: any): MsgUpdateNodeDetailsResponse {
    return {};
  },

  toJSON(_: MsgUpdateNodeDetailsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateNodeDetailsResponse>): MsgUpdateNodeDetailsResponse {
    return MsgUpdateNodeDetailsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateNodeDetailsResponse>): MsgUpdateNodeDetailsResponse {
    const message = createBaseMsgUpdateNodeDetailsResponse();
    return message;
  },
};

function createBaseMsgUpdateNodeStatusResponse(): MsgUpdateNodeStatusResponse {
  return {};
}

export const MsgUpdateNodeStatusResponse = {
  encode(_: MsgUpdateNodeStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeStatusResponse();
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

  fromJSON(_: any): MsgUpdateNodeStatusResponse {
    return {};
  },

  toJSON(_: MsgUpdateNodeStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateNodeStatusResponse>): MsgUpdateNodeStatusResponse {
    return MsgUpdateNodeStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateNodeStatusResponse>): MsgUpdateNodeStatusResponse {
    const message = createBaseMsgUpdateNodeStatusResponse();
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
  MsgRegisterNode(request: MsgRegisterNodeRequest): Promise<MsgRegisterNodeResponse>;
  MsgUpdateNodeDetails(request: MsgUpdateNodeDetailsRequest): Promise<MsgUpdateNodeDetailsResponse>;
  MsgUpdateNodeStatus(request: MsgUpdateNodeStatusRequest): Promise<MsgUpdateNodeStatusResponse>;
  MsgStartSession(request: MsgStartSessionRequest): Promise<MsgStartSessionResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.node.v3.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgRegisterNode = this.MsgRegisterNode.bind(this);
    this.MsgUpdateNodeDetails = this.MsgUpdateNodeDetails.bind(this);
    this.MsgUpdateNodeStatus = this.MsgUpdateNodeStatus.bind(this);
    this.MsgStartSession = this.MsgStartSession.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgRegisterNode(request: MsgRegisterNodeRequest): Promise<MsgRegisterNodeResponse> {
    const data = MsgRegisterNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRegisterNode", data);
    return promise.then((data) => MsgRegisterNodeResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateNodeDetails(request: MsgUpdateNodeDetailsRequest): Promise<MsgUpdateNodeDetailsResponse> {
    const data = MsgUpdateNodeDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateNodeDetails", data);
    return promise.then((data) => MsgUpdateNodeDetailsResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateNodeStatus(request: MsgUpdateNodeStatusRequest): Promise<MsgUpdateNodeStatusResponse> {
    const data = MsgUpdateNodeStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateNodeStatus", data);
    return promise.then((data) => MsgUpdateNodeStatusResponse.decode(_m0.Reader.create(data)));
  }

  MsgStartSession(request: MsgStartSessionRequest): Promise<MsgStartSessionResponse> {
    const data = MsgStartSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStartSession", data);
    return promise.then((data) => MsgStartSessionResponse.decode(_m0.Reader.create(data)));
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
