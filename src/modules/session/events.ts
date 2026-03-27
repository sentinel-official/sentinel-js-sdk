import {
    EventPay,
    EventRefund,
    EventUpdateDetails,
    EventUpdateStatus,
} from "../../protobuf/sentinel/session/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventPayType = `${protobufPackage}.EventPay`
const EventRefundType = `${protobufPackage}.EventRefund`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`

export interface SessionEventPay extends Event {
    readonly type: typeof EventPayType,
    readonly value: EventPay
}

export function isSessionEventPay(object: Event): object is SessionEventPay {
    return (object as SessionEventPay).type === EventPayType
}

export const SessionEventPay = {
    type: EventPayType,
    parse(event: Event): SessionEventPay {
        return {
            type: this.type,
            value: EventPay.fromJSON(parseAttributes(event.attributes))
        } as SessionEventPay
    }
}

export interface SessionEventRefund extends Event {
    readonly type: typeof EventRefundType,
    readonly value: EventRefund
}

export function isSessionEventRefund(object: Event): object is SessionEventRefund {
    return (object as SessionEventRefund).type === EventRefundType
}

export const SessionEventRefund = {
    type: EventRefundType,
    parse(event: Event): SessionEventRefund {
        return {
            type: this.type,
            value: EventRefund.fromJSON(parseAttributes(event.attributes))
        } as SessionEventRefund
    }
}

export interface SessionEventUpdateDetails extends Event {
    readonly type: typeof EventUpdateDetailsType,
    readonly value: EventUpdateDetails
}

export function isSessionEventUpdateDetails(object: Event): object is SessionEventUpdateDetails {
    return (object as SessionEventUpdateDetails).type === EventUpdateDetailsType
}

export const SessionEventUpdateDetails = {
    type: EventUpdateDetailsType,
    parse(event: Event): SessionEventUpdateDetails {
        return {
            type: this.type,
            value: EventUpdateDetails.fromJSON(parseAttributes(event.attributes))
        } as SessionEventUpdateDetails
    }
}

export interface SessionEventUpdateStatus extends Event {
    readonly type: typeof EventUpdateStatusType,
    readonly value: EventUpdateStatus
}

export function isSessionEventUpdateStatus(object: Event): object is SessionEventUpdateStatus {
    return (object as SessionEventUpdateStatus).type === EventUpdateStatusType
}

export const SessionEventUpdateStatus = {
    type: EventUpdateStatusType,
    parse(event: Event): SessionEventUpdateStatus {
        return {
            type: this.type,
            value: EventUpdateStatus.fromJSON(parseAttributes(event.attributes))
        } as SessionEventUpdateStatus
    }
}