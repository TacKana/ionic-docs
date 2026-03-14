# 打造专属风格！Ionic 主题定制

在此之前，我们将单功能相机应用升级为了强大的照片库。现在，让我们探索如何通过 Ionic 主题定制，让这个照片库真正成为专属作品。应用的视觉设计至关重要——幸运的是，Ionic 为我们提供了丰富的开箱即用功能。

Ionic 内置了九种默认颜色，定义为 CSS 变量，可用于更改其 UI 组件的颜色：

![展示 Ionic 九种默认颜色及其十六进制代码的图表。](/img/guides/first-app-v4/theming-defaults.png 'Ionic 默认调色板')

您可以通过提供 base、contrast、shade 和 tint 属性进一步自定义每种颜色。这些属性为您提供了灵活的风格控制：

![详细说明 Ionic 中 primary 颜色定制属性的表格，包括 base、contrast、shade 和 tint。](/img/guides/first-app-v4/theming-properties.png 'Ionic 颜色自定义属性')

您可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

只需在这些变量上稍作调整，即可轻松更新整个应用的主题！尝试修改其中几个变量，观察应用在 DevApp 中的实时变化。例如，将默认的蓝色 Primary 改为紫色：

```css
/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179, 107, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

为应用界面创建自定义调色板最简便且强大的方式是使用 Ionic 的[颜色生成器工具](../../../theming/color-generator.md)。当您更改颜色的十六进制值时，嵌入式演示应用会自动反映新颜色。完成修改后，只需将生成的代码直接复制粘贴到您的 Ionic 项目中即可。

但等等，还有更多！Ionic 会根据应用运行的设备自动提供平台特定的样式，为用户带来熟悉的原生外观和体验：

![对比 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这清晰地体现在标题和图标的样式设计上。

如果您希望保持一致性，可以指示 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 平台样式），请在 App Module 类中进行全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也拥有了 Material Design 风格！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

借助 CSS 变量和平台特定样式，打造惊艳的 Ionic 应用变得轻而易举。现在，您已掌握开始使用 Ionic 所需的一切知识。

行动起来，打造出色的应用吧！