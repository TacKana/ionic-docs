---
title: 常见问题
sidebar_label: 常见问题
slug: /native/faq
---

# Ionic Native 常见问题

## Cordova 管理技巧

**1) 使用 [Ionic CLI](cli.md) 添加/更新/删除插件。**

不要直接编辑 `config.xml` 和 `package.json`。在 Cordova 命令前加上 `ionic` 以获得更好的体验和额外的功能（例如 `ionic cordova build ios` 而不是 `cordova build ios`）。

**2) 通过先移除再重新添加来升级插件。**

```shell
$ ionic cordova plugin remove cordova-plugin-camera
$ ionic cordova plugin add cordova-plugin-camera
```

**3) 安装指定版本。**

为确保通过 `npm install` 始终安装相同版本的插件，请指定版本号：

```shell
ionic cordova plugin add cordova-plugin-camera@4.3.2
```

**4) 在现有的 Ionic 项目中恢复 Cordova**

在向项目添加新开发者时非常有用。`ionic cordova prepare` 从 `package.json` 和 `config.xml` 恢复平台和插件。安装的版本取自 `package.json` 或 `config.xml`（如果这些文件中存在）。如果发生冲突，`package.json` 优先于 `config.xml`。

**5) 使用 Ionic CLI 命令排查 Cordova 问题**

- `ionic doctor list`：检测[常见问题](cli/commands/doctor-list.md)并建议修复步骤
- `ionic repair`：先移除，再[重新生成](cli/commands/repair.md)所有依赖

## 理解版本号

对于任何给定的 Ionic Native 插件，Ionic Native（TypeScript 代码）和 Cordova（原生代码）的版本号不会匹配。Ionic Native 版本号在 `package.json` 中：

```json
"@awesome-cordova-plugins/camera": "^5.3.0",
```

Cordova 插件版本号同时在 `package.json` 和 `config.xml` 中：

```json
"cordova-plugin-camera": "4.0.3",
```

```xml
<plugin name="cordova-plugin-camera" spec="4.0.3" />
```

在检查新的原生功能或错误修复时，请在 Cordova 插件 GitHub 页面本身查找新版本（例如，这里是[相机插件](https://github.com/apache/cordova-plugin-camera)）。

要检查新的 Ionic Native 版本（可能包括 Cordova 插件最近添加的方法的暴露等），请参见[此处](https://github.com/ionic-team/ionic-native/releases)。

## 排查构建失败问题

通过查看以下资源来研究构建错误：

- Google 和 [StackOverflow](https://stackoverflow.com)：许多问题都有在线文档记录
- 向 [Ionic 社区 Ionic 论坛](https://forum.ionicframework.com)提问（查看 Ionic Native 分类）
- 查看 Ionic 客户成功[知识库](https://ionic.zendesk.com)

### Cordova 插件冲突

当插件共享相同的底层原生依赖时，或者当多个插件同时尝试访问相同的原生代码时，它们可能会相互冲突。例如，常见的库如 Google Play Services 版本（Google Maps 使用 GPS v24.2，但 Firebase 需要 GPS v27.1）。定期更新这些插件有助于解决此问题。

另一个技巧是确保您的应用每个特定功能/功能仅使用一个插件（例如：推送通知）。

## 推荐的升级策略

最稳定的 Ionic 应用会定期更新，尤其是在原生层面。保持原生插件更新可确保您的项目拥有最新的安全修复、新功能和改进的性能。

逐个更新项目的插件，最好在单独的代码分支中进行。这可以减少问题出现的范围——如果您一次性更新项目中的所有内容，有时很难判断问题出在哪里。

### 何时应该更新？

- 当新功能/错误修复发布时：运行 `npm outdated` 查看可用更新列表。
- 当新的主版本发布时：官方博客，如 [Cordova 博客](https://cordova.apache.org/blog/)和 [Ionic 博客](https://ionicframework.com/blog/)，将发布公告和新闻。
- 评估更新的性质：是闪亮的新功能还是关键的安全修复？
- 时机：它与您的团队项目目标匹配在哪里？
