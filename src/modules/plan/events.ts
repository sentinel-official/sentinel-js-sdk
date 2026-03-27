import {
    EventCreate,
    EventLinkNode,
    EventUnlinkNode,
    EventUpdate,
} from "../../protobuf/sentinel/plan/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventCreateType = `${protobufPackage}.EventCreate`;
const EventLinkNodeType = `${protobufPackage}.EventLinkNode`;
const EventUnlinkNodeType = `${protobufPackage}.EventUnlinkNode`;
const EventUpdateType = `${protobufPackage}.EventUpdate`;

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

export interface PlanEventUpdate extends Event {
    readonly type: typeof EventUpdateType,
    readonly value: EventUpdate
}

export function isPlanEventUpdate(object: Event): object is PlanEventUpdate {
    return (object as PlanEventUpdate).type === EventUpdateType
}

export const PlanEventUpdate = {
    type: EventUpdateType,
    parse(event: Event): PlanEventUpdate {
        return {
            type: this.type,
            value: EventUpdate.fromJSON(parseAttributes(event.attributes))
        } as PlanEventUpdate
    }
}