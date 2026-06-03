---
title: 数据存储
sidebar_label: 存储
---

<head>
  <title>React 应用数据存储选项 - Ionic 文档</title>
  <meta
    name="description"
    content="使用 React 构建的 Ionic 应用中有多种存储数据的方式可供选择。选择最适合您存储需求的方案。"
  />
</head>

在 Ionic 应用中有多种存储数据的方式可供选择。最好选择最适合您应用需求的方案。单个应用可能有跨越多种方案的需求。

:::info
某些存储方案涉及第三方插件或产品。在这种情况下，我们既不认可也不支持这些插件或产品。我们在此提及它们仅用于提供信息。
:::

以下是一些常见的使用场景和解决方案：

## 本地应用设置和数据

许多应用需要本地存储设置以及其他轻量级键/值数据。[Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) 插件专为处理这些场景而设计。

## 关系型数据存储（仅移动端）

某些应用，尤其是遵循离线优先方法论的应用，可能需要本地存储大量复杂的关系型数据。对于此类场景，可以使用 SQLite 插件。最常见的 SQLite 插件产品有：

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage)（此插件还有一个[便捷封装器](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite)可帮助实现）
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## 非关系型大数据量存储（移动端和 Web）

对于需要在 Web 和移动端上存储大量数据并运行的应用，一个潜在的解决方案是创建一个键/值对数据存储服务，在 Web 上使用 [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)，在移动端使用前面提到的某个 SQLite 插件。

以下是实现此目标的一个示例：

- [完整应用](https://github.com/ionic-enterprise/tutorials-and-demos-react/tree/main/demos/sqlcipher-kv-pair)
- [移动端服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/mobile-kv-store.ts)
- [Web 服务](https://github.com/ionic-enterprise/tutorials-and-demos-react/blob/main/demos/sqlcipher-kv-pair/src/utils/web-kv-store.ts)

## 其他选项

其他提供本地和云端存储的存储方案也可以在 Capacitor 应用中良好工作，并可能与您的应用很好地集成。

例如：

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)
