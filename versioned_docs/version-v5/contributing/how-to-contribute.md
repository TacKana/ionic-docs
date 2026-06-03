---
sidebar_label: 如何贡献
---

# 贡献给 Ionic

感谢你对贡献 Ionic Framework 感兴趣！

## 贡献规范

请参阅[贡献者行为准则](coc.md)了解行为规则信息。

## 创建 Issue

- 如果你对使用框架有疑问，请在 [Ionic 论坛](http://forum.ionicframework.com/)上提问。

- 你需要清楚描述重现你遇到的问题所需的步骤。虽然我们希望能尽可能帮助用户，但在没有清晰的重现步骤的情况下诊断问题极为耗时且不可持续。

- [Ionic](https://github.com/ionic-team/ionic) 仓库的 issue 列表仅用于 bug 报告和功能请求。不符合要求的 issue 将被立即关闭。

- 没有清晰重现步骤的 issue 将不会被处理。如果某个 issue 被标记为 "needs: reply"，并且 issue 作者在 14 天以上没有进一步回复，它将被关闭。

- 如果你认为发现了一个 bug，或有新的功能想法，请先确保它尚未被[报告](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)。你可以搜索现有的 issue 查看是否有类似的报告。包括已关闭的 issue，因为它可能已有解决方案。

- 接下来，[创建一个新的 issue](https://github.com/ionic-team/ionic/issues/new/choose)，详细解释问题。请填写弹出的 issue 表单后再提交 issue。

## 创建良好的代码重现

### 什么是代码重现？

代码重现是一个用于演示特定问题的小型应用。代码重现应包含重现问题所需的最少量代码，并应聚焦于单个问题。

### 为什么应该创建重现？

为你遇到的问题创建代码重现有助于我们更好地隔离问题的原因。这是修复任何 bug 的重要第一步！

如果没有可靠的代码重现，我们不太可能解决问题，导致其被关闭。换句话说，创建问题的代码重现有助于我们帮助你。

### 如何创建重现

- 使用我们的 starter 模板之一创建一个新的 Ionic 应用。`blank` starter 应用是一个很好的选择。你可以使用以下 Ionic CLI 命令创建：`ionic start myApp blank`
- 添加重现你遇到的问题所需的最少量代码。不要包含任何非重现问题所必需的内容。这包括你已安装的任何第三方插件。
- 在 GitHub 上发布该应用，并在[创建 issue](#创建-issue) 时包含链接。
- 确保包含重现问题的步骤。这些步骤应清晰且易于遵循。

### 创建重现的好处

- **使用最新版本的 Ionic：**通过创建新的 Ionic 应用，你可以确保针对最新版本的框架进行测试。有时你遇到的问题可能已经在较新版本的框架中解决了！
- **最小化的影响面：**通过移除不需要的代码来重现问题，可以更容易地识别问题的原因。
- **无需机密代码：**创建问题的最小化重现可以防止你发布项目中使用的任何专有代码。
- **获得修复问题的帮助：**如果我们能够可靠地重现问题，很有可能能够解决它。

## 创建拉取请求

- 我们感谢你花时间贡献！在提交拉取请求之前，我们要求你先[创建一个 issue](#创建-issue)，解释 bug 或功能请求，并让我们知道你计划为其创建拉取请求。如果 issue 已存在，请在该 issue 上评论，让我们知道你想提交拉取请求。这有助于我们跟踪拉取请求，并确保没有重复的工作。

- 在寻找要修复的 issue？请务必查看我们标记有 [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 标签的 issue！

### 设置

1. [下载安装程序](https://nodejs.org/)用于 Node.js 的 LTS 版本。这也是[安装 npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_) 的最佳方式。
2. Fork [Ionic](https://github.com/ionic-team/ionic) 仓库。
3. 克隆你的 fork。
4. 从 master 创建一个新分支用于你的更改。
5. 导航到你想要修改的包目录（core、angular 等）。
6. 运行 `npm install` 安装此包的依赖项。
7. 按照下方特定包的步骤操作。

### Core

#### 修改组件

1. 在 `/core/src/components/` 中找到要修改的组件。
2. 查看 [Stencil 文档](https://stenciljs.com/docs/introduction/)和其他组件，了解这些组件的实现方式。
3. 对组件进行修改。如果更改过于复杂或不常见，请添加注释以便我们理解更改。
4. 在本地[预览你的更改](#预览更改)。
5. 如果需要，[修改文档](#修改文档)。
6. 在该目录上[运行 lint](#lint-检查更改) 并确保没有错误。
7. [构建项目](#构建更改)。
8. 构建完成后，提交更改。请为每个提交遵循[提交消息格式](#提交消息格式)。
9. [提交拉取请求](#提交拉取请求)提交你的更改。

#### 预览更改

1. 在 `core` 目录中运行 `npm start`。
2. 浏览器应在 `http://localhost:3333/` 打开。
3. 从这里，导航到某个组件的测试以预览你的更改。
4. 如果没有显示你更改的测试，[添加新测试或更新现有测试](#修改测试)。
5. 要在 RTL 模式下测试，进入所需组件的测试后，在 URL 末尾添加 `?rtl=true`；例如：`http://localhost:3333/src/components/alert/test/basic?rtl=true`。

#### Lint 检查更改

1. 运行 `npm run lint` 来 lint TypeScript 和 Sass。
2. 如果有 lint 错误，运行 `npm run lint.fix` 自动修复任何错误。重复步骤 1 确保错误已修复，如果没有则手动修复。
3. 要仅 lint 和修复 TypeScript 错误，分别运行 `npm run lint.ts` 和 `npm run lint.ts.fix`。
4. 要仅 lint 和修复 Sass 错误，分别运行 `npm run lint.sass` 和 `npm run lint.sass.fix`。

#### 修改文档

1. 在组件的目录中找到 `readme.md` 文件。
2. 修改此文件中**位于** `<!-- Auto Generated Below -->` 行**之上**的文档。
3. 要更新该行以下的任何自动生成的文档，在以下位置进行相关更改：

- `Usage`：更新组件 `usage/` 目录中的组件使用示例
- `Properties`、`Events` 或 `Methods`：更新组件的 TypeScript 文件（`*.tsx`）
- `CSS Custom Properties`：更新组件的主要 Sass 文件（`*.scss`）

#### 修改测试

1. 在组件目录的 `test/` 文件夹中找到要修改的测试。
2. 如果测试存在，通过添加示例来修改测试，以重现修复的问题或添加的功能。
3. 如果需要新测试，最简单的方法是从组件 `test/` 目录中复制 `basic/` 目录，重命名它，并编辑 `index.html` 和 `e2e.ts` 文件中的内容（有关此文件的更多信息，请参见[截图测试](#截图测试)）。
4. `preview/` 目录在文档中用作演示。仅当测试中有 bug 或 API 有未在测试中更新的更改时，才更新此测试。

##### 截图测试

1. 如果测试存在于截图中，测试目录中将有一个名为 `e2e.ts` 的文件。
2. 可以通过包含此文件并添加一个或多个包含 `page.compareScreenshot()` 调用的 `test()` 调用来添加截图测试。有关示例，请参见 [Stencil 端到端测试](https://stenciljs.com/docs/end-to-end-testing)和 `core/` 中的现有测试。
3. **重要提示：** 每个 `test()` 应该只有一个截图（`page.compareScreenshot()`）调用，**或者**应在每个测试结束时检查预期。如果有不匹配，它将使测试失败，从而阻止其余测试运行，即如果第一个截图失败，剩余的截图调用将不会被调用，_除非_它们位于单独的测试中或所有的预期都在结束时被调用。
4. 要在本地运行截图，请使用以下命令：`npm run test.screenshot`。
   - 要为特定测试运行截图，请传递测试的路径或要搜索的字符串。
   - 例如，运行所有 `alert` 测试：`npm run test.screenshot alert`。
   - 或者，运行基本的 `alert` 测试：`npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### 构建更改

1. 完成所有更改并更新文档后，在 `core` 目录内运行 `npm run build`。这将根据需要将你的更改添加到任何自动生成的文件中。
2. 检查更改，如果一切看起来正确，[提交](#提交消息格式)更改。
3. 确保在提交之前构建已完成。如果你对文档、属性、方法或其他需要更新生成文件的内容进行了更改，则需要提交这些更改。
4. 推送更改后，发布分支并[创建拉取请求](#创建拉取请求)。

### 提交拉取请求

1. [创建新的拉取请求](https://github.com/ionic-team/ionic/compare)，以 `master` 分支作为 `base`。你可能需要点击 `compare across forks` 来找到你的更改。
2. 有关更多信息，请参阅 GitHub 帮助文章[从 fork 创建拉取请求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)。
3. 请尽最大努力填写提供的拉取请求模板，并包含相关的 issue。

## 提交消息指南

我们对 git 提交消息的格式有非常精确的规则。这会产生可读性强的消息，便于在查看项目历史时理解。我们还使用 git 提交消息来生成我们的[变更日志](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md)。我们的格式与 Angular 的[提交消息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)非常相似。

### 提交消息格式

我们遵循[常规提交规范](https://www.conventionalcommits.org/)。提交消息由**标题**、**正文**和**页脚**组成。标题包含**类型**、**作用域**和**主题**：

```
<类型>(<作用域>): <主题>
<空行>
<正文>
<空行>
<页脚>
```

**标题**是必需的，标题中的**作用域**是可选的。

### 回退

如果提交回退了前一个提交，应以 `revert: ` 开头，后跟被回退提交的标题。在正文中应说明：`This reverts commit <hash>.`，其中 hash 是被回退提交的 SHA。

### 类型

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在变更日志中。但是，如果有任何[破坏性变更](#页脚)，该提交将始终出现在变更日志中。

必须是以下之一：

- **feat**：新功能
- **fix**：bug 修复
- **docs**：仅文档更改
- **style**：不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**：既不是修复 bug 也不是添加功能的代码更改
- **perf**：提高性能的代码更改
- **test**：添加缺失的测试
- **chore**：对构建过程或辅助工具和库（如文档生成）的更改

### 作用域

作用域可以是任何指定提交更改位置的内容。通常它指的是一个组件，但也可以指一个实用工具。例如 `action-sheet`、`button`、`css`、`menu`、`nav` 等。如果你为同一个组件进行了多次提交，请保持此组件的命名一致。例如，如果你对导航进行了更改，第一个提交是 `fix(nav)`，那么你应该继续使用 `nav` 作为任何更多导航相关提交的作用域。作为一般规则，如果你正在修改一个组件，请使用该文件夹的名称。

### 主题

主题包含对更改的简洁描述：

- 使用祈使句、现在时："change" 而不是 "changed" 或 "changes"
- 首字母不要大写
- 结尾不要加句号 `.`
- 整个提交消息的长度不得超过 50 个字符
- 描述提交的作用，而不是它涉及或修复的问题
- **简洁但有描述性** - 通过阅读主题，我们应该能很好地理解提交的作用

### 正文

与**主题**一样，使用祈使句、现在时："change" 而不是 "changed" 或 "changes"。
正文应包括更改的动机，并与以前的行为进行对比。

### 页脚

页脚应包含关于**破坏性变更**的任何信息，也是引用此提交所**关闭**的 GitHub issue 的地方。

**破坏性变更**应以 `BREAKING CHANGE:` 开头，后跟一个空格或两个换行。然后使用提交消息的其余部分。

### 示例

不出现在生成的变更日志中：

```
docs(changelog): update steps to update
```

出现在"Features"标题下，toast 子标题下：

```
feat(toast): add 'buttons' property
```

出现在"Bug Fixes"标题下，skeleton-text 子标题下，并链接到 issue #28：

```
fix(skeleton-text): use proper color when animated

closes #28
```

出现在"Performance Improvements"标题下，以及"Breaking Changes"下，带有破坏性变更说明：

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

出现在"Breaking Changes"下，带有破坏性变更说明：

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

以下提交和提交 `667ecc1` 如果在同一个版本下则不会出现在变更日志中。如果不是，则回退提交出现在"Reverts"标题下。

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 许可证

通过向 ionic-team/ionic GitHub 仓库贡献你的代码，你同意根据 MIT 许可证许可你的贡献。
