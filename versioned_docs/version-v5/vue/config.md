# 配置

Ionic Config 提供了一种在全局范围内更改应用中组件属性的方法。它可以设置应用模式、选项卡按钮布局、动画等。

## 全局配置

要覆盖应用的初始 Ionic 配置，在安装 `IonicVue` 插件时，将配置对象作为额外参数提供：

```tsx
createApp(App).use(IonicVue, {
  rippleEffect: false,
  mode: 'md',
});
```

在上面的示例中，我们在整个应用中禁用了 Material Design 涟漪效果，并将模式强制设置为 Material Design。

## 按平台配置

Ionic Config 也可以按平台进行设置。例如，这允许您在当前可能较慢的设备上的浏览器中运行应用时禁用动画。开发人员可以利用 Platform 工具来实现这一点。

在以下示例中，我们仅在应用在移动 Web 浏览器中运行时禁用所有动画。
根据传入的平台，`isPlatform()` 调用返回 `true` 或 `false`。有关可能值的列表，请参见[平台文档](platform.md#平台列表)。

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

最后，这个示例允许您基于不同的平台要求累积配置对象：

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

| 配置项                   | 类型               | 描述                                                                             |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认动画。                     |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认动画。                     |
| `alertEnter`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认动画。                            |
| `alertLeave`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认动画。                            |
| `animated`               | `boolean`          | 如果为 `true`，Ionic 将在整个应用中启用所有动画和过渡。                          |
| `backButtonIcon`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                  |
| `backButtonText`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                  |
| `hardwareBackButton`     | `boolean`          | 如果为 `true`，Ionic 将响应 Android 设备上的硬件返回按钮。                       |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认微调器类型。                 |
| `loadingEnter`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义进入动画，覆盖默认动画。                          |
| `loadingLeave`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义离开动画，覆盖默认动画。                          |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖所有 `ion-loading` 覆盖层中的默认微调器。                                    |
| `menuIcon`               | `string`           | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                  |
| `menuType`               | `string`           | 覆盖所有 `<ion-menu>` 组件中的默认菜单类型。                                     |
| `modalEnter`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义进入动画，覆盖默认动画。                            |
| `modalLeave`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义离开动画，覆盖默认动画。                            |
| `mode`                   | `Mode`             | 模式决定整个应用使用哪个平台的样式。                                             |
| `navAnimation`           | `AnimationBuilder` | 覆盖整个应用中所有 `ion-nav` 和 `ion-router-outlet` 的默认动画。                 |
| `pickerEnter`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义进入动画，覆盖默认动画。                           |
| `pickerLeave`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义离开动画，覆盖默认动画。                           |
| `popoverEnter`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义进入动画，覆盖默认动画。                          |
| `popoverLeave`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义离开动画，覆盖默认动画。                          |
| `refreshingIcon`         | `string`           | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                              |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖所有 `<ion-refresh-content>` 组件中的默认微调器类型。                        |
| `sanitizerEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本 DOM 清理器。       |
| `spinner`                | `SpinnerTypes`     | 覆盖所有 `<ion-spinner>` 组件中的默认微调器。                                    |
| `statusTap`              | `boolean`          | 如果为 `true`，点击状态栏将导致内容滚动到顶部。                                  |
| `swipeBackEnabled`       | `boolean`          | 如果为 `true`，Ionic 将启用"滑动返回"手势。                                      |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用中所有 `ion-bar-button` 的默认布局。                                 |
| `toastEnter`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认动画。                            |
| `toastLeave`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认动画。                            |
