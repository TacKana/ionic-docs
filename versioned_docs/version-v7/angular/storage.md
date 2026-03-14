---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>Angular 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 Angular 构建的 Ionic 应用有多种数据存储方案可供选择。根据您的存储需求选择最适合的方案。"
  />
</head>

Ionic 应用提供了多种数据存储方案。最佳选择是挑选最符合您应用需求的方案。一个应用可能同时需要多种存储方案。

:::info
某些存储方案涉及第三方插件或产品。在此情况下，我们既不认可也不支持这些插件或产品。此处提及仅作信息参考。
:::

以下是一些常见用例及解决方案：

## 本地应用设置与数据

许多应用需要本地存储设置以及其他轻量级键/值数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专门为此类场景设计。

## 关系型数据存储（仅限移动端）

某些应用，特别是遵循离线优先方法论的应用，可能需要本地存储大量复杂的关系型数据。对于此类场景，可以使用 SQLite 插件。最常见的 SQLite 插件包括：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（该插件还有一个[便捷封装](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)可辅助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型海量数据存储（移动端与Web端）

对于需要在 Web 和移动端同时存储海量数据并进行操作的应用，一个可行的解决方案是创建键/值对数据存储服务，在 Web 端使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用前面提到的 SQLite 插件之一。

以下是实现示例：

- [完整应用](https://github.com/ionic-enterprise/tutorials-and-demos-ng/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/mobile-kv-store.ts)
- [Web端服务](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/web-kv-store.ts)

## 其他方案

还存在其他提供本地和云端存储的选项，这些方案在 Capacitor 应用中运行良好，并能与您的应用很好地集成。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)