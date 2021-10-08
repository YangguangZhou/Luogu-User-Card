const { fetchAbout, renderSVG } = require("../src/about-card.js");
const { renderError } = require("../src/common.js")

module.exports = async (req, res) => {
    const { 
        id, 
        hide_title, 
        dark_mode,
        disable_cache,
        card_width = 500,
    } = req.query;

    res.setHeader("Content-Type", "image/svg+xml");
    if(!disable_cache) {
        res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache
    }

    const validId = /^[1-9]\d*$/;
    const clamp = (min, max, n) => Math.max(min, Math.min(max, n));

    if(!validId.test(id)) {
        return res.send(renderError(`"${id}"不是一个合法uid`, {darkMode: dark_mode}));
    }
    if(!validId.test(card_width)) {
        return res.send(renderError(`卡片宽度"${card_width}"不合法`, {darkMode: dark_mode}));
    }
    
    const about = await fetchAbout(id);
    return res.send(renderSVG(about, {
        hideTitle: hide_title,
        darkMode: dark_mode,
        cardWidth: clamp(500, 1920, card_width),
    }));
};
