---
title: 配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ionic Config 提供了一种在整个应用程序中全局修改组件属性的方法。它可以设置应用程序的模式、标签按钮布局、动画效果等等。

## 全局配置

可用的配置项可以在 [`IonicConfig`](#ionicconfig) 接口中找到。

下面的示例禁用了涟漪效果，并将默认模式设置为 Material Design：

import GlobalExample from '@site/docs/developing/config/global/index.md';

<GlobalExample />

## 按组件配置

Ionic Config 不是响应式的。在组件渲染后更新配置值将导致使用之前的值。当需要响应式值时，建议使用组件的属性而不是更新配置。

import PerComponentExample from '@site/docs/developing/config/per-component/index.md';

<PerComponentExample />

## 按平台配置

Ionic Config 也可以基于每个平台进行设置。例如，这允许你在运行于可能较慢设备的浏览器中时禁用动画。开发者可以利用平台工具来实现这一点。

在下面的例子中，我们仅在应用程序运行于移动网页浏览器时，禁用 Ionic 应用中的所有动画。

import PerPlatformExample from '@site/docs/developing/config/per-platform/index.md';

<PerPlatformExample />

### 后备配置

下一个示例允许你根据平台设置完全不同的配置，如果没有匹配的平台，则回退到默认配置：

import PerPlatformFallbackExample from '@site/docs/developing/config/per-platform-overrides/index.md';

<PerPlatformFallbackExample />

### 配置覆盖

最后一个示例允许你根据不同的平台需求累积配置对象。

import PerPlatformOverridesExample from '@site/docs/developing/config/per-platform-fallback/index.md';

<PerPlatformOverridesExample />

## 访问当前模式

在某些情况下，你可能需要在应用程序逻辑中以编程方式访问当前的 Ionic 模式。这对于根据活动的样式模式应用条件行为、获取特定资源或执行其他操作非常有用。

import IonicMode from '@site/static/usage/v8/config/mode/index.md';

<IonicMode />

## 读取配置 (Angular)

Ionic Angular 提供了一个 `Config` 服务提供者（provider），用于访问 Ionic 配置。

### get

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **描述**        | 以 `any` 类型返回配置值。如果配置未定义，则返回 `null`。                         |
| **签名**        | `get(key: string, fallback?: any) => any`                                        |

#### 示例

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
  ]}
>
<TabItem value="angular">

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

</TabItem>
<TabItem value="angular-standalone">

```ts
import { Config } from '@ionic/angular/standalone';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

</TabItem>
</Tabs>

### getBoolean

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **描述**        | 以 `boolean` 类型返回配置值。如果配置未定义，则返回 `false`。                        |
| **签名**        | `getBoolean(key: string, fallback?: boolean) => boolean`                             |

#### 示例

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
  ]}
>
<TabItem value="angular">

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

</TabItem>
<TabItem value="angular-standalone">

```ts
import { Config } from '@ionic/angular/standalone';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

</TabItem>
</Tabs>

### getNumber

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **描述**        | 以 `number` 类型返回配置值。如果配置未定义，则返回 `0`。                        |
| **签名**        | `getNumber(key: string, fallback?: number) => number`                           |

## 接口

### IonicConfig

以下是 Ionic 使用的配置选项。

| 配置项                      | 类型                                                                              | 描述                                                                                                                                                                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`          | `AnimationBuilder`                                                                | 为所有 `ion-action-sheet` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                               |
| `actionSheetLeave`          | `AnimationBuilder`                                                                | 为所有 `ion-action-sheet` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                               |
| `alertEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-alert` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `alertLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-alert` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `animated`                  | `boolean`                                                                         | 如果为 `true`，Ionic 将在整个应用程序中启用所有动画和过渡效果。                                                                                                                                                                                                                        |
| `backButtonDefaultHref`     | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中 `defaultHref` 属性的默认值。                                                                                                                                                                                                                       |
| `backButtonIcon`            | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                                                                                                                                                                                                                       |
| `backButtonText`            | `string`                                                                          | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                                                                                                                                                                                                                       |
| `innerHTMLTemplatesEnabled` | `boolean`                                                                         | 相关组件：`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content`、`ion-toast`。如果为 `true`，传递给相关组件的内容将被解析为 HTML 而不是纯文本。默认为 `false`。                                                                                             |
| `hardwareBackButton`        | `boolean`                                                                         | 如果为 `true`，Ionic 将响应 Android 设备上的硬件返回按钮。                                                                                                                                                                                                                             |
| `infiniteLoadingSpinner`    | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认加载指示器类型。                                                                                                                                                                                                                    |
| `loadingEnter`              | `AnimationBuilder`                                                                | 为所有 `ion-loading` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                    |
| `loadingLeave`              | `AnimationBuilder`                                                                | 为所有 `ion-loading` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                    |
| `loadingSpinner`            | `SpinnerTypes`                                                                    | 覆盖所有 `ion-loading` 覆盖层中的默认加载指示器。                                                                                                                                                                                                                                       |
| `logLevel`                  | `'OFF' \| 'ERROR' \| 'WARN'`                                                      | 配置 Ionic Framework 的日志记录级别。如果为 `'OFF'`，则不记录任何错误或警告。如果为 `'ERROR'`，则仅记录错误。如果为 `'WARN'`，则记录错误和警告。                                                                                                                                          |
| `menuIcon`                  | `string`                                                                          | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                                                                                                                                                                                                                        |
| `menuType`                  | `string`                                                                          | 覆盖所有 `<ion-menu>` 组件的默认菜单类型。                                                                                                                                                                                                                                             |
| `modalEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-modal` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `modalLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-modal` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `mode`                      | `Mode`                                                                            | 该模式决定了整个应用程序使用哪种平台样式。                                                                                                                                                                                                                                             |
| `navAnimation`              | `AnimationBuilder`                                                                | 覆盖整个应用程序中所有 `ion-nav` 和 `ion-router-outlet` 的默认 "animation"。                                                                                                                                                                                                            |
| `pickerEnter`               | `AnimationBuilder`                                                                | 为所有 `ion-picker` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                     |
| `pickerLeave`               | `AnimationBuilder`                                                                | 为所有 `ion-picker` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                     |
| `platform`                  | [`PlatformConfig`](/angular/platform#customizing-platform-detection-methods) | 覆盖默认的平台检测方法。                                                                                                                                                                                                                                                               |
| `popoverEnter`              | `AnimationBuilder`                                                                | 为所有 `ion-popover` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                    |
| `popoverLeave`              | `AnimationBuilder`                                                                | 为所有 `ion-popover` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                    |
| `refreshingIcon`            | `string`                                                                          | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                                                                                                                                                                                                                                     |
| `refreshingSpinner`         | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-refresh-content>` 组件中的默认加载指示器类型。                                                                                                                                                                                                                            |
| `rippleEffect`              | `boolean`                                                                         | 如果为 `true`，将在整个应用程序中启用 Material Design 涟漪效果。                                                                                                                                                                                                                       |
| `sanitizerEnabled`          | `boolean`                                                                         | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本的 DOM 清理器。                                                                                                                                                                                                            |
| `spinner`                   | `SpinnerTypes`                                                                    | 覆盖所有 `<ion-spinner>` 组件中的默认加载指示器。                                                                                                                                                                                                                                       |
| `statusTap`                 | `boolean`                                                                         | 如果为 `true`，点击状态栏将导致内容滚动到顶部。                                                                                                                                                                                                                                         |
| `swipeBackEnabled`          | `boolean`                                                                         | 如果为 `true`，Ionic 将在整个应用程序中启用“滑动返回”手势。                                                                                                                                                                                                                             |
| `tabButtonLayout`           | `TabButtonLayout`                                                                 | 覆盖整个应用程序中所有 `ion-bar-button` 的默认 "layout"。                                                                                                                                                                                                                               |
| `toastDuration`             | `number`                                                                          | 覆盖所有 `ion-toast` 组件的默认 `duration`。                                                                                                                                                                                                                                            |
| `toastEnter`                | `AnimationBuilder`                                                                | 为所有 `ion-toast` 提供自定义的进入动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `toastLeave`                | `AnimationBuilder`                                                                | 为所有 `ion-toast` 提供自定义的离开动画，覆盖默认的 "animation"。                                                                                                                                                                                                                      |
| `toggleOnOffLabels`         | `boolean`                                                                         | 覆盖所有 `ion-toggle` 组件中的默认 `enableOnOffLabels`。                                                                                                                                                                                                                               |
| `experimentalCloseWatcher`  | `boolean`                                                                         | **实验性功能：** 如果为 `true`，将使用 [CloseWatcher API](https://github.com/WICG/close-watcher) 来处理所有的 Escape 键和硬件返回按钮按下事件，以关闭菜单和覆盖层并进行导航。注意，`hardwareBackButton` 配置选项也必须为 `true`。                                                          |
| `focusManagerPriority`      | [`FocusManagerPriority[]`](./managing-focus#types)                                | **实验性功能：** 当定义时，Ionic 将在每次页面跳转后将焦点移动到适当的元素上。这确保了依赖辅助技术的用户在页面跳转发生时能够被通知到。默认禁用。                                                                                                                                           |