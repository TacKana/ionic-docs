---
title: 启动应用
sidebar_label: 启动应用
---

<head>
  <title>启动应用：操作指南 | Ionic 文档</title>
  <meta
    name="description"
    content="启动新的 Ionic 应用非常简单。了解如何从命令行运行 ionic start 命令，让 CLI 处理后续所有工作。"
  />
</head>

启动新的 Ionic 应用非常简单。只需在命令行中运行 `ionic start` 命令，CLI 就会处理后续所有工作。

```shell-session
$ ionic start

每个优秀的应用都需要一个名字！😍

请输入应用的完整名称。您可以随时修改此项设置。
下次若要跳过此提示，请在 ionic start 后直接提供名称作为第一个参数。

? 项目名称：█
```

Ionic CLI 会显示提示，询问新项目的名称以及要使用的模板。这些信息也可以通过命令行参数直接提供：

```shell-session
$ ionic start myApp tabs
```

这里，`myApp` 是项目名称，`tabs` 是启动模板，项目类型为 `angular`。

`tabs` 并不是唯一可用的项目模板。在所有项目类型中，目前提供三种模板：

- `tabs`：基于标签页的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：仅包含单页的空白项目

可通过以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了极佳的起点，并包含了构建可扩展代码库的所有最佳实践。