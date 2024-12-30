/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Allocation } from "./allocation";
import { Params } from "./params";
import { Payout } from "./payout";

export const protobufPackage = "sentinel.subscription.v2";

export interface QueryAllocationsRequest {
  id: Long;
  pagination?: PageRequest | undefined;
}

export interface QueryAllocationRequest {
  id: Long;
  address: string;
}

export interface QueryPayoutsRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryPayoutsForAccountRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QueryPayoutsForNodeRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QueryPayoutRequest {
  id: Long;
}

export interface QuerySubscriptionsRequest {
  pagination?: PageRequest | undefined;
}

export interface QuerySubscriptionsForAccountRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QuerySubscriptionsForNodeRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QuerySubscriptionsForPlanRequest {
  id: Long;
  pagination?: PageRequest | undefined;
}

export interface QuerySubscriptionRequest {
  id: Long;
}

export interface QueryParamsRequest {
}

export interface QueryAllocationsResponse {
  allocations: Allocation[];
  pagination?: PageResponse | undefined;
}

export interface QueryAllocationResponse {
  allocation?: Allocation | undefined;
}

export interface QueryPayoutsResponse {
  payouts: Payout[];
  pagination?: PageResponse | undefined;
}

export interface QueryPayoutsForAccountResponse {
  payouts: Payout[];
  pagination?: PageResponse | undefined;
}

export interface QueryPayoutsForNodeResponse {
  payouts: Payout[];
  pagination?: PageResponse | undefined;
}

export interface QueryPayoutResponse {
  payout?: Payout | undefined;
}

export interface QuerySubscriptionsResponse {
  subscriptions: Any[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionsForAccountResponse {
  subscriptions: Any[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionsForNodeResponse {
  subscriptions: Any[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionsForPlanResponse {
  subscriptions: Any[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionResponse {
  subscription?: Any | undefined;
}

export interface QueryParamsResponse {
  params?: Params | undefined;
}

function createBaseQueryAllocationsRequest(): QueryAllocationsRequest {
  return { id: Long.UZERO, pagination: undefined };
}

export const QueryAllocationsRequest = {
  encode(message: QueryAllocationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllocationsRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllocationsRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllocationsRequest>): QueryAllocationsRequest {
    return QueryAllocationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllocationsRequest>): QueryAllocationsRequest {
    const message = createBaseQueryAllocationsRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllocationRequest(): QueryAllocationRequest {
  return { id: Long.UZERO, address: "" };
}

export const QueryAllocationRequest = {
  encode(message: QueryAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryAllocationRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: QueryAllocationRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllocationRequest>): QueryAllocationRequest {
    return QueryAllocationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllocationRequest>): QueryAllocationRequest {
    const message = createBaseQueryAllocationRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryPayoutsRequest(): QueryPayoutsRequest {
  return { pagination: undefined };
}

export const QueryPayoutsRequest = {
  encode(message: QueryPayoutsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryPayoutsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsRequest>): QueryPayoutsRequest {
    return QueryPayoutsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsRequest>): QueryPayoutsRequest {
    const message = createBaseQueryPayoutsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutsForAccountRequest(): QueryPayoutsForAccountRequest {
  return { address: "", pagination: undefined };
}

export const QueryPayoutsForAccountRequest = {
  encode(message: QueryPayoutsForAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsForAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsForAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsForAccountRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPayoutsForAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsForAccountRequest>): QueryPayoutsForAccountRequest {
    return QueryPayoutsForAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsForAccountRequest>): QueryPayoutsForAccountRequest {
    const message = createBaseQueryPayoutsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutsForNodeRequest(): QueryPayoutsForNodeRequest {
  return { address: "", pagination: undefined };
}

export const QueryPayoutsForNodeRequest = {
  encode(message: QueryPayoutsForNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsForNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsForNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsForNodeRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPayoutsForNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsForNodeRequest>): QueryPayoutsForNodeRequest {
    return QueryPayoutsForNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsForNodeRequest>): QueryPayoutsForNodeRequest {
    const message = createBaseQueryPayoutsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutRequest(): QueryPayoutRequest {
  return { id: Long.UZERO };
}

export const QueryPayoutRequest = {
  encode(message: QueryPayoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutRequest();
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

  fromJSON(object: any): QueryPayoutRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryPayoutRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutRequest>): QueryPayoutRequest {
    return QueryPayoutRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutRequest>): QueryPayoutRequest {
    const message = createBaseQueryPayoutRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQuerySubscriptionsRequest(): QuerySubscriptionsRequest {
  return { pagination: undefined };
}

export const QuerySubscriptionsRequest = {
  encode(message: QuerySubscriptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySubscriptionsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest {
    return QuerySubscriptionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest {
    const message = createBaseQuerySubscriptionsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForAccountRequest(): QuerySubscriptionsForAccountRequest {
  return { address: "", pagination: undefined };
}

export const QuerySubscriptionsForAccountRequest = {
  encode(message: QuerySubscriptionsForAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForAccountRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForAccountRequest>): QuerySubscriptionsForAccountRequest {
    return QuerySubscriptionsForAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForAccountRequest>): QuerySubscriptionsForAccountRequest {
    const message = createBaseQuerySubscriptionsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForNodeRequest(): QuerySubscriptionsForNodeRequest {
  return { address: "", pagination: undefined };
}

export const QuerySubscriptionsForNodeRequest = {
  encode(message: QuerySubscriptionsForNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForNodeRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForNodeRequest>): QuerySubscriptionsForNodeRequest {
    return QuerySubscriptionsForNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForNodeRequest>): QuerySubscriptionsForNodeRequest {
    const message = createBaseQuerySubscriptionsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForPlanRequest(): QuerySubscriptionsForPlanRequest {
  return { id: Long.UZERO, pagination: undefined };
}

export const QuerySubscriptionsForPlanRequest = {
  encode(message: QuerySubscriptionsForPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForPlanRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForPlanRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForPlanRequest>): QuerySubscriptionsForPlanRequest {
    return QuerySubscriptionsForPlanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForPlanRequest>): QuerySubscriptionsForPlanRequest {
    const message = createBaseQuerySubscriptionsForPlanRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionRequest(): QuerySubscriptionRequest {
  return { id: Long.UZERO };
}

export const QuerySubscriptionRequest = {
  encode(message: QuerySubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionRequest();
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

  fromJSON(object: any): QuerySubscriptionRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QuerySubscriptionRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionRequest>): QuerySubscriptionRequest {
    return QuerySubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionRequest>): QuerySubscriptionRequest {
    const message = createBaseQuerySubscriptionRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryAllocationsResponse(): QueryAllocationsResponse {
  return { allocations: [], pagination: undefined };
}

export const QueryAllocationsResponse = {
  encode(message: QueryAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllocationsResponse {
    return {
      allocations: globalThis.Array.isArray(object?.allocations)
        ? object.allocations.map((e: any) => Allocation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllocationsResponse): unknown {
    const obj: any = {};
    if (message.allocations?.length) {
      obj.allocations = message.allocations.map((e) => Allocation.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllocationsResponse>): QueryAllocationsResponse {
    return QueryAllocationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllocationsResponse>): QueryAllocationsResponse {
    const message = createBaseQueryAllocationsResponse();
    message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllocationResponse(): QueryAllocationResponse {
  return { allocation: undefined };
}

export const QueryAllocationResponse = {
  encode(message: QueryAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocation !== undefined) {
      Allocation.encode(message.allocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocation = Allocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllocationResponse {
    return { allocation: isSet(object.allocation) ? Allocation.fromJSON(object.allocation) : undefined };
  },

  toJSON(message: QueryAllocationResponse): unknown {
    const obj: any = {};
    if (message.allocation !== undefined) {
      obj.allocation = Allocation.toJSON(message.allocation);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllocationResponse>): QueryAllocationResponse {
    return QueryAllocationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllocationResponse>): QueryAllocationResponse {
    const message = createBaseQueryAllocationResponse();
    message.allocation = (object.allocation !== undefined && object.allocation !== null)
      ? Allocation.fromPartial(object.allocation)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutsResponse(): QueryPayoutsResponse {
  return { payouts: [], pagination: undefined };
}

export const QueryPayoutsResponse = {
  encode(message: QueryPayoutsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payouts.push(Payout.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsResponse {
    return {
      payouts: globalThis.Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPayoutsResponse): unknown {
    const obj: any = {};
    if (message.payouts?.length) {
      obj.payouts = message.payouts.map((e) => Payout.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsResponse>): QueryPayoutsResponse {
    return QueryPayoutsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsResponse>): QueryPayoutsResponse {
    const message = createBaseQueryPayoutsResponse();
    message.payouts = object.payouts?.map((e) => Payout.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutsForAccountResponse(): QueryPayoutsForAccountResponse {
  return { payouts: [], pagination: undefined };
}

export const QueryPayoutsForAccountResponse = {
  encode(message: QueryPayoutsForAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsForAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsForAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payouts.push(Payout.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsForAccountResponse {
    return {
      payouts: globalThis.Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPayoutsForAccountResponse): unknown {
    const obj: any = {};
    if (message.payouts?.length) {
      obj.payouts = message.payouts.map((e) => Payout.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsForAccountResponse>): QueryPayoutsForAccountResponse {
    return QueryPayoutsForAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsForAccountResponse>): QueryPayoutsForAccountResponse {
    const message = createBaseQueryPayoutsForAccountResponse();
    message.payouts = object.payouts?.map((e) => Payout.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutsForNodeResponse(): QueryPayoutsForNodeResponse {
  return { payouts: [], pagination: undefined };
}

export const QueryPayoutsForNodeResponse = {
  encode(message: QueryPayoutsForNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutsForNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutsForNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payouts.push(Payout.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutsForNodeResponse {
    return {
      payouts: globalThis.Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPayoutsForNodeResponse): unknown {
    const obj: any = {};
    if (message.payouts?.length) {
      obj.payouts = message.payouts.map((e) => Payout.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutsForNodeResponse>): QueryPayoutsForNodeResponse {
    return QueryPayoutsForNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutsForNodeResponse>): QueryPayoutsForNodeResponse {
    const message = createBaseQueryPayoutsForNodeResponse();
    message.payouts = object.payouts?.map((e) => Payout.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPayoutResponse(): QueryPayoutResponse {
  return { payout: undefined };
}

export const QueryPayoutResponse = {
  encode(message: QueryPayoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payout !== undefined) {
      Payout.encode(message.payout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payout = Payout.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayoutResponse {
    return { payout: isSet(object.payout) ? Payout.fromJSON(object.payout) : undefined };
  },

  toJSON(message: QueryPayoutResponse): unknown {
    const obj: any = {};
    if (message.payout !== undefined) {
      obj.payout = Payout.toJSON(message.payout);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayoutResponse>): QueryPayoutResponse {
    return QueryPayoutResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayoutResponse>): QueryPayoutResponse {
    const message = createBaseQueryPayoutResponse();
    message.payout = (object.payout !== undefined && object.payout !== null)
      ? Payout.fromPartial(object.payout)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsResponse(): QuerySubscriptionsResponse {
  return { subscriptions: [], pagination: undefined };
}

export const QuerySubscriptionsResponse = {
  encode(message: QuerySubscriptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsResponse {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Any.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse {
    return QuerySubscriptionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse {
    const message = createBaseQuerySubscriptionsResponse();
    message.subscriptions = object.subscriptions?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForAccountResponse(): QuerySubscriptionsForAccountResponse {
  return { subscriptions: [], pagination: undefined };
}

export const QuerySubscriptionsForAccountResponse = {
  encode(message: QuerySubscriptionsForAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForAccountResponse {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForAccountResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Any.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForAccountResponse>): QuerySubscriptionsForAccountResponse {
    return QuerySubscriptionsForAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForAccountResponse>): QuerySubscriptionsForAccountResponse {
    const message = createBaseQuerySubscriptionsForAccountResponse();
    message.subscriptions = object.subscriptions?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForNodeResponse(): QuerySubscriptionsForNodeResponse {
  return { subscriptions: [], pagination: undefined };
}

export const QuerySubscriptionsForNodeResponse = {
  encode(message: QuerySubscriptionsForNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForNodeResponse {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForNodeResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Any.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForNodeResponse>): QuerySubscriptionsForNodeResponse {
    return QuerySubscriptionsForNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForNodeResponse>): QuerySubscriptionsForNodeResponse {
    const message = createBaseQuerySubscriptionsForNodeResponse();
    message.subscriptions = object.subscriptions?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionsForPlanResponse(): QuerySubscriptionsForPlanResponse {
  return { subscriptions: [], pagination: undefined };
}

export const QuerySubscriptionsForPlanResponse = {
  encode(message: QuerySubscriptionsForPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsForPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionsForPlanResponse {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForPlanResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Any.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionsForPlanResponse>): QuerySubscriptionsForPlanResponse {
    return QuerySubscriptionsForPlanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionsForPlanResponse>): QuerySubscriptionsForPlanResponse {
    const message = createBaseQuerySubscriptionsForPlanResponse();
    message.subscriptions = object.subscriptions?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubscriptionResponse(): QuerySubscriptionResponse {
  return { subscription: undefined };
}

export const QuerySubscriptionResponse = {
  encode(message: QuerySubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      Any.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscription = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubscriptionResponse {
    return { subscription: isSet(object.subscription) ? Any.fromJSON(object.subscription) : undefined };
  },

  toJSON(message: QuerySubscriptionResponse): unknown {
    const obj: any = {};
    if (message.subscription !== undefined) {
      obj.subscription = Any.toJSON(message.subscription);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    return QuerySubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Any.fromPartial(object.subscription)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

export interface QueryService {
  QueryAllocation(request: QueryAllocationRequest): Promise<QueryAllocationResponse>;
  QueryAllocations(request: QueryAllocationsRequest): Promise<QueryAllocationsResponse>;
  QueryPayouts(request: QueryPayoutsRequest): Promise<QueryPayoutsResponse>;
  QueryPayoutsForAccount(request: QueryPayoutsForAccountRequest): Promise<QueryPayoutsForAccountResponse>;
  QueryPayoutsForNode(request: QueryPayoutsForNodeRequest): Promise<QueryPayoutsForNodeResponse>;
  QueryPayout(request: QueryPayoutRequest): Promise<QueryPayoutResponse>;
  QuerySubscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse>;
  QuerySubscriptionsForAccount(
    request: QuerySubscriptionsForAccountRequest,
  ): Promise<QuerySubscriptionsForAccountResponse>;
  QuerySubscriptionsForNode(request: QuerySubscriptionsForNodeRequest): Promise<QuerySubscriptionsForNodeResponse>;
  QuerySubscriptionsForPlan(request: QuerySubscriptionsForPlanRequest): Promise<QuerySubscriptionsForPlanResponse>;
  QuerySubscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.subscription.v2.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QueryAllocation = this.QueryAllocation.bind(this);
    this.QueryAllocations = this.QueryAllocations.bind(this);
    this.QueryPayouts = this.QueryPayouts.bind(this);
    this.QueryPayoutsForAccount = this.QueryPayoutsForAccount.bind(this);
    this.QueryPayoutsForNode = this.QueryPayoutsForNode.bind(this);
    this.QueryPayout = this.QueryPayout.bind(this);
    this.QuerySubscriptions = this.QuerySubscriptions.bind(this);
    this.QuerySubscriptionsForAccount = this.QuerySubscriptionsForAccount.bind(this);
    this.QuerySubscriptionsForNode = this.QuerySubscriptionsForNode.bind(this);
    this.QuerySubscriptionsForPlan = this.QuerySubscriptionsForPlan.bind(this);
    this.QuerySubscription = this.QuerySubscription.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryAllocation(request: QueryAllocationRequest): Promise<QueryAllocationResponse> {
    const data = QueryAllocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAllocation", data);
    return promise.then((data) => QueryAllocationResponse.decode(_m0.Reader.create(data)));
  }

  QueryAllocations(request: QueryAllocationsRequest): Promise<QueryAllocationsResponse> {
    const data = QueryAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAllocations", data);
    return promise.then((data) => QueryAllocationsResponse.decode(_m0.Reader.create(data)));
  }

  QueryPayouts(request: QueryPayoutsRequest): Promise<QueryPayoutsResponse> {
    const data = QueryPayoutsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPayouts", data);
    return promise.then((data) => QueryPayoutsResponse.decode(_m0.Reader.create(data)));
  }

  QueryPayoutsForAccount(request: QueryPayoutsForAccountRequest): Promise<QueryPayoutsForAccountResponse> {
    const data = QueryPayoutsForAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPayoutsForAccount", data);
    return promise.then((data) => QueryPayoutsForAccountResponse.decode(_m0.Reader.create(data)));
  }

  QueryPayoutsForNode(request: QueryPayoutsForNodeRequest): Promise<QueryPayoutsForNodeResponse> {
    const data = QueryPayoutsForNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPayoutsForNode", data);
    return promise.then((data) => QueryPayoutsForNodeResponse.decode(_m0.Reader.create(data)));
  }

  QueryPayout(request: QueryPayoutRequest): Promise<QueryPayoutResponse> {
    const data = QueryPayoutRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPayout", data);
    return promise.then((data) => QueryPayoutResponse.decode(_m0.Reader.create(data)));
  }

  QuerySubscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse> {
    const data = QuerySubscriptionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySubscriptions", data);
    return promise.then((data) => QuerySubscriptionsResponse.decode(_m0.Reader.create(data)));
  }

  QuerySubscriptionsForAccount(
    request: QuerySubscriptionsForAccountRequest,
  ): Promise<QuerySubscriptionsForAccountResponse> {
    const data = QuerySubscriptionsForAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySubscriptionsForAccount", data);
    return promise.then((data) => QuerySubscriptionsForAccountResponse.decode(_m0.Reader.create(data)));
  }

  QuerySubscriptionsForNode(request: QuerySubscriptionsForNodeRequest): Promise<QuerySubscriptionsForNodeResponse> {
    const data = QuerySubscriptionsForNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySubscriptionsForNode", data);
    return promise.then((data) => QuerySubscriptionsForNodeResponse.decode(_m0.Reader.create(data)));
  }

  QuerySubscriptionsForPlan(request: QuerySubscriptionsForPlanRequest): Promise<QuerySubscriptionsForPlanResponse> {
    const data = QuerySubscriptionsForPlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySubscriptionsForPlan", data);
    return promise.then((data) => QuerySubscriptionsForPlanResponse.decode(_m0.Reader.create(data)));
  }

  QuerySubscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse> {
    const data = QuerySubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySubscription", data);
    return promise.then((data) => QuerySubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryParams", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
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
