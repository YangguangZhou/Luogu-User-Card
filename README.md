> 注意：为了不滥用洛谷服务器流量，本项目利用 vercel 的边缘缓存功能缓存了 12 小时数据，即同一个用户卡片 **24 小时内最多只会向洛谷服务器请求 2 次数据**，并且只有在用户访问卡片时才会请求数据。不过，可以在链接最后带上`&disable_cache=true`禁用缓存。

---

# [Luogu-User-Card](https://api.jerryz.com.cn/)

# [使用方法](https://blog.jerryz.com.cn/article/Luogu-User-Card/)

---

# 简介

![stars](https://img.shields.io/github/stars/YangguangZhou/Luogu-User-Card?style=flat)
![visitor](https://visitor-badge.laobi.icu/badge?page_id=Luogu-User-Card)
![last commit](https://shields.io/github/last-commit/YangguangZhou/Luogu-User-Card?style=flat)
![top language](https://img.shields.io/github/languages/top/YangguangZhou/Luogu-User-Card)

![Luogu-User-Card](https://github-readme-stats.vercel.app/api/pin/?username=YangguangZhou&repo=Luogu-User-Card)

`Luogu-User-Card`是一个动态生成洛谷用户数据卡片的工具，可以展示自己的做题情况。可以用于个人主页、博客、github等可以插入图片的地方。

# 如何使用

## 基本信息

![Jerry_Zhou的基本信息](https://api.jerryz.com.cn/about?id=253620)

此卡片用于显示一个用户的基本信息，包括用户类型、关注、咕值排名、个性签名。

具体使用方法如下：

1. 仅使用图片：直接复制以下内容到任意 markdown 编辑器中，并将`?id=`后面的数字更改为自己的 id 即可（id是洛谷的用户编号）。

   ```markdown
   ![Jerry_Zhou的基本信息](https://api.jerryz.com.cn/about?id=253620)
   ```

2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人主页。

   ```markdown
   [![Jerry_Zhou的基本信息](https://api.jerryz.com.cn/about?id=253620)](https://www.luogu.com.cn/user/253620)
   ```

## 练习徽章

![Jerry_Zhou的练习徽章](https://api.jerryz.com.cn/shield?id=253620)

练习徽章可以自动获取用户的做题数据，类似于练习卡片，只是仅用一行简单显示，开启“完全隐私保护”后则无法正常获取数据。练习徽章无法使用自定义选项。

具体使用方法如下：

1. 仅使用图片：直接复制以下内容到任意 markdown 编辑器中，并将`?id=`后面的数字更改为自己的 id 即可（id是洛谷的用户编号）。

   ```markdown
   ![Jerry_Zhou的练习徽章](https://api.jerryz.com.cn/shield?id=253620)
   ```

2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人练习页面。

   ```markdown
   [![Jerry_Zhou的练习徽章](https://api.jerryz.com.cn/shield?id=253620)](https://www.luogu.com.cn/user/253620#practice)
   ```

## 练习情况

![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620)

练习情况可以自动获取用户的数据，但是前提是没有开启“完全隐私保护”。

具体使用方法如下：

1. 仅使用图片：直接复制以下内容到任意 markdown 编辑器中，并将`?id=`后面的数字更改为自己的 id 即可（id是洛谷的用户编号）。

   ```markdown
   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620)
   ```

2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人练习页面。

   ```markdown
   [![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620)](https://www.luogu.com.cn/user/253620#practice)
   ```

## 咕值信息

![Jerry_Zhou的咕值信息](https://api.jerryz.com.cn/guzhi?id=253620&scores=100,14,0,4,20)

咕值信息一般无法自动获取数据，如果需要必须要提供cookie，但是这种方法十分不安全，并且不方便。所以获取咕值卡片可能需要手动输入咕值信息，具体使用方法如下：

复制以下内容到任意 markdown 编辑器中，并将 `?id=`后面的数字更改为自己的 id，将`scores=`后面更换为自己的咕值信息，一共 5 个数字，用逗号分隔。

1. 仅使用图片：复制以下内容到任意 markdown 编辑器中，并将 `?id=`后面的数字更改为自己的 id，将`scores=`后面更换为自己的咕值信息，一共 5 个数字（分别代表基础信用、练习情况、社区贡献、比赛情况、获得成就），用英文半角逗号分隔。

   ```markdown
   ![Jerry_Zhou的咕值信息](http://api.jerryz.com.cn/guzhi?id=253620&scores=100,70,25,45,0)
   ```
   
2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人主页。
   ```markdown
   [![Jerry_Zhou的咕值信息](http://api.jerryz.com.cn/guzhi?id=253620&scores=100,70,25,45,0)](https://www.luogu.com.cn/user/253620)
   ```
   

注意，若程序检测到咕值排名在1000名以内，则程序会自动从“咕值排名”中获取咕值。若获取成功，程序将无视用户输入。不过此功能偶尔会出BUG，所以最好还是手动设置一下咕值吧。


## 自定义选项

使用卡片时，支持设定自定义效果选项，可以组合使用。

1. **隐藏标题**，只需在链接最后带上`&hide_title=true`即可，例如：

   ```markdown
   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&hide_title=true)
   ```

   效果：

   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&hide_title=1)

2. **黑暗模式**，只需在链接最后带上`&dark_mode=true`即可，例如：

   ```markdown
   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&dark_mode=true)
   ```

   效果：

   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&dark_mode=true)
3. **自定义宽度**，默认500，限制宽度在500到1920之间，只需在链接最后带上`&card_width=需要的宽度`即可，例如：

   ```markdown
   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&card_width=750)
   ```

   效果：

   ![Jerry_Zhou的练习情况](https://api.jerryz.com.cn/practice?id=253620&card_width=750)
   
4. **禁用缓存**，默认情况下，程序会有12小时的缓存。但是只需在链接最后带上`&disable_cache=true`即可禁用缓存，每次访问都将刷新。

# 自行部署

如果想要自行试验或者二次开发可以自行部署到自己的 vercel 服务器，登录 [vercel](https://vercel.com/) 后，点击下方按钮即可部署。

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/YangguangZhou/Luogu-User-Card)

# 如何参与贡献

## 提供bug反馈或建议

使用 [issue](https://github.com/YangguangZhou/Luogu-User-Card/issues) 反馈bug时，尽可能详细描述 bug 及其复现步骤

## 贡献代码的步骤

1. fork项目到自己的repo
2. 把fork过去的项目也就是你的项目clone到你的本地
3. 修改代码
4. commit后push到自己的库
5. 在Github首页可以看到一个 pull request 按钮，点击它，填写一些说明信息，然后提交即可。
6. 等待作者合并

# 其他

如果对你有所帮助的话，希望能在右上角点一个 star (★ ω ★)

# LICENSE

[![GNU Lesser General Public License v2.1](https://badgen.net/github/license/cyrxdzj/luogu-card)](https://github.com/YangguangZhou/Luogu-User-Card/blob/master/LICENSE)

版权所有 © 2020 - 2022 YangguangZhou
