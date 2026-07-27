#!/usr/bin/env node
"use strict";

const { NodeVPNType } = require("../../dist");
const { PROTOCOLS, discoverNodes } = require("./discovery");

async function main() {
    const protocol = process.argv[2];
    if (protocol && !PROTOCOLS.includes(protocol)) {
        throw new Error(`Protocol must be one of: ${PROTOCOLS.join(", ")}`);
    }

    const result = await discoverNodes({ protocol });
    const candidates = protocol
        ? { [protocol]: result.candidates.slice(0, 5) }
        : Object.fromEntries(
            Object.values(NodeVPNType).map(type => [
                type,
                result.candidates
                    .filter(candidate => candidate.protocol === type)
                    .slice(0, 5),
            ]),
        );

    console.log(JSON.stringify({ ...result, candidates }, null, 2));
}

main().catch(error => {
    console.error(`Discovery failed: ${error.message}`);
    process.exitCode = 1;
});
