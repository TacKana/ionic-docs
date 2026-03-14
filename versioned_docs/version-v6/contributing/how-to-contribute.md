---
sidebar_label: 如何贡献
---

# 为 Ionic 贡献力量

感谢您对 Ionic Framework 的贡献感兴趣！

## 贡献礼仪

请查阅[贡献者行为准则](coc.md)了解行为规范信息。

## 创建问题

- 如果您对框架使用有疑问，请在 [Ionic 论坛](http://forum.ionicframework.com/) 提问。

- 请务必清晰地描述重现您所遇问题所需的步骤。尽管我们非常乐意尽可能帮助用户，但在没有明确重现步骤的情况下诊断问题极其耗时，且难以持续。

- [Ionic](https://github.com/ionic-team/ionic) 存储库的问题列表仅用于 bug 报告和功能请求。不符合要求的问题将立即关闭。

- 没有明确重现步骤的问题将不会被处理。如果问题被标记为 "needs: reply" 且在 14 天内未收到问题作者的进一步回复，该问题将被关闭。

- 如果您认为自己发现了 bug，或有新功能的想法，请先确认它尚未被[报告](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以搜索现有问题，查看是否有类似报告。请包含已关闭的问题，因为它们可能已附带解决方案关闭。

- 然后，[创建一个新问题](https://github.com/ionic-team/ionic/issues/new/choose) 详细说明问题。请在提交问题前填写预置的问题表单。

## 创建良好的代码复现

### 什么是代码复现？

代码复现是为了演示特定问题而构建的小型应用程序。代码复现应包含重现问题所需的最少代码，并应专注于单一问题。

### 为什么应该创建复现？

创建您所遇问题的代码复现有助于我们更好地隔离问题根源。这是修复任何 bug 的重要第一步！

如果没有可靠的代码复现，我们很可能无法解决问题，最终导致问题被关闭。换句话说，创建问题复现有助于我们帮助您。

### 如何创建复现

- 使用我们的入门模板创建一个新的 Ionic 应用程序。`blank` 入门应用是绝佳选择。您可以使用以下 Ionic CLI 命令创建：`ionic start myApp blank`
- 添加重现您所遇问题所需的最少代码。不要包含任何非重现问题必需的代码，包括已安装的任何第三方插件。
- 将应用程序发布到 GitHub，并在[创建问题](#creating-an-issue)时包含其链接。
- 务必包含重现问题的步骤。这些步骤应清晰且易于遵循。

### 创建复现的好处

- **使用最新版 Ionic：** 通过创建新的 Ionic 应用程序，确保您正在测试框架的最新版本。有时您遇到的问题已在框架的新版本中解决！
- **最小化影响范围：** 通过移除重现问题不需要的代码，更容易识别问题根源。
- **无需秘密代码：** 创建问题的最小复现可避免发布项目中使用的任何专有代码。
- **获得问题修复帮助：** 如果我们可以可靠地重现问题，很可能就能解决它。

## 创建拉取请求

- 感谢您花时间贡献！在提交拉取请求之前，请先[创建问题](#creating-an-issue)，解释 bug 或功能请求，并告知我们您计划为此创建拉取请求。如果问题已存在，请在该问题上评论，告知我们您想为此提交拉取请求。这有助于我们跟踪拉取请求并确保没有重复工作。

- 寻找问题修复？请查看我们带有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的问题！

### 设置

1. [下载 Node.js LTS 版本安装程序](https://nodejs.org/)。这也是[安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 存储库。
3. 克隆您的 fork。
4. 从 master 分支为您的更改创建新分支。
5. 导航到要修改的包目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下面特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/) 和其他组件，了解这些组件的实现。
3. 对组件进行更改。如果更改过于复杂或不常见，请添加注释以便我们理解更改。
4. 本地[预览更改](#preview-changes)。
5. 根据需要[修改文档](#modifying-documentation)。
6. 在目录上[运行 lint](#lint-changes) 并确保没有错误。
7. [构建项目](#building-changes)。
8. 构建完成后，提交更改。请遵循[提交消息格式](#commit-message-format)提交每个提交。
9. 为您的更改[提交拉取请求](#submit-pull-request)。

#### 预览更改

1. 在 `core` 目录内运行 `npm start`。
2. 浏览器应在 `http://localhost:3333/` 打开。
3. 从这里导航到某个组件的测试以预览更改。
4. 如果不存在显示您更改的测试，请[添加新测试或更新现有测试](#modifying-tests)。
5. 要在 RTL 模式下测试，进入所需组件的测试页面后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### Lint 更改

1. 运行 `npm run lint` 对 TypeScript 和 Sass 进行代码检查。
2. 如果存在 lint 错误，运行 `npm run lint.fix` 自动修复错误。重复步骤 1 确保错误已修复，如果未修复请手动修复。
3. 仅对 TypeScript 错误进行检查和修复，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 仅对 Sass 错误进行检查和修复，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 找到组件目录中的 `readme.md` 文件。
2. 修改该文件中标记 `<!-- Auto Generated Below -->` **之上**的文档。
3. 要更新该行以下的自动生成文档，请在以下位置进行相关更改：

- `Usage`：更新组件 `usage/` 目录中的使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS Custom Properties`：更新组件的主 Sass 文件（`*.scss`）

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加示例来修改测试，以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是从组件的 `test/` 目录复制 `basic/` 目录，重命名，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参阅[截图测试](#screenshot-tests)）。
4. `preview/` 目录在文档中用作演示。仅当测试存在 bug 或 API 有未在测试中更新的变更时才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中将有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。请参阅 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing) 和 `core/` 中的现有测试示例。
3. **重要：** 每个 `test()` 应仅有一个截图（`page.compareScreenshot()`）调用 **或** 应在每个测试结束时检查期望值。如果不匹配，将导致测试失败，从而阻止其余测试运行，即如果第一个截图失败，除非它们在单独的测试中或所有期望值都在最后调用，否则剩余的截图调用将不会执行。
4. 要在本地运行截图测试，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，传递测试路径或搜索字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录内运行 `npm run build`。这将在必要时将您的更改添加到任何自动生成的文件中。
2. 查看更改，如果一切正确，[提交](#commit-message-format)更改。
3. 确保构建完成后再提交。如果您更改了文档、属性、方法或任何需要更新生成文件的内容，这需要被提交。
4. 更改推送后，发布分支并[创建拉取请求](#creating-a-pull-request)。

### 提交拉取请求

1. [创建新的拉取请求](https://github.com/ionic-team/ionic/compare)，以 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来查找您的更改。
2. 有关更多信息，请参阅 GitHub 帮助文章[从 fork 创建拉取请求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽可能填写提供的拉取请求模板，并包含任何相关问题。

## 提交消息指南

我们对 git 提交消息的格式有非常精确的规则。这确保了可读的消息，便于查看项目历史时追踪。我们还使用 git 提交消息生成[更新日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的[提交消息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)非常相似。

### 提交消息格式

我们遵循[约定式提交规范](https://www.conventionalcommits.org/)。提交消息由 **header**、**body** 和 **footer** 组成。header 包含 **type**、**scope** 和 **subject**：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**header** 是必需的，header 的 **scope** 是可选的。

### 回退

如果提交回退之前的提交，应以 `revert: ` 开头，后跟被回退提交的 header。在 body 中应说明：`This reverts commit <hash>.`，其中 hash 是被回退提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在更新日志中。但如果存在任何[破坏性变更](#footer)，提交将始终出现在更新日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：bug 修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**：既不修复 bug 也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：构建过程或辅助工具和库的更改，例如文档生成

### 范围

范围可以是任何指定提交更改位置的内容。通常它指组件，但也可以指工具。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果您为同一组件进行多次提交，请保持此组件命名一致。例如，如果您对导航进行更改，第一次提交是 `fix(nav)`，则应为任何更多与导航相关的提交继续使用 `nav`。作为一般规则，如果您修改组件，请使用文件夹名称。

### 主题

主题包含更改的简明描述：

- 使用祈使句、现在时："change" 而不是 "changed" 或 "changes"
- 不要大写首字母
- 不要在结尾添加句号 `.`
- 提交消息总长度不得超过 50 个字符
- 描述提交做什么，而不是它涉及或修复什么问题
- **简洁而具描述性** - 我们应该通过阅读主题就能很好地理解提交的作用

### 正文

与**主题**一样，使用祈使句、现在时："change" 而不是 "changed" 或 "changes"。
正文应包括更改的动机，并与之前的行为进行对比。

### 页脚

页脚应包含关于**破坏性变更**的任何信息，也是引用此提交**关闭**的 GitHub 问题的地方。

**破坏性变更**应以单词 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行。提交消息的其余部分用于此。

### 示例

不出现在生成的更新日志中：

```
docs(changelog): update steps to update
```

出现在 "Features" 标题下，toast 子标题下：

```
feat(toast): add 'buttons' property
```

出现在 "Bug Fixes" 标题下，skeleton-text 子标题下，带有链接到问题 #28：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在 "Performance Improvements" 标题下，以及 "Breaking Changes" 下，带有破坏性变更说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在 "Breaking Changes" 下，带有破坏性变更说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

以下提交和提交 `667ecc1` 如果位于同一版本下，则不出现在更新日志中。否则，回退提交出现在 "Reverts" 标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过将您的代码贡献给 ionic-team/ionic GitHub 存储库，您同意根据 MIT 许可证许可您的贡献。