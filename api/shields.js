const { fetchStats } = require("../src/practice-card.js");
const { renderSVG } = require("../src/shields.js");
const { renderError } = require("../src/common.js");

module.exports = async (req, res) => {
  const { id, custom, name, color, ccfLevel, passed, unpassed } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache

  const validId = /^[1-9]\d*$/;

  if (!validId.test(id)) {
    return res.send(renderError(`"${id}"不是一个合法uid`));
  }

  let stats;
  if (custom) {
    let passedArr = [0, 0, 0, 0, 0, 0, 0, 0];
    if (passed) {
        const parts = passed.split(',');
        if (parts.length === 8) {
            passedArr = parts.map(x => parseInt(x) || 0);
        }
    }
    stats = {
        name: decodeURI(name || "NULL"),
        color: decodeURI(color || "Gray"),
        ccfLevel: parseInt(ccfLevel || 0),
        passed: passedArr,
        unpassed: parseInt(unpassed || 0),
        hideInfo: false,
        errorType: null
    };
  } else {
    stats = await fetchStats(id);
  }

  if (stats.hideInfo) {
    if (stats.errorType === "privacy") {
      return res.send(renderError("无法获取练习数据。", { width: 360 }));
    } else {
      return res.send(renderError("数据获取异常，请稍后重试。", { width: 360 }));
    }
  }
  return res.send(renderSVG(stats));
};
