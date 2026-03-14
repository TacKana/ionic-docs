# 配置

Ionic 配置提供了一种在整个应用中全局修改组件属性的方法。它可以设置应用模式、标签按钮布局、动画效果等。

## 全局配置

要覆盖应用的初始 Ionic 配置，需要从 `@ionic/react` 导入 `setupConfig` 方法，并在渲染任何 Ionic 组件（包括 `IonApp`）之前调用它。

```tsx
setupConfig({
  rippleEffect: false,
  mode: 'md',
});
```

在上面的例子中，我们禁用了整个应用中的 Material Design 波纹效果，并强制将模式设置为 Material Design。

## 按平台配置

Ionic 配置也可以按平台进行设置。例如，这允许你在可能在较慢设备上运行的浏览器中禁用动画。开发者可以利用平台工具来实现这一点。

在下面的例子中，我们仅在应用运行在移动 Web 浏览器中时禁用 Ionic 应用中的所有动画。
`isPlatform()` 调用根据传入的平台返回 `true` 或 `false`。有关可能值的列表，请参阅 [平台文档](platform.md#platforms)。

```tsx
import { isPlatform, setupConfig } from '@ionic/react';

setupConfig({
  animated: !isPlatform('mobileweb'),
});
```

下一个例子允许你根据平台设置完全不同的配置，如果没有匹配的平台，则回退到默认配置：

```tsx
import { isPlatform, setupConfig } from '@ionic/react';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide',
    };
  }

  return {
    menuIcon: 'ellipsis-vertical',
  };
};

setupConfig(getConfig());
```

最后，这个例子允许你根据不同平台需求累积配置对象：

```tsx
import { isPlatform, setupConfig } from '@ionic/react';

const getConfig = () => {
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};
setupConfig(getConfig());
```

## 配置选项

以下是 Ionic 使用的配置选项列表。

| 配置项                     | 类型                | 描述                                                                                              |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认的"animation"。        |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认的"animation"。        |
| `alertEnter`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认的"animation"。               |
| `alertLeave`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认的"animation"。               |
| `animated`               | `boolean`          | 如果为 `true`，Ionic 将启用整个应用中的所有动画和过渡效果。                              |
| `backButtonIcon`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                        |
| `backButtonText`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                        |
| `hardwareBackButton`     | `boolean`          | 如果为 `true`，Ionic 将响应 Android 设备上的硬件返回按钮。                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认加载指示器类型。                    |
| `loadingEnter`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义进入动画，覆盖默认的"animation"。             |
| `loadingLeave`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义离开动画，覆盖默认的"animation"。             |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖所有 `ion-loading` 覆盖层中的默认加载指示器。                                            |
| `menuIcon`               | `string`           | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                        |
| `menuType`               | `string`           | 覆盖所有 `<ion-menu>` 组件中的默认菜单类型。                                         |
| `modalEnter`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义进入动画，覆盖默认的"animation"。               |
| `modalLeave`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义离开动画，覆盖默认的"animation"。               |
| `mode`                   | `Mode`             | 模式决定了整个应用程序使用哪个平台的样式。                              |
| `navAnimation`           | `AnimationBuilder` | 覆盖整个应用程序中所有 `ion-nav` 和 `ion-router-outlet` 的默认"animation"。 |
| `pickerEnter`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义进入动画，覆盖默认的"animation"。              |
| `pickerLeave`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义离开动画，覆盖默认的"animation"。              |
| `popoverEnter`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义进入动画，覆盖默认的"animation"。             |
| `popoverLeave`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义离开动画，覆盖默认的"animation"。             |
| `refreshingIcon`         | `string`           | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                                    |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖所有 `<ion-refresh-content>` 组件中的默认加载指示器类型。                            |
| `sanitizerEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本的 DOM 清理器。      |
| `spinner`                | `SpinnerTypes`     | 覆盖所有 `<ion-spinner>` 组件中的默认加载指示器。                                         |
| `statusTap`              | `boolean`          | 如果为 `true`，点击状态栏将导致内容滚动到顶部。               |
| `swipeBackEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在整个应用程序中启用"滑动返回"手势。                      |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用程序中所有 `ion-bar-button` 的默认"layout"。                     |
| `toastEnter`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认的"animation"。               |
| `toastLeave`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认的"animation"。               |