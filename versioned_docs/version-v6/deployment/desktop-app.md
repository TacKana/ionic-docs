---
title: 部署桌面应用
sidebar_label: Electron 桌面应用
---

<head>
  <title>为 Windows 和 macOS 应用商店构建桌面应用</title>
  <meta
    name="description"
    content="为 Windows 和 macOS 应用商店构建 Ionic 桌面应用可让您复用 100% 的代码。了解如何使用 Ionic 部署桌面应用。"
  />
</head>

使用 Ionic 构建桌面应用能让开发者复用 100% 的代码，发布传统的桌面应用，同时仍可访问所有原生设备功能，例如推送通知。本指南假设您已熟悉 Electron，因此不会深入探讨“如何”构建 Electron 应用。如需了解此部分，请查阅官方的 <a href="https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app" target="_blank">Electron 指南</a>。

## macOS 应用

### 要求

要在 macOS 应用商店发布应用，有两个硬性要求：

- 最新版本的 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- 有效的开发者账户（通过 Apple 开发者门户支付 100 美元）

### 发布

Electron 团队提供了关于如何为 macOS 发布应用的详细指南。请查阅[此处的文档](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide)。

## Windows 应用

### 要求

要在 Windows 应用商店发布应用，有两个硬性要求：

- Windows 10 周年更新版本（2016 年 8 月 2 日发布）
- Windows 10 SDK，[在此下载](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Node
- electron-windows-store CLI

可以通过 npm 安装 `electron-windows-store`：

```shell
npm install -g electron-windows-store
```

### 发布

与 macOS 类似，Electron 提供了关于如何为 Windows 发布应用的详细指南。请查阅[此处的文档](https://electronjs.org/docs/tutorial/windows-store-guide)。