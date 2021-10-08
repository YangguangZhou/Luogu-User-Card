> 该项目是由[wao3/luogu-stats-card](https://github.com/wao3/luogu-stats-card)复制过来并加以二次开发的的，感谢TA的贡献。

> 注意：为了不滥用洛谷服务器流量，本项目利用 vercel 的边缘缓存功能缓存了 12 小时数据，即同一个用户卡片 **24 小时内最多只会向洛谷服务器请求 2 次数据**，并且只有在用户访问卡片时才会请求数据。不过，可以禁用缓存。
## 简介

![stars](https://badgen.net/github/stars/cyrxdzj/luogu-card?cache=600)
![forks](https://badgen.net/github/forks/cyrxdzj/luogu-card?cache=600)
![visitor](https://visitor-badge.laobi.icu/badge?page_id=luogu-card)
![last commit](https://badgen.net/github/last-commit/cyrxdzj/luogu-card?cache=600)
![top language](https://img.shields.io/github/languages/top/cyrxdzj/luogu-card)

`luogu-card`是一个动态生成洛谷用户数据卡片的工具，可以展示自己的做题情况。可以用于个人主页、博客、github等可以插入图片的地方。

## TODO

- [x] ~~修复获取数据错误和用户设置数据不可见的bug~~
- [x] ~~增加黑暗模式~~
- [x] ~~增加咕值卡片~~

以上内容由原作者完成，以下内容由我完成。

- [x] ~~增加About卡片~~
- [x] ~~增加用户 tag~~
- [x] ~~增加“卡片生成时间”标签~~
- [x] ~~自动从咕值排名中获取咕值~~
- [x] ~~禁用缓存~~
- [x] ~~在练习情况里增加“写挂了”（实际执行情况是“心有余而力不足”）~~

## 如何使用

### 基本信息

![dengzijun的基本信息](https://luogu-card.vercel.app/about?id=387836)

此卡片用于显示一个用户的基本信息，包括用户类型、关注、咕值排名、个性签名。

具体使用方法如下：

1. 仅使用图片：直接复制以下内容到任意 markdown 编辑器中，并将`?id=`后面的数字更改为自己的 id 即可（id是洛谷的用户编号）。

   ```markdown
   ![dengzijun的基本信息](https://luogu-card.vercel.app/about?id=387836)
   ```

2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人主页。

   ```markdown
   [![dengzijun的基本信息](https://luogu-card.vercel.app/about?id=387836)](https://github.com/cyrxdzj/luogu-card)
   ```

### 练习情况

![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836)

练习情况可以自动获取用户的数据，但是前提是没有开启“完全隐私保护”。

具体使用方法如下：

1. 仅使用图片：直接复制以下内容到任意 markdown 编辑器中，并将`?id=`后面的数字更改为自己的 id 即可（id是洛谷的用户编号）。

   ```markdown
   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836)
   ```

2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人主页。

   ```markdown
   [![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836)](https://github.com/cyrxdzj/luogu-card)
   ```

### 咕值信息

![dengzijun的咕值信息](https://luogu-card.vercel.app/guzhi?id=387836)

咕值信息一般无法自动获取数据，如果需要必须要提供cookie，但是这种方法十分不安全，并且不方便。所以获取咕值卡片可能需要手动输入咕值信息，具体使用方法如下：

复制以下内容到任意 markdown 编辑器中，并将 `?id=`后面的数字更改为自己的 id，将`scores=`后面更换为自己的咕值信息，一共 5 个数字，用逗号分隔。

1. 仅使用图片：复制以下内容到任意 markdown 编辑器中，并将 `?id=`后面的数字更改为自己的 id，将`scores=`后面更换为自己的咕值信息，一共 5 个数字（分别代表基础信用、练习情况、社区贡献、比赛情况、获得成就），用英文半角逗号分隔。

   ```markdown
   ![dengzijun的咕值信息](http://luogu-card.vercel.app/guzhi?id=387836&scores=100,70,25,45,0)
   ```
   
2. 使用图片链接：复制以下内容，第二个小括号内的地址是点击该图片跳转的地址，建议设置为洛谷个人主页。
   ```markdown
   [![dengzijun的咕值信息](http://luogu-card.vercel.app/guzhi?id=387836&scores=100,70,25,45,0)](https://github.com/cyrxdzj/luogu-card)
   ```
   

注意，若程序检测到咕值排名在1000名以内，则程序会自动从“咕值排名”中获取咕值。若获取成功，程序将无视用户输入。不过此功能偶尔会出BUG，所以最好还是手动设置一下咕值吧。


### 自定义选项

使用卡片时，支持设定自定义效果选项，可以组合使用。

1. **隐藏标题**，只需在链接最后带上`&hide_title=true`即可，例如：

   ```markdown
   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&hide_title=true)
   ```

   效果：

   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&hide_title=1)

2. **黑暗模式**，只需在链接最后带上`&dark_mode=true`即可，例如：

   ```markdown
   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&dark_mode=true)
   ```

   效果：

   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&dark_mode=true)
3. **自定义宽度**，默认500，限制宽度在500到1920之间，只需在链接最后带上`&card_width=需要的宽度`即可，例如：

   ```markdown
   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&card_width=750)
   ```

   效果：

   ![dengzijun的练习情况](https://luogu-card.vercel.app/practice?id=387836&card_width=750)
   
4. **禁用缓存**，默认情况下，程序会有12小时的缓存。但是只需在链接最后带上`&disable_cache=true`即可禁用缓存，每次访问都将刷新。

## 自行部署

如果想要自行试验或者二次开发可以自行部署到自己的 vercel 服务器，登录 [vercel](https://vercel.com/) 后，点击下方按钮即可部署。

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/cyrxdzj/luogu-card)

## 如何参与贡献

#### 提供bug反馈或建议

使用 [issue](https://github.com/cyrxdzj/luogu-card/issues) 反馈bug时，尽可能详细描述 bug 及其复现步骤

#### 贡献代码的步骤

1. fork项目到自己的repo
2. 把fork过去的项目也就是你的项目clone到你的本地
3. 修改代码
4. commit后push到自己的库
5. 在Github首页可以看到一个 pull request 按钮，点击它，填写一些说明信息，然后提交即可。
6. 等待作者合并

## 其他

如果对你有所帮助的话，希望能在右上角点一个 star (★ ω ★)

## LICENSE

[![GNU Lesser General Public License v2.1](https://badgen.net/github/license/cyrxdzj/luogu-card)](https://github.com/cyrxdzj/luogu-card/blob/master/LICENSE)

## 镜像仓库

~~要不是vercel不支持Gitee只支持Github，我也不会出现在这里了~~

本仓库在码云Gitee上创建了一个[镜像仓库](https://gitee.com/cyrxdzj/luogu-card)，但会有同步延迟。也可以访问位于Github的[源仓库](https://github.com/cyrxdzj/luogu-card)。

[![star](https://gitee.com/cyrxdzj/luogu-card/badge/star.svg?theme=dark)](https://gitee.com/cyrxdzj/luogu-card/stargazers)

[![cyrxdzj/luogu-card](https://gitee.com/cyrxdzj/luogu-card/widgets/widget_card.svg?colors=eae9d7,2e2f29,272822,484a45,eae9d7,747571)](https://gitee.com/cyrxdzj/luogu-card)
