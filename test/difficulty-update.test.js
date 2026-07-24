const assert = require("assert");
const fs = require("fs");
const { renderSVG: renderPracticeSVG } = require("../src/practice-card.js");
const { renderSVG: renderShieldSVG } = require("../src/shields.js");
const practiceApi = require("../api/practice.js");
const shieldsApi = require("../api/shields.js");

function createResponse() {
    return {
        headers: {},
        body: "",
        setHeader(key, value) {
            this.headers[key] = value;
        },
        send(payload) {
            this.body = payload;
            return payload;
        },
    };
}

function testRenderMappings() {
    const stats = {
        name: "tester",
        color: "Orange",
        ccfLevel: 6,
        passed: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        unpassed: 10,
        hideInfo: false,
        tag: "",
        errorType: null,
    };

    const practiceSvg = renderPracticeSVG(stats, {});
    assert(practiceSvg.includes("暂未评定</text>"));
    assert(practiceSvg.includes("普及</text>"));
    assert(practiceSvg.includes("普及+/提高-</text>"));
    assert(practiceSvg.includes("提高</text>"));
    assert(practiceSvg.includes("NOI/NOI+/CTS</text>"));
    assert(practiceSvg.includes('fill="#e8e8e8"'));
    assert(practiceSvg.includes('fill="#13c2c2"'));
    assert(!practiceSvg.includes(">未评定<"));
    assert(!practiceSvg.includes("普及/提高-"));
    assert(!practiceSvg.includes("CTSC"));

    const shieldSvg = renderShieldSVG(stats, {});
    assert(shieldSvg.includes('fill="#e8e8e8"'));
    assert(shieldSvg.includes('fill="#13c2c2"'));
    assert(!shieldSvg.includes("CTSC"));
}

async function testCustomParsing() {
    const reqBase = {
        id: "1",
        custom: "true",
        name: "tester",
        color: "Orange",
        ccfLevel: "6",
        passed: "1,2,3,4,5,777,7,8,9",
        unpassed: "888",
    };

    const practiceRes = createResponse();
    await practiceApi({ query: reqBase }, practiceRes);
    assert(practiceRes.body.includes("777题"));
    assert(practiceRes.body.includes("888题"));

    const shieldsRes = createResponse();
    await shieldsApi({ query: reqBase }, shieldsRes);
    assert(shieldsRes.body.includes(">777<"));
    assert(shieldsRes.body.includes(">888<"));
}

function testGeneratorPageNames() {
    const html = fs.readFileSync(__dirname + "/../index/index.html", "utf8");
    assert(html.includes('const customPassed = ref([10, 20, 30, 40, 50, 60, 70, 80, 90]);'));
    assert(html.includes('NOI/NOI+/CTS'));
    assert(!html.includes("NOI/NOI+/CTSC"));
    assert(html.includes("暂未评定"));
    assert(!html.includes('"未评定"'));
}

async function run() {
    testRenderMappings();
    await testCustomParsing();
    testGeneratorPageNames();
    console.log("difficulty update tests passed");
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
