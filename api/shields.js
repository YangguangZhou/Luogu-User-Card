const { fetchStats } = require("../src/practice-card.js");
const { renderSVG } = require("../src/shields.js");
const { renderError } = require("../src/common.js");

module.exports = async (req, res) => {
  const { id } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache

  const validId = /^[1-9]\d*$/;

  if (!validId.test(id)) {
    return res.send(renderError(`"${id}"不是一个合法uid`));
  }

  const stats = await fetchStats(id);
  if (stats.hideInfo) {
    if (stats.errorType === "privacy") {
      return res.send(renderError("无法获取练习数据。", { width: 360 }));
    } else {
      return res.send(renderError("数据获取异常，请稍后重试。", { width: 360 }));
    }
  }
  return res.send(renderSVG(stats));
};