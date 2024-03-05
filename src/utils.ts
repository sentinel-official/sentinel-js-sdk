import { Event, Attribute } from "@cosmjs/stargate"



export function parseAttributes(attributes: readonly Attribute[]): any {
    return Object.fromEntries(attributes.map((x: Attribute) => [
        x.key.replace(/_([a-z])/g, (_, p1) => p1.toUpperCase()),
        JSON.parse(x.value)
    ]))
}

export function searchEvent(eventUrl: string, events: readonly Event[]): Event | null {
    for(let index = 0; index < events.length; index++){
        if (events[index].type === eventUrl) return events[index]
    }
    return null
}