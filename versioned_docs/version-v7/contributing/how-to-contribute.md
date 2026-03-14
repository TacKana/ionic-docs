---
sidebar_label: 如何贡献代码
---

# 为 Ionic 贡献代码

感谢您对 Ionic Framework 的贡献感兴趣！

## 贡献行为准则

请查看 [贡献者行为准则](coc.md) 了解行为规范。

## 创建问题报告

- 如果您有关于使用框架的问题，请在 [Ionic 论坛](http://forum.ionicframework.com/) 提问。

- **必须**清晰描述重现问题所需的步骤。虽然我们非常愿意帮助用户，但如果没有明确的复现步骤，诊断问题将极其耗时且不可持续。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的问题列表**仅**用于错误报告和功能请求。不符合要求的问题将立即关闭。

- 没有明确重现步骤的问题将不会被处理。如果问题被标记为 "needs: reply" 且超过 14 天未收到作者进一步回复，将被关闭。

- 如果您认为自己发现了错误或有新功能想法，请首先确认它是否已被 [报告过](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以搜索现有问题以查看是否有类似报告。**包含已关闭的问题**，因为可能已有解决方案。

- 接下来，[创建一个新问题](https://github.com/ionic-team/ionic/issues/new/choose) 并详细说明问题。请在提交前完整填写问题表单。

## 创建有效的代码复现

### 什么是代码复现？

代码复现是为演示特定问题而构建的小型应用程序。代码复现应包含重现问题所需的最少量代码，并应专注于单一问题。

### 为什么应该创建复现？

创建您遇到问题的代码复现有助于我们更好地隔离问题原因。这是修复任何错误的重要第一步！

没有可靠的代码复现，我们很可能无法解决问题，导致问题被关闭。换句话说，创建问题复现有助于我们帮助您。

### 如何创建复现

- 使用我们的起始模板创建一个新的 Ionic 应用程序。`blank` 起始应用程序是很好的选择。可以使用以下 Ionic CLI 命令创建：`ionic start myApp blank`
- 添加重现您遇到的问题所需的最少量代码。**不要包含**任何不需要重现问题的内容，包括您安装的任何第三方插件。
- 将应用程序发布到 GitHub，并在 [创建问题](#创建问题报告) 时包含链接。
- 务必包含重现问题的步骤。这些步骤应清晰且易于遵循。

### 创建复现的好处

- **使用最新版本的 Ionic：** 通过创建新的 Ionic 应用程序，您可以确保在使用框架的最新版本进行测试。有时您遇到的问题已经在框架的新版本中得到解决！
- **最小化影响范围：** 通过移除不需要重现问题的代码，更容易识别问题原因。
- **无需公开机密代码：** 创建最小复现可以避免公开项目中使用的任何专有代码。
- **获得问题修复帮助：** 如果我们能可靠地复现问题，很可能就能解决它。

## 创建拉取请求

- 感谢您花时间贡献！在提交拉取请求之前，请先 [创建一个问题](#创建问题报告) 解释错误或功能请求，并告知我们您计划为此创建拉取请求。如果问题已存在，请在该问题上评论告知我们您想提交拉取请求。这有助于我们跟踪拉取请求并确保没有重复工作。

- 正在寻找要修复的问题？请查看带有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的问题！

### 环境设置

1. [下载安装程序](https://nodejs.org/) 获取 Node.js 的 LTS 版本。这也是 [安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆您的 fork。
4. 从 master 分支创建新分支用于您的更改。
5. 导航到要修改的包的目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下面特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/) 和其他组件以了解这些组件的实现。
3. 对组件进行更改。如果更改过于复杂或不寻常，请添加注释以便我们理解更改。
4. 在本地 [预览更改](#预览更改)。
5. 如果需要，[修改文档](#修改文档)。
6. 在目录上 [运行代码检查](#代码检查)，确保没有错误。
7. [构建项目](#构建更改)。
8. 构建完成后，提交更改。请遵循每个提交的 [提交信息格式](#提交信息格式)。
9. [提交拉取请求](#提交拉取请求)。

#### 预览更改

1. 在 `core` 目录中运行 `npm start`。
2. 浏览器应在 `http://localhost:3333/` 打开。
3. 从此处导航到组件的测试之一以预览更改。
4. 如果不存在显示您更改的测试，[添加新测试或更新现有测试](#修改测试)。
5. 要在 RTL 模式下测试，进入所需组件的测试页面后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### 代码检查

1. 运行 `npm run lint` 检查 TypeScript 和 Sass。
2. 如果有检查错误，运行 `npm run lint.fix` 自动修复错误。重复步骤 1 确保错误已修复，如果未修复则手动修复。
3. 要仅检查和修复 TypeScript 错误，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅检查和修复 Sass 错误，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 找到组件目录中的 `readme.md` 文件。
2. 修改文件中标有 `<!-- Auto Generated Below -->` 的行**之上**的文档。
3. 要更新该行以下的任何自动生成文档，请在以下位置进行相关更改：

- `Usage`：在组件的 `usage/` 目录中更新组件的使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件 (`*.tsx`)
- `CSS Custom Properties`：更新组件的主 Sass 文件 (`*.scss`)

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加示例来修改测试以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是复制组件 `test/` 目录中的 `basic/` 目录，重命名它，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参见 [截图测试](#截图测试)）。
4. `preview/` 目录在文档中用作演示。仅当测试中存在错误或 API 有变更但未在测试中更新时才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中会有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。请参阅 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing) 和 `core/` 中的现有测试以获取示例。
3. **重要：** 每个 `test()` 应只有一个截图 (`page.compareScreenshot()`) 调用，**或**应在每个测试结束时检查期望值。如果不匹配将导致测试失败，从而阻止其余测试运行，即如果第一个截图失败，则除非它们在单独的测试中或在所有期望值都在最后调用，否则不会调用剩余的截图调用。
4. 要在本地运行截图测试，使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，传递测试路径或搜索字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录中运行 `npm run build`。这将根据需要将您的更改添加到任何自动生成的文件中。
2. 查看更改，如果一切正确，[提交](#提交信息格式) 更改。
3. 确保构建完成后再提交。如果您修改了文档、属性、方法或任何需要更新生成文件的内容，这需要一并提交。
4. 推送更改后，发布分支并 [创建拉取请求](#创建拉取请求)。

### 提交拉取请求

1. [创建新的拉取请求](https://github.com/ionic-team/ionic/compare)，以 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来查找您的更改。
2. 有关更多信息，请参阅 GitHub 帮助文章 [从分叉创建拉取请求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽可能完整填写提供的拉取请求模板，并包含任何相关的问题。

## 提交信息指南

我们对 git 提交信息的格式化有非常精确的规定。这确保了可读性强的信息，便于在查看项目历史时理解。我们还使用 git 提交信息生成 [更新日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的 [提交信息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) 非常相似。

### 提交信息格式

我们遵循 [约定式提交规范](https://www.conventionalcommits.org/)。提交信息包括 **标题**、**正文** 和 **页脚**。标题有 **类型**、**范围** 和 **主题**：

```
<类型>(<范围>): <主题>
<空行>
<正文>
<空行>
<页脚>
```

**标题** 是必需的，标题的 **范围** 是可选的。

### 回退

如果提交回退之前的提交，应以 `revert: ` 开头，后跟回退提交的标题。正文中应说明：`This reverts commit <hash>.`，其中 hash 是被回退提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在更新日志中。但如果存在任何 [重大变更](#页脚)，提交将始终出现在更新日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：错误修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**：既不修复错误也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：构建过程或辅助工具和库的更改，如文档生成

### 范围

范围可以是任何指定提交更改位置的内容。通常它指的是组件，但也可以指实用工具。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果为同一组件进行多次提交，请保持此组件名称一致。例如，如果您对导航进行了更改并且第一次提交是 `fix(nav)`，则任何与导航相关的更多提交都应继续使用 `nav`。一般规则是，如果您修改组件，请使用文件夹名称。

### 主题

主题包含更改的简洁描述：

- 使用祈使句、现在时态："change" 而不是 "changed" 或 "changes"
- 不要首字母大写
- 不要在末尾放置句点 `.`
- 提交信息的整个长度不得超过 50 个字符
- 描述提交做什么，而不是它涉及或修复什么问题
- **简洁但描述性强** - 通过阅读主题，我们应该很好地理解提交的作用

### 正文

与 **主题** 一样，使用祈使句、现在时态："change" 而不是 "changed" 或 "changes"。
正文应包括更改的动机以及与先前行为的对比。

### 页脚

页脚应包含任何关于 **重大变更** 的信息，也是引用此提交 **关闭** 的 GitHub 问题的地方。

**重大变更** 应以单词 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行。然后提交信息的其余部分用于此。

### 示例

不显示在生成的更新日志中：

```
docs(changelog): 更新更新步骤
```

显示在 "Features" 标题下，toast 子标题：

```
feat(toast): 添加 'buttons' 属性
```

显示在 "Bug Fixes" 标题下，skeleton-text 子标题，带有指向问题 #28 的链接：

```
fix(skeleton-text): 动画时使用正确的颜色

关闭 #28
```

显示在 "Performance Improvements" 标题下，并在 "Breaking Changes" 下带有重大变更说明：

```
perf(css): 移除所有 CSS 实用属性

重大变更：CSS 实用属性已被移除。请使用 CSS 类替代。
```

显示在 "Breaking Changes" 下带有重大变更说明：

```
refactor(animations): 更新至新动画系统

重大变更：

移除旧动画系统以使用新的 Ionic 动画。
```

如果以下提交和提交 `667ecc1` 在同一版本下，它们不会出现在更新日志中。否则，回退提交出现在 "Reverts" 标题下。

```
revert: feat(skeleton-text): 添加动画属性

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过将您的代码贡献给 ionic-team/ionic GitHub 仓库，您同意在 MIT 许可证下许可您的贡献。