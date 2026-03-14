# 让它成为你的专属！Ionic 主题定制

之前，我们将单功能的相机应用改造成了一个史诗级的照片画廊。现在，让我们探索如何通过 Ionic 主题定制，让这个照片画廊真正成为我们自己的作品。应用的视觉设计至关重要——幸运的是，Ionic 为我们提供了许多开箱即用的功能。你可以在 GitHub 上的 [“part 3”文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) 中找到相关代码。

Ionic 定义了五个默认颜色作为 Sass 变量，可用于改变其 UI 组件的颜色：

![Ionic 用于主题定制的五个默认 Sass 颜色变量：primary、secondary、danger、light 和 dark](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

你可以通过提供 base（基色）和 contrast（对比色）属性来进一步定制每种颜色。在大多数组件中，base 用作背景色，contrast 用作文本颜色。这为你提供了更灵活的样式控制：

![显示带 base 和 contrast 属性的自定义 Sass 变量的代码片段](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

你可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

只需在这里或那里修改这些变量，就能轻松更新整个应用程序的主题！试着修改其中几个变量，观察 DevApp 中应用的更新效果。例如，将默认的蓝色 Primary 改为紫色：

```Css
$colors: (
  primary:    #7044ff,
)
```

但等等，还有更多！Ionic 会根据应用程序运行的设备自动提供特定平台的样式，给你的用户带来他们习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这在标题栏和图标的样式上表现得尤为明显。

如果你想要保持一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），可以在应用模块类中全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也穿上了 Material Design 的外衣！

![在 iOS 设备上应用 Material Design 样式的 Ionic 应用](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

通过 Sass 变量和特定平台样式，创建外观精美的 Ionic 应用变得轻而易举。现在，你已经掌握了开始使用 Ionic 所需的一切。出发吧，去构建出色的应用！

如果你有兴趣将 Ionic 应用提升到新的水平，请继续了解我们接下来要探索的 Appflow。