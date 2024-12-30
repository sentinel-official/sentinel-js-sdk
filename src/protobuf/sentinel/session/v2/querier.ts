/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Session } from "./session";

export const protobufPackage = "sentinel.session.v2";

export interface QuerySessionsRequest {
  pagination?: PageRequest | undefined;
}

export interface QuerySessionsForAccountRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QuerySessionsForAllocationRequest {
  id: Long;
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QuerySessionsForNodeRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QuerySessionsForSubscriptionRequest {
  id: Long;
  pagination?: PageRequest | undefined;
}

export interface QuerySessionRequest {
  id: Long;
}

export interface QueryParamsRequest {
}

export interface QuerySessionsResponse {
  sessions: Session[];
  pagination?: PageResponse | undefined;
}

export interface QuerySessionsForAccountResponse {
  sessions: Session[];
  pagination?: PageResponse | undefined;
}

export interface QuerySessionsForAllocationResponse {
  sessions: Session[];
  pagination?: PageResponse | undefined;
}

export interface QuerySessionsForNodeResponse {
  sessions: Session[];
  pagination?: PageResponse | undefined;
}

export interface QuerySessionsForSubscriptionResponse {
  sessions: Session[];
  pagination?: PageResponse | undefined;
}

export interface QuerySessionResponse {
  session?: Session | undefined;
}

export interface QueryParamsResponse {
  params?: Params | undefined;
}

function createBaseQuerySessionsRequest(): QuerySessionsRequest {
  return { pagination: undefined };
}

export const QuerySessionsRequest = {
  encode(message: QuerySessionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsRequest();
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

  fromJSON(object: any): QuerySessionsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySessionsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsRequest>): QuerySessionsRequest {
    return QuerySessionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsRequest>): QuerySessionsRequest {
    const message = createBaseQuerySessionsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForAccountRequest(): QuerySessionsForAccountRequest {
  return { address: "", pagination: undefined };
}

export const QuerySessionsForAccountRequest = {
  encode(message: QuerySessionsForAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAccountRequest();
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

  fromJSON(object: any): QuerySessionsForAccountRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAccountRequest>): QuerySessionsForAccountRequest {
    return QuerySessionsForAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAccountRequest>): QuerySessionsForAccountRequest {
    const message = createBaseQuerySessionsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForAllocationRequest(): QuerySessionsForAllocationRequest {
  return { id: Long.UZERO, address: "", pagination: undefined };
}

export const QuerySessionsForAllocationRequest = {
  encode(message: QuerySessionsForAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAllocationRequest();
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
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QuerySessionsForAllocationRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAllocationRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAllocationRequest>): QuerySessionsForAllocationRequest {
    return QuerySessionsForAllocationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAllocationRequest>): QuerySessionsForAllocationRequest {
    const message = createBaseQuerySessionsForAllocationRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForNodeRequest(): QuerySessionsForNodeRequest {
  return { address: "", pagination: undefined };
}

export const QuerySessionsForNodeRequest = {
  encode(message: QuerySessionsForNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForNodeRequest();
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

  fromJSON(object: any): QuerySessionsForNodeRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForNodeRequest>): QuerySessionsForNodeRequest {
    return QuerySessionsForNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForNodeRequest>): QuerySessionsForNodeRequest {
    const message = createBaseQuerySessionsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForSubscriptionRequest(): QuerySessionsForSubscriptionRequest {
  return { id: Long.UZERO, pagination: undefined };
}

export const QuerySessionsForSubscriptionRequest = {
  encode(message: QuerySessionsForSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForSubscriptionRequest();
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

  fromJSON(object: any): QuerySessionsForSubscriptionRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForSubscriptionRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForSubscriptionRequest>): QuerySessionsForSubscriptionRequest {
    return QuerySessionsForSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForSubscriptionRequest>): QuerySessionsForSubscriptionRequest {
    const message = createBaseQuerySessionsForSubscriptionRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionRequest(): QuerySessionRequest {
  return { id: Long.UZERO };
}

export const QuerySessionRequest = {
  encode(message: QuerySessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionRequest();
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

  fromJSON(object: any): QuerySessionRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QuerySessionRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionRequest>): QuerySessionRequest {
    return QuerySessionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionRequest>): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
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

function createBaseQuerySessionsResponse(): QuerySessionsResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsResponse = {
  encode(message: QuerySessionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySessionsResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsResponse>): QuerySessionsResponse {
    return QuerySessionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsResponse>): QuerySessionsResponse {
    const message = createBaseQuerySessionsResponse();
    message.sessions = object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForAccountResponse(): QuerySessionsForAccountResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsForAccountResponse = {
  encode(message: QuerySessionsForAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySessionsForAccountResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAccountResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAccountResponse>): QuerySessionsForAccountResponse {
    return QuerySessionsForAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAccountResponse>): QuerySessionsForAccountResponse {
    const message = createBaseQuerySessionsForAccountResponse();
    message.sessions = object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForAllocationResponse(): QuerySessionsForAllocationResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsForAllocationResponse = {
  encode(message: QuerySessionsForAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAllocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySessionsForAllocationResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAllocationResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAllocationResponse>): QuerySessionsForAllocationResponse {
    return QuerySessionsForAllocationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAllocationResponse>): QuerySessionsForAllocationResponse {
    const message = createBaseQuerySessionsForAllocationResponse();
    message.sessions = object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForNodeResponse(): QuerySessionsForNodeResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsForNodeResponse = {
  encode(message: QuerySessionsForNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySessionsForNodeResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForNodeResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForNodeResponse>): QuerySessionsForNodeResponse {
    return QuerySessionsForNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForNodeResponse>): QuerySessionsForNodeResponse {
    const message = createBaseQuerySessionsForNodeResponse();
    message.sessions = object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionsForSubscriptionResponse(): QuerySessionsForSubscriptionResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsForSubscriptionResponse = {
  encode(message: QuerySessionsForSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForSubscriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySessionsForSubscriptionResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForSubscriptionResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForSubscriptionResponse>): QuerySessionsForSubscriptionResponse {
    return QuerySessionsForSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForSubscriptionResponse>): QuerySessionsForSubscriptionResponse {
    const message = createBaseQuerySessionsForSubscriptionResponse();
    message.sessions = object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySessionResponse(): QuerySessionResponse {
  return { session: undefined };
}

export const QuerySessionResponse = {
  encode(message: QuerySessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.session = Session.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySessionResponse {
    return { session: isSet(object.session) ? Session.fromJSON(object.session) : undefined };
  },

  toJSON(message: QuerySessionResponse): unknown {
    const obj: any = {};
    if (message.session !== undefined) {
      obj.session = Session.toJSON(message.session);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionResponse>): QuerySessionResponse {
    return QuerySessionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionResponse>): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    message.session = (object.session !== undefined && object.session !== null)
      ? Session.fromPartial(object.session)
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
  QuerySessions(request: QuerySessionsRequest): Promise<QuerySessionsResponse>;
  QuerySessionsForAccount(request: QuerySessionsForAccountRequest): Promise<QuerySessionsForAccountResponse>;
  QuerySessionsForAllocation(request: QuerySessionsForAllocationRequest): Promise<QuerySessionsForAllocationResponse>;
  QuerySessionsForNode(request: QuerySessionsForNodeRequest): Promise<QuerySessionsForNodeResponse>;
  QuerySessionsForSubscription(
    request: QuerySessionsForSubscriptionRequest,
  ): Promise<QuerySessionsForSubscriptionResponse>;
  QuerySession(request: QuerySessionRequest): Promise<QuerySessionResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.session.v2.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QuerySessions = this.QuerySessions.bind(this);
    this.QuerySessionsForAccount = this.QuerySessionsForAccount.bind(this);
    this.QuerySessionsForAllocation = this.QuerySessionsForAllocation.bind(this);
    this.QuerySessionsForNode = this.QuerySessionsForNode.bind(this);
    this.QuerySessionsForSubscription = this.QuerySessionsForSubscription.bind(this);
    this.QuerySession = this.QuerySession.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QuerySessions(request: QuerySessionsRequest): Promise<QuerySessionsResponse> {
    const data = QuerySessionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessions", data);
    return promise.then((data) => QuerySessionsResponse.decode(_m0.Reader.create(data)));
  }

  QuerySessionsForAccount(request: QuerySessionsForAccountRequest): Promise<QuerySessionsForAccountResponse> {
    const data = QuerySessionsForAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessionsForAccount", data);
    return promise.then((data) => QuerySessionsForAccountResponse.decode(_m0.Reader.create(data)));
  }

  QuerySessionsForAllocation(request: QuerySessionsForAllocationRequest): Promise<QuerySessionsForAllocationResponse> {
    const data = QuerySessionsForAllocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessionsForAllocation", data);
    return promise.then((data) => QuerySessionsForAllocationResponse.decode(_m0.Reader.create(data)));
  }

  QuerySessionsForNode(request: QuerySessionsForNodeRequest): Promise<QuerySessionsForNodeResponse> {
    const data = QuerySessionsForNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessionsForNode", data);
    return promise.then((data) => QuerySessionsForNodeResponse.decode(_m0.Reader.create(data)));
  }

  QuerySessionsForSubscription(
    request: QuerySessionsForSubscriptionRequest,
  ): Promise<QuerySessionsForSubscriptionResponse> {
    const data = QuerySessionsForSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessionsForSubscription", data);
    return promise.then((data) => QuerySessionsForSubscriptionResponse.decode(_m0.Reader.create(data)));
  }

  QuerySession(request: QuerySessionRequest): Promise<QuerySessionResponse> {
    const data = QuerySessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySession", data);
    return promise.then((data) => QuerySessionResponse.decode(_m0.Reader.create(data)));
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
