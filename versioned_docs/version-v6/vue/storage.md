---
title: 数据存储
sidebar_label: 存储
---

<head>
  <title>适用于 iOS 和 Android 的 Vue 应用数据存储 - Ionic 文档</title>
  <meta
    name="description"
    content="在 Ionic 应用中有多种存储数据的选项。阅读我们的 Vue 数据存储文档，了解适用于 iOS、Android 和 Web 应用的选项。"
  />
</head>

在 Ionic 应用中有多种存储数据的选项。

以下是两个官方的 Ionic 选项：

## Ionic Secure Storage

对于构建关键任务应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，提供了在 iOS 和 Android 上运行的跨平台数据存储系统。

它使构建高性能、可离线使用的 Ionic 应用变得容易，可跨 iOS、Android 和 Web 运行。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源键/值 API，用于构建可跨多个平台使用不同存储引擎的应用。

此外，Ionic Secure Storage 有一个驱动，可与 `@ionic/storage` 中的键/值 API 配合使用，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息
