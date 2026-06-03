---
title: 配置
---

Ionic 配置提供了一种在整个应用中全局更改组件属性的方法。它可以设置应用模式、标签按钮布局、动画等。

## 全局配置

可用的配置键可以在 [`IonicConfig`](#ionicconfig) 接口中找到。

以下示例禁用了涟漪效果并将默认模式设置为 Material Design：

import GlobalExample from './config/global/index.md';

<GlobalExample />

## 按组件配置

Ionic 配置不是响应式的。在组件渲染后更新配置的值将导致使用之前的值。当您需要响应式值时，建议使用组件的属性而不是更新配置。

import PerComponentExample from './config/per-component/index.md';

<PerComponentExample />

## 按平台配置

Ionic 配置也可以按平台进行设置。例如，这允许您在应用在可能较慢的浏览器中运行时禁用动画。开发者可以利用 Platform 工具来实现这一点。

在以下示例中，我们仅在应用运行在移动 Web 浏览器中时才禁用 Ionic 应用中的所有动画。

import PerPlatformExample from './config/per-platform/index.md';

<PerPlatformExample />

### 回退

下一个示例允许您根据平台设置完全不同的配置，如果没有匹配的平台，则回退到默认配置：

import PerPlatformFallbackExample from './config/per-platform-overrides/index.md';

<PerPlatformFallbackExample />

### 覆盖

最后一个示例允许您根据不同的平台需求累积配置对象。

import PerPlatformOverridesExample from './config/per-platform-fallback/index.md';

<PerPlatformOverridesExample />

## 读取配置 (Angular)

Ionic Angular 提供了一个 `Config` provider 用于访问 Ionic 配置。

### get

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **描述**        | 返回一个 config 值作为 `any` 类型。如果未定义 config，则返回 `null`。 |
| **签名**        | `get(key: string, fallback?: any) => any`                   |

#### 示例

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

### getBoolean

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **描述**        | 返回一个 config 值作为 `boolean` 类型。如果未定义 config，则返回 `false`。 |
| **签名**        | `getBoolean(key: string, fallback?: boolean) => boolean`     |

#### 示例

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

### getNumber

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **描述**        | 返回一个 config 值作为 `number` 类型。如果未定义 config，则返回 `0`。 |
| **签名**        | `getNumber(key: string, fallback?: number) => number`        |

## 接口

### IonicConfig

以下是 Ionic 使用的配置选项。

| 配置                        | 类型                                                                              | 描述                                                                                                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionSheetEnter`          | `AnimationBuilder`                                                                | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                       |
| `actionSheetLeave`          | `AnimationBuilder`                                                                | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                       |
| `alertEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                              |
| `alertLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                              |
| `animated`                  | `boolean`                                                                         | 如果为 `true`，Ionic 将在整个应用中启用所有动画和过渡效果。                                                                                                                                                                          |
| `backButtonDefaultHref`     | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中 `defaultHref` 属性的默认值。                                                                                                                                                                     |
| `backButtonIcon`            | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                                                                                                                                                                      |
| `backButtonText`            | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                                                                                                                                                                      |
| `innerHTMLTemplatesEnabled` | `boolean`                                                                         | 相关组件：`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content`、`ion-toast`。如果为 `false`，Ionic 中的所有 `innerHTML` 用法将被禁用，自定义 HTML 将无法在相关组件中使用。默认情况下启用 `innerHTML`。 |
| `hardwareBackButton`        | `boolean`                                                                         | 如果为 `true`，Ionic 将响应 Android 设备上的硬件返回按钮。                                                                                                                                                                           |
| `infiniteLoadingSpinner`    | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认旋转器类型。                                                                                                                                                                    |
| `loadingEnter`              | `AnimationBuilder`                                                                | 为所有 `ion-loading` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                            |
| `loadingLeave`              | `AnimationBuilder`                                                                | 为所有 `ion-loading` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                            |
| `loadingSpinner`            | `SpinnerTypes`                                                                    | 覆盖所有 `ion-loading` 叠加层的默认旋转器。                                                                                                                                                                                          |
| `menuIcon`                  | `string`                                                                          | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                                                                                                                                                                      |
| `menuType`                  | `string`                                                                          | 覆盖所有 `<ion-menu>` 组件的默认菜单类型。                                                                                                                                                                                           |
| `modalEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-modal` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                              |
| `modalLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-modal` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                              |
| `mode`                      | `Mode`                                                                            | 模式决定整个应用程序使用哪个平台的样式。                                                                                                                                                                                             |
| `navAnimation`              | `AnimationBuilder`                                                                | 覆盖整个应用程序中所有 `ion-nav` 和 `ion-router-outlet` 的默认"动画"。                                                                                                                                                               |
| `pickerEnter`               | `AnimationBuilder`                                                                | 为所有 `ion-picker` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                             |
| `pickerLeave`               | `AnimationBuilder`                                                                | 为所有 `ion-picker` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                             |
| `platform`                  | [`PlatformConfig`](/angular/platform#customizing-platform-detection-methods) | 覆盖默认的平台检测方法。                                                                                                                                                                                                             |
| `popoverEnter`              | `AnimationBuilder`                                                                | 为所有 `ion-popover` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                            |
| `popoverLeave`              | `AnimationBuilder`                                                                | 为所有 `ion-popover` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                            |
| `refreshingIcon`            | `string`                                                                          | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                                                                                                                                                                                  |
| `refreshingSpinner`         | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-refresh-content>` 组件中的默认旋转器类型。                                                                                                                                                                            |
| `rippleEffect`              | `boolean`                                                                         | 如果为 `true`，Material Design 涟漪效果将在整个应用中启用。                                                                                                                                                                          |
| `sanitizerEnabled`          | `boolean`                                                                         | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本的 DOM 清理器。                                                                                                                                                         |
| `spinner`                   | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-spinner>` 组件中的默认旋转器。                                                                                                                                                                                        |
| `statusTap`                 | `boolean`                                                                         | 如果为 `true`，点击或触摸状态栏将导致内容滚动到顶部。                                                                                                                                                                               |
| `swipeBackEnabled`          | `boolean`                                                                         | 如果为 `true`，Ionic 将在整个应用中启用"滑动返回"手势。                                                                                                                                                                              |
| `tabButtonLayout`           | `TabButtonLayout`                                                                 | 覆盖整个应用程序中所有 `ion-bar-button` 的默认"布局"。                                                                                                                                                                               |
| `toastDuration`             | `number`                                                                          | 覆盖所有 `ion-toast` 组件的默认 `duration`。                                                                                                                                                                                         |
| `toastEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认"动画"。                                                                                                                                                                              |
| `toastLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认"动画"。                                                                                                                                                                              |
| `toggleOnOffLabels`         | `boolean`                                                                         | 覆盖所有 `ion-toggle` 组件中的默认 `enableOnOffLabels`。                                                                                                                                                                             |
