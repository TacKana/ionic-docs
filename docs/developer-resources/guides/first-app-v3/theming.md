# 打造专属风格！Ionic 主题定制

之前，我们已经将单功能的相机应用升级为史诗级的照片画廊应用。现在，让我们探索如何通过 Ionic 主题定制，让这个照片画廊应用真正成为我们自己的作品。应用的可视化设计极其重要——幸运的是，Ionic 为我们提供了大量开箱即用的功能。你可以在 [GitHub 的“part 3”文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) 中找到相关代码。

Ionic 提供了五种默认颜色，定义为 Sass 变量，可用于更改其 UI 组件的颜色：

![Ionic 用于主题定制的默认 Sass 颜色变量：'primary'、'secondary'、'danger'、'light' 和 'dark'](/img/guides/first-app-v3/v3-theming.png '默认 Ionic Sass 变量')

你可以通过提供 base 和 contrast 属性进一步自定义每种颜色。对于大多数组件，base 充当背景色，contrast 充当文本颜色。这为你提供了更灵活的风格控制：

![显示自定义 Ionic Sass 变量的代码片段，包含额外的 twitter 颜色 base 和 contrast 属性](/img/guides/first-app-v3/v3-themeColors.png '自定义 Ionic Sass 变量')

这些颜色定义在 `src/theme/variables.scss` 文件中。

通过在这里或那里更改这些变量，你可以轻松更新整个应用的主题！尝试更改其中几个变量，观察 DevApp 中的应用如何更新。例如，将 Primary 的默认蓝色更改为紫色：

```css
$colors: (
  primary:    #7044ff,
)
```

但是，还有更多功能！Ionic 会根据应用运行的设备自动提供平台特定的样式，赋予用户习惯的原生外观和感觉：

![比较 Ionic 应用在 iOS 和 Android 平台上的原生外观](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic 平台特定样式对比')

在我们的应用中，这在标题栏和图标的样式上表现得尤为明显。

如果你希望保持一致性，可以告诉 Ionic 无论平台如何都使用相同的模式。例如，要应用 Material Design（Android 的平台样式），请在 App Module 类中进行全局设置。打开 `src/app/app.module.ts`，然后设置 `mode` 属性：

```javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

现在，我们应用的 iOS 版本也拥有了 Material Design 的外观！

![在 iOS 设备上应用 Material Design 样式的 Ionic 应用](/img/guides/first-app-v3/ion-lab-md-styling.png 'iOS 上的 Ionic Material Design 样式')

通过 Sass 变量和平台特定样式，创建外观惊艳的 Ionic 应用变得轻而易举。现在，你已经掌握了开始使用 Ionic 所需的一切。去构建出色的应用吧！

如果你有兴趣将 Ionic 应用提升到新的水平，请继续探索接下来的 Appflow 内容。