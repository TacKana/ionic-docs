---
title: 启动应用
sidebar_label: 启动
---

<head>
  <title>启动应用：操作指南 | Ionic 文档</title>
  <meta
    name="description"
    content="启动一个新的 Ionic 应用非常简单。了解如何在命令行中运行 ionic start 命令，并让 CLI 处理其余所有事情。"
  />
</head>

启动一个新的 Ionic 应用非常简单。在命令行中，运行 `ionic start` 命令，CLI 会处理其余所有事情。

```shell-session
$ ionic start

每个出色的应用都需要一个名字！😍

请输入您应用的完整名称。您可以随时更改此名称。
下次要跳过此提示，请提供名称，
作为 ionic start 的第一个参数。

? 项目名称： █
```

Ionic CLI 会显示提示，询问新项目的名称以及要使用的模板。这些细节可以作为命令参数提供：

```shell-session
$ ionic start myApp tabs
```

这里，`myApp` 是项目名称，`tabs` 是起始模板，项目类型为 `angular`。

`tabs` 并不是唯一可用的项目模板。所有项目类型中，有三种模板可用：

- `tabs`：基于标签页的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：只有一个页面的空白项目

使用以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了极佳的起点，并包含了使代码库具备良好扩展性的所有最佳实践。