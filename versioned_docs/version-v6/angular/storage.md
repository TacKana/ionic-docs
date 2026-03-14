---
title: 数据存储
sidebar_label: 存储
---

<head>
  <title>Angular 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 Angular 构建的 Ionic 应用有多种数据存储方案可供选择。请查阅 Ionic Secure Storage 和 @ionic/storage 的文档了解更多信息。"
  />
</head>

Ionic 应用提供了多种数据存储方案。

以下是 Ionic 官方提供的两种方案：

## Ionic 安全存储

对于构建关键任务型应用或需要加密支持的团队，[Ionic Secure Storage](https://ionic.io/docs/secure-storage) 是 Ionic 团队提供的官方高级解决方案，提供跨平台数据存储系统，支持 iOS 和 Android。

它能帮助您轻松构建跨 iOS、Android 和 Web 平台的高性能、支持离线使用的 Ionic 应用。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

对于不需要加密或关系型数据支持的开发者，[@ionic/storage](https://github.com/ionic-team/ionic-storage) 是一个开源键值对 API，可用于构建跨多个平台存储引擎的应用。

此外，Ionic Secure Storage 提供了一个驱动程序，可与 `@ionic/storage` 中的键值对 API 协同工作，同时提供加密和 SQLite 支持。

了解更多关于 [@ionic/storage](https://github.com/ionic-team/ionic-storage) 的信息