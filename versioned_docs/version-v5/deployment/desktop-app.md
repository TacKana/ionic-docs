---
sidebar_label: Electron 桌面应用
---

# 部署桌面应用

使用 Ionic 构建桌面应用允许开发者复用 100% 的代码，同时仍然可以访问所有原生设备功能（如推送通知），并发布传统的桌面应用。本指南假定您熟悉 Electron，不会深入介绍"如何"构建 Electron 应用。有关这方面的内容，请查看官方 <a href="https://electronjs.org/docs/tutorial/first-app" target="_blank">Electron 指南</a>。

## macOS 应用

### 要求

要在 macOS 应用商店发布应用，有两个硬性要求：

- 最新版本的 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- 有效的开发者账号（通过 Apple 开发者门户支付 $100）

### 发布

Electron 团队有一份详细的指南，介绍如何为 macOS 发布应用。请查看[相关文档](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide)。

## Windows 应用

### 要求

要在 Windows 应用商店发布应用，有两个硬性要求：

- Windows 10 周年更新版（2016 年 8 月 2 日发布）
- Windows 10 SDK，[在此下载](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Node
- electron-windows-store CLI

`electron-windows-store` 可以通过 npm 安装：

```shell
npm install -g electron-windows-store
```

### 发布

与 macOS 一样，Electron 也有一份详细的指南，介绍如何为 Windows 发布应用。请查看[相关文档](https://electronjs.org/docs/tutorial/windows-store-guide)。
