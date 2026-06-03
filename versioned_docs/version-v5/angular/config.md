# Config（配置）

Ionic Config 提供了一种在全局范围内更改应用中组件属性的方法。它可以设置应用模式、标签按钮布局、动画等。

## 全局配置

要覆盖应用的初始 Ionic 配置，在 `app.module.ts` 文件的 `IonicModule.forRoot` 中提供配置。

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

在上面的示例中，我们在整个应用中禁用了 Material Design 涟漪效果，并强制将模式设置为 Material Design。

## 按组件配置

Ionic Config 不是响应式的，因此建议在需要覆盖组件默认行为时使用组件的属性，而不是在全局范围内设置配置。

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Go Back'
    }),
    AppRoutingModule
  ],
  ...
})
```

这将把所有 `ion-back-button` 的默认文本设置为 `Go Back`。但是，如果您将 `backButtonText` 配置的值更改为 `Do Not Go Back`，`ion-back-button` 的默认文本仍将保持为 `Go Back`，因为该组件已经初始化并渲染完成。因此，建议使用 `ion-back-button` 的 `text` 属性。

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

在这个示例中，我们使用 `ion-back-button` 的方式使得文本可以在需要时动态更新，例如语言或区域设置发生变化时。`getBackButtonText` 方法负责返回正确的文本。

## 按平台配置

Ionic Config 也可以按平台进行设置。例如，这允许您应用在可能较慢的设备上的浏览器中运行时禁用动画。开发者可以利用 Platform 工具来实现这一点。

由于配置是在运行时设置的，您将无法使用 Platform 依赖注入。相反，您可以直接使用其底层函数。

在以下示例中，我们仅在应用运行在移动端 Web 浏览器中时禁用所有动画。
`isPlatform()` 调用根据传入的平台返回 `true` 或 `false`。有关可能值的列表，请参阅[平台文档](platform.md#platforms)。

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

下一个示例允许您根据平台设置完全不同的配置，如果没有平台匹配，则回退到默认配置：

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
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

最后一个示例允许您根据不同的平台需求累积一个配置对象：

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous'
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

| Config                   | Type               | Description                                                                                              |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义进入动画，覆盖默认动画。        |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有 `ion-action-sheet` 提供自定义离开动画，覆盖默认动画。        |
| `alertEnter`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义进入动画，覆盖默认动画。               |
| `alertLeave`             | `AnimationBuilder` | 为所有 `ion-alert` 提供自定义离开动画，覆盖默认动画。               |
| `animated`               | `boolean`          | 如果为 `true`，Ionic 将在整个应用中启用所有动画和过渡效果。                              |
| `backButtonIcon`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认图标。                                        |
| `backButtonText`         | `string`           | 覆盖所有 `<ion-back-button>` 组件中的默认文本。                                        |
| `hardwareBackButton`     | `boolean`          | 如果为 `true`，Ionic 将响应 Android 设备上的硬件返回按钮。                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖所有 `<ion-infinite-scroll-content>` 组件中的默认微调器类型。                    |
| `loadingEnter`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义进入动画，覆盖默认动画。             |
| `loadingLeave`           | `AnimationBuilder` | 为所有 `ion-loading` 提供自定义离开动画，覆盖默认动画。             |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖所有 `ion-loading` 叠加层的默认微调器。                                            |
| `menuIcon`               | `string`           | 覆盖所有 `<ion-menu-button>` 组件中的默认图标。                                        |
| `menuType`               | `string`           | 覆盖所有 `<ion-menu>` 组件的默认菜单类型。                                         |
| `modalEnter`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义进入动画，覆盖默认动画。               |
| `modalLeave`             | `AnimationBuilder` | 为所有 `ion-modal` 提供自定义离开动画，覆盖默认动画。               |
| `mode`                   | `Mode`             | 模式决定了为整个应用使用哪种平台样式。                              |
| `navAnimation`           | `AnimationBuilder` | 覆盖整个应用中所有 `ion-nav` 和 `ion-router-outlet` 的默认动画。 |
| `pickerEnter`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义进入动画，覆盖默认动画。              |
| `pickerLeave`            | `AnimationBuilder` | 为所有 `ion-picker` 提供自定义离开动画，覆盖默认动画。              |
| `popoverEnter`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义进入动画，覆盖默认动画。             |
| `popoverLeave`           | `AnimationBuilder` | 为所有 `ion-popover` 提供自定义离开动画，覆盖默认动画。             |
| `refreshingIcon`         | `string`           | 覆盖所有 `<ion-refresh-content>` 组件中的默认图标。                                    |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖所有 `<ion-refresh-content>` 组件中的默认微调器类型。                            |
| `sanitizerEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在接受自定义 HTML 的组件属性上启用基本的 DOM 清理功能。      |
| `spinner`                | `SpinnerTypes`     | 覆盖所有 `<ion-spinner>` 组件中的默认微调器。                                         |
| `statusTap`              | `boolean`          | 如果为 `true`，点击或轻触状态栏将使内容滚动到顶部。               |
| `swipeBackEnabled`       | `boolean`          | 如果为 `true`，Ionic 将在整个应用中启用"滑动返回"手势。                      |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用中所有 `ion-bar-button` 的默认布局。                     |
| `toastEnter`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义进入动画，覆盖默认动画。               |
| `toastLeave`             | `AnimationBuilder` | 为所有 `ion-toast` 提供自定义离开动画，覆盖默认动画。               |
