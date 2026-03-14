# 打造专属风格！Ionic 主题定制

之前，我们将单一功能的相机应用升级为了强大的照片库。现在，让我们探索如何通过 Ionic 主题定制，让这个照片库真正成为我们自己的作品。应用的视觉设计至关重要——幸运的是，Ionic 为我们提供了大量开箱即用的功能。

Ionic 定义了九种默认颜色作为 CSS 变量，可用于更改其 UI 组件的颜色：

![展示 Ionic 九种默认颜色及其十六进制代码的图表。](/img/guides/first-app-v4/theming-defaults.png 'Ionic 默认调色板')

你可以通过设置基础色（base）、对比色（contrast）、阴影色（shade）和浅色调（tint）属性来进一步自定义每种颜色。这些属性为你提供了灵活的风格控制：

![详细说明 Ionic 中自定义主色调属性的表格，包括基础色、对比色、阴影色和浅色调。](/img/guides/first-app-v4/theming-properties.png 'Ionic 颜色自定义属性')

你可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

通过修改这些变量，你可以轻松更新整个应用程序的主题风格！尝试更改其中一些变量，观察应用在 DevApp 中的实时更新。例如，将默认的蓝色主色调改为紫色：

```css
/** Ionic CSS 变量 **/
:root {
  /** 主色调 **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179, 107, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

为你的应用 UI 创建自定义调色板最简单且最强大的方法是使用 Ionic 的[颜色生成器工具](../../../theming/color-generator.md)。当你更改颜色的十六进制值时，嵌入式演示应用会自动反映新颜色。完成更改后，只需将生成的代码直接复制粘贴到你的 Ionic 项目中即可。

但等等，还有更多功能！Ionic 会根据应用运行的设备自动提供平台特定的样式，为用户带来熟悉的原生外观和体验：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这在标题栏和图标的样式上体现得尤为明显。

如果你希望保持一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），可以在 App Module 类中全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也换上了 Material Design 的外观！

![在 iOS 设备上应用 Material Design 风格的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

借助 CSS 变量和平台特定样式，创建外观精美的 Ionic 应用变得轻而易举。现在你已经掌握了开始使用 Ionic 所需的一切。

去创造伟大的应用吧！