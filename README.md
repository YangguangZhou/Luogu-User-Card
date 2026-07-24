<p align="center">
  <h1 align="center">Luogu User Card</h1>
  <p align="center">🏆 优雅的洛谷用户信息卡片及生成工具</p>
</p>

<p align="center">
  <a href="https://api.jerryz.com.cn/">🌐 在线生成器</a> •
  <a href="https://blog.jerryz.com.cn/article/Luogu-User-Card/">📝 详细教程</a>
</p>

<p align="center">
  <a href="https://github.com/YangguangZhou/Luogu-User-Card/stargazers"><img src="https://img.shields.io/github/stars/YangguangZhou/Luogu-User-Card?color=yellow&logo=github&style=flat-square" alt="stars"></a>
  <a href="https://github.com/YangguangZhou/Luogu-User-Card/network/members"><img src="https://img.shields.io/github/forks/YangguangZhou/Luogu-User-Card?color=blue&logo=github&style=flat-square" alt="forks"></a>
  <a href="https://github.com/YangguangZhou/Luogu-User-Card/blob/master/LICENSE"><img src="https://img.shields.io/github/license/YangguangZhou/Luogu-User-Card?color=ff69b4&logo=gnu&style=flat-square" alt="license"></a>
  <a href="https://github.com/YangguangZhou/Luogu-User-Card/commits"><img src="https://img.shields.io/github/last-commit/YangguangZhou/Luogu-User-Card?color=orange&logo=github&style=flat-square" alt="last-commit"></a>
  <a href="https://github.com/YangguangZhou/Luogu-User-Card/issues"><img src="https://img.shields.io/github/issues/YangguangZhou/Luogu-User-Card?color=purple&logo=github&style=flat-square" alt="issues"></a>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=YangguangZhou.Luogu-User-Card&style=flat-square" alt="visitors"/>
</p>

## 📖 项目介绍

Luogu User Card 是一个动态生成洛谷用户信息卡片的工具，可以在个人主页、博客、GitHub 个人资料等任何支持 Markdown 或 HTML 的地方展示您的洛谷做题情况、用户信息和咕值等数据。

> **注意**：为了不滥用洛谷服务器流量，本项目利用 Vercel 的边缘缓存功能缓存数据 12 小时，即同一个用户卡片 **24 小时内最多只会向洛谷服务器请求 2 次数据**，并且只有在用户访问卡片时才会请求数据。如果需要，可以在链接末尾添加 `&disable_cache=true` 参数来禁用缓存。

## ✨ 特性

- 🌈 **多种卡片类型**：基本信息、练习徽章、练习情况、咕值信息
- 🛠️ **自定义模式**：支持手动填入数据，无需依赖洛谷 API，解决隐私保护或 API 故障问题
- 🌙 **深色模式**：支持浅色/深色两种显示模式
- 📏 **自定义宽度**：可根据放置场景调整卡片宽度
- 🚀 **实时更新**：数据自动从洛谷获取，无需手动更新
- 🔄 **缓存机制**：智能缓存减轻洛谷服务器压力
- 🔌 **易于部署**：一键部署到 Vercel，无需服务器

## 🌈 在线生成器

访问 [api.jerryz.com.cn](https://api.jerryz.com.cn) 使用在线生成器，填写信息后即可获取卡片。

## 🚀 使用指南

### 基本信息卡片

展示用户的基本信息，包括用户类型、关注、咕值排名、个性签名等。

![用户基本信息](https://api.jerryz.com.cn/about?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&slogan=%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E4%B8%AA%E6%80%A7%E7%AD%BE%E5%90%8D&followerCount=56&followingCount=25&ranking=1234&userType=%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7)

```markdown
![用户基本信息](https://api.jerryz.com.cn/about?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&slogan=%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E4%B8%AA%E6%80%A7%E7%AD%BE%E5%90%8D&followerCount=56&followingCount=25&ranking=1234&userType=%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7)
```

带链接版本：

```markdown
[![用户基本信息](https://api.jerryz.com.cn/about?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&slogan=%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E4%B8%AA%E6%80%A7%E7%AD%BE%E5%90%8D&followerCount=56&followingCount=25&ranking=1234&userType=%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7)](https://www.luogu.com.cn/user/253620)
```

### 练习徽章

简洁地显示用户的做题统计数据，适合放在项目徽章列表中。

![练习徽章](https://api.jerryz.com.cn/shield?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)

```markdown
![练习徽章](https://api.jerryz.com.cn/shield?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)
```

带链接版本：

```markdown
[![练习徽章](https://api.jerryz.com.cn/shield?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)](https://www.luogu.com.cn/user/253620#practice)
```

### 练习情况卡片

详细展示用户的做题情况，包括已通过题目数量和各个难度的题目分布。

![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)

```markdown
![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)
```

带链接版本：

```markdown
[![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)](https://www.luogu.com.cn/user/253620#practice)
```

### 咕值信息卡片

展示用户的咕值数据，包括基础信用、练习情况、社区贡献、比赛情况、获得成就五个维度。

![咕值信息](https://api.jerryz.com.cn/guzhi?id=123456&scores=100,25,10,40,20&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&ranking=1234)

```markdown
![咕值信息](https://api.jerryz.com.cn/guzhi?id=123456&scores=100,25,10,40,20&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&ranking=1234)
```

带链接版本：

```markdown
[![咕值信息](https://api.jerryz.com.cn/guzhi?id=123456&scores=100,25,10,40,20&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&ranking=1234)](https://www.luogu.com.cn/user/253620)
```

> **说明**：`scores` 参数需要手动填入五个数据，分别对应基础信用、练习情况、社区贡献、比赛情况、获得成就，用英文逗号分隔。当系统检测到用户咕值排名在前 1000 名时，会自动获取数据并覆盖手动输入的数据。

## 🎨 自定义选项

所有卡片均支持以下自定义参数，可组合使用：

### 隐藏标题

添加 `&hide_title=true` 参数：

```markdown
![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&hide_title=true)
```

![隐藏标题效果](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&hide_title=true)

### 深色模式

添加 `&dark_mode=true` 参数：

```markdown
![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&dark_mode=true)
```

![深色模式效果](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&dark_mode=true)

### 自定义宽度

添加 `&card_width=数值` 参数（范围：500-1920）：

```markdown
![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&card_width=750)
```

![自定义宽度效果](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&card_width=750)

### 禁用缓存

添加 `&disable_cache=true` 参数：

```markdown
![练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Orange&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5&disable_cache=true)
```

### 自定义模式

当洛谷 API 出现故障，或者用户开启了“完全隐私保护”导致无法自动获取数据时，可以使用自定义模式手动填入数据生成卡片。

添加 `&custom=true` 参数开启自定义模式，并根据卡片类型添加相应的数据参数：

**通用参数：**
- `name`: 用户名
- `color`: 用户名颜色 (Gray, Blue, Green, Orange, Red, Purple, Cheater)
- `ccfLevel`: CCF 等级 (0-10)
- `tag`: 标签/徽章内容

**基本信息卡片额外参数：**
- `slogan`: 个性签名
- `userType`: 用户类型 (如：普通用户, 管理员)
- `followerCount`: 粉丝数
- `followingCount`: 关注数
- `ranking`: 排名

**练习情况/徽章额外参数：**
- `unpassed`: 未通过题目数
- `passed`: 各难度通过数，用逗号分隔的9个数字 (暂未评定, 入门, 普及-, 普及, 普及+/提高-, 提高, 提高+/省选-, 省选/NOI-, NOI/NOI+/CTS)

**咕值信息卡片额外参数：**
- `ranking`: 咕值排名
- `scores`: 咕值分数 (基础信用, 练习情况, 社区贡献, 比赛情况, 获得成就)

**示例：**

```markdown
![自定义练习情况](https://api.jerryz.com.cn/practice?id=123456&custom=true&name=%E6%B5%8B%E8%AF%95%E7%94%A8%E6%88%B7&color=Red&ccfLevel=6&tag=%E6%B5%8B%E8%AF%95&passed=5,50,55,75,90,45,60,20,10&unpassed=5)
```

> **注意**：自定义模式生成的卡片底部将显示“数据由用户自行填入，请注意鉴别”，不再显示生成时间。

## 🔧 自行部署

如果想要自行试验或者二次开发，可以将项目部署到自己的 Vercel 服务器：

1. 登录 [Vercel](https://vercel.com/)
2. 点击下方按钮一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/YangguangZhou/Luogu-User-Card)

### 手动部署步骤：

1. Fork 这个仓库
2. 注册/登录 [Vercel](https://vercel.com/)
3. 在 Vercel 点击 "New Project"
4. 选择您的仓库
5. 使用默认设置，点击 "Deploy"

## 🤝 参与贡献

### 提交问题与建议

请使用 [GitHub Issues](https://github.com/YangguangZhou/Luogu-User-Card/issues) 提交问题和建议。提交 bug 时，请尽可能详细描述 bug 及其复现步骤，这将有助于我们更快地解决问题。

### 贡献代码

1. Fork 本仓库
2. 创建您的分支
3. 提交您的更改
4. 推送到分支
5. 打开一个 Pull Request

## 📃 开源许可

[![GNU Lesser General Public License v2.1](https://img.shields.io/github/license/YangguangZhou/Luogu-User-Card?style=flat-square)](https://github.com/YangguangZhou/Luogu-User-Card/blob/main/LICENSE)

版权所有 © 2020-2025 YangguangZhou

---

<p align="center">如果这个项目对您有帮助，请考虑给它一个 Star ⭐</p>
