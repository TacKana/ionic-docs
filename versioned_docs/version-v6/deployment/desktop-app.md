---
title: 部署桌面应用
sidebar_label: Electron 桌面应用
---

<head>
  <title>为 Windows 和 macOS 应用商店构建桌面应用</title>
  <meta
    name="description"
    content="使用 Ionic 构建可部署到 Windows 和 macOS 应用商店的桌面应用，可 100% 复用您的代码。了解更多关于使用 Ionic 部署桌面应用的信息。"
  />
</head>

使用 Ionic 构建桌面应用使开发者能够 100% 复用其代码，并发布传统的桌面应用，同时仍可访问所有原生设备功能，如推送通知。本指南假定您熟悉 Electron，不深入探讨"如何"构建 Electron 应用。关于此内容，请查看官方的 <a href="https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app" target="_blank">Electron 指南</a>。

## macOS 应用

### 要求

在 macOS 应用商店发布应用有两个硬性要求：

- 最新版本的 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- 有效的开发者账号（通过 Apple 开发者门户，费用为 $100）

### 发布

Electron 团队提供了一份关于如何在 macOS 上发布应用的详细指南。请查阅[此处的文档](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide)。

## Windows 应用

### 要求

在 Windows 应用商店发布应用有两个硬性要求：

- 带有周年更新的 Windows 10（2016 年 8 月 2 日发布）
- Windows 10 SDK，[在此下载](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Node
- electron-windows-store CLI

`electron-windows-store` 可以通过 npm 安装：

```shell
npm install -g electron-windows-store
```

### 发布

与 macOS 类似，Electron 也提供了一份关于如何在 Windows 上发布应用的详细指南。请查阅[此处的文档](https://electronjs.org/docs/tutorial/windows-store-guide)。
