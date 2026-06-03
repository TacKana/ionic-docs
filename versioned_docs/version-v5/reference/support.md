# 支持政策

## 社区维护

Ionic Framework 从一开始就是 100% 开源（MIT）的，并将永远如此。通过 Ionic 的社区维护策略，开发者可以确保 Ionic 是其跨平台应用的正确选择。Ionic 团队定期发布新版本、bug 修复，并非常欢迎社区的拉取请求。

## 框架维护与支持状态

考虑到时间和资源限制的现实情况，以及在前端开发领域持续创新的愿望，随着时间的推移，Ionic 团队有必要将重点转向框架的更新版本。但是，Ionic 将尽一切努力使向新版本的过渡尽可能顺利。Ionic 团队建议更新到最新版本的 Ionic Framework，以获得最新的功能、改进和稳定性更新。有关更多详细信息，请查阅[迁移页面](migration.md)。

每个 Ionic Framework 版本的当前状态如下：

| 版本 |     状态     |   发布日期   | 维护结束日期 | 扩展支持结束日期 |
| :--: | :----------: | :----------: | :----------: | :--------------: |
|  V5  |   支持结束   | 2020年2月11日 | 2022年6月8日  |  2022年12月8日   |
|  V4  |   支持结束   | 2019年1月23日 | 2020年8月11日 |  2022年9月30日   |
|  V3  |   支持结束   | 2017年4月5日  | 2019年10月30日|  2020年8月11日   |
|  V2  |   支持结束   | 2017年1月25日 | 2017年4月5日  |  2017年4月5日    |
|  V1  |   支持结束   | 2015年5月12日 | 2017年1月25日 |  2017年1月25日   |

- **维护**：仅限关键 bug 和安全修复。没有主要功能改进。
- **扩展支持**：对于需要额外长期支持的团队和组织，Ionic 提供扩展支持选项。要了解更多信息，请参阅我们的 [Enterprise 产品](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队整理了一套关于将 Ionic Framework 与其他上下文相关软件结合使用的建议。这并非意图成为一份全面的列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每季度审查一次项目依赖项，以跟踪新版本、功能和 bug 修复。

### 核心依赖项

|    框架     | Angular | React  |  Vue  | TypeScript |
| :---------: | :-----: | :----: | :---: | :--------: |
| V5 - Angular | v8.2.X  |  不适用  |  不适用  |   3.5.X    |
|  V5 - React  |  不适用   | 16.8.X |  不适用  |   3.7.X    |
|   V5 - Vue   |  不适用   |  不适用  | 3.0.X |   3.9.X    |
| V4 - Angular | v8.2.X  |  不适用  |  不适用  |   3.5.X    |
|  V4 - React  |  不适用   | 16.8.X |  不适用  |   3.7.X    |
|      V3      | v5.2.11 |  不适用  |  不适用  |   2.6.2    |

- Ionic 团队通常建议使用第三方包的最新版本，并努力在正式发布后的 2-4 周内支持最新版本。

### 原生桥接

|    框架     |                 Cordova                 |      Capacitor       |
| :---------: | :------------------------------------: | :------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X   |    最新 2.X 版本     |
|  V5 - React  |              不支持                     |    最新 2.x 版本     |
|   V5 - Vue   |              不支持                     |    最新 2.X 版本     |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X   |    最新 2.X 版本     |
|  V4 - React  |              不支持                     |    最新 2.x 版本     |
|      V3      | cordova-android 8.X, cordova-ios 5.X   |  不正式支持          |

- 随着 iOS 和 Android（及相关工具）的更新，你可以期待 Cordova 和 Capacitor 的更多更新，因此建议保持 Cordova 和 Capacitor 的最新版本。

### Ionic 平台与产品

|    框架     |        Appflow        |         Ionic Native Premier 插件\*          |
| :---------: | :-------------------: | :----------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X  |               使用最新的可用版本               |
|  V5 - React  |  `@ionic/react` 5.X   |               使用最新的可用版本               |
| V4 - Angular | `@ionic/angular` 4.X  |               使用最新的可用版本               |
|  V4 - React  |  `@ionic/react` 4.X   |               使用最新的可用版本               |
|      V3      | `ionic-angular` 3.9.X | 使用最新版本；可能需要特殊配置                |

- Native Premier 插件需要 `@ionic-enterprise/cordova` 进行安装 [请参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循 [Capacitor 的 Cordova 插件安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果你需要在 Ionic 3 项目中使用 Enterprise 插件，请[联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台与产品（续）

|    框架     |      Ionic Studio       | Ionic Native 社区插件\* |
| :---------: | :---------------------: | :---------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   |  @awesome-cordova-plugins 5.X  |
|  V5 - React  |   目前不支持             |  @awesome-cordova-plugins 5.X\* |
| V4 - Angular |  `@ionic/angular` 5.X   |  @awesome-cordova-plugins 5.X  |
|  V4 - React  |   目前不支持             |  @awesome-cordova-plugins 5.X\* |
|      V3      |   目前不支持             |  @awesome-cordova-plugins 4.X  |

- 包装器（及其关联的插件）由社区维护。
- \*通过 Ionic Native 和 `@ionic/react` 实现 Cordova 插件支持可以使用[原生 JavaScript 实现](../native.md#原生-javascript)来实现。
