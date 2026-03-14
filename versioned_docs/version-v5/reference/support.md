# 支持政策

## 社区维护

Ionic Framework 自诞生之初就一直是 100% 开源（MIT 协议），并将继续保持这一传统。开发者可以通过 Ionic 的社区维护策略，确保 Ionic 是他们跨平台应用的正确选择。Ionic 团队定期发布新版本、修复错误，并非常欢迎社区提交的拉取请求。

## 框架维护与支持状态

考虑到时间和资源的现实限制，以及在 Web 前端开发领域持续创新的愿望，Ionic 团队有时需要将重心转向框架的新版本。然而，Ionic 会尽其所能确保向新版本的过渡尽可能顺利。Ionic 团队建议更新到 Ionic Framework 的最新版本，以获取最新的功能、改进和稳定性更新。更多详情，请查阅[迁移页面](migration.md)。

各 Ionic Framework 版本的当前状态如下：

| 版本 | 状态 | 发布日期 | 维护结束 | 扩展支持结束 |
| :---: | :---: | :-------: | :-------: | :-----------: |
| V5 | 支持终止 | 2020年2月11日 | 2022年6月8日 | 2022年12月8日 |
| V4 | 支持终止 | 2019年1月23日 | 2020年8月11日 | 2022年9月30日 |
| V3 | 支持终止 | 2017年4月5日 | 2019年10月30日 | 2020年8月11日 |
| V2 | 支持终止 | 2017年1月25日 | 2017年4月5日 | 2017年4月5日 |
| V1 | 支持终止 | 2015年5月12日 | 2017年1月25日 | 2017年1月25日 |

- **维护期**：仅提供关键错误和安全修复。不提供重大功能改进。
- **扩展支持**：对于需要额外长期支持的团队和组织，Ionic 提供扩展支持选项。了解更多信息，请参见我们的[企业产品](https://ionicframework.com/enterprise)。

## 兼容性建议

Ionic 团队针对 Ionic Framework 与其他相关软件结合使用的情况，整理了一套建议。这并非一份详尽列表，但涵盖了许多常见的兼容性问题。Ionic 团队强烈建议每个季度审查一次项目依赖，以跟踪新版本、功能和错误修复。

### 核心依赖

| 框架 | Angular | React | Vue | Typescript |
| :---: | :-----: | :---: | :---: | :--------: |
| V5 - Angular | v8.2.X | N/A | N/A | 3.5.X |
| V5 - React | N/A | 16.8.X | N/A | 3.7.X |
| V5 - Vue | N/A | N/A | 3.0.X | 3.9.X |
| V4 - Angular | v8.2.X | N/A | N/A | 3.5.X |
| V4 - React | N/A | 16.8.X | N/A | 3.7.X |
| V3 | v5.2.11 | N/A | N/A | 2.6.2 |

- Ionic 团队通常建议使用第三方包的最新版本，并努力在正式发布后的 2-4 周内支持最新版本。

### 原生桥接

| 框架 | Cordova | Capacitor |
| :---: | :----------------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X | Latest 2.X |
| V5 - React | Not supported | Latest 2.x |
| V5 - Vue | Not supported | Latest 2.X |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X | Latest 2.X |
| V4 - React | Not supported | Latest 2.x |
| V3 | cordova-android 8.X, cordova-ios 5.X | Not officially supported |

- 随着 iOS 和 Android（及其相关工具）的更新，Cordova 和 Capacitor 也会得到更多更新，因此建议持续使用 Cordova 和 Capacitor 的最新版本。

### Ionic 平台与产品

| 框架 | Appflow | Ionic Native Premier Plugins\* |
| :---: | :-------------------: | :-----------------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X | Use latest available |
| V5 - React | `@ionic/react` 5.X | Use latest available |
| V4 - Angular | `@ionic/angular` 4.X | Use latest available |
| V4 - React | `@ionic/react` 4.X | Use latest available |
| V3 | `ionic-angular` 3.9.X | Use latest; special configuration may be required |

- Native Premier Plugins 需要 `@ionic-enterprise/cordova` 进行安装 [参见此处](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- 对于 Capacitor 项目，请遵循 [Cordova 插件的 Capacitor 安装指南](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- 如果您需要在 Ionic 3 项目中使用企业插件，请[联系我们](https://ionic.zendesk.com/hc)

### Ionic 平台与产品（续）

| 框架 | Ionic Studio | Ionic Native Community Plugins\* |
| :---: | :---------------------: | :------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X | @awesome-cordova-plugins 5.X |
| V5 - React | Not currently supported | @awesome-cordova-plugins 5.X\* |
| V4 - Angular | `@ionic/angular` 5.X | @awesome-cordova-plugins 5.X |
| V4 - React | Not currently supported | @awesome-cordova-plugins 5.X\* |
| V3 | Not currently supported | @awesome-cordova-plugins 4.X |

- 封装器（及其关联插件）由社区维护。
- \* 在 `@ionic/react` 中使用 Ionic Native 实现 Cordova 插件支持，可以通过[原生 JavaScript 实现](../native.md#vanilla-javascript)来实现。