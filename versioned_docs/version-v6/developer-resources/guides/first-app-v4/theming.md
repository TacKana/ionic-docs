---
title: 打造个性风格！Ionic 主题化
sidebar_label: 打造个性风格！Ionic 主题化
---

# 打造个性风格！Ionic 主题化

之前，我们将单一用途的相机应用转变成了一个史诗般的照片画廊。现在，让我们探索如何通过 Ionic 主题化使照片画廊成为我们自己的风格。应用的视觉设计非常重要——幸运的是，Ionic 为我们提供了很多开箱即用的功能。

Ionic 有九种默认颜色，定义为 CSS 变量，可用于更改其 UI 组件的颜色：

![显示 Ionic 九种默认颜色及其十六进制代码的图表。](/img/guides/first-app-v4/theming-defaults.png 'Ionic 默认颜色调色板')

您可以通过提供 base、contrast、shade 和 tint 属性进一步自定义每种颜色。这些为您的样式提供了灵活的控制：

![详述 Ionic 中自定义 primary 颜色的属性表格，包括 base、contrast、shade 和 tint。](/img/guides/first-app-v4/theming-properties.png 'Ionic 颜色自定义属性')

您可以在 `src/theme/variables.scss` 中找到这些颜色定义。

通过更改这些变量，您可以轻松更新应用的整个主题！尝试更改其中几个，然后在 DevApp 中观察应用的更新。例如，将 Primary 的默认蓝色改为紫色：

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

为应用的 UI 创建自定义颜色调色板最简单、最强大的方法是使用 Ionic 的[颜色生成器工具](../../../theming/color-generator.md)。当您更改颜色的十六进制值时，嵌入的演示应用会自动反映新的颜色。完成更改后，只需将生成的代码复制并粘贴到您的 Ionic 项目中。

但是等等，还有更多！Ionic 会根据应用运行的设备自动提供特定于平台的样式，提供用户习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这在头部和图标样式中清晰可见。

如果您想要一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），在 App Module 类中全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也拥有了 Material Design 皮肤！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

使用 CSS 变量和特定于平台的样式创建外观精美的 Ionic 应用非常容易。您现在已拥有开始使用 Ionic 所需的一切。

去构建出色的应用吧！
