const assert = require("node:assert/strict");
const test = require("node:test");

const {
    setupPlanExtension,
} = require("../dist/modules/plan/query");

test("plansForProvide remains a backward-compatible alias", () => {
    const extension = setupPlanExtension({
        queryUnverified: async () => new Uint8Array(),
    });

    assert.equal(
        extension.plan.plansForProvide,
        extension.plan.plansForProvider,
    );
});
