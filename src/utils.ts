import { Event, Attribute } from "@cosmjs/stargate"
import { Bip39, Slip10Curve, EnglishMnemonic, Slip10, HdPath } from "@cosmjs/crypto"
import { makeCosmoshubPath } from "@cosmjs/amino"

import { createHash } from "crypto"

import Long from "long";
import secp256k1 from "secp256k1";
import axios from 'axios';
import https from 'https'

import { NodeResponse, NodeInfo, GeoIPLocation, NodeHandshakeResult } from "./types";

/**
 * Convert an array of stargate/Attribute in to javascript object
 *
 * @param attributes array of event Attributes
 * @returns Object with key: value, where key is in camelCase and value is escaped
 */
export function parseAttributes(attributes: readonly Attribute[] | Attribute[]): any {
    return Object.fromEntries(attributes.map((x: Attribute) => [
        x.key.replace(/_([a-z])/g, (_, p1) => p1.toUpperCase()),
        JSON.parse(x.value)
    ]))
}

/**
 * Iterate over the events and search for a determinale eventUrl
 *
 * @param eventUrl the event url you are looking for
 * @param events array of Event
 * @returns null if event wasn't found, else the event
 */
export function searchEvent(eventUrl: string, events: readonly Event[] | Event[]): Event | null {
    for (let index = 0; index < events.length; index++) {
        if (events[index].type === eventUrl) return events[index]
    }
    return null
}



/**
 * Encode a uintArray to a base64 string
 *
 * @param value array of number
 * @returns base64 encoding
 */
export function uintArrayTob64(value: number[]): string {
    return btoa(String.fromCharCode.apply(null, value))
}



/**
 * [GET] request to / endpoint of a remoteUrl with ssl verification disbled
 *
 * @param remoteUrl node endpoint
 * @returns NodeInfo information
 */
export async function nodeInfo(remoteUrl: string, timeout: number = 10000): Promise<NodeInfo> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });

    const inputUrl = remoteUrl.replace(/\/$/g, '').trim()
    const httpsUrl = inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`

    const response = await axios.get(httpsUrl, { httpsAgent, timeout: timeout })
    return (response.data as NodeResponse).result as NodeInfo
}

/**
 * Export the private key as Uint8Array starting from mnemonic
 *
 * @param param0 {mnemonic, bip39Password, hdPath}, where mnemonic is the secret, bip39Password optionals, hdPath optional, default = 'm/44'/118'/0'/0/a'
 * @returns the private key as Uint8Array
 */
export async function privKeyFromMnemonic({ mnemonic, bip39Password, hdPath }: { mnemonic: string, bip39Password?: string, hdPath?: HdPath }): Promise<Uint8Array> {
    const seed = await Bip39.mnemonicToSeed(new EnglishMnemonic(mnemonic), bip39Password || "");
    const { privkey } = Slip10.derivePath(Slip10Curve.Secp256k1, seed, hdPath || makeCosmoshubPath(0));
    return privkey
}

/**
 * Fetch location using ip-api service
 *
 * @param address if provided will fetch a determinate IP, else the current one
 * @returns GeoIPLocation with all geo-ip information like city country etc
 */
export async function fetchLocation(address?: string, timeout: number = 10000): Promise<GeoIPLocation> {
    const response = await axios.get("http://ip-api.com/json/" + (address || ''), { timeout: timeout })
    return response.data as GeoIPLocation
}

/**
 * Converts a uint64 number to an 8-byte big-endian Uint8Array.
 * Replicates the behavior of `types.Uint64ToBigEndian` from the Cosmos SDK.
 *
 * @param id - The session identifier as a number or bigint
 * @returns An 8-byte Uint8Array representing the value in big-endian order
 *
 * @example
 * const bytes = uint64ToBigEndian(12345n);
 * // Uint8Array(8) [0, 0, 0, 0, 0, 0, 48, 57]
 */
function uint64ToBigEndian(id: Long): Uint8Array {
    const buf = new Uint8Array(8);
    let n = BigInt(id.toString());
    for (let i = 7; i >= 0; i--) {
        buf[i] = Number(n & BigInt(0xff));
        n >>= BigInt(8);
    }
    return buf;
}

/**
 * Builds the message buffer to be signed during the handshake.
 * Replicates the `Msg()` method of `InitHandshakeRequestBody` in the Go SDK:
 * the message is the concatenation of the session ID as 8-byte big-endian
 * followed by the JSON-encoded session data.
 *
 * @param sessionId - The on-chain session identifier
 * @param data - The session data object to include in the message (WireGuard public key or v2ray uuid)
 * @returns A Uint8Array containing `bigEndian(sessionId) || JSON(data)`
 *
 * @example
 * const msg = buildMsg(42n, { pub_key: "abc123==" });
 * // Uint8Array [ 0,0,0,0,0,0,0,42, ...jsonBytes ]
 */
function buildMsg(sessionId: Long, data: any): Uint8Array {
    const idBytes = uint64ToBigEndian(sessionId);
    const dataBytes = new TextEncoder().encode(JSON.stringify(data));
    const msg = new Uint8Array(idBytes.length + dataBytes.length);
    msg.set(idBytes, 0);
    msg.set(dataBytes, idBytes.length);
    return msg;
}

/**
 * Encodes a compressed secp256k1 public key (33 bytes) to a base64 string.
 * Replicates the behavior of `utils.EncodePubKey` in the Sentinel Go SDK,
 * which uses the standard Cosmos SDK compressed public key encoding.
 *
 * @param compressedPubKey - A 33-byte Uint8Array representing the compressed secp256k1 public key
 * @returns The base64-encoded string representation of the public key
 *
 * @example
 * const pubKeyBase64 = encodePubKey(pubKeyBytes);
 * // "A1b2C3d4E5f6..."
 */
function encodePubKey(compressedPubKey: Uint8Array): string {
    return Buffer.from(compressedPubKey).toString('base64');
}

/**
 * Performs the handshake with a Sentinel dVPN node to initiate a VPN session.
 *
 * Replicates the `InitHandshake` method of the Sentinel Go SDK client.
 * The process is:
 * 1. JSON-encodes the session `data` (WireGuard pubkey or v2ray uuid)
 * 2. Builds the message as `bigEndian(sessionId) || JSON(data)`
 * 3. Signs the SHA256 hash of the message with the Cosmos secp256k1 private key
 * 4. POSTs `{ data, id, pub_key, signature }` to the node's root endpoint (`/`)
 *
 * The node verifies the signature, derives the account address from `pub_key`,
 * and checks it matches the on-chain session's account address before
 * adding the peer to the active VPN service.
 *
 * SSL certificate verification is intentionally disabled since node daemons
 * use self-signed certificates.
 *
 * @param sessionId - The on-chain session identifier (uint64), obtained after
 *   broadcasting a `MsgStartSessionRequest` transaction
 * @param data - The session data to send to the node:
 *   - For WireGuard: `{ pub_key: "<wg_public_key_base64>" }`
 *   - For v2ray: `{ uuid: "<random_16_bytes_base64>" }`
 * @param privateKey - The 32-byte secp256k1 private key of the Cosmos wallet
 *   that owns the session on-chain
 * @param remoteUrl - The node's remote URL as stored on-chain (e.g. `https://1.2.3.4:port`)
 * @param timeout - request timeout in milliseconds
 * @returns A `NodeHandshakeResult` containing:
 *   - `result.addrs` — list of node endpoints to connect to (e.g. `["1.2.3.4:51820"]`)
 *   - `result.data`  — VPN configuration returned by the node (WireGuard config or v2ray inbound)
 * @throws Will throw if the HTTP request fails, the session is not active on-chain,
 *   or the signature verification fails on the node side (HTTP 401)
 *
 * @example
 * // WireGuard
 * const wgKeys = generateKeypair();
 * const result = await handshake(
 *     sessionId,
 *     { pub_key: wgKeys.publicKey },
 *     cosmosPrivKeyBytes,
 *     node.remoteUrl,
 * );
 * // result.result.addrs → ["1.2.3.4:51820"]
 * // result.result.data  → WireGuard peer config
 *
 * @example
 * // v2ray
 * const uuid = Buffer.from(crypto.randomBytes(16)).toString('base64');
 * const result = await handshake(
 *     sessionId,
 *     { uuid },
 *     cosmosPrivKeyBytes,
 *     node.remoteUrl,
 * );
 */
export async function handshake(
    sessionId: Long,
    data: any,
    privateKey: Uint8Array,
    remoteUrl: string,
    timeout: number = 60000
): Promise<NodeHandshakeResult> {

    const msg = buildMsg(sessionId, data);

    const hash = Uint8Array.from(createHash('sha256').update(msg).digest());
    const sigObj = secp256k1.ecdsaSign(hash, privateKey);
    const signature = Buffer.from(sigObj.signature).toString('base64');

    const pubKeyBytes = secp256k1.publicKeyCreate(privateKey, true); // compressed=true
    const pubKeyBase64 = encodePubKey(pubKeyBytes);

    const body = {
        data: Buffer.from(JSON.stringify(data)).toString('base64'), // []byte Go → base64
        id: sessionId.toString(),
        pub_key: `secp256k1:${pubKeyBase64}`,
        signature: signature,
    };

    const inputUrl = remoteUrl.replace(/\/$/g, '').trim()
    const httpsUrl = inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`

    const response = await axios.post(httpsUrl, body, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        timeout: timeout,
    });
    // .result, supponsing success: True and error doesn't exist
    return response.data.result as NodeHandshakeResult;
}