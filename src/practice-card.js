const axios = require("axios");
const {
    Card,
    renderError,
    renderChart,
    renderNameTitle,
} = require("./common.js");

/**
 * 
 * @param {number} id 用户id
 * @returns {Object} 获取的用户数据 {name, color, ccfLevel, passed, hideInfo}
 */
async function fetchStats(id) {
    //debug 测试请求
    //const res = await axios.get(`https://tc-0glpuj1k4e75e5ec-1300876583.ap-shanghai.service.tcloudbase.com/luogu?id=${id}`);

    const res = await axios.get(`https://www.luogu.com.cn/user/${id}?_contentOnly`)

    const stats = {
        name: "NULL",
        color: "Gray",
        ccfLevel: 0,
        passed: [0, 0, 0, 0, 0, 0, 0, 0],
        unpassed: 0,
        hideInfo: false,
        errorType: null // "privacy" | "error"
    }
    try {
        if (!res.data || res.data.code !== 200 || !res.data.currentData) {
            stats.hideInfo = true;
            stats.errorType = "error";
            return stats;
        }
        const user = res.data.currentData.user;
        const passed = res.data.currentData.passedProblems;
        const submittedProblems = res.data.currentData.submittedProblems;

        stats.name = user && user.name ? decodeURI(user.name) : "NULL";
        stats.color = user && user.color ? user.color : "Gray";
        stats.ccfLevel = user && user.ccfLevel ? user.ccfLevel : 0;
        stats.tag = user && user.badge ? decodeURI(user.badge) : "";
        stats.unpassed = Array.isArray(submittedProblems) ? submittedProblems.length : 0;

        if (!Array.isArray(passed)) {
            stats.hideInfo = true;
            stats.errorType = "privacy";
            return stats;
        }
        for (let i of passed) {
            if (typeof i.difficulty === "number" && i.difficulty >= 0 && i.difficulty < stats.passed.length) {
                stats.passed[i.difficulty]++;
            }
        }
        return stats;
    } catch (e) {
        stats.hideInfo = true;
        stats.errorType = "error";
        return stats;
    }
}

const renderSVG = (stats, options) => {
    const {
        name,
        color,
        ccfLevel,
        passed,
        unpassed,
        hideInfo,
        tag,
        errorType
    } = stats;

    const {
        hideTitle,
        darkMode,
        cardWidth = 500,
    } = options || {};

    if (hideInfo) {
        let msg = "";
        if (errorType === "privacy") {
            msg = "用户开启了“完全隐私保护”，无法获取练习数据。";
        } else {
            msg = "数据获取异常，请稍后重试。";
        }
        return renderError(msg, { width: 360 });
    }

    const paddingX = 25;
    const labelWidth = 90;    //柱状图头部文字长度
    const progressWidth = cardWidth - 2 * paddingX - labelWidth - 60; //500 - 25*2(padding) - 90(头部文字长度) - 60(预留尾部文字长度)，暂时固定，后序提供自定义选项;

    const datas = [
        { label: "未评定", color: "#bfbfbf", data: passed[0] },
        { label: "入门", color: "#fe4c61", data: passed[1] },
        { label: "普及-", color: "#f39c11", data: passed[2] },
        { label: "普及/提高-", color: "#ffc116", data: passed[3] },
        { label: "普及+/提高", color: "#52c41a", data: passed[4] },
        { label: "提高+/省选-", color: "#3498db", data: passed[5] },
        { label: "省选/NOI-", color: "#9d3dcf", data: passed[6] },
        { label: "NOI/NOI+/CTSC", color: "#0e1d69", data: passed[7] },
        { label: "尝试过的题目", color: "#0101DF", data: unpassed }
    ]
    const passedSum = passed.reduce((a, b) => a + b);
    const body = renderChart(datas, labelWidth, progressWidth, "题");

    const title = renderNameTitle(name, color, ccfLevel, "的练习情况", cardWidth, `已通过: ${passedSum}题    未通过: ${unpassed}题`, tag);

    return new Card({
        width: cardWidth - 2 * paddingX,
        height: datas.length * 30 + 10,
        hideTitle,
        darkMode,
        title,
        body,
    }).render();
}

module.exports = { fetchStats, renderSVG }
