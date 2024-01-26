/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Swap } from "./swap";

export const protobufPackage = "sentinel.swap.v1";

export interface QuerySwapsRequest {
  pagination?: PageRequest | undefined;
}

export interface QuerySwapRequest {
  txHash: Uint8Array;
}

export interface QueryParamsRequest {
}

export interface QuerySwapsResponse {
  swaps: Swap[];
  pagination?: PageResponse | undefined;
}

export interface QuerySwapResponse {
  swap?: Swap | undefined;
}

export interface QueryParamsResponse {
  params?: Params | undefined;
}

function createBaseQuerySwapsRequest(): QuerySwapsRequest {
  return { pagination: undefined };
}

export const QuerySwapsRequest = {
  encode(message: QuerySwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapsRequest();
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

  fromJSON(object: any): QuerySwapsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySwapsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapsRequest>, I>>(base?: I): QuerySwapsRequest {
    return QuerySwapsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySwapsRequest>, I>>(object: I): QuerySwapsRequest {
    const message = createBaseQuerySwapsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return { txHash: new Uint8Array(0) };
}

export const QuerySwapRequest = {
  encode(message: QuerySwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySwapRequest {
    return { txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(0) };
  },

  toJSON(message: QuerySwapRequest): unknown {
    const obj: any = {};
    if (message.txHash.length !== 0) {
      obj.txHash = base64FromBytes(message.txHash);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(base?: I): QuerySwapRequest {
    return QuerySwapRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(object: I): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.txHash = object.txHash ?? new Uint8Array(0);
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

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQuerySwapsResponse(): QuerySwapsResponse {
  return { swaps: [], pagination: undefined };
}

export const QuerySwapsResponse = {
  encode(message: QuerySwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swaps.push(Swap.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySwapsResponse {
    return {
      swaps: globalThis.Array.isArray(object?.swaps) ? object.swaps.map((e: any) => Swap.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySwapsResponse): unknown {
    const obj: any = {};
    if (message.swaps?.length) {
      obj.swaps = message.swaps.map((e) => Swap.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapsResponse>, I>>(base?: I): QuerySwapsResponse {
    return QuerySwapsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySwapsResponse>, I>>(object: I): QuerySwapsResponse {
    const message = createBaseQuerySwapsResponse();
    message.swaps = object.swaps?.map((e) => Swap.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySwapResponse(): QuerySwapResponse {
  return { swap: undefined };
}

export const QuerySwapResponse = {
  encode(message: QuerySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swap = Swap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySwapResponse {
    return { swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined };
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    if (message.swap !== undefined) {
      obj.swap = Swap.toJSON(message.swap);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(base?: I): QuerySwapResponse {
    return QuerySwapResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(object: I): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.swap = (object.swap !== undefined && object.swap !== null) ? Swap.fromPartial(object.swap) : undefined;
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

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

export interface QueryService {
  QuerySwaps(request: QuerySwapsRequest): Promise<QuerySwapsResponse>;
  QuerySwap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceServiceName = "sentinel.swap.v1.QueryService";
export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceServiceName;
    this.rpc = rpc;
    this.QuerySwaps = this.QuerySwaps.bind(this);
    this.QuerySwap = this.QuerySwap.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QuerySwaps(request: QuerySwapsRequest): Promise<QuerySwapsResponse> {
    const data = QuerySwapsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySwaps", data);
    return promise.then((data) => QuerySwapsResponse.decode(_m0.Reader.create(data)));
  }

  QuerySwap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySwap", data);
    return promise.then((data) => QuerySwapResponse.decode(_m0.Reader.create(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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
