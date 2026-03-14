# 打造专属风格！Ionic 主题定制

之前，我们已经将单一功能的相机应用转变成了一个功能丰富的相册应用。现在，让我们探索如何通过 Ionic 主题定制来让这个相册应用更具个人特色。应用程序的视觉设计至关重要——幸运的是，Ionic 为我们提供了大量开箱即用的功能。你可以在 GitHub 的 ["part 3" 文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) 中找到相关代码。

Ionic 提供了五种默认颜色，定义为 Sass 变量，可用于更改其 UI 组件的颜色：

![Ionic 主题定制的五个默认 Sass 颜色变量：primary、secondary、danger、light 和 dark。](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

你可以通过提供 base（基础色）和 contrast（对比色）属性进一步自定义每种颜色。Base 在大多数组件中充当背景色，而 contrast 则作为文本颜色。这为你提供了更灵活的样式控制：

![显示自定义 Sass 变量（包含 base 和 contrast 属性）的代码片段。](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

你可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

通过修改这些变量，你可以轻松更新整个应用程序的主题风格！尝试更改其中一些变量，并观察 DevApp 中应用的更新效果。例如，将默认的蓝色 Primary 颜色更改为紫色：

```Css
$colors: (
  primary:    #7044ff,
)
```

但等等，还有更多功能！Ionic 会根据应用运行的设备自动提供平台特定的样式，给你的用户带来熟悉的本机外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这一点在标题和图标样式的差异上表现得尤为明显。

如果你希望保持一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），可以在 App Module 类中进行全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也拥有了 Material Design 的外观！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

使用 Sass 变量和平台特定的样式，创建外观精美的 Ionic 应用变得轻而易举。现在，你已经掌握了开始使用 Ionic 所需的一切知识。去吧，去构建出色的应用程序！

如果你有兴趣将 Ionic 应用提升到新的水平，请继续探索我们接下来要介绍的 Appflow。