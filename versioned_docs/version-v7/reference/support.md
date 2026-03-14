---
title: Support Policy
---

<head>
  <title>应用开发支持政策 - Ionic Framework API</title>
  <meta
    name="description"
    content="Ionic Framework API 是 100% 开源的（MIT 许可），并且永远如此。阅读我们的支持政策，了解为什么用户都知道 Ionic 是应用开发的正确选择。"
  />
</head>

## 社区维护

Ionic 框架从一开始就是 100% 开源的（MIT 许可），并且一直如此。开发者可以通过 Ionic 的社区维护策略，确保 Ionic 是他们跨平台应用的正确选择。Ionic 团队定期发布新版本、修复错误，并非常欢迎社区的拉取请求。

## 框架维护和支持状态

考虑到时间和资源的限制，以及在前端开发领域持续创新的愿望，随着时间的推移，Ionic 团队有必要将重点转移到框架的较新版本。然而，Ionic 将尽一切努力使向新版本的过渡尽可能顺利。Ionic 团队建议更新到最新版本的 Ionic 框架，以获得最新的功能、改进和稳定性更新。

各 Ionic 框架版本的当前状态如下：

| 版本 |       状态       |     发布时间     |     维护结束     |     延长支持结束     |
| :---: | :--------------: | :--------------: | :--------------: | :------------------: |
|  V7   | **支持已结束** | 2023年3月29日 | 2024年10月17日 | 2025年4月17日 |
|  V6   |   支持已结束    | 2021年12月8日  | 2023年9月29日  | 2024年3月29日  |
|  V5   |   支持已结束    | 2020年2月11日  | 2022年6月8日   | 2022年12月8日  |
|  V4   |   支持已结束    | 2019年1月23日  | 2020年8月11日  | 2022年9月30日  |
|  V3   |   支持已结束    | 2017年4月5日   | 2019年10月30日 | 2020年8月11日  |
|  V2   |   支持已结束    | 2017年1月25日  | 2017年4月5日   | 2017年4月5日   |
|  V1   |   支持已结束    | 2015年5月12日  | 2017年1月25日  | 2017年1月25日  |

- **维护期**：仅提供关键错误和安全修复。不提供主要功能改进。
- **延长支持**：对于需要额外长期维护支持的团队和组织，Ionic 提供延长支持选项。了解更多信息，请参阅我们的[企业产品](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队制定了一套关于将 Ionic 框架与其他相关软件结合使用的建议。这并非一份全面的列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每季度审查一次项目依赖项，以跟踪新版本、功能和错误修复。

### 核心依赖项

#### Ionic Angular

| 框架版本 | 最低 Angular 版本 | 最高 Angular 版本 | TypeScript |
| :------: | :---------------: | :---------------: | :--------: |
|   v7     |        v14        |     v17.x[^2]     |   4.6+     |
|   v6     |        v12        |     v15.x[^1]     |   4.0+     |
|   v5     |       v8.2        |       v12.x       |   3.5+     |
|   v4     |       v8.2        |       v11.x       |   3.5+     |
|   v3     |      v5.2.11      |      v5.2.11      |   2.6.2    |

[^1]: Ionic v6.1.9 开始支持 Angular 14.x。Ionic v6.3.6 开始支持 Angular 15.x。
[^2]: Ionic v7.5.4 开始支持 Angular 17.x。

**在较旧 iOS 版本上对 Angular 13+ 的支持**

Angular 对 iOS 的支持政策是最近的两个主要版本。这意味着，要在 iOS 13 上使用 Ionic Angular v4-v6，可能需要更改你的 Angular 项目。要支持 iOS 13，请将 tsconfig.json 中 `compilerOptions` 下指定的项目 `target` 改为 `es5`。如果不进行此更改，在 iOS 13 上应用启动时会出现 `Unexpected token '.' in promiseReactionJob` 错误。

请注意，较新版本的 Ionic 不支持 iOS 13；请参阅[此处的移动端支持表格](./browser-support#mobile-browsers)。

#### Ionic React

| 框架版本 | 必需的 React 版本 | TypeScript |
| :------: | :--------------: | :--------: |
|   v7     |       v17+       |   3.7+     |
|   v6     |       v17+       |   3.7+     |
|   v5     |      v16.8+      |   3.7+     |
|   v4     |      v16.8+      |   3.7+     |

#### Ionic Vue

| 框架版本 | 必需的 Vue 版本 | TypeScript |
| :------: | :------------: | :--------: |
|   v7     |    v3.0.6+     |   3.9+     |
|   v6     |    v3.0.6+     |   3.9+     |
|   v5     |     v3.0+      |   3.9+     |

### 原生桥梁

| 框架版本 |            Cordova             |        Capacitor         |
| :------: | :----------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
| V5 - React  |         Not supported          |        Latest 2.x        |
| V5 - Vue |         Not supported          |        Latest 2.X        |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
| V4 - React  |         Not supported          |        Latest 2.x        |
|     V3      | cordova-android 8.X, cordova-ios 5.X | Not officially supported |

- 随着 iOS 和 Android（及相关工具）的更新，你可以期待 Cordova 和 Capacitor 的更多更新，因此建议保持在 Cordova 和 Capacitor 的最新版本。

### Ionic 平台与产品

| 框架版本 |        Appflow        |          Ionic Native Premier 插件\*           |
| :------: | :-------------------: | :-------------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X  |               使用最新可用版本                |
| V5 - React  |  `@ionic/react` 5.X   |               使用最新可用版本                |
| V4 - Angular | `@ionic/angular` 4.X  |               使用最新可用版本                |
| V4 - React  |  `@ionic/react` 4.X   |               使用最新可用版本                |
|     V3      | `ionic-angular` 3.9.X | 使用最新版本；可能需要特殊配置 |

- Native Premier 插件需要 `@ionic-enterprise/cordova` 进行安装 [参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循 [Capacitor 的 Cordova 插件安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果你需要在 Ionic 3 项目中使用企业插件，请[联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台与产品（续）

| 框架版本 |      Ionic Studio       | Ionic Native 社区插件\* |
| :------: | :---------------------: | :---------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   | @awesome-cordova-plugins 5.X |
| V5 - React  | 当前不支持 | @awesome-cordova-plugins 5.X\* |
| V4 - Angular |  `@ionic/angular` 5.X   | @awesome-cordova-plugins 5.X |
| V4 - React  | 当前不支持 | @awesome-cordova-plugins 5.X\* |
|     V3      | 当前不支持 | @awesome-cordova-plugins 4.X |

- 包装器（及其关联的插件）由社区维护。
- \*通过 Ionic Native 和 `@ionic/react` 实现对 Cordova 插件的支持，可以使用 [纯 JavaScript 实现](../native.md#vanilla-javascript)