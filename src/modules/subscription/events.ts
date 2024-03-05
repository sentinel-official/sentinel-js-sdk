import {
    EventUpdateStatus,
    EventAllocate,
    EventCreatePayout,
    EventPayForPayout,
    EventPayForPlan,
    EventPayForSession,
    EventRefund
} from "../../protobuf/sentinel/subscription/v2/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`
const EventAllocateType = `${protobufPackage}.EventAllocate`
const EventCreatePayoutType = `${protobufPackage}.EventCreatePayout`
const EventPayForPayoutType = `${protobufPackage}.EventPayForPayout`
const EventPayForPlanType = `${protobufPackage}.EventPayForPlan`
const EventPayForSessionType = `${protobufPackage}.EventPayForSession`
const EventRefundType = `${protobufPackage}.EventRefund`

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

export interface SubscriptionEventCreatePayout extends Event {
    readonly type: typeof EventCreatePayoutType,
    readonly value: EventCreatePayout
}

export function isSubscriptionEventCreatePayout(object: Event): object is SubscriptionEventCreatePayout {
    return (object as SubscriptionEventCreatePayout).type === EventCreatePayoutType
}

export const SubscriptionEventCreatePayout = {
    type: EventCreatePayoutType,
    parse(event: Event): SubscriptionEventCreatePayout {
        return {
            type: this.type,
            value: EventCreatePayout.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventCreatePayout
    }
}

export interface SubscriptionEventPayForPayout extends Event {
    readonly type: typeof EventPayForPayoutType,
    readonly value: EventPayForPayout
}

export function isSubscriptionEventPayForPayout(object: Event): object is SubscriptionEventPayForPayout {
    return (object as SubscriptionEventPayForPayout).type === EventPayForPayoutType
}

export const SubscriptionEventPayForPayout = {
    type: EventPayForPayoutType,
    parse(event: Event): SubscriptionEventPayForPayout {
        return {
            type: this.type,
            value: EventPayForPayout.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventPayForPayout
    }
}

export interface SubscriptionEventPayForPlan extends Event {
    readonly type: typeof EventPayForPlanType,
    readonly value: EventPayForPlan
}

export function isSubscriptionEventPayForPlan(object: Event): object is SubscriptionEventPayForPlan {
    return (object as SubscriptionEventPayForPlan).type === EventPayForPlanType
}

export const SubscriptionEventPayForPlan = {
    type: EventPayForPlanType,
    parse(event: Event): SubscriptionEventPayForPlan {
        return {
            type: this.type,
            value: EventPayForPlan.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventPayForPlan
    }
}

export interface SubscriptionEventPayForSession extends Event {
    readonly type: typeof EventPayForSessionType,
    readonly value: EventPayForSession
}

export function isSubscriptionEventPayForSession(object: Event): object is SubscriptionEventPayForSession {
    return (object as SubscriptionEventPayForSession).type === EventPayForSessionType
}

export const SubscriptionEventPayForSession = {
    type: EventPayForSessionType,
    parse(event: Event): SubscriptionEventPayForSession {
        return {
            type: this.type,
            value: EventPayForSession.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventPayForSession
    }
}

export interface SubscriptionEventRefund extends Event {
    readonly type: typeof EventRefundType,
    readonly value: EventRefund
}

export function isSubscriptionEventRefund(object: Event): object is SubscriptionEventRefund {
    return (object as SubscriptionEventRefund).type === EventRefundType
}

export const SubscriptionEventRefund = {
    type: EventRefundType,
    parse(event: Event): SubscriptionEventRefund {
        return {
            type: this.type,
            value: EventRefund.fromJSON(parseAttributes(event.attributes))
        } as SubscriptionEventRefund
    }
}