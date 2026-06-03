---
title: 为 Ionic 做贡献
sidebar_label: 如何贡献
---

# 贡献给 Ionic

感谢您有兴趣为 Ionic Framework 做出贡献！

## 贡献礼仪

请参阅[贡献者行为准则](coc.md)了解行为规则的信息。

## 创建 Issue

- 如果您对框架的使用有疑问，请在 [Ionic 论坛](http://forum.ionicframework.com/)上提问。

- 必须清晰地描述重现您遇到的问题所需的步骤。虽然我们非常希望能够尽可能多地帮助用户，但在没有清晰的重现步骤的情况下诊断问题是极其耗时的，也是不可持续的。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的 Issue 列表仅用于错误报告和功能请求。不符合要求的 issue 将立即关闭。

- 没有明确重现步骤的 issue 将不会进行分类。如果 issue 被标记为"needs: reply"并且在 14 天内未收到 issue 作者的进一步回复，它将被关闭。

- 如果您认为发现了错误，或者有新功能的想法，请首先确保它尚未被[报告](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。您可以搜索现有的 issue 以查看是否有类似的报告。包括已关闭的 issue，因为它可能已经通过解决方案关闭了。

- 接下来，[创建一个新 issue](https://github.com/ionic-team/ionic/issues/new/choose)，详细解释问题。请在提交 issue 之前填写弹出的 issue 表单。

## 创建良好的代码重现

### 什么是代码重现？

代码重现是一个用于演示特定问题的小型应用。代码重现应包含重现问题所需的最少代码量，并应专注于单个问题。

### 为什么要创建重现？

创建一个您遇到的问题的代码重现有助于我们更好地隔离问题的原因。这是修复任何错误的重要第一步！

没有可靠的代码重现，我们不太可能解决问题，导致其被关闭。换句话说，创建问题的代码重现可以帮助我们帮助您。

### 如何创建重现

- 使用我们的启动模板之一创建一个新的 Ionic 应用。`blank` 启动应用是一个很好的选择。您可以使用以下 Ionic CLI 命令创建一个：`ionic start myApp blank`
- 添加重现您遇到的问题所需的最少代码量。不要包含任何不是重现问题所必需的内容。这包括您已安装的任何第三方插件。
- 在 GitHub 上发布该应用，并在[创建 issue](#creating-an-issue) 时包含其链接。
- 确保包含重现问题的步骤。这些步骤应该清晰且易于遵循。

### 创建重现的好处

- **使用最新版本的 Ionic：** 通过创建新的 Ionic 应用，您可以确保针对框架的最新版本进行测试。有时您遇到的问题可能已经在较新版本的框架中解决了！
- **最小的关注面：** 通过移除重现问题不需要的代码，可以更容易地识别问题的原因。
- **无需秘密代码：** 创建问题的简化重现可防止您发布项目中使用的任何专有代码。
- **获得修复问题的帮助：** 如果我们能够可靠地重现问题，很可能我们能够解决它。

## 创建拉取请求

- 我们感谢您花时间贡献！在提交拉取请求之前，我们要求您先[创建一个 issue](#creating-an-issue)，解释错误或功能请求，并让我们知道您计划为其创建拉取请求。如果 issue 已经存在，请在该 issue 上评论，让我们知道您想要为其提交拉取请求。这有助于我们跟踪拉取请求，并确保没有重复的工作。

- 正在寻找要修复的 issue？请务必查看我们带有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的 issue！

### 设置

1. [下载安装程序](https://nodejs.org/)以获取 Node.js 的 LTS 版本。这也是[安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆您的 fork。
4. 从 master 为您的更改创建一个新分支。
5. 进入要修改的包的目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下面特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/)和其他组件以了解这些组件的实现方式。
3. 对组件进行更改。如果更改过于复杂或不寻常，请添加注释以便我们理解更改内容。
4. 在本地[预览您的更改](#preview-changes)。
5. 如果需要，[修改文档](#modifying-documentation)。
6. 在目录上[运行 lint](#lint-changes) 并确保没有错误。
7. [构建项目](#building-changes)。
8. 构建完成后，提交更改。每次提交请遵循[提交消息格式](#commit-message-format)。
9. [提交拉取请求](#submit-pull-request)。

#### 预览更改

1. 在 `core` 目录内运行 `npm start`。
2. 浏览器应打开 `http://localhost:3333/`。
3. 从这里，导航到其中一个组件的测试以预览您的更改。
4. 如果不存在显示您更改的测试，请[添加新测试或更新现有测试](#modifying-tests)。
5. 要在 RTL 模式下测试，进入所需组件的测试后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### Lint 更改

1. 运行 `npm run lint` 对 TypeScript 和 Sass 进行 lint 检查。
2. 如果有 lint 错误，运行 `npm run lint.fix` 自动修复任何错误。重复步骤 1 以确保错误已修复，如果没有则手动修复。
3. 要仅对 TypeScript 错误进行 lint 和修复，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅对 Sass 错误进行 lint 和修复，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 找到组件目录中的 `readme.md` 文件。
2. 修改该文件中 `<!-- Auto Generated Below -->` 行**以上**的文档。
3. 要更新该行以下的任何自动生成的文档，在以下位置进行相关更改：

- `Usage`：更新组件 `usage/` 目录中的组件使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS Custom Properties`：更新组件的 Sass 主文件（`*.scss`）

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加示例来修改测试，以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是从组件 `test/` 目录复制 `basic/` 目录，重命名，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参见[截图测试](#screenshot-tests)）。
4. `preview/` 目录在文档中用作演示。仅当测试中存在错误或 API 有尚未在测试中更新的更改时，才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中将有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。参见 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing)和 `core/` 中现有的测试以获取示例。
3. **重要提示：** 每个 `test()` 应该只有一个截图（`page.compareScreenshot()`）调用**或者**应该在每个测试结束时检查期望值。如果出现不匹配，它将使测试失败，从而阻止其余测试运行，即如果第一个截图失败，其余的截图调用将不会被调用，除非它们位于单独的测试中或所有期望值都在最后被调用。
4. 要在本地运行截图测试，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，请传递测试路径或要搜索的字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录内运行 `npm run build`。这将根据需要将您的更改添加到任何自动生成的文件中。
2. 审查更改，如果一切看起来正确，则[提交](#commit-message-format)更改。
3. 确保在提交前构建已完成。如果您更改了文档、属性、方法或任何需要更新生成文件的内容，这些都需要被提交。
4. 推送更改后，发布分支并[创建拉取请求](#creating-a-pull-request)。

### 提交拉取请求

1. [创建一个新的拉取请求](https://github.com/ionic-team/ionic/compare)，将 `master` 分支作为 `base`。您可能需要点击 `compare across forks` 来找到您的更改。
2. 有关更多信息，请参阅 GitHub 帮助文章[从 fork 创建拉取请求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽您所能填写提供的拉取请求模板，并包含任何相关的 issue。

## 提交消息指南

我们对 git 提交消息的格式有非常精确的规则。这导致了在查看项目历史时易于遵循的可读消息。我们还使用 git 提交消息来生成我们的[更新日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的[提交消息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)非常相似。

### 提交消息格式

我们遵循[常规提交规范](https://www.conventionalcommits.org/)。一个提交消息包含**头部**、**主体**和**页脚**。头部有**类型**、**范围**和**主题**：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**头部**是必需的，头部中的**范围**是可选的。

### 撤销

如果提交撤销了先前的提交，应以 `revert: ` 开头，后跟被撤销提交的头部。在主体中应写：`This reverts commit <hash>.`，其中 hash 是被撤销提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在更新日志中。但如果存在 [BREAKING CHANGE](#footer)，该提交将始终出现在更新日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：错误修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空白、格式、缺少分号等）
- **refactor**：既不修复错误也不添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：对构建过程或辅助工具和库（如文档生成）的更改

### 范围

范围可以是任何指定提交更改位置的内容。通常它指的是一个组件，但也可以指一个实用程序。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果您为同一个组件进行多次提交，请保持此组件的命名一致。例如，如果您对导航进行了更改，且第一次提交是 `fix(nav)`，那么对于任何与导航相关的更多提交，您应该继续使用 `nav`。作为一般规则，如果您正在修改一个组件，请使用该文件夹的名称。

### 主题

主题包含对更改的简洁描述：

- 使用祈使句、现在时态："change" 而不是 "changed" 或 "changes"
- 首字母不要大写
- 末尾不要加句号 `.`
- 提交消息的总长度不得超过 50 个字符
- 描述提交的作用，而不是它涉及或修复的问题
- **简洁但描述性强**——通过阅读主题，我们应该能很好地理解提交的作用

### 主体

与**主题**一样，使用祈使句、现在时态："change" 而不是 "changed" 或 "changes"。主体应包含更改的动机，并与之前的行为进行对比。

### 页脚

页脚应包含关于**破坏性更改**的信息，同时也是引用此提交**关闭**的 GitHub issue 的地方。

**破坏性更改**应以单词 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行符。提交消息的其余部分将用于此。

### 示例

不会出现在生成的更新日志中：

```
docs(changelog): update steps to update
```

出现在"Features"标题下，toast 副标题下：

```
feat(toast): add 'buttons' property
```

出现在"Bug Fixes"标题下，skeleton-text 副标题下，并链接到 issue #28：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在"Performance Improvements"标题下，以及"Breaking Changes"标题下，带有破坏性更改说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在"Breaking Changes"标题下，带有破坏性更改说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

以下提交和提交 `667ecc1` 如果属于同一版本则不会出现在更新日志中。如果不是，则撤销提交出现在"Reverts"标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过向 ionic-team/ionic GitHub 仓库贡献您的代码，您同意根据 MIT 许可证许可您的贡献。
