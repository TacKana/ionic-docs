---
title: 支持政策
---

<head>
  <title>应用开发支持政策 - Ionic Framework API</title>
  <meta
    name="description"
    content="Ionic Framework API 是 100% 开源（MIT）的，并将永远如此。阅读我们的支持政策，了解为什么用户认为 Ionic 是应用开发的正确选择。"
  />
</head>

## 社区维护

Ionic Framework 从一开始就是 100% 开源（MIT）的，并将永远如此。通过 Ionic 的社区维护策略，开发者可以确保 Ionic 是其跨平台应用的正确选择。Ionic 团队定期发布新版本、错误修复，并且非常欢迎社区提交的拉取请求。

## 框架维护和支持状态

考虑到时间和资源限制的现实以及在前端开发领域持续创新的愿望，随着时间的推移，Ionic 团队有必要将重点转移到较新版本的框架上。但是，Ionic 将尽一切努力使向新版本的过渡尽可能顺利。Ionic 团队建议更新到最新版本的 Ionic Framework，以获得最新的功能、改进和稳定性更新。有关更多详细信息，请参阅[迁移页面](migration.md)。

每个 Ionic Framework 版本的当前状态如下：

| 版本  |      状态      |   发布日期  |  维护结束日  |  扩展支持结束日 |
| :---: | :------------: | :---------: | :----------: | :-------------: |
|  V6   |  扩展支持      | 2021-12-08  |  2023-09-29  |  2024-03-29     |
|  V5   |  支持已结束    | 2020-02-11  |  2022-06-08  |  2022-12-08     |
|  V4   |  支持已结束    | 2019-01-23  |  2020-08-11  |  2022-09-30     |
|  V3   |  支持已结束    | 2017-04-05  |  2019-10-30  |  2020-08-11     |
|  V2   |  支持已结束    | 2017-01-25  |  2017-04-05  |  2017-04-05     |
|  V1   |  支持已结束    | 2015-05-12  |  2017-01-25  |  2017-01-25     |

- **维护**：仅限关键错误和安全修复。没有主要功能改进。
- **扩展支持**：对于需要额外长期支持的团队和组织，Ionic 提供扩展支持选项。要了解更多信息，请查看我们的[企业产品](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队整理了一套关于将 Ionic Framework 与其他相关软件配合使用的建议。这并非全面的列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每季度审查一次项目依赖项，以跟踪新版本、功能和错误修复。

### 核心依赖

#### Ionic Angular

| 框架   | 最低 Angular 版本 | 最高 Angular 版本 | TypeScript |
| :----: | :----------------: | :---------------: | :--------: |
|   v6   |        v12         |      v15.x^       |   4.0+     |
|   v5   |       v8.2         |      v12.x        |   3.5+     |
|   v4   |       v8.2         |      v11.x        |   3.5+     |
|   v3   |      v5.2.11       |     v5.2.11       |   2.6.2    |

> ^ Angular 14.x 从 Ionic v6.1.9 开始支持。Angular 15.x 从 Ionic v6.3.6 开始支持。

#### Ionic React

| 框架   | 所需 React 版本 | TypeScript |
| :----: | :-------------: | :--------: |
|   v6   |      v17+       |   3.7+     |
|   v5   |     v16.8+      |   3.7+     |
|   v4   |     v16.8+      |   3.7+     |

#### Ionic Vue

| 框架   | 所需 Vue 版本 | TypeScript |
| :----: | :-----------: | :--------: |
|   v6   |   v3.0.6+     |   3.9+     |
|   v5   |    v3.0+      |   3.9+     |

### 原生桥接

|   框架    |              Cordova               |        Capacitor         |
| :-------: | :--------------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
| V5 - React  |            不支持                   |        Latest 2.x        |
|  V5 - Vue   |            不支持                   |        Latest 2.X        |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
| V4 - React  |            不支持                   |        Latest 2.x        |
|    V3     | cordova-android 8.X, cordova-ios 5.X | 不官方支持              |

- 随着 iOS 和 Android（及相关工具）的更新，Cordova 和 Capacitor 也会有更多更新，因此建议保持在 Cordova 和 Capacitor 的最新版本。

### Ionic 平台及产品

|   框架    |       Appflow        |     Ionic Native Premier Plugins\*     |
| :-------: | :------------------: | :------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X |              使用最新可用版本           |
| V5 - React  |  `@ionic/react` 5.X  |              使用最新可用版本           |
| V4 - Angular | `@ionic/angular` 4.X |              使用最新可用版本           |
| V4 - React  |  `@ionic/react` 4.X  |              使用最新可用版本           |
|    V3     | `ionic-angular` 3.9.X| 使用最新版本；可能需要特殊配置        |

- Native Premier Plugins 需要 `@ionic-enterprise/cordova` 进行安装，[参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循 [Capacitor 的 Cordova 插件安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果您需要在 Ionic 3 项目中使用 Enterprise 插件，请[联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台及产品（续）

|   框架    |     Ionic Studio      | Ionic Native Community Plugins\* |
| :-------: | :-------------------: | :-------------------------------: |
| V5 - Angular |  `@ionic/angular` 5.X  |   @awesome-cordova-plugins 5.X    |
| V5 - React  |  目前不支持           |  @awesome-cordova-plugins 5.X\*   |
| V4 - Angular |  `@ionic/angular` 5.X  |   @awesome-cordova-plugins 5.X    |
| V4 - React  |  目前不支持           |  @awesome-cordova-plugins 5.X\*   |
|    V3     |  目前不支持           |   @awesome-cordova-plugins 4.X    |

- 包装器（及其关联的插件）由社区维护。
- \*使用 Ionic Native 和 `@ionic/react` 的 Cordova 插件支持可以通过[纯 JavaScript 实现](../native.md#vanilla-javascript)来实现。
