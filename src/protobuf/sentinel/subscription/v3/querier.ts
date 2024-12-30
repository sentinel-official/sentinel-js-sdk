/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Subscription } from "./subscription";

export const protobufPackage = "sentinel.subscription.v3";

export interface QuerySubscriptionsRequest {
  pagination?: PageRequest | undefined;
}

export interface QuerySubscriptionsForAccountRequest {
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

export interface QuerySubscriptionsResponse {
  subscriptions: Subscription[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionsForAccountResponse {
  subscriptions: Subscription[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionsForPlanResponse {
  subscriptions: Subscription[];
  pagination?: PageResponse | undefined;
}

export interface QuerySubscriptionResponse {
  subscription?: Subscription | undefined;
}

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

function createBaseQuerySubscriptionsResponse(): QuerySubscriptionsResponse {
  return { subscriptions: [], pagination: undefined };
}

export const QuerySubscriptionsResponse = {
  encode(message: QuerySubscriptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Subscription.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
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
        ? object.subscriptions.map((e: any) => Subscription.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Subscription.toJSON(e));
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
    message.subscriptions = object.subscriptions?.map((e) => Subscription.fromPartial(e)) || [];
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
      Subscription.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
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
        ? object.subscriptions.map((e: any) => Subscription.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForAccountResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Subscription.toJSON(e));
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
    message.subscriptions = object.subscriptions?.map((e) => Subscription.fromPartial(e)) || [];
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
      Subscription.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
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
        ? object.subscriptions.map((e: any) => Subscription.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySubscriptionsForPlanResponse): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Subscription.toJSON(e));
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
    message.subscriptions = object.subscriptions?.map((e) => Subscription.fromPartial(e)) || [];
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
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
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

          message.subscription = Subscription.decode(reader, reader.uint32());
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
    return { subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined };
  },

  toJSON(message: QuerySubscriptionResponse): unknown {
    const obj: any = {};
    if (message.subscription !== undefined) {
      obj.subscription = Subscription.toJSON(message.subscription);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    return QuerySubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Subscription.fromPartial(object.subscription)
      : undefined;
    return message;
  },
};

export interface QueryService {
  QuerySubscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse>;
  QuerySubscriptionsForAccount(
    request: QuerySubscriptionsForAccountRequest,
  ): Promise<QuerySubscriptionsForAccountResponse>;
  QuerySubscriptionsForPlan(request: QuerySubscriptionsForPlanRequest): Promise<QuerySubscriptionsForPlanResponse>;
  QuerySubscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
}

export const QueryServiceServiceName = "sentinel.subscription.v3.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QuerySubscriptions = this.QuerySubscriptions.bind(this);
    this.QuerySubscriptionsForAccount = this.QuerySubscriptionsForAccount.bind(this);
    this.QuerySubscriptionsForPlan = this.QuerySubscriptionsForPlan.bind(this);
    this.QuerySubscription = this.QuerySubscription.bind(this);
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
