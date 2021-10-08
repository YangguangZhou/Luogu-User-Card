const {
  renderNameTitle,
  renderAboutText,
} = require("../src/common.js");
module.exports = async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  if(req.query.function=="rat")
  {
    return res.send("<svg>"+renderAboutText(req.query.userType,req.query.followerCount,req.query.followingCount,req.query.ranking,req.query.slogan,req.query.darkmode)+"</svg>");
  }
  else if(req.query.function=="rnt")
  {
    return res.send("<svg>"+renderNameTitle(req.query.name,req.query.color,parseInt(req.query.ccfLevel),req.query.title,parseInt(req.query.cardWidth),req.query.rightTop,req.query.tag)+"</svg>");
  }
  else
  {
    return res.send("<svg>"+renderAboutText("普通用户",3,3,1,"Hello World!",false)+"</svg>");
  }
}
