---
sidebar_label: 常见问题
slug: /native/faq
---

# Ionic Native 常见问题

## Cordova 管理技巧

**1) 使用 [Ionic CLI](cli.md) 来添加/更新/删除插件。**

不要直接编辑 `config.xml` 和 `package.json`。建议在 Cordova 命令前加上 `ionic`，以获得更好的体验和额外功能（例如使用 `ionic cordova build ios` 而不是 `cordova build ios`）。

**2) 通过先删除再重新添加的方式来升级插件。**

```shell
$ ionic cordova plugin remove cordova-plugin-camera
$ ionic cordova plugin add cordova-plugin-camera
```

**3) 安装指定版本。**

为确保通过 `npm install` 始终安装相同版本的插件，请指定版本号：

```shell
ionic cordova plugin add cordova-plugin-camera@4.3.2
```

**4) 在现有 Ionic 项目中恢复 Cordova**

在向项目添加新开发人员时非常有用。`ionic cordova prepare` 会根据 `package.json` 和 `config.xml` 恢复平台和插件。要安装的版本取自 `package.json` 或 `config.xml`（如果这些文件中存在）。如果存在冲突，`package.json` 的优先级高于 `config.xml`。

**5) 使用 Ionic CLI 命令排查 Cordova 问题**

- `ionic doctor list`：检测[常见问题](cli/commands/doctor-list.md)并提供修复建议
- `ionic repair`：删除并[重新生成](cli/commands/repair.md)所有依赖项

## 理解版本号

对于任何 Ionic Native 插件，Ionic Native（TypeScript 代码）和 Cordova（原生代码）的版本号通常不会匹配。Ionic Native 版本号可在 `package.json` 中找到：

```json
"@awesome-cordova-plugins/camera": "^5.3.0",
```

Cordova 插件版本号在 `package.json` 和 `config.xml` 中都可以找到：

```json
"cordova-plugin-camera": "4.0.3",
```

```xml
<plugin name="cordova-plugin-camera" spec="4.0.3" />
```

当检查新的原生功能或错误修复时，请在 Cordova 插件的 GitHub 页面上查找新版本（例如，这里是 [Camera 插件](https://github.com/apache/cordova-plugin-camera)）。

要检查新的 Ionic Native 版本（可能包括最近由 Cordova 插件添加的方法等），请参见 [此处](https://github.com/ionic-team/ionic-native/releases)。

## 排查构建失败问题

通过查阅以下资源来研究构建错误：

- 谷歌和 [StackOverflow](https://stackoverflow.com)：许多问题已有在线文档
- 在 [Ionic 社区论坛](https://forum.ionicframework.com) 提问（请查看 Ionic Native 类别）
- 参考 Ionic 客户成功 [知识库](https://ionic.zendesk.com)

### Cordova 插件冲突

当插件共享相同的底层原生依赖项，或多个插件同时尝试访问相同的原生代码时，插件之间可能会发生冲突。例如，常见的库如 Google Play Services 版本（Google Maps 使用 GPS v24.2，但 Firebase 需要 GPS v27.1）。定期更新这些插件有助于避免此类问题。

另一个建议是确保您的应用对特定功能/特性仅使用一个插件（例如：推送通知）。

## 推荐的升级策略

最稳定的 Ionic 应用会定期更新，尤其是在原生层面。保持原生插件更新可确保您的项目拥有最新的安全修复、新功能和改进的性能。

一次更新一个项目插件，最好在单独的分支中进行。这样可以减少可能出现问题的范围——如果您一次性更新项目中的所有内容，有时很难确定问题出在哪里。

### 何时应该更新？

- 当新功能/错误修复发布时：运行 `npm outdated` 查看可用更新列表。
- 当新的主要版本发布时：官方博客，如 [Cordova 博客](https://cordova.apache.org/blog/) 和 [Ionic 博客](https://ionicframework.com/blog/)，会发布公告和新闻。
- 评估更新的性质：是华丽的新功能还是关键的安全修复？
- 时机：它是否符合您团队的项目目标？