/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Lease } from "./lease";
import { Params } from "./params";

export const protobufPackage = "sentinel.lease.v1";

export interface QueryLeasesRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryLeasesForNodeRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QueryLeasesForProviderRequest {
  address: string;
  pagination?: PageRequest | undefined;
}

export interface QueryLeaseRequest {
  id: Long;
}

export interface QueryParamsRequest {
}

export interface QueryLeasesResponse {
  leases: Lease[];
  pagination?: PageResponse | undefined;
}

export interface QueryLeasesForNodeResponse {
  leases: Lease[];
  pagination?: PageResponse | undefined;
}

export interface QueryLeasesForProviderResponse {
  leases: Lease[];
  pagination?: PageResponse | undefined;
}

export interface QueryLeaseResponse {
  lease?: Lease | undefined;
}

export interface QueryParamsResponse {
  params?: Params | undefined;
}

function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return { pagination: undefined };
}

export const QueryLeasesRequest = {
  encode(message: QueryLeasesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
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

  fromJSON(object: any): QueryLeasesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLeasesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    return QueryLeasesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeasesForNodeRequest(): QueryLeasesForNodeRequest {
  return { address: "", pagination: undefined };
}

export const QueryLeasesForNodeRequest = {
  encode(message: QueryLeasesForNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesForNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesForNodeRequest();
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

  fromJSON(object: any): QueryLeasesForNodeRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLeasesForNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesForNodeRequest>): QueryLeasesForNodeRequest {
    return QueryLeasesForNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesForNodeRequest>): QueryLeasesForNodeRequest {
    const message = createBaseQueryLeasesForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeasesForProviderRequest(): QueryLeasesForProviderRequest {
  return { address: "", pagination: undefined };
}

export const QueryLeasesForProviderRequest = {
  encode(message: QueryLeasesForProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesForProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesForProviderRequest();
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

  fromJSON(object: any): QueryLeasesForProviderRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLeasesForProviderRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesForProviderRequest>): QueryLeasesForProviderRequest {
    return QueryLeasesForProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesForProviderRequest>): QueryLeasesForProviderRequest {
    const message = createBaseQueryLeasesForProviderRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return { id: Long.UZERO };
}

export const QueryLeaseRequest = {
  encode(message: QueryLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
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

  fromJSON(object: any): QueryLeaseRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryLeaseRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    return QueryLeaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
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

function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return { leases: [], pagination: undefined };
}

export const QueryLeasesResponse = {
  encode(message: QueryLeasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leases.push(Lease.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLeasesResponse {
    return {
      leases: globalThis.Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLeasesResponse): unknown {
    const obj: any = {};
    if (message.leases?.length) {
      obj.leases = message.leases.map((e) => Lease.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    return QueryLeasesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map((e) => Lease.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeasesForNodeResponse(): QueryLeasesForNodeResponse {
  return { leases: [], pagination: undefined };
}

export const QueryLeasesForNodeResponse = {
  encode(message: QueryLeasesForNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesForNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesForNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leases.push(Lease.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLeasesForNodeResponse {
    return {
      leases: globalThis.Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLeasesForNodeResponse): unknown {
    const obj: any = {};
    if (message.leases?.length) {
      obj.leases = message.leases.map((e) => Lease.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesForNodeResponse>): QueryLeasesForNodeResponse {
    return QueryLeasesForNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesForNodeResponse>): QueryLeasesForNodeResponse {
    const message = createBaseQueryLeasesForNodeResponse();
    message.leases = object.leases?.map((e) => Lease.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeasesForProviderResponse(): QueryLeasesForProviderResponse {
  return { leases: [], pagination: undefined };
}

export const QueryLeasesForProviderResponse = {
  encode(message: QueryLeasesForProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesForProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesForProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leases.push(Lease.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLeasesForProviderResponse {
    return {
      leases: globalThis.Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLeasesForProviderResponse): unknown {
    const obj: any = {};
    if (message.leases?.length) {
      obj.leases = message.leases.map((e) => Lease.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeasesForProviderResponse>): QueryLeasesForProviderResponse {
    return QueryLeasesForProviderResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeasesForProviderResponse>): QueryLeasesForProviderResponse {
    const message = createBaseQueryLeasesForProviderResponse();
    message.leases = object.leases?.map((e) => Lease.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return { lease: undefined };
}

export const QueryLeaseResponse = {
  encode(message: QueryLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lease = Lease.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLeaseResponse {
    return { lease: isSet(object.lease) ? Lease.fromJSON(object.lease) : undefined };
  },

  toJSON(message: QueryLeaseResponse): unknown {
    const obj: any = {};
    if (message.lease !== undefined) {
      obj.lease = Lease.toJSON(message.lease);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    return QueryLeaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    message.lease = (object.lease !== undefined && object.lease !== null) ? Lease.fromPartial(object.lease) : undefined;
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
  QueryLeases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  QueryLeasesForProvider(request: QueryLeasesForProviderRequest): Promise<QueryLeasesForProviderResponse>;
  QueryLeasesForNode(request: QueryLeasesForNodeRequest): Promise<QueryLeasesForNodeResponse>;
  QueryLease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.lease.v1.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QueryLeases = this.QueryLeases.bind(this);
    this.QueryLeasesForProvider = this.QueryLeasesForProvider.bind(this);
    this.QueryLeasesForNode = this.QueryLeasesForNode.bind(this);
    this.QueryLease = this.QueryLease.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryLeases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLeases", data);
    return promise.then((data) => QueryLeasesResponse.decode(_m0.Reader.create(data)));
  }

  QueryLeasesForProvider(request: QueryLeasesForProviderRequest): Promise<QueryLeasesForProviderResponse> {
    const data = QueryLeasesForProviderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLeasesForProvider", data);
    return promise.then((data) => QueryLeasesForProviderResponse.decode(_m0.Reader.create(data)));
  }

  QueryLeasesForNode(request: QueryLeasesForNodeRequest): Promise<QueryLeasesForNodeResponse> {
    const data = QueryLeasesForNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLeasesForNode", data);
    return promise.then((data) => QueryLeasesForNodeResponse.decode(_m0.Reader.create(data)));
  }

  QueryLease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLease", data);
    return promise.then((data) => QueryLeaseResponse.decode(_m0.Reader.create(data)));
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
