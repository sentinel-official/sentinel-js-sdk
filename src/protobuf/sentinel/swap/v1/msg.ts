/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sentinel.swap.v1";

/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequest {
  from: string;
  txHash: Uint8Array;
  receiver: string;
  amount: string;
}

/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponse {
}

function createBaseMsgSwapRequest(): MsgSwapRequest {
  return { from: "", txHash: new Uint8Array(0), receiver: "", amount: "" };
}

export const MsgSwapRequest = {
  encode(message: MsgSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.txHash.length !== 0) {
      writer.uint32(18).bytes(message.txHash);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapRequest();
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

          message.txHash = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapRequest {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(0),
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: MsgSwapRequest): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.txHash.length !== 0) {
      obj.txHash = base64FromBytes(message.txHash);
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSwapRequest>): MsgSwapRequest {
    return MsgSwapRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSwapRequest>): MsgSwapRequest {
    const message = createBaseMsgSwapRequest();
    message.from = object.from ?? "";
    message.txHash = object.txHash ?? new Uint8Array(0);
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
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

  fromJSON(_: any): MsgSwapResponse {
    return {};
  },

  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    return MsgSwapResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
};

export interface MsgService {
  MsgSwap(request: MsgSwapRequest): Promise<MsgSwapResponse>;
}

export const MsgServiceServiceName = "sentinel.swap.v1.MsgService";
export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceServiceName;
    this.rpc = rpc;
    this.MsgSwap = this.MsgSwap.bind(this);
  }
  MsgSwap(request: MsgSwapRequest): Promise<MsgSwapResponse> {
    const data = MsgSwapRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgSwap", data);
    return promise.then((data) => MsgSwapResponse.decode(_m0.Reader.create(data)));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
