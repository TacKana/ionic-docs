---
sidebar_label: 起步指南
---

# 创建应用

启动一个新的 Ionic 应用非常简单。只需在命令行中运行 `ionic start` 命令，CLI 将自动处理后续所有步骤。

```shell-session
$ ionic start

每个优秀的应用都需要一个名字！😍

请输入应用的完整名称。您可以随时更改此名称。
下次要跳过此提示，请在 ionic start 命令后直接提供名称参数。

? 项目名称：█
```

Ionic CLI 会通过交互式提示询问新项目的名称和要使用的模板。这些信息也可以通过命令行参数直接提供：

```shell-session
$ ionic start myApp tabs
```

这里，`myApp` 是项目名称，`tabs` 是起始模板，项目类型为 `angular`。

`tabs` 并不是唯一可用的项目模板。在所有项目类型中，我们提供了三种模板：

- `tabs`：基于标签页的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：仅包含单页面的空白项目

通过以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了绝佳的起点，并包含了构建可扩展代码库的最佳实践。