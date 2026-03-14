---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>Angular 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 Angular 构建 Ionic 应用时，有多种数据存储方案可供选择。请根据您的存储需求选择最合适的方案。"
  />
</head>

在 Ionic 应用中存储数据有多种方案可供选择。最佳实践是根据应用的具体需求选择最合适的方案。单个应用可能需要结合使用多种存储方案。

:::info
部分存储方案涉及第三方插件或产品。在此情况下，我们既不推荐也不支持这些插件或产品。此处提及仅出于信息参考目的。
:::

以下是一些常见用例和解决方案：

## 本地应用设置与数据

许多应用需要在本地存储设置及其他轻量级键值对数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专为此类场景设计。

## 关系型数据存储（仅限移动端）

某些应用，尤其是遵循离线优先（offline-first）模式的应用，可能需要在本地存储大量复杂的关系型数据。对于此类场景，可使用 SQLite 插件。最常见的 SQLite 插件包括：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（该插件还有一个[便捷封装版本](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)可辅助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型海量数据存储（移动端与 Web 端）

对于需要在 Web 端和移动端同时存储并操作海量数据的应用，一种可行的解决方案是创建键值对数据存储服务：在 Web 端使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用上述 SQLite 插件之一。

以下是实现示例：

- [完整应用](https://github.com/ionic-enterprise/tutorials-and-demos-ng/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/mobile-kv-store.ts)
- [Web 端服务](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/web-kv-store.ts)

## 其他方案

还存在其他存储方案，既提供本地存储也支持云存储，这些方案在 Capacitor 应用中运行良好，并能与您的应用顺畅集成。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)