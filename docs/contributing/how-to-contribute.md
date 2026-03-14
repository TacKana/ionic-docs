---
sidebar_label: 如何贡献
---

# 为 Ionic 贡献力量

感谢您对 Ionic Framework 的贡献感兴趣！

## 贡献礼仪

请参阅 [贡献者行为准则](coc.md) 了解行为准则相关信息。

## 创建问题

- 如果您对框架使用有疑问，请在 [Ionic 论坛](http://forum.ionicframework.com/) 上提问。

- **必须**清晰描述重现您遇到的问题所需的步骤。虽然我们非常乐意尽可能帮助用户，但如果没有明确的复现步骤来诊断问题，这将极其耗时且难以持续。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的问题列表**仅**用于 Bug 报告和功能请求。不符合要求的议题将立即关闭。

- 没有明确复现步骤的问题将不会被处理。如果一个问题被标记为"需要：回复"，并且在超过 14 天内未收到问题作者的进一步回复，它将被关闭。

- 如果您认为自己发现了 Bug，或有一个新功能想法，请先确认它是否已被 [报告过](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以搜索现有议题，看看是否有类似的报告。请包含已关闭的议题，因为它可能已附带解决方案关闭。

- 接下来，[创建一个新议题](https://github.com/ionic-team/ionic/issues/new/choose)，详细说明问题。请在提交议题前填写好弹出的议题表单。

## 创建良好的代码复现

### 什么是代码复现？

代码复现是为演示特定问题而构建的一个小型应用程序。代码复现应包含重现问题所需的最少代码，并应专注于单个问题。

### 为什么应该创建复现？

对您遇到的问题进行代码复现有助于我们更好地隔离问题的原因。这是解决任何 Bug 的重要第一步！

如果没有可靠的代码复现，我们很可能无法解决问题，导致议题被关闭。换句话说，为问题创建代码复现有助于我们帮助您。

### 如何创建复现

- 使用我们的一个启动模板创建一个新的 Ionic 应用程序。`blank` 启动应用程序是很好的选择。您可以使用以下 Ionic CLI 命令创建一个：`ionic start myApp blank`
- 添加重现您遇到的问题所需的最少代码。**不要**包含任何不需要用于重现问题的内容。这包括您已安装的任何第三方插件。
- 将应用程序发布到 GitHub，并在 [创建议题](#创建问题) 时包含其链接。
- 务必包含重现问题的步骤。这些步骤应清晰且易于遵循。

### 创建复现的好处

- **使用 Ionic 最新版本：** 通过创建新的 Ionic 应用程序，您可以确保测试的是框架的最新版本。有时您遇到的问题已在框架的较新版本中解决！
- **最小化影响面：** 通过移除重现问题不需要的代码，可以更容易地识别问题的原因。
- **无需公开机密代码：** 为问题创建最小化复现，可避免您不得不发布项目中使用的任何专有代码。
- **获得修复问题的帮助：** 如果我们能够可靠地复现问题，很可能就能解决它。

## 创建拉取请求

- 感谢您花时间贡献！在提交拉取请求之前，我们请您先 [创建一个议题](#创建问题)，解释 Bug 或功能请求，并告知我们您计划为其创建拉取请求。如果议题已存在，请在该议题上评论，告知我们您想为其提交拉取请求。这有助于我们跟踪拉取请求，并确保没有重复的工作。

- 在寻找可以修复的问题吗？请务必查看我们带有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的议题！

### 环境设置

1. [下载](https://nodejs.org/) Node.js LTS 版本的安装程序。这也是 [安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆您的 Fork。
4. 从 master 分支为您要做的更改创建一个新分支。
5. 导航到您希望修改的包目录（core、angular 等）。
6. 运行 `npm install` 为此包安装依赖项。
7. 按照下述特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查阅 [Stencil 文档](https://stenciljs.com/docs/introduction/) 和其他组件，以了解这些组件的实现方式。
3. 对组件进行更改。如果更改过于复杂或不寻常，请添加注释以便我们理解更改内容。
4. 在本地 [预览您的更改](#预览更改)。
5. 如果需要，[修改文档](#修改文档)。
6. 对目录 [运行代码检查](#代码检查) 并确保没有错误。
7. [构建项目](#构建更改)。
8. 构建完成后，提交更改。请为每次提交遵循 [提交信息格式](#提交信息格式)。
9. 为您的更改 [提交拉取请求](#提交拉取请求)。

#### 预览更改

1. 在 `core` 目录中运行 `npm start`。
2. 浏览器应在 `http://localhost:3333/` 打开。
3. 从这里，导航到某个组件的测试页面以预览您的更改。
4. 如果不存在显示您更改的测试，请 [添加新测试或更新现有测试](#修改测试)。
5. 要在 RTL 模式下测试，进入所需组件的测试页面后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### 代码检查

1. 运行 `npm run lint` 以检查 TypeScript 和 Sass。
2. 如果有检查错误，运行 `npm run lint.fix` 自动修复任何错误。重复步骤 1 以确保错误已修复，如果未修复则手动修复。
3. 要仅检查并修复 TypeScript 错误，请分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅检查并修复 Sass 错误，请分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 在组件的目录中找到 `readme.md` 文件。
2. 修改此文件中标记为 `<!-- Auto Generated Below -->` 的行**之上**的文档。
3. 要更新该行以下的任何自动生成文档，请在以下位置进行相关更改：

- `Usage`：在组件的 `usage/` 目录中更新组件的使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS Custom Properties`：更新组件的主 Sass 文件（`*.scss`）

#### 修改测试

1. 在组件的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，请通过添加示例来修改测试，以复现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是从组件的 `test/` 目录复制 `basic/` 目录，重命名它，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参阅 [截图测试](#截图测试)）。
4. `preview/` 目录在文档中用作演示。仅在测试中存在 Bug 或 API 有更改但测试中未更新时才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中会有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。请参阅 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing) 和 `core/` 中的现有测试以获取示例。
3. **重要：** 每个 `test()` 应只包含一个截图（`page.compareScreenshot()`）调用**或**应在每个测试结束时检查期望值。如果不匹配，将导致测试失败，从而阻止测试的其余部分运行，即，如果第一个截图失败，除非它们位于单独的测试中，否则剩余的截图调用将不会被调用，或者所有期望值都在最后调用。
4. 要在本地运行截图测试，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，请传递测试路径或要搜索的字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录内运行 `npm run build`。这将在必要时将您的更改添加到任何自动生成的文件中。
2. 检查更改，如果一切正确，请 [提交](#提交信息格式) 更改。
3. 确保构建已完成再提交。如果您修改了文档、属性、方法或任何需要更新生成文件的内容，这需要一并提交。
4. 推送更改后，发布分支并 [创建拉取请求](#创建拉取请求)。

### 提交拉取请求

1. [创建一个新的拉取请求](https://github.com/ionic-team/ionic/compare)，将 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来查找您的更改。
2. 有关更多信息，请参阅 GitHub 帮助文章 [从 Fork 创建拉取请求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽可能填写提供的拉取请求模板，并包含任何相关的议题。

## 提交信息指南

我们对 Git 提交信息的格式有非常精确的规定。这可以使消息在查看项目历史时易于阅读和遵循。我们还使用 Git 提交信息来生成我们的 [更新日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的 [提交信息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) 非常相似。

### 提交信息格式

我们遵循 [约定式提交规范](https://www.conventionalcommits.org/)。提交信息由 **标题**、**正文** 和 **页脚** 组成。标题包含 **类型**、**作用域** 和 **主题**：

```
<类型>(<作用域>): <主题>
<空行>
<正文>
<空行>
<页脚>
```

**标题** 是必需的，而标题的 **作用域** 是可选的。

### 回退

如果提交回退先前的提交，应以 `revert: ` 开头，后跟被回退提交的标题。正文中应注明：`This reverts commit <哈希值>.`，其中哈希值是被回退提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在更新日志中。但是，如果存在任何 [重大变更](#页脚)，该提交将始终出现在更新日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：Bug 修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**：既不修复 Bug 也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：对构建过程或辅助工具和库的更改，例如文档生成

### 作用域

作用域可以是任何指定提交更改位置的内容。通常它指的是一个组件，但也可以指一个实用程序。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果您为同一组件进行多次提交，请保持此组件名称的一致性。例如，如果您对导航进行了更改，第一次提交是 `fix(nav)`，您应继续为任何与导航相关的更多提交使用 `nav`。作为一般规则，如果您正在修改一个组件，请使用文件夹的名称。

### 主题

主题包含对更改的简要描述：

- 使用祈使语气、现在时："change" 而不是 "changed" 或 "changes"
- 不要大写首字母
- 结尾不要加句号 `.`
- 提交信息的整个长度不得超过 50 个字符
- 描述提交做了什么，而不是它涉及或修复了什么问题
- **简洁但具有描述性** - 我们应该通过阅读主题就能很好地理解提交做了什么

### 正文

与 **主题** 一样，使用祈使语气、现在时："change" 而不是 "changed" 或 "changes"。
正文应包含更改的动机，并与之前的行为进行对比。

### 页脚

页脚应包含有关 **重大变更** 的任何信息，也是引用此提交所 **关闭** 的 GitHub 议题的地方。

**重大变更** 应以单词 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行。然后提交信息的其余部分用于此说明。

### 示例

不会出现在生成的更新日志中：

```
docs(changelog): update steps to update
```

出现在"功能"标题下，toast 子标题下：

```
feat(toast): add 'buttons' property
```

出现在"Bug 修复"标题下，skeleton-text 子标题下，并带有指向议题 #28 的链接：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在"性能改进"标题下，以及"重大变更"下，附带重大变更说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在"重大变更"下，附带重大变更说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

如果以下提交和提交 `667ecc1` 在同一版本下，则不会出现在更新日志中。否则，回退提交将出现在"回退"标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过向 ionic-team/ionic GitHub 仓库贡献代码，您同意根据 MIT 许可证许可您的贡献。