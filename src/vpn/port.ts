export interface VPNPortRange {
    inFrom: number;
    inTo: number;
    outFrom: number;
    outTo: number;
}

function parseRange(value: string, label: string): [number, number] {
    const match = /^([0-9]{1,5})(?:-([0-9]{1,5}))?$/.exec(value.trim());
    if (!match) {
        throw new TypeError(`Invalid ${label} port range: ${value}`);
    }

    const from = Number(match[1]);
    const to = Number(match[2] ?? match[1]);
    if (from < 1 || to > 65535 || from > to) {
        throw new RangeError(`Invalid ${label} port range: ${value}`);
    }

    return [from, to];
}

/**
 * Parses sentinel-go-sdk/libs/netip.Port JSON strings.
 *
 * Accepted examples: "443", "443:8443", "1000-1002:2000-2002".
 * Input and output ranges must contain the same number of ports, matching
 * the Go SDK validation.
 */
export function parseVPNPortRange(value: string, maxPorts: number = 1024): VPNPortRange {
    if (typeof value !== "string") {
        throw new TypeError("Port range must be a string");
    }

    const parts = value.trim().split(":");
    if (parts.length > 2 || parts[0] === "") {
        throw new TypeError(`Invalid port range: ${value}`);
    }

    const [inFrom, inTo] = parseRange(parts[0], "inbound");
    const [outFrom, outTo] = parseRange(parts[1] ?? parts[0], "outbound");
    const inSize = inTo - inFrom;
    const outSize = outTo - outFrom;
    if (inSize !== outSize) {
        throw new RangeError("Inbound and outbound port ranges must have equal sizes");
    }
    if (outSize + 1 > maxPorts) {
        throw new RangeError(`Port range expands to more than ${maxPorts} entries`);
    }

    return { inFrom, inTo, outFrom, outTo };
}
