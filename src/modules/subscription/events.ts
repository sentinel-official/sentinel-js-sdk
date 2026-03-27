import {
    EventAllocate,
    EventCreate,
    EventCreateSession,
    EventPay,
    EventRenew,
    EventUpdateDetails,
    EventUpdateStatus
} from "../../protobuf/sentinel/subscription/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventAllocateType = `${protobufPackage}.EventAllocate`
const EventCreateType = `${protobufPackage}.EventCreate`
const EventCreateSessionType = `${protobufPackage}.EventCreateSession`
const EventPayType = `${protobufPackage}.EventPay`
const EventRenewType = `${protobufPackage}.EventRenew`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`

export interface SubscriptionEventAllocate extends Event {
    readonly type: typeof EventAllocateType,
    readonly value: EventAllocate
}

export function isSubscriptionEventAllocate(object: Event): object is SubscriptionEventAllocate {
    return (object as SubscriptionEventAllocate).type === EventAllocateType
}

export const SubscriptionEventAllocate = {
    type: EventAllocateType,
    parse(event: Event): SubscriptionEventAllocate {
        return {
            type: this.type,
            value: EventAllocate.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventAllocate
    }
}

export interface SubscriptionEventCreate extends Event {
    readonly type: typeof EventCreateType,
    readonly value: EventCreate
}

export function isSubscriptionEventCreate(object: Event): object is SubscriptionEventCreate {
    return (object as SubscriptionEventCreate).type === EventCreateType
}

export const SubscriptionEventCreate = {
    type: EventCreateType,
    parse(event: Event): SubscriptionEventCreate {
        return {
            type: this.type,
            value: EventCreate.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventCreate
    }
}

export interface SubscriptionEventCreateSession extends Event {
    readonly type: typeof EventCreateSessionType,
    readonly value: EventCreateSession
}

export function isSubscriptionEventCreateSession(object: Event): object is SubscriptionEventCreateSession {
    return (object as SubscriptionEventCreateSession).type === EventCreateSessionType
}

export const SubscriptionEventCreateSession = {
    type: EventCreateSessionType,
    parse(event: Event): SubscriptionEventCreateSession {
        return {
            type: this.type,
            value: EventCreateSession.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventCreateSession
    }
}

export interface SubscriptionEventPay extends Event {
    readonly type: typeof EventPayType,
    readonly value: EventPay
}

export function isSubscriptionEventPay(object: Event): object is SubscriptionEventPay {
    return (object as SubscriptionEventPay).type === EventPayType
}

export const SubscriptionEventPay = {
    type: EventPayType,
    parse(event: Event): SubscriptionEventPay {
        return {
            type: this.type,
            value: EventPay.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventPay
    }
}

export interface SubscriptionEventRenew extends Event {
    readonly type: typeof EventRenewType,
    readonly value: EventRenew
}

export function isSubscriptionEventRenew(object: Event): object is SubscriptionEventRenew {
    return (object as SubscriptionEventRenew).type === EventRenewType
}

export const SubscriptionEventRenew = {
    type: EventRenewType,
    parse(event: Event): SubscriptionEventRenew {
        return {
            type: this.type,
            value: EventRenew.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventRenew
    }
}

export interface SubscriptionEventUpdateDetails extends Event {
    readonly type: typeof EventUpdateDetailsType,
    readonly value: EventUpdateDetails
}

export function isSubscriptionEventUpdateDetails(object: Event): object is SubscriptionEventUpdateDetails {
    return (object as SubscriptionEventUpdateDetails).type === EventUpdateDetailsType
}

export const SubscriptionEventUpdateDetails = {
    type: EventUpdateDetailsType,
    parse(event: Event): SubscriptionEventUpdateDetails {
        return {
            type: this.type,
            value: EventUpdateDetails.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventUpdateDetails
    }
}

export interface SubscriptionEventUpdateStatus extends Event {
    readonly type: typeof EventUpdateStatusType,
    readonly value: EventUpdateStatus
}

export function isSubscriptionEventUpdateStatus(object: Event): object is SubscriptionEventUpdateStatus {
    return (object as SubscriptionEventUpdateStatus).type === EventUpdateStatusType
}

export const SubscriptionEventUpdateStatus = {
    type: EventUpdateStatusType,
    parse(event: Event): SubscriptionEventUpdateStatus {
        return {
            type: this.type,
            value: EventUpdateStatus.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventUpdateStatus
    }
}