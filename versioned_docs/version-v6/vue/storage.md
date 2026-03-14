---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>Vue 应用在 iOS 和 Android 上的数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="Ionic 应用在数据存储方面有多种选择。请阅读我们的 Vue 数据存储文档，了解针对 iOS、Android 和 Web 应用的选项。"
  />
</head>

Ionic 应用在数据存储方面有多种选择。

以下是 Ionic 官方提供的两种方案：

## Ionic Secure Storage

对于构建关键任务型应用或需要加密支持的团队来说，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，它提供了一个可在 iOS 和 Android 上运行的跨平台数据存储系统。

它使得为 iOS、Android 和 Web 构建高性能、支持离线功能的 Ionic 应用变得轻而易举。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系型数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源的键/值 API，用于构建可在多平台的不同存储引擎上运行的应用。

此外，Ionic Secure Storage 提供了一个驱动程序，可与 `@ionic/storage` 中的键/值 API 协同工作，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息