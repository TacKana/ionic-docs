# 打造属于你的风格！Ionic 主题

之前，我们将一次性使用的相机应用变成了一个史诗级的照片库。现在，让我们探索如何通过 Ionic 主题让照片库更具个性化。应用的视觉设计非常重要——幸运的是，Ionic 为我们提供了许多开箱即用的功能。您可以在 GitHub 上的 ["part 3" 文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3)中找到相关代码。

Ionic 有五个默认颜色，定义为 Sass 变量，可用于更改其 UI 组件的颜色：

![Ionic 用于主题的默认 Sass 颜色变量：primary、secondary、danger、light 和 dark。](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

您可以通过提供 base 和 contrast 属性进一步自定义每个颜色。对于大多数组件，Base 作为背景色，Contrast 作为文本色。这为您的样式提供了更灵活的控制：

![显示自定义 Ionic Sass 变量以及额外的 twitter 颜色 base 和 contrast 属性的代码片段。](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

您可以在 `src/theme/variables.scss` 中找到这些颜色的定义。

通过四处更改这些变量，您可以轻松更新应用的整个主题！尝试更改其中的几个，然后在 DevApp 中观察应用的更新。例如，将 Primary 的默认蓝色改为紫色：

```Css
$colors: (
  primary:    #7044ff,
)
```

但等等，还有更多！Ionic 会根据应用运行的设备自动提供特定平台的样式，为用户带来他们习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观。](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式比较')

在我们的应用中，这一点在标题和图标的样式上尤为明显。

如果您想要一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台风格），请在 App Module 类中进行全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本拥有了 Material Design 外观！

![在 iOS 设备上应用了 Material Design 样式的 Ionic 应用。](/img/guides/first-app-v3/ion-lab-md-styling.png 'Ionic iOS 上的 Material Design 样式')

使用 Sass 变量和特定平台样式创建外观华丽的 Ionic 应用非常容易。您现在已拥有开始使用 Ionic 所需的一切。出发吧，构建出色的应用！

如果您有兴趣将 Ionic 应用提升到新的水平，请继续我们的 Appflow 探索。
