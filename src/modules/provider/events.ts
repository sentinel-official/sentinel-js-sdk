import {
    EventRegister,
    EventUpdate,
} from "../../protobuf/sentinel/provider/v2/events"

import { protobufPackage } from "./consts"

import { parseAttributes } from "../../utils"
import { Event } from "@cosmjs/stargate"

const EventRegisterType = `${protobufPackage}.EventRegister`
const EventUpdateType = `${protobufPackage}.EventUpdate`

export interface ProviderEventRegister extends Event {
    readonly type: typeof EventRegisterType,
    readonly value: EventRegister
}

export function isProviderEventRegister(object: Event): object is ProviderEventRegister {
    return (object as ProviderEventRegister).type === EventRegisterType
}

export const ProviderEventRegister = {
    type: EventRegisterType,
    parse(event: Event): ProviderEventRegister {
        return {
            type: this.type,
            value: EventRegister.fromJSON(parseAttributes(event.attributes))
        } as ProviderEventRegister
    }
}

export interface ProviderEventUpdate extends Event {
    readonly type: typeof EventUpdateType,
    readonly value: EventUpdate
}

export function isProviderEventUpdate(object: Event): object is ProviderEventUpdate {
    return (object as ProviderEventUpdate).type === EventUpdateType
}

export const ProviderEventUpdate = {
    type: EventUpdateType,
    parse(event: Event): ProviderEventUpdate {
        return {
            type: this.type,
            value: EventUpdate.fromJSON(parseAttributes(event.attributes))
        } as ProviderEventUpdate
    }
}