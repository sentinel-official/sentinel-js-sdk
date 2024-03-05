import {
    EventStart,
    EventUpdateDetails,
    EventUpdateStatus,
} from "../../protobuf/sentinel/session/v2/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventStartType = `${protobufPackage}.EventStart`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`

export interface SessionEventStart extends Event {
    readonly type: typeof EventStartType,
    readonly value: EventStart
}

export function isSessionEventStart(object: Event): object is SessionEventStart {
    return (object as SessionEventStart).type === EventStartType
}

export const SessionEventStart = {
    type: EventStartType,
    parse(event: Event): SessionEventStart {
        return {
            type: this.type,
            value: EventStart.fromJSON(parseAttributes(event.attributes))
        } as SessionEventStart
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