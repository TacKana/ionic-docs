---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>React 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 React 构建的 Ionic 应用提供了多种数据存储选项。根据您的存储需求选择最适合的方案。"
  />
</head>

在 Ionic 应用中，有多种数据存储方案可供选择。最佳做法是根据应用的具体需求来选择合适的方案。一个应用可能需要同时使用多种存储方式。

:::info
部分存储方案涉及第三方插件或产品。在此情况下，我们既不认可也不支持这些插件或产品。此处提及仅作信息参考之用。
:::

以下是一些常见用例及解决方案：

## 本地应用设置与数据

许多应用需要本地存储设置信息及其他轻量级键值对数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专门设计用于处理此类场景。

## 关系型数据存储（仅限移动端）

某些应用（特别是遵循离线优先策略的应用）可能需要本地存储大量复杂的关系型数据。对于此类场景，可以使用 SQLite 插件。最常见的 SQLite 插件包括：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（该插件还有一个[便捷封装版本](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)可辅助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型海量数据存储（移动端与网页端通用）

对于需要存储海量数据且需在网页端和移动端同时运行的应用，一种可行的解决方案是创建键值对数据存储服务：在网页端使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用前面提到的 SQLite 插件。

以下是如何实现的示例：

- [完整应用示例](https://github.com/ionic-enterprise/tutorials-and-demos-react/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/mobile-kv-store.ts)
- [网页端服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/web-kv-store.ts)

## 其他方案

还有一些提供本地及云端存储的解决方案，它们也能很好地兼容 Capacitor 应用，并可能与您的应用实现良好集成。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)