/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RenewalPricePolicy, renewalPricePolicyFromJSON, renewalPricePolicyToJSON } from "../../types/v1/renewal";
import { Params } from "../v2/params";

export const protobufPackage = "sentinel.subscription.v3";

export interface MsgCancelSubscriptionRequest {
  from: string;
  id: Long;
}

export interface MsgRenewSubscriptionRequest {
  from: string;
  id: Long;
  denom: string;
}

export interface MsgShareSubscriptionRequest {
  from: string;
  id: Long;
  accAddress: string;
  bytes: string;
}

export interface MsgStartSubscriptionRequest {
  from: string;
  id: Long;
  denom: string;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface MsgUpdateSubscriptionRequest {
  from: string;
  id: Long;
  renewalPricePolicy: RenewalPricePolicy;
}

export interface MsgStartSessionRequest {
  from: string;
  id: Long;
  nodeAddress: string;
}

export interface MsgUpdateParamsRequest {
  from: string;
  params?: Params | undefined;
}

export interface MsgCancelSubscriptionResponse {
}

export interface MsgRenewSubscriptionResponse {
}

export interface MsgShareSubscriptionResponse {
}

export interface MsgStartSubscriptionResponse {
  id: Long;
}

export interface MsgUpdateSubscriptionResponse {
}

export interface MsgStartSessionResponse {
  id: Long;
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgCancelSubscriptionRequest(): MsgCancelSubscriptionRequest {
  return { from: "", id: Long.UZERO };
}

export const MsgCancelSubscriptionRequest = {
  encode(message: MsgCancelSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSubscriptionRequest();
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

  fromJSON(object: any): MsgCancelSubscriptionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelSubscriptionRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSubscriptionRequest>): MsgCancelSubscriptionRequest {
    return MsgCancelSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCancelSubscriptionRequest>): MsgCancelSubscriptionRequest {
    const message = createBaseMsgCancelSubscriptionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgRenewSubscriptionRequest(): MsgRenewSubscriptionRequest {
  return { from: "", id: Long.UZERO, denom: "" };
}

export const MsgRenewSubscriptionRequest = {
  encode(message: MsgRenewSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewSubscriptionRequest();
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

  fromJSON(object: any): MsgRenewSubscriptionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: MsgRenewSubscriptionRequest): unknown {
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

  create(base?: DeepPartial<MsgRenewSubscriptionRequest>): MsgRenewSubscriptionRequest {
    return MsgRenewSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRenewSubscriptionRequest>): MsgRenewSubscriptionRequest {
    const message = createBaseMsgRenewSubscriptionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgShareSubscriptionRequest(): MsgShareSubscriptionRequest {
  return { from: "", id: Long.UZERO, accAddress: "", bytes: "" };
}

export const MsgShareSubscriptionRequest = {
  encode(message: MsgShareSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.accAddress !== "") {
      writer.uint32(26).string(message.accAddress);
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShareSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShareSubscriptionRequest();
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

          message.accAddress = reader.string();
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

  fromJSON(object: any): MsgShareSubscriptionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      accAddress: isSet(object.accAddress) ? globalThis.String(object.accAddress) : "",
      bytes: isSet(object.bytes) ? globalThis.String(object.bytes) : "",
    };
  },

  toJSON(message: MsgShareSubscriptionRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.accAddress !== "") {
      obj.accAddress = message.accAddress;
    }
    if (message.bytes !== "") {
      obj.bytes = message.bytes;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgShareSubscriptionRequest>): MsgShareSubscriptionRequest {
    return MsgShareSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgShareSubscriptionRequest>): MsgShareSubscriptionRequest {
    const message = createBaseMsgShareSubscriptionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.accAddress = object.accAddress ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  },
};

function createBaseMsgStartSubscriptionRequest(): MsgStartSubscriptionRequest {
  return { from: "", id: Long.UZERO, denom: "", renewalPricePolicy: 0 };
}

export const MsgStartSubscriptionRequest = {
  encode(message: MsgStartSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartSubscriptionRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStartSubscriptionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
    };
  },

  toJSON(message: MsgStartSubscriptionRequest): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<MsgStartSubscriptionRequest>): MsgStartSubscriptionRequest {
    return MsgStartSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartSubscriptionRequest>): MsgStartSubscriptionRequest {
    const message = createBaseMsgStartSubscriptionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    return message;
  },
};

function createBaseMsgUpdateSubscriptionRequest(): MsgUpdateSubscriptionRequest {
  return { from: "", id: Long.UZERO, renewalPricePolicy: 0 };
}

export const MsgUpdateSubscriptionRequest = {
  encode(message: MsgUpdateSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSubscriptionRequest();
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

  fromJSON(object: any): MsgUpdateSubscriptionRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      renewalPricePolicy: isSet(object.renewalPricePolicy) ? renewalPricePolicyFromJSON(object.renewalPricePolicy) : 0,
    };
  },

  toJSON(message: MsgUpdateSubscriptionRequest): unknown {
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

  create(base?: DeepPartial<MsgUpdateSubscriptionRequest>): MsgUpdateSubscriptionRequest {
    return MsgUpdateSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateSubscriptionRequest>): MsgUpdateSubscriptionRequest {
    const message = createBaseMsgUpdateSubscriptionRequest();
    message.from = object.from ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.renewalPricePolicy = object.renewalPricePolicy ?? 0;
    return message;
  },
};

function createBaseMsgStartSessionRequest(): MsgStartSessionRequest {
  return { from: "", id: Long.UZERO, nodeAddress: "" };
}

export const MsgStartSessionRequest = {
  encode(message: MsgStartSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    message.nodeAddress = object.nodeAddress ?? "";
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

function createBaseMsgCancelSubscriptionResponse(): MsgCancelSubscriptionResponse {
  return {};
}

export const MsgCancelSubscriptionResponse = {
  encode(_: MsgCancelSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSubscriptionResponse();
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

  fromJSON(_: any): MsgCancelSubscriptionResponse {
    return {};
  },

  toJSON(_: MsgCancelSubscriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSubscriptionResponse>): MsgCancelSubscriptionResponse {
    return MsgCancelSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCancelSubscriptionResponse>): MsgCancelSubscriptionResponse {
    const message = createBaseMsgCancelSubscriptionResponse();
    return message;
  },
};

function createBaseMsgRenewSubscriptionResponse(): MsgRenewSubscriptionResponse {
  return {};
}

export const MsgRenewSubscriptionResponse = {
  encode(_: MsgRenewSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewSubscriptionResponse();
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

  fromJSON(_: any): MsgRenewSubscriptionResponse {
    return {};
  },

  toJSON(_: MsgRenewSubscriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRenewSubscriptionResponse>): MsgRenewSubscriptionResponse {
    return MsgRenewSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRenewSubscriptionResponse>): MsgRenewSubscriptionResponse {
    const message = createBaseMsgRenewSubscriptionResponse();
    return message;
  },
};

function createBaseMsgShareSubscriptionResponse(): MsgShareSubscriptionResponse {
  return {};
}

export const MsgShareSubscriptionResponse = {
  encode(_: MsgShareSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShareSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShareSubscriptionResponse();
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

  fromJSON(_: any): MsgShareSubscriptionResponse {
    return {};
  },

  toJSON(_: MsgShareSubscriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgShareSubscriptionResponse>): MsgShareSubscriptionResponse {
    return MsgShareSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgShareSubscriptionResponse>): MsgShareSubscriptionResponse {
    const message = createBaseMsgShareSubscriptionResponse();
    return message;
  },
};

function createBaseMsgStartSubscriptionResponse(): MsgStartSubscriptionResponse {
  return { id: Long.UZERO };
}

export const MsgStartSubscriptionResponse = {
  encode(message: MsgStartSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartSubscriptionResponse();
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

  fromJSON(object: any): MsgStartSubscriptionResponse {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: MsgStartSubscriptionResponse): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MsgStartSubscriptionResponse>): MsgStartSubscriptionResponse {
    return MsgStartSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgStartSubscriptionResponse>): MsgStartSubscriptionResponse {
    const message = createBaseMsgStartSubscriptionResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateSubscriptionResponse(): MsgUpdateSubscriptionResponse {
  return {};
}

export const MsgUpdateSubscriptionResponse = {
  encode(_: MsgUpdateSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSubscriptionResponse();
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

  fromJSON(_: any): MsgUpdateSubscriptionResponse {
    return {};
  },

  toJSON(_: MsgUpdateSubscriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSubscriptionResponse>): MsgUpdateSubscriptionResponse {
    return MsgUpdateSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateSubscriptionResponse>): MsgUpdateSubscriptionResponse {
    const message = createBaseMsgUpdateSubscriptionResponse();
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
  MsgCancelSubscription(request: MsgCancelSubscriptionRequest): Promise<MsgCancelSubscriptionResponse>;
  MsgRenewSubscription(request: MsgRenewSubscriptionRequest): Promise<MsgRenewSubscriptionResponse>;
  MsgShareSubscription(request: MsgShareSubscriptionRequest): Promise<MsgShareSubscriptionResponse>;
  MsgStartSubscription(request: MsgStartSubscriptionRequest): Promise<MsgStartSubscriptionResponse>;
  MsgUpdateSubscription(request: MsgUpdateSubscriptionRequest): Promise<MsgUpdateSubscriptionResponse>;
  MsgStartSession(request: MsgStartSessionRequest): Promise<MsgStartSessionResponse>;
  MsgUpdateParams(request: MsgUpdateParamsRequest): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceServiceName = "sentinel.subscription.v3.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgCancelSubscription = this.MsgCancelSubscription.bind(this);
    this.MsgRenewSubscription = this.MsgRenewSubscription.bind(this);
    this.MsgShareSubscription = this.MsgShareSubscription.bind(this);
    this.MsgStartSubscription = this.MsgStartSubscription.bind(this);
    this.MsgUpdateSubscription = this.MsgUpdateSubscription.bind(this);
    this.MsgStartSession = this.MsgStartSession.bind(this);
    this.MsgUpdateParams = this.MsgUpdateParams.bind(this);
  }
  MsgCancelSubscription(request: MsgCancelSubscriptionRequest): Promise<MsgCancelSubscriptionResponse> {
    const data = MsgCancelSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCancelSubscription", data);
    return promise.then((data) => MsgCancelSubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  MsgRenewSubscription(request: MsgRenewSubscriptionRequest): Promise<MsgRenewSubscriptionResponse> {
    const data = MsgRenewSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgRenewSubscription", data);
    return promise.then((data) => MsgRenewSubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  MsgShareSubscription(request: MsgShareSubscriptionRequest): Promise<MsgShareSubscriptionResponse> {
    const data = MsgShareSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgShareSubscription", data);
    return promise.then((data) => MsgShareSubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  MsgStartSubscription(request: MsgStartSubscriptionRequest): Promise<MsgStartSubscriptionResponse> {
    const data = MsgStartSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgStartSubscription", data);
    return promise.then((data) => MsgStartSubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  MsgUpdateSubscription(request: MsgUpdateSubscriptionRequest): Promise<MsgUpdateSubscriptionResponse> {
    const data = MsgUpdateSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgUpdateSubscription", data);
    return promise.then((data) => MsgUpdateSubscriptionResponse.decode(_m0.Reader.create(data)));
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
