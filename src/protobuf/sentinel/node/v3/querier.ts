/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Node } from "./node";
import { Params } from "./params";

export const protobufPackage = "sentinel.node.v3";

export interface QueryNodesRequest {
  status: Status;
  pagination?: PageRequest | undefined;
}

export interface QueryNodesForPlanRequest {
  id: Long;
  status: Status;
  pagination?: PageRequest | undefined;
}

export interface QueryNodeRequest {
  address: string;
}

export interface QueryNodesResponse {
  nodes: Node[];
  pagination?: PageResponse | undefined;
}

export interface QueryNodesForPlanResponse {
  nodes: Node[];
  pagination?: PageResponse | undefined;
}

export interface QueryNodeResponse {
  node?: Node | undefined;
}

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params | undefined;
}

function createBaseQueryNodesRequest(): QueryNodesRequest {
  return { status: 0, pagination: undefined };
}

export const QueryNodesRequest = {
  encode(message: QueryNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesRequest();
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

  fromJSON(object: any): QueryNodesRequest {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNodesRequest): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodesRequest>): QueryNodesRequest {
    return QueryNodesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodesRequest>): QueryNodesRequest {
    const message = createBaseQueryNodesRequest();
    message.status = object.status ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNodesForPlanRequest(): QueryNodesForPlanRequest {
  return { id: Long.UZERO, status: 0, pagination: undefined };
}

export const QueryNodesForPlanRequest = {
  encode(message: QueryNodesForPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesForPlanRequest();
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

  fromJSON(object: any): QueryNodesForPlanRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNodesForPlanRequest): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodesForPlanRequest>): QueryNodesForPlanRequest {
    return QueryNodesForPlanRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodesForPlanRequest>): QueryNodesForPlanRequest {
    const message = createBaseQueryNodesForPlanRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNodeRequest(): QueryNodeRequest {
  return { address: "" };
}

export const QueryNodeRequest = {
  encode(message: QueryNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryNodeRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodeRequest>): QueryNodeRequest {
    return QueryNodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodeRequest>): QueryNodeRequest {
    const message = createBaseQueryNodeRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryNodesResponse(): QueryNodesResponse {
  return { nodes: [], pagination: undefined };
}

export const QueryNodesResponse = {
  encode(message: QueryNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryNodesResponse {
    return {
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodesResponse>): QueryNodesResponse {
    return QueryNodesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodesResponse>): QueryNodesResponse {
    const message = createBaseQueryNodesResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNodesForPlanResponse(): QueryNodesForPlanResponse {
  return { nodes: [], pagination: undefined };
}

export const QueryNodesForPlanResponse = {
  encode(message: QueryNodesForPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesForPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryNodesForPlanResponse {
    return {
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNodesForPlanResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodesForPlanResponse>): QueryNodesForPlanResponse {
    return QueryNodesForPlanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodesForPlanResponse>): QueryNodesForPlanResponse {
    const message = createBaseQueryNodesForPlanResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNodeResponse(): QueryNodeResponse {
  return { node: undefined };
}

export const QueryNodeResponse = {
  encode(message: QueryNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.node = Node.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNodeResponse {
    return { node: isSet(object.node) ? Node.fromJSON(object.node) : undefined };
  },

  toJSON(message: QueryNodeResponse): unknown {
    const obj: any = {};
    if (message.node !== undefined) {
      obj.node = Node.toJSON(message.node);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNodeResponse>): QueryNodeResponse {
    return QueryNodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNodeResponse>): QueryNodeResponse {
    const message = createBaseQueryNodeResponse();
    message.node = (object.node !== undefined && object.node !== null) ? Node.fromPartial(object.node) : undefined;
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
  QueryNodes(request: QueryNodesRequest): Promise<QueryNodesResponse>;
  QueryNodesForPlan(request: QueryNodesForPlanRequest): Promise<QueryNodesForPlanResponse>;
  QueryNode(request: QueryNodeRequest): Promise<QueryNodeResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.node.v3.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QueryNodes = this.QueryNodes.bind(this);
    this.QueryNodesForPlan = this.QueryNodesForPlan.bind(this);
    this.QueryNode = this.QueryNode.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryNodes(request: QueryNodesRequest): Promise<QueryNodesResponse> {
    const data = QueryNodesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryNodes", data);
    return promise.then((data) => QueryNodesResponse.decode(_m0.Reader.create(data)));
  }

  QueryNodesForPlan(request: QueryNodesForPlanRequest): Promise<QueryNodesForPlanResponse> {
    const data = QueryNodesForPlanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryNodesForPlan", data);
    return promise.then((data) => QueryNodesForPlanResponse.decode(_m0.Reader.create(data)));
  }

  QueryNode(request: QueryNodeRequest): Promise<QueryNodeResponse> {
    const data = QueryNodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryNode", data);
    return promise.then((data) => QueryNodeResponse.decode(_m0.Reader.create(data)));
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
