---
sidebar_label: Electron Desktop App
---

# 部署桌面应用程序

使用 Ionic 构建桌面应用能让开发者复用 100% 的代码，并发布一个传统的桌面应用，同时仍能访问所有原生设备功能，如推送通知。本指南假设您已熟悉 Electron，因此不会深入讲解"如何"构建一个 Electron 应用。关于如何构建，请查阅官方的 <a href="https://electronjs.org/docs/tutorial/first-app" target="_blank">Electron 指南</a>。

## macOS 应用程序

### 要求

要在 macOS 应用商店发布应用，有两个硬性要求：

- 最新版本的 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- 有效的开发者账户（通过 Apple 开发者门户支付 $100）

### 发布

Electron 团队有一份关于如何为 macOS 发布应用的详细指南。请查阅 [相关文档](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide)。

## Windows 应用程序

### 要求

要在 Windows 应用商店发布应用，有两个硬性要求：

- 带有周年更新的 Windows 10（发布于 2016 年 8 月 2 日）
- Windows 10 SDK，[在此下载](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Node
- electron-windows-store CLI

`electron-windows-store` 可以通过 npm 安装：

```shell
npm install -g electron-windows-store
```

### 发布

与 macOS 类似，Electron 也有一份关于如何为 Windows 发布应用的详细指南。请查阅 [相关文档](https://electronjs.org/docs/tutorial/windows-store-guide)