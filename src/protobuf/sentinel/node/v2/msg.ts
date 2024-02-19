/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";

export const protobufPackage = "sentinel.node.v2";

/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequest {
  from: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
}

/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequest {
  from: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
}

/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequest {
  from: string;
  status: Status;
}

/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequest {
  from: string;
  nodeAddress: string;
  gigabytes: Long;
  hours: Long;
  denom: string;
}

/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {
}

/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {
}

/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponse {
}

/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponse {
}

function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return { from: "", gigabytePrices: [], hourlyPrices: [], remoteUrl: "" };
}

export const MsgRegisterRequest = {
  encode(message: MsgRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
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

          message.gigabytePrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices.push(Coin.decode(reader, reader.uint32()));
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
      gigabytePrices: globalThis.Array.isArray(object?.gigabytePrices)
        ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e))
        : [],
      hourlyPrices: globalThis.Array.isArray(object?.hourlyPrices)
        ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e))
        : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgRegisterRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.gigabytePrices?.length) {
      obj.gigabytePrices = message.gigabytePrices.map((e) => Coin.toJSON(e));
    }
    if (message.hourlyPrices?.length) {
      obj.hourlyPrices = message.hourlyPrices.map((e) => Coin.toJSON(e));
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
    message.gigabytePrices = object.gigabytePrices?.map((e) => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map((e) => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgUpdateDetailsRequest(): MsgUpdateDetailsRequest {
  return { from: "", gigabytePrices: [], hourlyPrices: [], remoteUrl: "" };
}

export const MsgUpdateDetailsRequest = {
  encode(message: MsgUpdateDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDetailsRequest();
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

          message.gigabytePrices.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hourlyPrices.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgUpdateDetailsRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      gigabytePrices: globalThis.Array.isArray(object?.gigabytePrices)
        ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e))
        : [],
      hourlyPrices: globalThis.Array.isArray(object?.hourlyPrices)
        ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e))
        : [],
      remoteUrl: isSet(object.remoteUrl) ? globalThis.String(object.remoteUrl) : "",
    };
  },

  toJSON(message: MsgUpdateDetailsRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.gigabytePrices?.length) {
      obj.gigabytePrices = message.gigabytePrices.map((e) => Coin.toJSON(e));
    }
    if (message.hourlyPrices?.length) {
      obj.hourlyPrices = message.hourlyPrices.map((e) => Coin.toJSON(e));
    }
    if (message.remoteUrl !== "") {
      obj.remoteUrl = message.remoteUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateDetailsRequest>): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateDetailsRequest>): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    message.from = object.from ?? "";
    message.gigabytePrices = object.gigabytePrices?.map((e) => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map((e) => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
};

function createBaseMsgUpdateStatusRequest(): MsgUpdateStatusRequest {
  return { from: "", status: 0 };
}

export const MsgUpdateStatusRequest = {
  encode(message: MsgUpdateStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateStatusRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
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
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgSubscribeRequest(): MsgSubscribeRequest {
  return { from: "", nodeAddress: "", gigabytes: Long.ZERO, hours: Long.ZERO, denom: "" };
}

export const MsgSubscribeRequest = {
  encode(message: MsgSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgSubscribeRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      nodeAddress: isSet(object.nodeAddress) ? globalThis.String(object.nodeAddress) : "",
      gigabytes: isSet(object.gigabytes) ? Long.fromValue(object.gigabytes) : Long.ZERO,
      hours: isSet(object.hours) ? Long.fromValue(object.hours) : Long.ZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgSubscribeRequest): unknown {
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

  create(base?: DeepPartial<MsgSubscribeRequest>): MsgSubscribeRequest {
    return MsgSubscribeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubscribeRequest>): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
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

function createBaseMsgUpdateDetailsResponse(): MsgUpdateDetailsResponse {
  return {};
}

export const MsgUpdateDetailsResponse = {
  encode(_: MsgUpdateDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDetailsResponse();
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

  fromJSON(_: any): MsgUpdateDetailsResponse {
    return {};
  },

  toJSON(_: MsgUpdateDetailsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateDetailsResponse>): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateDetailsResponse>): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
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
  MsgRegister(request: MsgRegisterRequest): Promise<MsgRegisterResponse>;
  MsgUpdateDetails(request: MsgUpdateDetailsRequest): Promise<MsgUpdateDetailsResponse>;
  MsgUpdateStatus(request: MsgUpdateStatusRequest): Promise<MsgUpdateStatusResponse>;
  MsgSubscribe(request: MsgSubscribeRequest): Promise<MsgSubscribeResponse>;
}

export const MsgServiceServiceName = "sentinel.node.v2.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgRegister = this.MsgRegister.bind(this);
    this.MsgUpdateDetails = this.MsgUpdateDetails.bind(this);
    this.MsgUpdateStatus = this.MsgUpdateStatus.bind(this);
    this.MsgSubscribe = this.MsgSubscribe.bind(this);
  }
  MsgRegister(request: MsgRegisterRequest): Promise<MsgRegisterResponse> {
    const data = MsgRegisterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRegister", data);
    return promise.then((data) => MsgRegisterResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateDetails(request: MsgUpdateDetailsRequest): Promise<MsgUpdateDetailsResponse> {
    const data = MsgUpdateDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateDetails", data);
    return promise.then((data) => MsgUpdateDetailsResponse.decode(_m0.Reader.create(data)));
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
