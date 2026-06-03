---
title: 启动应用
sidebar_label: 启动
---

<head>
  <title>启动应用：操作指南 | Ionic 文档</title>
  <meta
    name="description"
    content="启动一个新的 Ionic 应用非常简单。了解如何从命令行运行 ionic start 命令，让 CLI 处理其余部分。"
  />
</head>

启动一个新的 Ionic 应用非常简单。从命令行运行 `ionic start` 命令，CLI 将处理其余部分。

```shell-session
$ ionic start

每个优秀的应用都需要一个名字！😍

请输入您应用的完整名称。您可以随时更改。
要跳过此提示，请在下次使用时提供名称，
即 ionic start 的第一个参数。

? 项目名称： █
```

Ionic CLI 会显示提示，询问新项目的名称以及要使用的模板。这些详细信息可以作为命令参数提供：

```shell-session
$ ionic start myApp tabs
```

在这里，`myApp` 是项目的名称，`tabs` 是起始模板，项目类型为 `angular`。

`tabs` 并不是唯一可用的项目模板。在所有项目类型中，共有三种模板可供选择：

- `tabs`：基于选项卡的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：包含单个页面的空项目

使用以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了良好的起点，并包含了使代码库可扩展的所有最佳实践。
