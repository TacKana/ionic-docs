---
sidebar_label: 数据存储
---

# 数据存储

在 Ionic 应用中有多种存储数据的选项。

以下是两个官方的 Ionic 选项：

## Ionic Secure Storage

对于构建关键任务应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，提供在 iOS 和 Android 上工作的跨平台数据存储系统。

它使构建高性能、支持离线运行的 Ionic 应用变得容易，可跨 iOS、Android 和 Web 使用。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系数据支持的开发人员，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源键值 API，用于构建可在多个平台上跨存储引擎工作的应用。

此外，Ionic Secure Storage 有一个驱动，可与 `@ionic/storage` 中的键值 API 配合使用，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息。
