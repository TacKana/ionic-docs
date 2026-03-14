---
title: 安装 Ionic
sidebar_label: CLI 安装
---

import AppWizard from '@components/page/intro/AppWizard';

<head>
  <title>如何安装 Ionic 框架 CLI 来构建移动应用</title>
  <meta
    name="description"
    content="Ionic CLI 是首选的安装方式，它提供了广泛的开发工具和帮助选项。了解如何安装 Ionic 并开始构建应用。"
  />
</head>

Ionic 应用主要通过 Ionic [命令行](../reference/glossary.md#cli)工具创建和开发。Ionic CLI 是首选的安装方法，因为它提供了广泛的开发工具和沿途的帮助选项。它也是运行应用并将其连接到其他服务（例如 Appflow）的主要工具。

<AppWizard />

## 安装 Ionic CLI

在继续之前，请确保您的计算机已安装 [Node.js](../reference/glossary.md#node)。请参阅[这些说明](environment.md)来设置 Ionic 开发环境。

使用 npm 安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

如果之前安装过旧版 Ionic CLI，由于包名称已更改，需要先卸载它。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
`-g` 选项表示 _全局安装_。当包被全局安装时，可能会出现 `EACCES` 权限错误。
建议配置 npm 使其无需提升权限即可全局运行。有关更多信息，请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

使用预制的应用模板之一或空模板来创建 Ionic 应用。三种最常见的入门模板是 `blank`（空白）、`tabs`（标签页）和 `sidemenu`（侧边菜单）。使用 `ionic start` 命令开始创建：

```shell
ionic start
```

![Ionic 应用模板的缩略图预览：空白、标签页和侧边菜单。](/img/installation/start-app-thumbnails.png 'Ionic 应用入门模板')

要了解更多关于创建 Ionic 应用的信息，请参阅[入门指南](../developing/starting.md)。

## 运行应用

大部分 Ionic 应用开发工作可以直接在浏览器中使用 `ionic serve` 命令完成：

```shell
$ cd myApp
$ ionic serve
```

运行应用还有其他多种方式，但建议首先使用此工作流程。要在设备和模拟器上开发和测试应用，请参阅[应用运行指南](../developing/previewing.md)。