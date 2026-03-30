import {
    EventCreate,
    EventUpdateDetails,
    EventUpdateStatus,
} from "../../protobuf/sentinel/provider/v3/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventCreateType = `${protobufPackage}.EventCreate`
const EventUpdateDetailsType = `${protobufPackage}.EventUpdateDetails`
const EventUpdateStatusType = `${protobufPackage}.EventUpdateStatus`

export interface ProviderEventCreate extends Event {
    readonly type: typeof EventCreateType,
    readonly value: EventCreate
}

export function isProviderEventCreate(object: Event): object is ProviderEventCreate {
    return (object as ProviderEventCreate).type === EventCreateType
}

export const ProviderEventCreate = {
    type: EventCreateType,
    parse(event: Event): ProviderEventCreate {
        return {
            type: this.type,
            value: EventCreate.fromJSON(parseAttributes(event.attributes))
        } as ProviderEventCreate
    }
}

export interface ProviderEventUpdateDetails extends Event {
    readonly type: typeof EventUpdateDetailsType,
    readonly value: EventUpdateDetails
}

export function isProviderEventUpdateDetails(object: Event): object is ProviderEventUpdateDetails {
    return (object as ProviderEventUpdateDetails).type === EventUpdateDetailsType
}

export const ProviderEventUpdateDetails = {
    type: EventUpdateDetailsType,
    parse(event: Event): ProviderEventUpdateDetails {
        return {
            type: this.type,
            value: EventUpdateDetails.fromJSON(parseAttributes(event.attributes))
        } as ProviderEventUpdateDetails
    }
}

export interface ProviderEventUpdateStatus extends Event {
    readonly type: typeof EventUpdateStatusType,
    readonly value: EventUpdateStatus
}

export function isProviderEventUpdateStatus(object: Event): object is ProviderEventUpdateStatus {
    return (object as ProviderEventUpdateStatus).type === EventUpdateStatusType
}

export const ProviderEventUpdateStatus = {
    type: EventUpdateStatusType,
    parse(event: Event): ProviderEventUpdateStatus {
        return {
            type: this.type,
            value: EventUpdateStatus.fromJSON(parseAttributes(event.attributes))
        } as ProviderEventUpdateStatus
    }
}
