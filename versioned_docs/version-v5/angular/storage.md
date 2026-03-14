---
sidebar_label: Storage
---

# 数据存储

在 Ionic 应用中，有多种数据存储方案可供选择。

以下是两种 Ionic 官方提供的方案：

## Ionic 安全存储

对于构建关键任务应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队推出的官方高级解决方案，提供了一套跨平台数据存储系统，支持 iOS 和 Android。

它能帮助您轻松构建高性能、支持离线使用的 Ionic 应用，覆盖 iOS、Android 和 Web 平台。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系型数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源键值对 API，可用于构建跨多平台存储引擎的应用。

此外，Ionic 安全存储提供了一个驱动程序，可与 `@ionic/storage` 中的键值对 API 协同工作，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息