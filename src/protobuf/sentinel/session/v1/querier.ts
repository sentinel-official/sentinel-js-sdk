/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Params } from "./params";
import { Session } from "./session";

export const protobufPackage = "sentinel.session.v1";

export interface QuerySessionsRequest {
  pagination?: PageRequest | undefined;
}

export interface QuerySessionsForAddressRequest {
  address: string;
  status: Status;
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

export interface QuerySessionsForAddressResponse {
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

function createBaseQuerySessionsForAddressRequest(): QuerySessionsForAddressRequest {
  return { address: "", status: 0, pagination: undefined };
}

export const QuerySessionsForAddressRequest = {
  encode(message: QuerySessionsForAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAddressRequest();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
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

  fromJSON(object: any): QuerySessionsForAddressRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAddressRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAddressRequest>): QuerySessionsForAddressRequest {
    return QuerySessionsForAddressRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAddressRequest>): QuerySessionsForAddressRequest {
    const message = createBaseQuerySessionsForAddressRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
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

function createBaseQuerySessionsForAddressResponse(): QuerySessionsForAddressResponse {
  return { sessions: [], pagination: undefined };
}

export const QuerySessionsForAddressResponse = {
  encode(message: QuerySessionsForAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsForAddressResponse();
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

  fromJSON(object: any): QuerySessionsForAddressResponse {
    return {
      sessions: globalThis.Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySessionsForAddressResponse): unknown {
    const obj: any = {};
    if (message.sessions?.length) {
      obj.sessions = message.sessions.map((e) => Session.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySessionsForAddressResponse>): QuerySessionsForAddressResponse {
    return QuerySessionsForAddressResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySessionsForAddressResponse>): QuerySessionsForAddressResponse {
    const message = createBaseQuerySessionsForAddressResponse();
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
  QuerySessionsForAddress(request: QuerySessionsForAddressRequest): Promise<QuerySessionsForAddressResponse>;
  QuerySession(request: QuerySessionRequest): Promise<QuerySessionResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.session.v1.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QuerySessions = this.QuerySessions.bind(this);
    this.QuerySessionsForAddress = this.QuerySessionsForAddress.bind(this);
    this.QuerySession = this.QuerySession.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QuerySessions(request: QuerySessionsRequest): Promise<QuerySessionsResponse> {
    const data = QuerySessionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessions", data);
    return promise.then((data) => QuerySessionsResponse.decode(_m0.Reader.create(data)));
  }

  QuerySessionsForAddress(request: QuerySessionsForAddressRequest): Promise<QuerySessionsForAddressResponse> {
    const data = QuerySessionsForAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySessionsForAddress", data);
    return promise.then((data) => QuerySessionsForAddressResponse.decode(_m0.Reader.create(data)));
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
