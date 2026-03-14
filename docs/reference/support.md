---
title: 支持政策
---

<head>
  <title>应用开发支持政策 - Ionic Framework API</title>
  <meta
    name="description"
    content="Ionic Framework API 是 100% 开源的（MIT 许可证），并且将始终保持开源。阅读我们的支持政策，了解为什么用户选择 Ionic 作为应用开发的正确选择。"
  />
</head>

## 社区维护

Ionic Framework 自诞生之初就是 100% 开源的（采用 MIT 许可证），并且将始终保持这一特性。开发者可以通过 Ionic 的社区维护策略确信 Ionic 是其跨平台应用的正确选择。Ionic 团队会定期发布新版本、修复错误，并且非常欢迎社区的拉取请求。

## 框架维护与支持状态

考虑到时间和资源的现实限制，以及在前端开发领域持续创新的期望，随着时间的推移，Ionic 团队有必要将重心转移到框架的新版本上。然而，Ionic 将尽一切努力确保向新版本的过渡尽可能平稳。Ionic 团队建议更新到 Ionic Framework 的最新版本，以获得最新的功能、改进和稳定性更新。

各 Ionic Framework 版本的当前状态如下：

| 版本 |     状态     |   发布日期   | 维护终止日期 | 扩展支持终止日期 |
| :---: | :----------: | :----------: | :----------: | :--------------: |
|  V8   |  **活跃支持** | 2024年4月17日 |      待定      |        待定        |
|  V7   |   终止支持   | 2023年3月29日 | 2024年10月17日 |   2025年4月17日   |
|  V6   |   终止支持   | 2021年12月8日 | 2023年9月29日  |   2024年3月29日   |
|  V5   |   终止支持   | 2020年2月11日 | 2022年6月8日   |   2022年12月8日   |
|  V4   |   终止支持   | 2019年1月23日 | 2020年8月11日  |  2022年9月30日    |
|  V3   |   终止支持   | 2017年4月5日  | 2019年10月30日 |  2020年8月11日    |
|  V2   |   终止支持   | 2017年1月25日 | 2017年4月5日   |   2017年4月5日    |
|  V1   |   终止支持   | 2015年5月12日 | 2017年1月25日  |  2017年1月25日    |

- **维护**：仅提供关键的错误修复和安全修复。不提供主要功能改进。
- **扩展支持**：对于需要额外长期维护支持的团队和组织，Ionic 提供扩展支持选项。了解更多信息，请参阅我们的[企业产品](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队整理了一套关于将 Ionic Framework 与其他上下文相关软件结合使用的建议。这并非一份详尽的列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每季度审查一次项目依赖项，以跟踪新版本、功能和错误修复。

### 核心依赖项

#### Ionic Angular

| 框架版本 | 最低 Angular 版本 | 最高 Angular 版本 | TypeScript |
| :-------: | :---------------: | :---------------: | :--------: |
|    v8     |        v16        |      v20.x[^3]      |   4.9.3+   |
|    v7     |        v14        |      v17.x[^2]      |    4.6+    |
|    v6     |        v12        |      v15.x[^1]      |    4.0+    |
|    v5     |       v8.2        |       v12.x       |    3.5+    |
|    v4     |       v8.2        |       v11.x       |    3.5+    |
|    v3     |      v5.2.11      |      v5.2.11      |   2.6.2    |

[^1]: Angular 14.x 从 Ionic v6.1.9 开始支持。Angular 15.x 从 Ionic v6.3.6 开始支持。
[^2]: Angular 17.x 从 Ionic v7.5.4 开始支持。
[^3]: Angular 18.x 从 Ionic v8.2.0 开始支持。

**旧版本 iOS 上的 Angular 13+ 支持**

Angular 对 iOS 的支持政策是最近的两个主要版本。这意味着，要在 iOS 13 上使用 Ionic Angular v4 到 v6，可能需要对您的 Angular 项目进行修改。要支持 iOS 13，请将 tsconfig.json 中 `compilerOptions` 下的项目 `target` 改为 `es5`。如果不进行此更改，在 iOS 13 的应用启动时会出现 `Unexpected token '.' in promiseReactionJob` 错误。

请注意，Ionic 的后续版本不支持 iOS 13；请参见[移动浏览器支持表格](./browser-support#mobile-browsers)。

#### Ionic React

| 框架版本 | 所需 React 版本 | TypeScript |
| :-------: | :-------------: | :--------: |
|    v8     |       v17+      |    3.7+    |
|    v7     |       v17+      |    3.7+    |
|    v6     |       v17+      |    3.7+    |
|    v5     |      v16.8+     |    3.7+    |
|    v4     |      v16.8+     |    3.7+    |

#### Ionic Vue

| 框架版本 | 所需 Vue 版本 | TypeScript |
| :-------: | :-----------: | :--------: |
|    v8     |    v3.0.6+    |    3.9+    |
|    v7     |    v3.0.6+    |    3.9+    |
|    v6     |    v3.0.6+    |    3.9+    |
|    v5     |     v3.0+     |    3.9+    |

### 原生桥接

|     框架     |             Cordova              |        Capacitor         |
| :----------: | :------------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V5 - React  |          不支持           |        Latest 2.x        |
|   V5 - Vue   |          不支持           |        Latest 2.X        |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V4 - React  |          不支持           |        Latest 2.x        |
|      V3      | cordova-android 8.X, cordova-ios 5.X |   未官方支持    |

- 随着 iOS 和 Android（以及相关工具）的更新，您可以期待 Cordova 和 Capacitor 会有更多更新，因此建议保持在 Cordova 和 Capacitor 的最新版本。

### Ionic 平台与产品

|     框架     |        Appflow        |          Ionic Native 高级插件\*           |
| :----------: | :-------------------: | :---------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X  |               使用最新可用版本               |
|  V5 - React  |  `@ionic/react` 5.X   |               使用最新可用版本               |
| V4 - Angular | `@ionic/angular` 4.X  |               使用最新可用版本               |
|  V4 - React  |  `@ionic/react` 4.X   |               使用最新可用版本               |
|      V3      | `ionic-angular` 3.9.X | 使用最新版本；可能需要特殊配置 |

- 高级原生插件需要 `@ionic-enterprise/cordova` 进行安装[参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循[适用于 Cordova 插件的 Capacitor 安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果您需要在 Ionic 3 项目中使用企业插件，请[联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台与产品（续）

|     框架     |      Ionic Studio       | Ionic Native 社区插件\* |
| :----------: | :---------------------: | :---------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V5 - React  | 当前不支持 |  @awesome-cordova-plugins 5.X\*  |
| V4 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V4 - React  | 当前不支持 |  @awesome-cordova-plugins 5.X\*  |
|      V3      | 当前不支持 |   @awesome-cordova-plugins 4.X   |

- 包装器（及其关联的插件）由社区维护。
- \*Ionic Native 和 `@ionic/react` 的 Cordova 插件支持可以通过[原生 JavaScript 实现](../native.md#vanilla-javascript)来实现。