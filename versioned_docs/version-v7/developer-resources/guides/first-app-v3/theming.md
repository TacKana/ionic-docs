# 打造专属风格！Ionic 主题定制

此前，我们已经将单功能相机应用升级为强大的照片库应用。现在，让我们探索如何通过 Ionic 主题定制让照片库更具个性化。应用的视觉设计至关重要，幸运的是 Ionic 提供了开箱即用的丰富样式支持。你可以在 [GitHub 的 "part 3" 文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) 中找到此部分的代码。

Ionic 默认提供了五个可通过 Sass 变量定义的颜色，用于改变其 UI 组件的颜色：

![Ionic 五个默认的 Sass 主题颜色变量：primary、secondary、danger、light 和 dark。](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

你还可以通过提供 base（基础色）和 contrast（对比色）属性进一步自定义每种颜色。在大多数组件中，base 作为背景色，contrast 作为文本颜色，这为你提供了更灵活的样式控制：

![展示带有 base 和 contrast 属性的自定义 Sass 变量的代码片段。](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

你可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

通过修改这些变量，你可以轻松更新整个应用程序的主题风格！尝试修改几个变量，观察 DevApp 中的实时更新效果。例如，将 Primary 的默认蓝色改为紫色：

```Css
$colors: (
  primary:    #7044ff,
)
```

但不止如此！Ionic 还会根据应用运行的设备平台自动提供特定样式，为用户带来熟悉的原生外观和体验：

![对比 Ionic 应用在 iOS 和 Android 平台上的原生外观差异。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这清晰地体现在标题栏和图标的样式差异上。

如果你希望保持一致性，可以强制 Ionic 在不同平台上使用相同的模式。例如，要统一采用 Material Design（Android 平台样式），可以在应用模块类中进行全局设置。打开 `src/app/app.module.ts`，设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也具备了 Material Design 风格！

![在 iOS 设备上应用 Material Design 风格的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

借助 Sass 变量和平台特定样式，打造美观的 Ionic 应用变得轻而易举。你现在已经掌握了 Ionic 入门所需的一切知识。出发吧，去构建出色的应用！

如果你有兴趣将 Ionic 应用提升到新的高度，接下来请继续了解我们对 Appflow 的探索。