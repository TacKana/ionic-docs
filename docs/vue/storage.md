---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>Vue 应用数据存储方案 - Ionic 文档</title>
  <meta
    name="description"
    content="为使用 Vue 构建的 Ionic 应用提供了多种数据存储方案。选择最适合您存储需求的选项。"
  />
</head>

在 Ionic 应用中有多种数据存储方案可供选择。最好根据应用的具体需求来选择最合适的方案。单个应用可能需要结合使用多种存储方案。

:::info
部分存储方案涉及第三方插件或产品。在这种情况下，我们既不认可也不支持这些插件或产品。此处提及仅作信息参考之用。
:::

以下是一些常见用例及其解决方案：

## 本地应用设置与数据

许多应用需要在本地存储设置以及其他轻量级的键/值数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专门设计用于处理此类场景。

## 关系型数据存储（仅限移动端）

某些应用，特别是遵循离线优先（offline-first）理念的应用，可能需要本地存储大量复杂的关系型数据。对于这类场景，可以使用 SQLite 插件。最常见的 SQLite 插件包括：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（该插件还有一个[便捷封装版本](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)可辅助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型海量数据存储（移动端与 Web 端）

对于需要在 Web 端和移动端同时存储并操作海量数据的应用，一个潜在的解决方案是创建键/值对数据存储服务，在 Web 端使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用上述 SQLite 插件之一。

以下是实现此方案的示例：

- [完整应用示例](https://github.com/ionic-enterprise/tutorials-and-demos-vue/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-vue/blob/main/demos/sqlcipher-kv-pair/src/composables/mobile-kv-store.ts)
- [Web 端服务](https://github.com/ionic-enterprise/tutorials-and-demos-vue/blob/main/demos/sqlcipher-kv-pair/src/composables/web-kv-store.ts)

## 其他方案

还存在其他提供本地及云端存储的解决方案，它们同样适用于 Capacitor 应用，并能与您的应用良好集成。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)