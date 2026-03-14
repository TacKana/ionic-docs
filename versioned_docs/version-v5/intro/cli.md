---
sidebar_label: CLI 安装
---

import AppWizard from '@components/page/intro/AppWizard';

# 安装 Ionic

Ionic 应用主要通过 Ionic [命令行](../reference/glossary.md#cli)工具来创建和开发。我们推荐使用 Ionic CLI 进行安装，因为它提供了一系列开发工具和帮助选项。它也是运行应用并连接其他服务（如 Appflow）的主要工具。

<AppWizard />

## 安装 Ionic CLI

在继续之前，请确保您的计算机已安装 [Node.js](../reference/glossary.md#node)。请参阅[环境设置说明](environment.md)为 Ionic 配置环境。

使用 npm 安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

如果之前安装过旧版 Ionic CLI，由于包名变更，需要先卸载旧版。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
`-g` 选项表示**全局安装**。全局安装包时，可能会出现 `EACCES` 权限错误。
建议配置 npm 使其无需提升权限即可全局操作。更多信息请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

使用预置的应用模板或空白模板来创建 Ionic 应用。三种最常用的启动模板是 `blank`（空白）、`tabs`（标签页）和 `sidemenu`（侧边菜单）。通过 `ionic start` 命令开始创建：

```shell
ionic start myApp tabs
```

![Ionic 应用模板缩略预览图：空白、标签页和侧边菜单。](/img/installation/start-app-thumbnails.png 'Ionic 应用启动模板')

要了解更多关于启动 Ionic 应用的信息，请参阅[启动指南](../developing/starting.md)。

## 运行应用

大部分 Ionic 应用开发都可以直接在浏览器中使用 `ionic serve` 命令完成：

```shell
$ cd myApp
$ ionic serve
```

还有其他多种运行应用的方式，建议从这种工作流开始。如需在设备和模拟器上开发测试应用，请参阅[运行应用指南](../developing/previewing.md)。