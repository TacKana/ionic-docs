# 打造专属风格！Ionic 主题定制

之前，我们将单一功能的相机应用转变成了一个惊艳的照片画廊应用。现在，让我们探索如何通过 Ionic 主题定制，让这个照片画廊应用变得独一无二。应用程序的视觉设计极其重要——幸运的是，Ionic 为我们提供了许多开箱即用的功能。

Ionic 定义了九个默认颜色作为 CSS 变量，可用于更改其 UI 组件的颜色：

![展示 Ionic 九个默认颜色及其十六进制代码的图表。](/img/guides/first-app-v4/theming-defaults.png 'Ionic 默认调色板')

你可以通过提供基色、对比色、阴影色和色调属性来进一步自定义每种颜色。这些属性为你的样式提供了灵活的控制：

![详细说明 Ionic 中主色调自定义属性的表格，包括基色、对比色、阴影色和色调。](/img/guides/first-app-v4/theming-properties.png 'Ionic 颜色自定义属性')

你可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

通过修改这些变量，你可以轻松更新整个应用程序的主题！尝试更改其中几个变量，并在 DevApp 中观察应用程序的更新。例如，将默认的蓝色主色调改为紫色：

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

为应用程序 UI 创建自定义调色盘最简单且最强大的方法是使用 Ionic 的[颜色生成器工具](../../../theming/color-generator.md)。当你更改颜色的十六进制值时，嵌入式演示应用程序会自动反映新颜色。完成更改后，只需将生成的代码直接复制并粘贴到你的 Ionic 项目中即可。

但等等，还有更多！Ionic 会根据应用程序运行的设备自动提供特定平台的样式，为用户带来习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用程序中，标题和图标的样式清楚地展示了这一点。

如果你希望保持一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），可以在 App Module 类中进行全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用程序的 iOS 版本也拥有了 Material Design 的外观！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

借助 CSS 变量和平台特定样式，创建外观惊艳的 Ionic 应用变得轻而易举。现在，你已经掌握了开始使用 Ionic 所需的一切。

出发吧，构建出色的应用程序！