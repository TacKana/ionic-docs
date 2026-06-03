---
title: 为 Ionic 做贡献
sidebar_label: 如何贡献
---

# 为 Ionic 做贡献

感谢您有兴趣为 Ionic Framework 做贡献！

## 贡献礼仪

请参阅[贡献者行为准则](coc.md)了解行为规则信息。

## 创建 Issue

- 如果您有关于使用该框架的问题，请在 [Ionic 论坛](http://forum.ionicframework.com/) 上提问。

- 您需要清晰地描述重现您遇到的问题所必需的步骤。虽然我们很乐意尽可能地帮助我们的用户，但在没有清晰的复现步骤的情况下诊断问题是极其耗时的，也是不可持续的。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的 issue 列表仅用于报告错误和功能请求。不符合要求的 issue 将被立即关闭。

- 没有清晰复现步骤的 issue 将不会被处理。如果 issue 被标记为"needs: reply"并且在超过 14 天内没有收到 issue 作者的进一步回复，它将被关闭。

- 如果您认为自己发现了一个错误，或者有一个新的功能想法，请先确认它尚未被[报告](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以通过搜索现有 issue 来查看是否有类似的报告。请包括已关闭的 issue，因为它可能已经通过某个解决方案关闭了。

- 接下来，[创建一个新 issue](https://github.com/ionic-team/ionic/issues/new/choose)，详细解释问题。请在提交 issue 之前填写弹出的 issue 表单。

## 创建良好的代码复现

### 什么是代码复现？

代码复现是一个为展示特定问题而构建的小型应用程序。代码复现应包含重现问题所需的最少代码，并应专注于单个问题。

### 为什么要创建复现？

为您遇到的问题创建代码复现有助于我们更好地隔离问题的原因。这是修复任何错误的重要第一步！

没有可靠的代码复现，我们不太可能解决问题，导致它被关闭。换句话说，为问题创建代码复现可以帮助我们帮助您。

### 如何创建复现

- 使用我们的启动模板之一创建一个新的 Ionic 应用程序。`blank` 启动应用是一个很好的选择。您可以使用以下 Ionic CLI 命令创建一个：`ionic start myApp blank`
- 添加重现您遇到的问题所需的最少代码。不要包含任何非重现问题所需的内容。这包括您已安装的任何第三方插件。
- 将应用程序发布到 GitHub，并在[创建 issue](#创建-issue) 时包含一个链接。
- 请务必包含重现问题的步骤。这些步骤应该清晰且易于遵循。

### 创建复现的好处

- **使用最新版本的 Ionic：** 通过创建新的 Ionic 应用程序，您确保在测试最新版本的框架。有时您遇到的问题可能已经在较新版本的框架中得到解决！
- **最小的涉及范围：** 通过移除重现问题不需要的代码，更容易识别问题的原因。
- **无需私密代码：** 创建问题的最小复现可以避免您发布项目中使用的任何专有代码。
- **获得修复问题的帮助：** 如果我们能够可靠地重现问题，我们很有可能能够解决它。

## 创建 Pull Request

- 我们感谢您花时间做贡献！在提交 pull request 之前，我们要求您先[创建一个 issue](#创建-issue) 来解释错误或功能请求，并让我们知道您计划为其创建 pull request。如果 issue 已经存在，请在该 issue 上评论，让我们知道您想要为其提交 pull request。这有助于我们跟踪 pull request 并确保没有重复的工作。

- 正在寻找要修复的 issue？请务必查看我们带有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的 issue！

### 设置

1. [下载安装程序](https://nodejs.org/) 获取 Node.js 的 LTS 版本。这也是[安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆您的 fork。
4. 从 master 创建一个新分支用于您的更改。
5. 导航到您要修改的包所在的目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下面特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/) 和其他组件以了解这些组件的实现方式。
3. 对组件进行更改。如果更改过于复杂或非同寻常，请添加注释以便我们理解更改内容。
4. 在本地[预览您的更改](#预览更改)。
5. 如有需要，[修改文档](#修改文档)。
6. 在目录上[运行 lint](#lint-检查) 并确保没有错误。
7. [构建项目](#构建更改)。
8. 构建完成后，提交更改。每次提交请遵循[提交消息格式](#提交消息格式)。
9. [提交 Pull Request](#提交-pull-request) 提交您的更改。

#### 预览更改

1. 在 `core` 目录中运行 `npm start`。
2. 浏览器应打开 `http://localhost:3333/`。
3. 在这里，导航到某个组件的测试以预览您的更改。
4. 如果不存在展示您更改的测试，[添加新测试或更新现有测试](#修改测试)。
5. 要在 RTL 模式下测试，当您进入所需组件的测试页面后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### Lint 检查

1. 运行 `npm run lint` 来 lint TypeScript 和 Sass。
2. 如果有 lint 错误，运行 `npm run lint.fix` 来自动修复任何错误。重复步骤 1 以确保错误已修复，如果没有则手动修复。
3. 要仅 lint 并修复 TypeScript 错误，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅 lint 并修复 Sass 错误，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 在组件目录中找到 `readme.md` 文件。
2. 修改此文件中**位于** `<!-- Auto Generated Below -->` 行**上方**的文档。
3. 要更新该行下方的任何自动生成的文档，请在以下位置进行相关更改：

- `Usage`：更新组件 `usage/` 目录中的组件使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS Custom Properties`：更新组件的主 Sass 文件（`*.scss`）

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加一个示例来修改测试，以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是从组件的 `test/` 目录复制 `basic/` 目录，重命名它，然后编辑 `index.html` 和 `e2e.ts` 文件中的内容（更多信息请参阅[截图测试](#截图测试)）。
4. `preview/` 目录在文档中用作演示。仅当测试中存在错误或 API 有尚未在测试中更新的更改时，才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中将有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。示例请参见 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing) 和 `core/` 中的现有测试。
3. **重要：** 每个 `test()` 应该只有一次截图（`page.compareScreenshot()`）**或者**应在每个测试结束时检查期望值。如果不匹配，测试将失败，这将阻止其余测试运行，即如果第一个截图失败，则剩余的截图调用将不会被调用，_除非_它们在单独的测试中或所有期望值在结束时调用。
4. 要在本地运行截图测试，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，请传递测试路径或要搜索的字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录中运行 `npm run build`。这将把您的更改添加到任何自动生成的文件中（如有必要）。
2. 检查更改，如果一切正常，则[提交](#提交消息格式)更改。
3. 确保在提交之前构建已完成。如果您对文档、属性、方法或任何其他需要更新生成文件的内容进行了更改，则需要提交这些更改。
4. 更改推送后，发布分支并[创建 pull request](#创建-pull-request)。

### 提交 Pull Request

1. [创建一个新的 pull request](https://github.com/ionic-team/ionic/compare)，以 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来找到您的更改。
2. 更多信息请参阅 GitHub 帮助文章[从 fork 创建 pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽最大可能填写提供的 Pull Request 模板，并包含任何相关的 issue。

## 提交消息指南

我们对 git 提交消息的格式有非常精确的规则。这有助于生成可读的消息，便于查看项目历史。我们还使用 git 提交消息来生成我们的[变更日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的[提交消息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)非常相似。

### 提交消息格式

我们遵循[常规提交规范](https://www.conventionalcommits.org/)。提交消息由**标题**、**正文**和**页脚**组成。标题包含**类型**、**范围**和**主题**：

```
<类型>(<范围>): <主题>
<空行>
<正文>
<空行>
<页脚>
```

**标题**是必需的，标题的**范围**是可选的。

### 还原

如果提交还原了之前的提交，应以 `revert: ` 开头，后跟被还原提交的标题。在正文中应说：`This reverts commit <hash>.`，其中 hash 是被还原提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在变更日志中。但如果存在任何[破坏性变更](#页脚)，该提交将始终出现在变更日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：错误修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空白、格式化、缺少分号等）
- **refactor**：既不修复错误也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：对构建过程或辅助工具和库（如文档生成）的更改

### 范围

范围可以是任何指定提交更改位置的内容。通常它指的是组件，但也可以指实用工具。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果您对同一个组件进行多次提交，请保持此组件的命名一致。例如，如果您对导航进行了更改，第一次提交是 `fix(nav)`，您应该继续为任何与导航相关的更多提交使用 `nav`。作为一般规则，如果您正在修改组件，请使用文件夹的名称。

### 主题

主题包含更改的简洁描述：

- 使用祈使句、现在时态："change"而不是"changed"或"changes"
- 首字母不要大写
- 结尾不要加句号 `.`
- 提交消息的总长度不得超过 50 个字符
- 描述提交做了什么，而不是与什么问题相关或修复了什么
- **简明但描述性**——通过阅读主题，我们应该对提交的内容有很好的理解

### 正文

与**主题**一样，使用祈使句、现在时态："change"而不是"changed"或"changes"。正文应包括更改的动机，并与以前的行为进行对比。

### 页脚

页脚应包含任何关于**破坏性变更**的信息，也是引用此提交**关闭**的 GitHub issue 的地方。

**破坏性变更**应以 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行符。然后使用提交消息的其余部分。

### 示例

不会出现在生成的变更日志中：

```
docs(changelog): update steps to update
```

出现在"Features"标题下，toast 子标题：

```
feat(toast): add 'buttons' property
```

出现在"Bug Fixes"标题下，skeleton-text 子标题，带有指向 issue #28 的链接：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在"Performance Improvements"标题下，以及"Breaking Changes"标题下，带有破坏性变更说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在"Breaking Changes"标题下，带有破坏性变更说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

以下提交和提交 `667ecc1` 如果在同一版本下则不会出现在变更日志中。如果不是，还原提交出现在"Reverts"标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过向 ionic-team/ionic GitHub 仓库贡献您的代码，您同意根据 MIT 许可证许可您的贡献。
