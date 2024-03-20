import { Event, Attribute } from "@cosmjs/stargate"
import { createHash } from "crypto"
import Long from "long";
import secp256k1 from "secp256k1";
import fetch from 'node-fetch';
import https from 'https'
import urlJoin from 'url-join';

import { NodeResponse, NodeStatus } from "./types";

export function parseAttributes(attributes: readonly Attribute[] | Attribute[]): any {
    return Object.fromEntries(attributes.map((x: Attribute) => [
        x.key.replace(/_([a-z])/g, (_, p1) => p1.toUpperCase()),
        JSON.parse(x.value)
    ]))
}

export function searchEvent(eventUrl: string, events: readonly Event[] | Event[]): Event | null {
    for(let index = 0; index < events.length; index++){
        if (events[index].type === eventUrl) return events[index]
    }
    return null
}

// https://stackoverflow.com/questions/8482309/converting-javascript-integer-to-byte-array-and-back
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

export function uintArrayTob64(value: number[]): string {
    return btoa(String.fromCharCode.apply(null, value))
}


export function signSessionId(privkey: Uint8Array, sessionId: Long | number): string {
    const sessionIdByteArray = longToByteArray(sessionId)
    sessionIdByteArray.reverse
    const hashed = createHash('sha256').update(Buffer.from(sessionIdByteArray)).digest();

    // var accounts = await wallet.getAccountsWithPrivkeys();
    // var privateAccount2 = accounts.find(({ address }) => address === account.address);

    const sigObj = secp256k1.ecdsaSign(hashed, privkey)
    const signature = uintArrayTob64(Array.from(sigObj.signature));

    return signature
}

export async function nodeStatus(remoteUrl: string): Promise<NodeStatus> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });

    const response = await fetch(
        urlJoin(remoteUrl, "/status"),
        {method: 'GET', agent: httpsAgent}
    );
    const jsonResponse = await response.json()
    return (jsonResponse as NodeResponse).result as NodeStatus
}

export async function postSession(key: string, signature: string, address: string, sessionId: Long | number, remoteUrl: string): Promise<string> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });

    const body = {key, signature}
    const response = await fetch(
        urlJoin(remoteUrl, `/accounts/${address}/sessions/${sessionId}`),
        {
            method: 'GET',
            agent: httpsAgent,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(body)
        }
    );
    const jsonResponse = await response.json()
    return (jsonResponse as NodeResponse).result as string
}
