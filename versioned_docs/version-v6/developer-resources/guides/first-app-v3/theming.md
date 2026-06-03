---
title: 打造个性风格！Ionic 主题化
sidebar_label: 打造个性风格！Ionic 主题化
---

# 打造个性风格！Ionic 主题化

之前，我们将单一用途的相机应用转变成了一个史诗般的照片画廊。现在，让我们探索如何通过 Ionic 主题化使照片画廊成为我们自己的风格。应用的视觉设计非常重要——幸运的是，Ionic 为我们提供了很多开箱即用的功能。您可以在 GitHub 上的["part 3"文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3)中找到此部分的代码。

Ionic 有五种默认颜色，定义为 Sass 变量，可用于更改其 UI 组件的颜色：

![用于主题化的 Ionic 五种默认 Sass 颜色变量：primary、secondary、danger、light 和 dark。](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

您可以通过提供 base 和 contrast 属性进一步自定义每种颜色。Base 作为背景色，contrast 作为大多数组件的文本颜色。这为您的样式提供了更灵活的控制：

![显示自定义了 base 和 contrast 属性的 Sass 变量代码片段。](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

您可以在 `src/theme/variables.scss` 中找到这些颜色定义。

通过更改这些变量，您可以轻松更新应用的整个主题！尝试更改其中几个，然后在 DevApp 中观察应用的更新。例如，将 Primary 的默认蓝色改为紫色：

```Css
$colors: (
  primary:    #7044ff,
)
```

但是等等，还有更多！Ionic 会根据应用运行的设备自动提供特定于平台的样式，提供用户习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这在头部和图标样式中清晰可见。

如果您想要一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），在 App Module 类中全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也拥有了 Material Design 皮肤！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

使用 Sass 变量和特定于平台的样式创建外观精美的 Ionic 应用非常容易。您现在已拥有开始使用 Ionic 所需的一切。去构建出色的应用吧！

如果您有兴趣将 Ionic 应用提升到新的水平，请继续探索 Appflow。
