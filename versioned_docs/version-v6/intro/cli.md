---
title: 安装 Ionic
sidebar_label: CLI 安装
---

import AppWizard from '@components/page/intro/AppWizard';

<head>
  <title>如何安装 Ionic Framework CLI 以构建移动应用</title>
  <meta
    name="description"
    content="Ionic CLI 是首选的安装方法——提供广泛的开发工具和帮助选项。了解如何安装 Ionic 并开始构建应用。"
  />
</head>

Ionic 应用主要通过 Ionic [命令行](../reference/glossary.md#cli)工具创建和开发。Ionic CLI 是首选的安装方法，因为它提供了广泛的开发工具和帮助选项。它也是运行应用并将其连接到其他服务（如 Appflow）的主要工具。

<AppWizard />

## 安装 Ionic CLI

在继续之前，请确保你的计算机已安装 [Node.js](../reference/glossary.md#node)。请参阅[这些说明](environment.md)来设置 Ionic 环境。

使用 npm 安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

如果之前安装过 Ionic CLI，由于包名称变更，需要先卸载。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
`-g` 选项表示_全局安装_。当包全局安装时，可能会发生 `EACCES` 权限错误。
考虑设置 npm 以无需提升权限即可全局运行。有关更多信息，请参见[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## 启动应用

使用预制的应用模板或空白模板创建一个 Ionic 应用，从零开始。三种最常见的启动模板是 `blank` 启动器、`tabs` 启动器和 `sidemenu` 启动器。使用 `ionic start` 命令开始：

```shell
ionic start
```

![三个 Ionic 应用模板的缩略图预览：blank、tabs 和 side menu。](/img/installation/start-app-thumbnails.png 'Ionic 应用启动模板')

要了解更多关于启动 Ionic 应用的信息，请参阅[启动指南](../developing/starting.md)。

## 运行应用

大部分 Ionic 应用开发可以在浏览器中直接使用 `ionic serve` 命令完成：

```shell
$ cd myApp
$ ionic serve
```

还有其他多种运行应用的方式，建议从此工作流程开始。要开发和测试设备及模拟器上的应用，请参阅[运行应用指南](../developing/previewing.md)。
