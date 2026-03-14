# 配置

Ionic Config 提供了一种在整个应用程序中全局修改组件属性的方式。它可以设置应用模式、标签按钮布局、动画效果等。

## 全局配置

要覆盖应用程序的初始 Ionic 配置，可以在安装 `IonicVue` 插件时提供配置对象作为附加参数：

```tsx
createApp(App).use(IonicVue, {
  rippleEffect: false,
  mode: 'md',
});
```

在上面的示例中，我们禁用了整个应用程序中的 Material Design 波纹效果，并强制将模式设置为 Material Design。

## 按平台配置

Ionic 配置也可以基于每个平台进行设置。例如，这允许您在可能在较慢设备上运行的浏览器中禁用动画。开发者可以利用平台工具来实现这一点。

在下面的示例中，我们仅在应用程序在移动 Web 浏览器中运行时禁用了 Ionic 应用程序中的所有动画。
`isPlatform()` 调用根据传入的平台返回 `true` 或 `false`。有关可能值的列表，请参阅 [平台文档](platform.md#platforms)。

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
```

下一个示例允许您根据平台设置完全不同的配置，如果没有平台匹配，则回退到默认配置：

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

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

createApp(App).use(IonicVue, getConfig());
```

最后，这个示例允许您根据不同平台要求累积配置对象：

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

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

createApp(App).use(IonicVue, getConfig());
```

## 配置选项

以下是 Ionic 使用的配置选项列表。

| 配置项                   | 类型               | 描述                                                                                              |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认的"animation"。        |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认的"animation"。        |
| `alertEnter`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认的"animation"。               |
| `alertLeave`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认的"animation"。               |
| `animated`               | `boolean`          | 如果为 `true`，Ionic 将在整个应用程序中启用所有动画和过渡效果。                              |
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
| `statusTap`              | `boolean`          | 如果为 `true`，点击状态栏将使内容滚动到顶部。               |
| `swipeBackEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在整个应用程序中启用"滑动返回"手势。                      |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用程序中所有 `ion-bar-button` 的默认"layout"。                     |
| `toastEnter`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认的"animation"。               |
| `toastLeave`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认的"animation"。               |