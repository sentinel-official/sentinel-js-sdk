import {
    EventCreate,
    EventUpdateStatus,
    EventLinkNode,
    EventUnlinkNode,
    EventCreateSubscription
} from "../../protobuf/sentinel/plan/v2/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventCreateType = `${protobufPackage}.EventCreate`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`
const EventLinkNodeType = `${protobufPackage}.EventLinkNode`
const EventUnlinkNodeType = `${protobufPackage}.EventUnlinkNode`
const EventCreateSubscriptionType = `${protobufPackage}.EventCreateSubscription`

export interface PlanEventCreate extends Event {
    readonly type: typeof EventCreateType,
    readonly value: EventCreate
}

export function isPlanEventCreate(object: Event): object is PlanEventCreate {
    return (object as PlanEventCreate).type === EventCreateType
}

export const PlanEventCreate = {
    type: EventCreateType,
    parse(event: Event): PlanEventCreate {
        return {
            type: this.type,
            value: EventCreate.fromJSON(parseAttributes(event.attributes))
        } as PlanEventCreate
    }
}

export interface PlanEventUpdateStatus extends Event {
    readonly type: typeof EventUpdateStatusType,
    readonly value: EventUpdateStatus
}

export function isPlanEventUpdateStatus(object: Event): object is PlanEventUpdateStatus {
    return (object as PlanEventUpdateStatus).type === EventUpdateStatusType
}

export const PlanEventUpdateStatus = {
    type: EventUpdateStatusType,
    parse(event: Event): PlanEventUpdateStatus {
        return {
            type: this.type,
            value: EventUpdateStatus.fromJSON(parseAttributes(event.attributes))
        } as PlanEventUpdateStatus
    }
}

export interface PlanEventLinkNode extends Event {
    readonly type: typeof EventLinkNodeType,
    readonly value: EventLinkNode
}

export function isPlanEventLinkNode(object: Event): object is PlanEventLinkNode {
    return (object as PlanEventLinkNode).type === EventLinkNodeType
}

export const PlanEventLinkNode = {
    type: EventLinkNodeType,
    parse(event: Event): PlanEventLinkNode {
        return {
            type: this.type,
            value: EventLinkNode.fromJSON(parseAttributes(event.attributes))
        } as PlanEventLinkNode
    }
}

export interface PlanEventUnlinkNode extends Event {
    readonly type: typeof EventUnlinkNodeType,
    readonly value: EventUnlinkNode
}

export function isPlanEventUnlinkNode(object: Event): object is PlanEventUnlinkNode {
    return (object as PlanEventUnlinkNode).type === EventUnlinkNodeType
}

export const PlanEventUnlinkNode = {
    type: EventUnlinkNodeType,
    parse(event: Event): PlanEventUnlinkNode {
        return {
            type: this.type,
            value: EventUnlinkNode.fromJSON(parseAttributes(event.attributes))
        } as PlanEventUnlinkNode
    }
}

export interface PlanEventCreateSubscription extends Event {
    readonly type: typeof EventCreateSubscriptionType,
    readonly value: EventCreateSubscription
}

export function isPlanEventCreateSubscription(object: Event): object is PlanEventCreateSubscription {
    return (object as PlanEventCreateSubscription).type === EventCreateSubscriptionType
}

export const PlanEventCreateSubscription = {
    type: EventCreateSubscriptionType,
    parse(event: Event): PlanEventCreateSubscription {
        return {
            type: this.type,
            value: EventCreateSubscription.fromJSON(parseAttributes(event.attributes))
        } as PlanEventCreateSubscription
    }
}