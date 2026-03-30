import {
    EventCreate,
    EventPay,
    EventRefund,
    EventUpdateDetails,
    EventUpdateStatus,
    EventCreateSession,
} from "../../protobuf/sentinel/node/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventCreateType = `${protobufPackage}.EventCreate`;
const EventPayType = `${protobufPackage}.EventPay`;
const EventRefundType = `${protobufPackage}.EventRefund`;
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`;
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`;
const EventCreateSessionType = `${protobufPackage}.EventCreateSession`;

export interface NodeEventCreate extends Event {
    readonly type: typeof EventCreateType,
    readonly value: EventCreate
}

export function isNodeEventCreate(object: Event): object is NodeEventCreate {
    return (object as NodeEventCreate).type === EventCreateType
}

export const NodeEventCreate = {
    type: EventCreateType,
    parse(event: Event): NodeEventCreate {
        return {
            type: this.type,
            value: EventCreate.fromJSON(parseAttributes(event.attributes))
        } as NodeEventCreate
    }
}

export interface NodeEventPay extends Event {
    readonly type: typeof EventPayType,
    readonly value: EventPay
}

export function isNodeEventPay(object: Event): object is NodeEventPay {
    return (object as NodeEventPay).type === EventPayType
}

export const NodeEventPay = {
    type: EventPayType,
    parse(event: Event): NodeEventPay {
        return {
            type: this.type,
            value: EventPay.fromJSON(parseAttributes(event.attributes))
        } as NodeEventPay
    }
}

export interface NodeEventRefund extends Event {
    readonly type: typeof EventRefundType,
    readonly value: EventRefund
}

export function isNodeEventRefund(object: Event): object is NodeEventRefund {
    return (object as NodeEventRefund).type === EventRefundType
}

export const NodeEventRefund = {
    type: EventRefundType,
    parse(event: Event): NodeEventRefund {
        return {
            type: this.type,
            value: EventRefund.fromJSON(parseAttributes(event.attributes))
        } as NodeEventRefund
    }
}

export interface NodeEventUpdateDetails extends Event {
    readonly type: typeof EventUpdateDetailsType,
    readonly value: EventUpdateDetails
}

export function isNodeEventUpdateDetails(object: Event): object is NodeEventUpdateDetails {
    return (object as NodeEventUpdateDetails).type === EventUpdateDetailsType
}

export const NodeEventUpdateDetails = {
    type: EventUpdateDetailsType,
    parse(event: Event): NodeEventUpdateDetails {
        return {
            type: this.type,
            value: EventUpdateDetails.fromJSON(parseAttributes(event.attributes))
        } as NodeEventUpdateDetails
    }
}

export interface NodeEventUpdateStatus extends Event {
    readonly type: typeof EventUpdateStatusType,
    readonly value: EventUpdateStatus
}

export function isNodeEventUpdateStatus(object: Event): object is NodeEventUpdateStatus {
    return (object as NodeEventUpdateStatus).type === EventUpdateStatusType
}

export const NodeEventUpdateStatus = {
    type: EventUpdateStatusType,
    parse(event: Event): NodeEventUpdateStatus {
        return {
            type: this.type,
            value: EventUpdateStatus.fromJSON(parseAttributes(event.attributes))
        } as NodeEventUpdateStatus
    }
}

export interface NodeEventCreateSession extends Event {
    readonly type: typeof EventCreateSessionType,
    readonly value: EventCreateSession
}

export function isNodeEventCreateSession(object: Event): object is NodeEventCreateSession {
    return (object as NodeEventCreateSession).type === EventCreateSessionType
}

export const NodeEventCreateSession = {
    type: EventCreateSessionType,
    parse(event: Event): NodeEventCreateSession {
        return {
            type: this.type,
            value: EventCreateSession.fromJSON(parseAttributes(event.attributes))
        } as NodeEventCreateSession
    }
}
