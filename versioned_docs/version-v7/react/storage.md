---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>React 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 React 构建的 Ionic 应用提供了多种数据存储方案。请根据您的存储需求选择最合适的方案。"
  />
</head>

Ionic 应用提供了多种数据存储方案。最佳选择是那些最符合您应用需求的方案。一个应用可能需要同时采用多种方案来满足不同的需求。

:::info
某些存储方案涉及第三方插件或产品。在此情况下，我们不对此类插件或产品提供背书或支持。我们在此提及仅为提供信息参考。
:::

以下是一些常见用例及解决方案：

## 本地应用设置与数据

许多应用需要在本地存储设置以及其他轻量级的键/值数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专门设计用于处理此类场景。

## 关系型数据存储（仅限移动端）

某些应用，特别是遵循离线优先理念的应用，可能需要本地存储大量复杂的关系型数据。对于此类场景，可以使用 SQLite 插件。最常见的 SQLite 插件包括：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（此插件还提供了一个[便捷封装](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)以辅助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型海量数据存储（移动端与 Web 端）

对于需要在 Web 端和移动端同时存储并操作海量数据的应用，一种可行的解决方案是创建一个键/值对数据存储服务，在 Web 端使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用上述 SQLite 插件之一。

以下是实现示例：

- [完整应用](https://github.com/ionic-enterprise/tutorials-and-demos-react/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/mobile-kv-store.ts)
- [Web 端服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/web-kv-store.ts)

## 其他方案

还有一些其他存储方案提供本地及云端存储，它们与 Capacitor 应用兼容良好，并能很好地集成到您的应用中。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)