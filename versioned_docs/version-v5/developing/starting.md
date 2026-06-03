---
sidebar_label: 开始
---

# 开始一个应用

开始一个新的 Ionic 应用非常简单。在命令行中运行 `ionic start` 命令，CLI 会处理其余部分。

```shell-session
$ ionic start

每个出色的应用都需要一个名字！😍

请输入您应用的全名。您可以随时更改。
要下次跳过此提示，请提供 name，
即 ionic start 的第一个参数。

? 项目名称： █
```

Ionic CLI 会显示提示，询问新项目的名称和要使用的模板。这些详细信息可以作为命令参数提供：

```shell-session
$ ionic start myApp tabs
```

这里，`myApp` 是项目名称，`tabs` 是启动模板，项目类型为 `angular`。

`tabs` 不是唯一的项目模板。在所有项目类型中，有三个模板可供选择：

- `tabs`：基于选项卡的布局
- `sidemenu`：基于侧边菜单的布局
- `blank`：只有单个页面的空项目

使用以下命令查看所有可用模板：

```shell-session
$ ionic start --list
```

这些模板为任何应用提供了很好的起点，并包含了使代码库可扩展的所有最佳实践。
