const { renderGuzhiCard } = require("../src/guzhi-card.js");
const { fetchAbout } = require("../src/about-card.js");
const { renderError } = require("../src/common.js")
const axios = require("axios");

async function fetchGuzhi(id, ranking) {
    var page=Math.floor((ranking-1)/50) + 1;
    
    const res = await axios.get(`https://www.luogu.com.cn/ranking?page=${page}&_contentOnly`);
    
    if(res.data.code != 200) {
        return "Not found.";
    }
    
    const rankList=res.data.currentData.rankList.result;
    
    for(var index=0;index<50;index++) {
        if(!rankList[index]) {
            continue;
        }
        if(rankList[index].user.uid==id) {
            return `${rankList[index].basicRating},${rankList[index].practiceRating},${rankList[index].socialRating},${rankList[index].contestRating},${rankList[index].prizeRating}`;
        }
    }
    return `Not found.`;
}

module.exports = async (req, res) => {
    const { id, scores, hide_title, dark_mode, disable_cache, card_width = 500 } = req.query;
    var finally_scores

    res.setHeader("Content-Type", "image/svg+xml");
    if(!disable_cache){
        res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache
    }

    const regNum = /^[1-9]\d*$/;
    const clamp = (min, max, n) => Math.max(min, Math.min(max, n));

    if (!regNum.test(card_width)) {
        return res.send(
            renderError(`卡片宽度"${card_width}"不合法`, { darkMode: dark_mode })
        );
    }
    if(id != undefined && !regNum.test(id)) {
        return res.send(renderError(`"${id}"不是一个合法uid`, {darkMode: dark_mode}));
    }

    let about = null;

    if(id != undefined) {
        about = await fetchAbout(id);
    }
    
    if(about.ranking>=1&&about.ranking<=1000)
    {
        finally_scores=await fetchGuzhi(id, about.ranking);
        if(finally_scores=="Not found.")
        {
            finally_scores=scores;
        }
    }
    else
    {
        finally_scores=scores;
    }

    return res.send(
        renderGuzhiCard(about, finally_scores, {
            hideTitle: about === null ? true : hide_title,
            darkMode: dark_mode,
            cardWidth: clamp(500, 1920, card_width),
        })
    );
};
