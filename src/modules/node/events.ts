import {
    EventRegister,
    EventUpdateDetails,
    EventUpdateStatus,
    EventCreateSubscription
} from "../../protobuf/sentinel/node/v2/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventRegisterType = `${protobufPackage}.EventRegister`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`
const EventCreateSubscriptionType = `${protobufPackage}.EventCreateSubscription`

export interface NodeEventRegister extends Event {
    readonly type: typeof EventRegisterType,
    readonly value: EventRegister
}

export function isNodeEventRegister(object: Event): object is NodeEventRegister {
    return (object as NodeEventRegister).type === EventRegisterType
}

export const NodeEventRegister = {
    type: EventRegisterType,
    parse(event: Event): NodeEventRegister {
        return {
            type: this.type,
            value: EventRegister.fromJSON(parseAttributes(event.attributes))
        } as NodeEventRegister
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

export interface NodeEventCreateSubscription extends Event {
    readonly type: typeof EventCreateSubscriptionType,
    readonly value: EventCreateSubscription
}

export function isNodeEventCreateSubscription(object: Event): object is NodeEventCreateSubscription {
    return (object as NodeEventCreateSubscription).type === EventCreateSubscriptionType
}

export const NodeEventCreateSubscription = {
    type: EventCreateSubscriptionType,
    parse(event: Event): NodeEventCreateSubscription {
        return {
            type: this.type,
            value: EventCreateSubscription.fromJSON(parseAttributes(event.attributes))
        } as NodeEventCreateSubscription
    }
}