---
sidebar_label: Storage
---

# 数据存储

在 Ionic 应用中存储数据有多种可选方案。

以下是两种 Ionic 官方提供的方案：

## Ionic 安全存储

对于构建关键任务型应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，它提供了一个跨平台的数据存储系统，可在 iOS 和 Android 上运行。

它使得构建跨 iOS、Android 和 Web 的高性能、支持离线使用的 Ionic 应用变得轻而易举。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系型数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源的键/值 API，用于构建在多个平台上兼容不同存储引擎的应用。

此外，Ionic 安全存储提供了一个驱动程序，可与 `@ionic/storage` 中的键/值 API 协同工作，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息