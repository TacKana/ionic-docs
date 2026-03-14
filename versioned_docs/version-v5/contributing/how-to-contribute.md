---
sidebar_label: 如何贡献
---

# 为 Ionic 贡献代码

感谢您对 Ionic 框架的贡献感兴趣！

## 贡献规范

请阅读 [贡献者行为准则](coc.md) 了解行为规范。

## 创建 Issue

- 如果您有关于使用框架的问题，请在 [Ionic 论坛](http://forum.ionicframework.com/) 提问。

- **请务必清晰描述**重现您所遇到问题的必要步骤。尽管我们非常乐意尽可能帮助用户，但在没有明确重现步骤的情况下诊断问题极其耗时且难以持续。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的 Issue 列表**仅用于** bug 报告和功能请求。不符合要求的 Issue 将被立即关闭。

- 没有明确重现步骤的 Issue 将不会被处理。如果 Issue 被标记为 "needs: reply" 且在超过 14 天内未收到作者进一步回复，将被关闭。

- 如果您认为发现了 bug，或有新的功能想法，请首先确认它尚未被 [报告](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以搜索现有 Issue，查看是否有类似报告。请同时查看已关闭的 Issue，因为它们可能已经包含解决方案。

- 接下来，[创建一个新 Issue](https://github.com/ionic-team/ionic/issues/new/choose)，详细说明问题。请在提交 Issue 前完整填写弹出的 Issue 表单。

## 创建优质代码复现

### 什么是代码复现？

代码复现是一个为演示特定问题而构建的小型应用程序。它应包含重现问题所需的最少代码，并专注于单一问题。

### 为何需要创建复现？

为您遇到的问题创建代码复现，有助于我们更好地隔离问题原因。这是解决任何 bug 的重要第一步！

如果没有可靠的代码复现，我们很可能无法解决问题，导致 Issue 被关闭。换句话说，创建问题复现有助于我们帮助您。

### 如何创建复现

- 使用我们的一个启动模板创建一个新的 Ionic 应用程序。`blank` 启动项目是个不错的选择。您可以使用以下 Ionic CLI 命令创建：`ionic start myApp blank`
- 添加重现您所遇问题所需的最少代码。不要包含任何非重现问题必需的内容，包括已安装的任何第三方插件。
- 将应用程序发布到 GitHub，并在 [创建 Issue](#创建-issue) 时附上链接。
- 务必包含重现问题的步骤。这些步骤应清晰且易于遵循。

### 创建复现的好处

- **使用最新版本的 Ionic：** 通过创建新的 Ionic 应用程序，您确保是在测试框架的最新版本。有时您遇到的问题可能已在框架新版本中解决！
- **最小化范围：** 通过移除重现问题非必需的代码，更容易识别问题原因。
- **无需公开机密代码：** 创建问题的最小复现，避免您必须发布项目中使用的任何专有代码。
- **获得问题修复帮助：** 如果我们能可靠地复现问题，很有可能就能解决它。

## 创建 Pull Request

- 感谢您花时间贡献！在提交 Pull Request 前，请先 [创建一个 Issue](#创建-issue)，解释 bug 或功能请求，并告知我们您计划为其创建 Pull Request。如果 Issue 已存在，请在该 Issue 上评论告知您想为其提交 Pull Request。这有助于我们跟踪 Pull Request 并确保工作不重复。

- 正在寻找要修复的 Issue？请查看标记为 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 的 Issue！

### 环境设置

1. [下载 Node.js LTS 版本的安装程序](https://nodejs.org/)。这也是 [安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆您的 fork。
4. 从 master 分支创建新分支用于您的更改。
5. 导航到您希望修改的包目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下面特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/) 和其他组件，了解这些组件的实现。
3. 对组件进行更改。如果更改过于复杂或不寻常，请添加注释以便我们理解更改内容。
4. 在本地 [预览更改](#预览更改)。
5. 如果需要，[修改文档](#修改文档)。
6. 对目录 [运行代码检查](#代码检查)，确保没有错误。
7. [构建项目](#构建更改)。
8. 构建完成后，提交更改。请为每次提交遵循 [提交信息格式](#提交信息格式)。
9. [提交 Pull Request](#提交-pull-request)。

#### 预览更改

1. 在 `core` 目录内运行 `npm start`。
2. 浏览器会在 `http://localhost:3333/` 打开。
3. 从这导航到某个组件的测试页面以预览您的更改。
4. 如果不存在显示您更改的测试，请 [添加新测试或更新现有测试](#修改测试)。
5. 要在 RTL 模式下测试，进入所需组件的测试页面后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### 代码检查

1. 运行 `npm run lint` 检查 TypeScript 和 Sass。
2. 如果有检查错误，运行 `npm run lint.fix` 自动修复任何错误。重复步骤 1 确保错误已修复，如未修复请手动修复。
3. 要仅检查和修复 TypeScript 错误，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅检查和修复 Sass 错误，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 找到组件目录中的 `readme.md` 文件。
2. 修改该文件中 `<!-- Auto Generated Below -->` 行**上方**的文档。
3. 要更新该行下方任何自动生成的文档，请在以下位置进行相关更改：

- `用法`：更新组件 `usage/` 目录中的用法示例
- `属性`、`事件` 或 `方法`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS 自定义属性`：更新组件的主 Sass 文件（`*.scss`）

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加示例来修改测试，以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是复制组件 `test/` 目录中的 `basic/` 目录，重命名它，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参见 [截图测试](#截图测试)）。
4. `preview/` 目录在文档中用作演示。仅当测试中存在错误或 API 有未在测试中更新的更改时才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中会有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。请参阅 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing) 和 `core/` 中的现有测试作为示例。
3. **重要：** 每个 `test()` 应只有一个截图（`page.compareScreenshot()`）调用**或**应在每个测试结束时检查 expect。如果出现不匹配，将导致测试失败，从而阻止测试的其余部分运行，即，如果第一个截图失败，除非它们位于单独的测试中或所有 expect 都在最后调用，否则剩余的截图调用将不会被执行。
4. 要在本地运行截图测试，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，请传递测试路径或要搜索的字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 所有更改完成且文档更新后，在 `core` 目录内运行 `npm run build`。这将在必要时将您的更改添加到任何自动生成的文件中。
2. 检查更改，如果一切正确，[提交](#提交信息格式) 更改。
3. 确保构建完成后再提交。如果您修改了文档、属性、方法或任何需要更新生成文件的内容，这需要一并提交。
4. 更改推送后，发布分支并 [创建 Pull Request](#创建-pull-request)。

### 提交 Pull Request

1. [创建新的 Pull Request](https://github.com/ionic-team/ionic/compare)，以 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来查找您的更改。
2. 更多信息请参阅 GitHub 帮助文章 [从 Fork 创建 Pull Request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽可能完整地填写提供的 Pull Request 模板，并包含任何相关的 Issue。

## 提交信息指南

我们对 Git 提交信息的格式有非常精确的规则。这使得提交信息在查看项目历史时易于阅读和遵循。我们还使用 Git 提交信息来生成我们的 [更新日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式非常接近 Angular 的 [提交信息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)。

### 提交信息格式

我们遵循 [约定式提交规范](https://www.conventionalcommits.org/)。提交信息由 **头部**、**正文** 和 **页脚** 组成。头部包含 **类型**、**范围** 和 **主题**：

```
<类型>(<范围>): <主题>
<空行>
<正文>
<空行>
<页脚>
```

**头部** 是必需的，头部的 **范围** 是可选的。

### 回退

如果提交回退了先前的提交，应以 `revert: ` 开头，后跟被回退提交的头部。正文中应说明：`This reverts commit <哈希值>.`，其中哈希值是被回退提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在更新日志中。但是，如果存在任何 [重大变更](#页脚)，该提交将始终出现在更新日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：bug 修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空白、格式化、缺少分号等）
- **refactor**：既不修复 bug 也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：构建过程或辅助工具和库的更改，例如文档生成

### 范围

范围可以是任何指定提交更改位置的内容。通常它指的是组件，但也可以指实用程序。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果您为同一组件进行多次提交，请保持此组件命名的一致性。例如，如果您对导航进行更改且第一次提交是 `fix(nav)`，则对于任何与导航相关的更多提交，应继续使用 `nav`。作为一般规则，如果您修改组件，请使用文件夹名称。

### 主题

主题包含更改的简洁描述：

- 使用祈使句、现在时："change" 而不是 "changed" 或 "changes"
- 不要首字母大写
- 末尾不要加句号 `.`
- 提交信息的整个长度不得超过 50 个字符
- 描述提交做了什么，而不是它关联或修复了什么 Issue
- **简洁而描述性** - 通过阅读主题，我们应该对提交的作用有良好的理解

### 正文

与 **主题** 一样，使用祈使句、现在时："change" 而不是 "changed" 或 "changes"。
正文应包含更改的动机，并与之前的行为进行对比。

### 页脚

页脚应包含关于 **重大变更** 的任何信息，也是引用此提交 **关闭** 的 GitHub Issue 的地方。

**重大变更** 应以单词 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行。然后提交信息的其余部分用于此。

### 示例

不出现在生成的更新日志中：

```
docs(changelog): update steps to update
```

出现在 "Features" 标题下，toast 子标题：

```
feat(toast): add 'buttons' property
```

出现在 "Bug Fixes" 标题下，skeleton-text 子标题，带有指向 Issue #28 的链接：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在 "Performance Improvements" 标题下，以及在 "Breaking Changes" 下带有重大变更说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在 "Breaking Changes" 下带有重大变更说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

如果以下提交和提交 `667ecc1` 在同一个版本下，则不会出现在更新日志中。否则，回退提交将出现在 "Reverts" 标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过将您的代码贡献给 ionic-team/ionic GitHub 仓库，您同意根据 MIT 许可证许可您的贡献。