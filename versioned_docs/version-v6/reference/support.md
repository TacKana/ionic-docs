---
title: Support Policy
---

<head>
  <title>应用开发支持政策 - Ionic Framework API</title>
  <meta
    name="description"
    content="Ionic Framework API 100% 开源（MIT），并将始终保持开源。阅读我们的支持政策，了解为什么用户知道 Ionic 是应用开发的正确选择。"
  />
</head>

## 社区维护

Ionic Framework 从最初开始就是 100% 开源（MIT），并将始终保持这一特性。开发者可以通过 Ionic 的社区维护策略确保 Ionic 是其跨平台应用的正确选择。Ionic 团队定期发布新版本、修复错误，并非常欢迎社区的拉取请求。

## 框架维护与支持状态

考虑到时间和资源限制的现实情况，以及在前端开发领域持续创新的愿望，随着时间的推移，Ionic 团队有必要将重点转向 Framework 的新版本。然而，Ionic 将尽一切可能使向新版本的过渡尽可能顺利。Ionic 团队建议更新到 Ionic Framework 的最新版本，以获取最新功能、改进和稳定性更新。更多详情请参阅 [迁移页面](migration.md)。

每个 Ionic Framework 版本的当前状态如下：

| 版本 |       状态       |    发布日期    |   维护结束时间   |   扩展支持结束时间   |
| :--: | :--------------: | :------------: | :--------------: | :-----------------: |
|  V6  |   扩展支持期     | 2021年12月8日  |  2023年9月29日   |   2024年3月29日    |
|  V5  |   已停止支持     | 2020年2月11日  |  2022年6月8日    |   2022年12月8日    |
|  V4  |   已停止支持     | 2019年1月23日  |  2020年8月11日   |   2022年9月30日    |
|  V3  |   已停止支持     | 2017年4月5日   |  2019年10月30日  |   2020年8月11日    |
|  V2  |   已停止支持     | 2017年1月25日  |  2017年4月5日    |   2017年4月5日     |
|  V1  |   已停止支持     | 2015年5月12日  |  2017年1月25日   |   2017年1月25日    |

- **维护期**：仅提供关键错误修复和安全修复，不提供主要功能改进。
- **扩展支持期**：对于需要额外长期支持的团队和组织，Ionic 提供扩展支持选项。了解更多信息，请参阅我们的 [企业方案](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队整理了一套关于 Ionic Framework 与其他上下文相关软件结合使用的建议。这并非详尽列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每个季度审查一次项目依赖项，以跟踪新版本、功能和错误修复。

### 核心依赖

#### Ionic Angular

| Framework | 最低 Angular 版本 | 最高 Angular 版本 | TypeScript |
| :-------: | :---------------: | :---------------: | :--------: |
|    v6     |        v12        |       v15.x^      |    4.0+    |
|    v5     |       v8.2        |       v12.x       |    3.5+    |
|    v4     |       v8.2        |       v11.x       |    3.5+    |
|    v3     |      v5.2.11      |      v5.2.11      |   2.6.2    |

> ^ Angular 14.x 从 Ionic v6.1.9 开始支持。Angular 15.x 从 Ionic v6.3.6 开始支持。

#### Ionic React

| Framework | 所需 React 版本 | TypeScript |
| :-------: | :-------------: | :--------: |
|    v6     |       v17+      |    3.7+    |
|    v5     |      v16.8+     |    3.7+    |
|    v4     |      v16.8+     |    3.7+    |

#### Ionic Vue

| Framework | 所需 Vue 版本 | TypeScript |
| :-------: | :-----------: | :--------: |
|    v6     |    v3.0.6+    |    3.9+    |
|    v5     |     v3.0+     |    3.9+    |

### 原生桥接

|  Framework   |              Cordova               |        Capacitor         |
| :----------: | :--------------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V5 - React  |           不支持            |        Latest 2.x        |
|   V5 - Vue   |           不支持            |        Latest 2.X        |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V4 - React  |           不支持            |        Latest 2.x        |
|      V3      | cordova-android 8.X, cordova-ios 5.X | 官方不支持 |

- 随着 iOS 和 Android（及相关工具）的更新，你可以期待 Cordova 和 Capacitor 的更多更新，因此建议保持 Cordova 和 Capacitor 的最新版本。

### Ionic 平台与产品

|  Framework   |        Appflow        |          Ionic Native Premier 插件\*           |
| :----------: | :-------------------: | :-------------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X  |               使用最新可用版本               |
|  V5 - React  |  `@ionic/react` 5.X   |               使用最新可用版本               |
| V4 - Angular | `@ionic/angular` 4.X  |               使用最新可用版本               |
|  V4 - React  |  `@ionic/react` 4.X   |               使用最新可用版本               |
|      V3      | `ionic-angular` 3.9.X | 使用最新版本；可能需要特殊配置 |

- Native Premier 插件安装需要 `@ionic-enterprise/cordova` [参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循 [Cordova 插件的 Capacitor 安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果需要在 Ionic 3 项目中使用企业插件，请 [联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台与产品（续）

|  Framework   |      Ionic Studio       | Ionic Native 社区插件\* |
| :----------: | :---------------------: | :---------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V5 - React  |      目前不支持      |  @awesome-cordova-plugins 5.X\*  |
| V4 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V4 - React  |      目前不支持      |  @awesome-cordova-plugins 5.X\*  |
|      V3      |      目前不支持      |   @awesome-cordova-plugins 4.X   |

- 包装器（及其相关插件）由社区维护。
- \* 通过使用 [原生 JavaScript 实现](../native.md#vanilla-javascript)，可以在 Ionic Native 和 `@ionic/react` 中实现 Cordova 插件支持。