import {
    EventEnd,
    EventUpdateDetails,
    EventUpdateStatus,
} from "../../protobuf/sentinel/session/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventEndType = `${protobufPackage}.EventEnd`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`

export interface SessionEventEnd extends Event {
    readonly type: typeof EventEndType,
    readonly value: EventEnd
}

export function isSessionEventEnd(object: Event): object is SessionEventEnd {
    return (object as SessionEventEnd).type === EventEndType
}

export const SessionEventEnd = {
    type: EventEndType,
    parse(event: Event): SessionEventEnd {
        return {
            type: this.type,
            value: EventEnd.fromJSON(parseAttributes(event.attributes))
        } as SessionEventEnd
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