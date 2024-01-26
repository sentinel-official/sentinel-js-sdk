/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Plan } from "./plan";

export const protobufPackage = "sentinel.plan.v2";

export interface QueryPlansRequest {
  status: Status;
  pagination?: PageRequest | undefined;
}

export interface QueryPlansForProviderRequest {
  address: string;
  status: Status;
  pagination?: PageRequest | undefined;
}

export interface QueryPlanRequest {
  id: Long;
}

export interface QueryPlansResponse {
  plans: Plan[];
  pagination?: PageResponse | undefined;
}

export interface QueryPlansForProviderResponse {
  plans: Plan[];
  pagination?: PageResponse | undefined;
}

export interface QueryPlanResponse {
  plan?: Plan | undefined;
}

function createBaseQueryPlansRequest(): QueryPlansRequest {
  return { status: 0, pagination: undefined };
}

export const QueryPlansRequest = {
  encode(message: QueryPlansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
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

  fromJSON(object: any): QueryPlansRequest {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPlansRequest): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlansRequest>, I>>(base?: I): QueryPlansRequest {
    return QueryPlansRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlansRequest>, I>>(object: I): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    message.status = object.status ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPlansForProviderRequest(): QueryPlansForProviderRequest {
  return { address: "", status: 0, pagination: undefined };
}

export const QueryPlansForProviderRequest = {
  encode(message: QueryPlansForProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansForProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansForProviderRequest();
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

  fromJSON(object: any): QueryPlansForProviderRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPlansForProviderRequest): unknown {
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

  create<I extends Exact<DeepPartial<QueryPlansForProviderRequest>, I>>(base?: I): QueryPlansForProviderRequest {
    return QueryPlansForProviderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlansForProviderRequest>, I>>(object: I): QueryPlansForProviderRequest {
    const message = createBaseQueryPlansForProviderRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPlanRequest(): QueryPlanRequest {
  return { id: Long.UZERO };
}

export const QueryPlanRequest = {
  encode(message: QueryPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanRequest();
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

  fromJSON(object: any): QueryPlanRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryPlanRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlanRequest>, I>>(base?: I): QueryPlanRequest {
    return QueryPlanRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlanRequest>, I>>(object: I): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryPlansResponse(): QueryPlansResponse {
  return { plans: [], pagination: undefined };
}

export const QueryPlansResponse = {
  encode(message: QueryPlansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plans.push(Plan.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPlansResponse {
    return {
      plans: globalThis.Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPlansResponse): unknown {
    const obj: any = {};
    if (message.plans?.length) {
      obj.plans = message.plans.map((e) => Plan.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlansResponse>, I>>(base?: I): QueryPlansResponse {
    return QueryPlansResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlansResponse>, I>>(object: I): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map((e) => Plan.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPlansForProviderResponse(): QueryPlansForProviderResponse {
  return { plans: [], pagination: undefined };
}

export const QueryPlansForProviderResponse = {
  encode(message: QueryPlansForProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansForProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansForProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plans.push(Plan.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPlansForProviderResponse {
    return {
      plans: globalThis.Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPlansForProviderResponse): unknown {
    const obj: any = {};
    if (message.plans?.length) {
      obj.plans = message.plans.map((e) => Plan.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlansForProviderResponse>, I>>(base?: I): QueryPlansForProviderResponse {
    return QueryPlansForProviderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlansForProviderResponse>, I>>(
    object: I,
  ): QueryPlansForProviderResponse {
    const message = createBaseQueryPlansForProviderResponse();
    message.plans = object.plans?.map((e) => Plan.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPlanResponse(): QueryPlanResponse {
  return { plan: undefined };
}

export const QueryPlanResponse = {
  encode(message: QueryPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPlanResponse {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: QueryPlanResponse): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlanResponse>, I>>(base?: I): QueryPlanResponse {
    return QueryPlanResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlanResponse>, I>>(object: I): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

export interface QueryService {
  QueryPlans(request: QueryPlansRequest): Promise<QueryPlansResponse>;
  QueryPlansForProvider(request: QueryPlansForProviderRequest): Promise<QueryPlansForProviderResponse>;
  QueryPlan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
}

export const QueryServiceServiceName = "sentinel.plan.v2.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QueryPlans = this.QueryPlans.bind(this);
    this.QueryPlansForProvider = this.QueryPlansForProvider.bind(this);
    this.QueryPlan = this.QueryPlan.bind(this);
  }
  QueryPlans(request: QueryPlansRequest): Promise<QueryPlansResponse> {
    const data = QueryPlansRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPlans", data);
    return promise.then((data) => QueryPlansResponse.decode(_m0.Reader.create(data)));
  }

  QueryPlansForProvider(request: QueryPlansForProviderRequest): Promise<QueryPlansForProviderResponse> {
    const data = QueryPlansForProviderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPlansForProvider", data);
    return promise.then((data) => QueryPlansForProviderResponse.decode(_m0.Reader.create(data)));
  }

  QueryPlan(request: QueryPlanRequest): Promise<QueryPlanResponse> {
    const data = QueryPlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPlan", data);
    return promise.then((data) => QueryPlanResponse.decode(_m0.Reader.create(data)));
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
