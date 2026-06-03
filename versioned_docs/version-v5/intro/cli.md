---
title: 安装 Ionic
sidebar_label: CLI 安装
---

import AppWizard from '@components/page/intro/AppWizard';

# 安装 Ionic

Ionic 应用主要通过 Ionic [命令行](../reference/glossary.md#cli)工具创建和开发。Ionic CLI 是首选安装方式，因为它提供了广泛的开发工具和帮助选项。它也是运行应用并将其连接到其他服务（如 Appflow）的主要工具。

<AppWizard />

## 安装 Ionic CLI

在继续之前，请确保您的计算机已安装 [Node.js](../reference/glossary.md#node)。参见[这些说明](environment.md)为 Ionic 设置环境。

使用 npm 安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

如果之前安装过 Ionic CLI，由于包名变更，需要先卸载。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
`-g` 选项表示*全局安装*。全局安装包时，可能会发生 `EACCES` 权限错误。
考虑设置 npm 以无需提升权限即可全局运行。有关更多信息，请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 启动应用

使用预制的应用模板创建一个 Ionic 应用，或者使用空白模板重新开始。三种最常见的启动模板是 `blank`（空白）模板、`tabs`（标签页）模板和 `sidemenu`（侧边菜单）模板。使用 `ionic start` 命令开始：

```shell
ionic start myApp tabs
```

![Ionic 应用模板的三个缩略图预览：空白、标签页和侧边菜单。](/img/installation/start-app-thumbnails.png 'Ionic 应用启动模板')

要了解更多关于启动 Ionic 应用的信息，请参阅[启动指南](../developing/starting.md)。

## 运行应用

大多数 Ionic 应用开发可以在浏览器中使用 `ionic serve` 命令完成：

```shell
$ cd myApp
$ ionic serve
```

运行应用还有许多其他方式，建议从这种工作流程开始。要在设备和模拟器上开发和测试应用，请参阅[运行应用指南](../developing/previewing.md)。
