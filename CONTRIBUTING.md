# 贡献指南

感谢您为 Ionic 文档做出贡献！:tada: 在提交贡献之前，请查看以下指南了解建议和要求。

<sub>
  <b>目录</b>
</sub>

- [开发工作流程](#development-workflow)
  - [预览更改](#previewing-changes)
  - [文档代码检查](#linting-documentation)
  - [拼写检查](#spell-check)
- [在 Windows 上使用 VS Code](#using-vs-code-on-windows)
- [项目结构](#project-structure)
  - [目录结构](#directories)
- [编写内容](#authoring-content)
  - [参考内容](#reference-content)
- [翻译](#translation)
- [报告问题](#reporting-issues)
- [拉取请求指南](#pull-request-guidelines)
- [部署](#deploying)
- [许可证](#license)

---

## 开发工作流程

### 预览更改

要在本地运行文档，请安装依赖项并启动开发服务器：

```sh
npm install
npm start
```

### 文档代码检查

本仓库使用 [Prettier](https://prettier.io/)，一个固执己见的代码格式化工具，以保持文档格式的一致性。运行以下命令自动修复所有格式问题，然后推送更改：

```
npm run lint
```

### 拼写检查

本仓库使用 [cspell](https://cspell.org/)，一个代码拼写检查器，自动标记拼写错误。运行以下命令查看拼写错误：

```
npm run spellcheck
```

> [!NOTE]
> 所有拼写错误都需要手动修复。有多种方法可以忽略被错误标记的单词或部分。下面列出了这些方法。

#### 忽略单词

**要忽略以下内容：**

- **特定单词**，将其添加到以下文件：`cspell-wordlist.txt`
  - 例如，`Ionicons` 被标记为未知单词。由于这是我们软件的名称，它已被添加到此文件中以被忽略。
- **目录**或匹配**正则表达式**的任何内容，更新以下文件：`cspell.json`
  - 例如，我们不想标记任何代码反引号（<code>`</code>）或代码块（<code>```</code>）内的内容，因此添加了正则表达式来忽略这些内容。
- **整行**，在其上方添加以下注释：
  ```markdown
  <!-- cspell:disable-next-line -->
  ```
- **多行**，在要忽略的行上方和下方添加注释：

  ```markdown
  <!-- cspell:disable -->

  <p>这些注释之间的所有内容都将被拼写检查器忽略。请仔细校对您自己的单词。</p>

  <!-- cspell:enable -->
  ```

> [!IMPORTANT]
> 您需要在 `cspell` 注释和任何 HTML 元素之间添加换行符，
> 否则构建将因 `Module build failed` 而失败。

#### 提示

在将单词或部分添加到忽略列表之前，请查看是否有方法使其通过拼写检查。API 中的技术术语可能需要用代码格式包装。例如，单词 `keydown` 被拼写检查器标记为未知单词，但这是 [Web API 事件](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)。我们可以将任何提及 `keydown` 的地方用两个反引号（<code>\`keydown\`</code>）包装，以避免被拼写检查器标记。

禁用下一行或整个文档部分的注释对于使拼写检查器忽略人名很有用。

一般来说，除非是技术术语，在整个文档中使用且不一定适合格式化为代码，否则我们应尽量避免忽略单词。

---

## 在 Windows 上使用 VS Code

Ionic 文档最初是在基于 Mac 的环境中构建的，因此提交更改时适用以 Mac 为重点的代码检查规则。要在 Windows 上贡献，请执行以下操作：

- 配置 VS Code 使用换行符（LF）而不是回车符（CRLF）读取/保存文件。通过导航到以下位置全局设置：设置 -> 文本编辑器 -> 文件 -> Eol。设置为 `\n`。
- 检查 Git 设置 `core.autocrlf` 是否设置为 `false`：运行 `git config -l | grep autocrlf`。使用以下命令将其切换为 false：`git config --global core.autocrlf false`。
- 如果您已经克隆了 `ionic-docs` 仓库，文件可能已缓存为 LF。要撤消此操作，您需要清理仓库的缓存文件。运行以下命令（确保先暂存或提交您的更改）：`git rm --cached -r .` 然后 `git reset --hard`。

## 项目结构

Ionic 文档使用 [Docusaurus](https://docusaurus.io/) 构建。内容以 Markdown 形式编写或生成。

### 目录结构

- `scripts/` - 用于生成 markdown 或 json 文件的构建脚本
- `src/` - 文档的源代码和内容
  - `components/` - 整个站点使用的组件
    - `global/` - 全局使用的组件
    - `page/` - 在单个页面或有限范围内使用的组件
  - `styles/` - 全局样式和变量
    - `components/` - 按目标组件拆分的样式
- `static/`
  - `demos/` - 自包含的演示，可通过 `demoUrl` YAML frontmatter 由页面展示
  - `usage/` - 可通过运行 `npm run playground:new` 创建的 playgrounds [(文档)](_templates/README.md#new-playground-template)
- `versioned_docs/` - 由 docusaurus 版本控制命令创建的文档版本
- `versioned_sidebars/` - 由 docusaurus 版本控制命令创建的文档侧边栏版本

## 编写内容

Ionic 文档的内容以 [Markdown](https://commonmark.org/) 格式编写在 `docs/` 中。每个 Markdown 文件对应一个路由，除非在 frontmatter 中显式更改。

```
/docs/                  =>  src/pages/index.md
/docs/intro/cli         =>  src/pages/intro/cli.md
/docs/theming/advanced  =>  src/pages/theming/advanced.md
/docs/theming           =>  src/pages/theming.md
```

您可以通过[直接在 GitHub 上编辑 Markdown 文件](https://help.github.com/articles/editing-files-in-another-user-s-repository/)对站点进行文本编辑。在您的拉取请求中，请解释内容中缺少什么或不准确的地方。

### 参考内容

`docs/` 中的 Markdown 不仅包含手动编写的 markdown 文件：

- 匹配 `/docs/api/*` 的路径从 [Ionic Framework](https://github.com/ionic-team/ionic) 源代码构建
- 匹配 `/docs/native/*` 的路径从 [Ionic Native](https://github.com/ionic-team/ionic-native) 源代码构建
- 匹配 `/docs/cli/commands/*` 的路径从 [Ionic CLI](https://github.com/ionic-team/ionic-cli) 源代码构建

## 翻译

Ionic 文档已被翻译成日语，并且正在翻译成中文、法语、葡萄牙语和西班牙语。我们选择这些语言是因为我们认为在这些语言区域中，仅提供英语文档会成为障碍的开发者数量最多。

我们使用 Crowdin 作为翻译服务。您可以在 [Ionic Crowdin 页面](https://crowdin.com/project/ionic-docs) 参与翻译工作。

_请将翻译问题提交到 Crowdin 页面，而不是 Ionic Docs GitHub 仓库。_

<!-- cspell:disable-next-line -->

日语版本的文档由一个独立团队构建，由 [rdlabo](https://github.com/rdlabo) 领导，可以在 [ionic-jp 小组的 `ionic-docs` 项目页面](https://github.com/ionic-jp/ionic-docs) 找到并贡献。

## 报告问题

在向 Ionic 文档仓库提交问题之前，请搜索[现有问题](https://github.com/ionic-team/ionic-docs/issues)以避免重复报告。

如果您报告的问题是错误，请确保它是 Ionic 文档本身的问题，而不是文档主题的问题。在报告中，请提供：

- 重现步骤
- 预期行为
- 操作系统和浏览器版本
- 如果可能，一个演示仓库或 CodePen/CodeSandbox

> [!NOTE]
> 一些[参考内容](#reference-content)是从其他 Ionic 仓库拉取的。在这种情况下，请在文档仓库上提交问题，并附上内容所在仓库的链接。

---

## 拉取请求指南

提交拉取请求时，请将更改范围限制在单个功能或错误上。如有疑问，倾向于较小的拉取请求。如果您的拉取请求是新功能，我们建议先开一个 issue，在投入大量时间之前就功能达成一致。

---

## 部署

Ionic 文档的 `main` 分支是自动部署的，并且与 [Ionic 站点](https://github.com/ionic-team/ionic-site) 本身分开部署。Ionic 站点随后使用代理请求 `/docs` 路径下的已部署文档。

---

## 许可证

此仓库的许可和管理与 Ionic 本身是分开的。

通过贡献于此仓库，您同意您的贡献根据 Apache 2.0 许可证进行许可。完整许可证文本请参见 [LICENSE](LICENSE)。