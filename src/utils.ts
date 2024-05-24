import { Event, Attribute } from "@cosmjs/stargate"
import { Bip39, Slip10Curve, EnglishMnemonic, Slip10, HdPath } from "@cosmjs/crypto"
import { makeCosmoshubPath } from "@cosmjs/amino"
import { createHash } from "crypto"

import Long from "long";
import secp256k1 from "secp256k1";
import axios from 'axios';
import https from 'https';
import speedTest from 'speedtest-net'

import { NodeResponse, NodeStatus, GeoIPLocation } from "./types";
import { ResultEvent } from "speedtest-net";

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
    for(let index = 0; index < events.length; index++){
        if (events[index].type === eventUrl) return events[index]
    }
    return null
}

// https://stackoverflow.com/questions/8482309/converting-javascript-integer-to-byte-array-and-back
/**
 * Convert number to byteArray
 *
 * @param long the number you want to convert
 * @returns  the byteArray
 */
function longToByteArray(long: Long | number): number[] {
    // probably in case of Long type we should use the methods "and/add" etc
    // we want to represent the input as a 8-bytes array
    var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];
    for ( var index = 0; index < byteArray.length; index ++ ) {
        var byte = (long as number) & 0xff;
        byteArray [ index ] = byte;
        long = ((long as number) - byte) / 256 ;
    }
    return byteArray;
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
 * Convert the session identifier as Uint64ToBigEndian and sign using secp256k1
 *
 * @param privkey the private key exported from wallet or mnemonic used for sign the sessionId
 * @param sessionId the sessionId you want to sign
 * @returns base64 representation of signature
 */
export function signSessionId(privkey: Uint8Array, sessionId: Long | number): string {
    const sessionIdByteArray = longToByteArray(sessionId)
    sessionIdByteArray.reverse()

    const hashed = createHash('sha256').update(Buffer.from(sessionIdByteArray)).digest();

    const sigObj = secp256k1.ecdsaSign(hashed, privkey)
    const signature = uintArrayTob64(Array.from(sigObj.signature));

    return signature
}

/**
 * [GET] request to /status endpoint of a remoteUrl with ssl verification disbled
 *
 * @param remoteUrl node endpoint
 * @returns NodeStatus information
 */
export async function nodeStatus(remoteUrl: string): Promise<NodeStatus> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });

    const response = await axios.get(remoteUrl.replace(/\/$/g, '').trim() + "/status", { httpsAgent })
    return (response.data as NodeResponse).result as NodeStatus
}

/**
 * [POST] request to a /accounts/${address}/sessions/${sessionId} with ssl verification disbled, in order to get a valid base64 vpn configuration
 *
 * @param key publicKey for wg or uuid for v2ray
 * @param signature signature of Uint64ToBigEndian sessionId
 * @param address sent address of the session owner
 * @param sessionId session identifier
 * @param remoteUrl node endpoint
 * @returns NodeResponse with vpn configuration or error code and message
 */
export async function postSession(key: string, signature: string, address: string, sessionId: Long | number, remoteUrl: string): Promise<NodeResponse> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });

    const data = {key, signature}
    const url = remoteUrl.replace(/\/$/g, '').trim() + `/accounts/${address}/sessions/${sessionId}`
    const options = {
        url,
        method: 'POST',
        agent: httpsAgent,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data,
        httpsAgent
    }
    try {
        const response = await axios(options);
        return response.data as NodeResponse
    } catch (error) {
        if(axios.isAxiosError(error)) return error.response?.data as NodeResponse
        else throw error
    }
}

/**
 * Export the private key as Uint8Array starting from mnemonic
 *
 * @param param0 {mnemonic, bip39Password, hdPath}, where mnemonic is the secret, bip39Password optionals, hdPath optional, default = 'm/44'/118'/0'/0/a'
 * @returns the private key as Uint8Array
 */
export async function privKeyFromMnemonic({mnemonic, bip39Password, hdPath}: { mnemonic: string, bip39Password?: string, hdPath?: HdPath }): Promise<Uint8Array>{
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
export async function fetchLocation(address?: string): Promise<GeoIPLocation> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });

    const response = await axios.get("http://ip-api.com/json/" + (address || ''), { httpsAgent })
    return response.data as GeoIPLocation
}

// https://github.com/sentinel-official/dvpn-node/blob/development/utils/speedtest.go
// https://github.com/ddsol/speedtest.net/pull/129
/**
 * Perform a speed test using speedtest-net service
 *
 * @returns ResultEvent from speed test contains ping, download, upload and other useful info about the network
 */
export async function findInternetSpeed(): Promise<ResultEvent>{
    return await speedTest({
        acceptLicense: true,
        acceptGdpr: true
    })
}