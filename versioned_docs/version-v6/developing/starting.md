---
title: 启动应用
sidebar_label: 启动指南
---

<head>
  <title>启动应用：操作指南 | Ionic 文档</title>
  <meta
    name="description"
    content="启动一个新的 Ionic 应用非常简单。了解如何从命令行运行 ionic start 命令，让 CLI 处理后续步骤。"
  />
</head>

启动一个新的 Ionic 应用非常简单。只需从命令行运行 `ionic start` 命令，CLI 就会处理后续所有步骤。

```shell-session
$ ionic start

每个优秀的应用都需要一个好名字！😍

请输入应用的完整名称。您随时可以修改此名称。
下次若想跳过此提示，请在 ionic start 命令后直接提供名称作为第一个参数。

? 项目名称： █
```

Ionic CLI 会显示提示，询问新项目的名称和要使用的模板。这些详细信息也可以直接作为命令参数提供：

```shell-session
$ ionic start myApp tabs
```

这里，`myApp` 是项目名称，`tabs` 是起始模板，项目类型为 `angular`。

`tabs` 并不是唯一可用的项目模板。在所有项目类型中，共有三种可用模板：

- `tabs`：基于标签页的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：仅包含单个页面的空白项目

通过以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了极佳的起点，并包含了使代码库可扩展的所有最佳实践。