# 配置

Ionic 配置提供了一种在整个应用程序中全局修改组件属性的方式。它可以设置应用程序的模式、标签按钮布局、动画效果等。

## 全局配置

要覆盖应用程序的初始 Ionic 配置，请在 `app.module.ts` 文件中的 `IonicModule.forRoot` 中提供配置。

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    AppRoutingModule
  ],
  ...
})
```

在上面的示例中，我们在整个应用程序中禁用了 Material Design 的涟漪效果，同时强制将模式设置为 Material Design。

## 组件级配置

Ionic 配置不是响应式的，因此当您想要覆盖组件默认行为时，建议使用组件的属性，而不是全局设置其配置。

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: '返回'
    }),
    AppRoutingModule
  ],
  ...
})
```

这将把 `ion-back-button` 的默认文本设置为 `返回`。但是，如果您将 `backButtonText` 配置的值更改为 `不要返回`，`ion-back-button` 的默认文本仍将保持为 `返回`，因为组件已经初始化并渲染完成。相反，建议使用 `ion-back-button` 的 `text` 属性。

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

在这个示例中，我们以这样一种方式使用了 `ion-back-button`，以便在需要时（例如语言或区域设置更改时）可以动态更新文本。`getBackButtonText` 方法负责返回正确的文本。

## 平台级配置

Ionic 配置也可以基于每个平台进行设置。例如，如果应用程序在可能较慢的设备上的浏览器中运行，这允许您禁用动画。开发人员可以利用 Platform 工具来实现这一点。

由于配置是在运行时设置的，您将无法访问 Platform 依赖注入。相反，您可以直接使用提供程序所依赖的底层函数。

在以下示例中，我们仅在应用程序在移动 Web 浏览器中运行时才禁用 Ionic 应用程序中的所有动画。
`isPlatform()` 调用根据传入的平台返回 `true` 或 `false`。有关可能值的列表，请参阅 [平台文档](platform.md#platforms)。

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    }),
    AppRoutingModule
  ],
  ...
})
```

下一个示例允许您根据平台设置完全不同的配置，如果没有匹配的平台，则回退到默认配置：

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: '上一页',
      tabButtonLayout: 'label-hide'
    }
  }

  return {
    menuIcon: 'ellipsis-vertical'
  }
}
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

最后，这个示例允许您根据不同的平台要求累积配置对象：

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: '上一页'
    }
  }

  return config;
}
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

## 配置选项

以下是 Ionic 使用的配置选项列表。

| 配置                     | 类型               | 描述                                                                                             |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------ |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认的 "animation"。                           |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认的 "animation"。                           |
| `alertEnter`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认的 "animation"。                                  |
| `alertLeave`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认的 "animation"。                                  |
| `animated`               | `boolean`          | 如果为 `true`，Ionic 将在整个应用程序中启用所有动画和过渡效果。                                  |
| `backButtonIcon`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                                  |
| `backButtonText`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                                  |
| `hardwareBackButton`     | `boolean`          | 如果为 `true`，Ionic 将响应 Android 设备中的硬件返回按钮。                                       |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认加载指示器类型。                            |
| `loadingEnter`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义进入动画，覆盖默认的 "animation"。                                |
| `loadingLeave`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义离开动画，覆盖默认的 "animation"。                                |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖所有 `ion-loading` 覆盖层中的默认加载指示器。                                                |
| `menuIcon`               | `string`           | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                                  |
| `menuType`               | `string`           | 覆盖所有 `<ion-menu>` 组件中的默认菜单类型。                                                     |
| `modalEnter`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义进入动画，覆盖默认的 "animation"。                                  |
| `modalLeave`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义离开动画，覆盖默认的 "animation"。                                  |
| `mode`                   | `Mode`             | 模式决定整个应用程序使用哪个平台的样式。                                                         |
| `navAnimation`           | `AnimationBuilder` | 覆盖整个应用程序中所有 `ion-nav` 和 `ion-router-outlet` 的默认 "animation"。                     |
| `pickerEnter`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义进入动画，覆盖默认的 "animation"。                                 |
| `pickerLeave`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义离开动画，覆盖默认的 "animation"。                                 |
| `popoverEnter`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义进入动画，覆盖默认的 "animation"。                                |
| `popoverLeave`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义离开动画，覆盖默认的 "animation"。                                |
| `refreshingIcon`         | `string`           | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                                              |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖所有 `<ion-refresh-content>` 组件中的默认加载指示器类型。                                    |
| `sanitizerEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本的 DOM 清理器。                    |
| `spinner`                | `SpinnerTypes`     | 覆盖所有 `<ion-spinner>` 组件中的默认加载指示器。                                                |
| `statusTap`              | `boolean`          | 如果为 `true`，点击状态栏将导致内容滚动到顶部。                                                  |
| `swipeBackEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在整个应用程序中启用 "滑动返回" 手势。                                    |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用程序中所有 `ion-bar-button` 的默认 "layout"。                                        |
| `toastEnter`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认的 "animation"。                                  |
| `toastLeave`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认的 "animation"。                                  |