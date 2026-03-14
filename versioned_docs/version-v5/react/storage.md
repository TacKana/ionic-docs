---
sidebar_label: Storage
---

# 数据存储

在 Ionic 应用中，有多种数据存储方案可供选择。

以下是两种官方 Ionic 方案：

## Ionic Secure Storage

对于构建关键业务型应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，它提供了一套跨平台的数据存储系统，可在 iOS 和 Android 上运行。

它能帮助您轻松构建高性能、支持离线使用的 Ionic 应用，覆盖 iOS、Android 和 Web 平台。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系型数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源键值 API，用于构建可在多平台存储引擎上运行的应用。

此外，Ionic Secure Storage 提供了一个驱动程序，可与 `@ionic/storage` 中的键值 API 配合使用，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage)