---
title: Advanced Theming
sidebar_label: Advanced
initialTab: 'preview'
inlineHtmlPreviews: true
---

import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>高级主题定制：使用 CSS 快速自定义应用颜色 | Ionic</title>
  <meta
    name="description"
    content="基于 CSS 的主题定制功能让应用能够通过加载 CSS 文件或修改 CSS 属性值来快速自定义颜色。阅读本文了解 Ionic 高级主题定制。"
  />
</head>

基于 CSS 的主题定制功能让应用能够通过加载 CSS 文件或修改少量 CSS 属性值来快速自定义颜色。

## `theme-color` 元标签

`theme-color` 元标签的值表示浏览器可用于自定义页面或周边界面显示的颜色。这种元标签还可以接受媒体查询，允许开发者同时为浅色模式和深色模式设置主题颜色。

`theme-color` 元标签的 `content` 值必须包含有效的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noopener noreferrer">CSS 颜色</a>，且不能包含 CSS 变量。

:::note
`theme-color` 元标签控制在 Web 浏览器或作为 PWA 运行时的界面主题，在使用 Capacitor 或 Cordova 部署应用时没有效果。如果您希望自定义状态栏下方的区域，我们建议使用 [Capacitor 状态栏插件](https://capacitorjs.com/docs/apis/status-bar)。
:::

下面的示例演示了如何使用 `theme-color` 来样式化 iOS 15 上的浏览器界面。

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#0054e9" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#eb445a" />
```

| 浅色模式                                                                                                         | 深色模式                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![浏览器界面中的浅色模式主题颜色。](/img/theming/theme-color-light.png '浅色模式主题颜色') | ![浏览器界面中的深色模式主题颜色。](/img/theming/theme-color-dark.png '深色模式主题颜色') |

`theme-color` 元标签也可以用于自定义 macOS Monterey 或更新版本上 Safari 的工具栏。

iOS 15 和 macOS 上的 Safari 会自动确定合适的主题颜色来使用，但如果您需要更多控制权，添加这个元标签是有用的。

有一小部分颜色浏览器不会使用，因为它们会干扰浏览器界面。例如，在 macOS 的 Safari 中设置 `content="red"` 将不起作用，因为该颜色会干扰工具栏中的红色关闭按钮。如果您遇到这种情况，请尝试稍微调整您的颜色选择。

:::note
如果同时存在 `theme-color` 元标签和 `manifest.json` 中的 `theme`，浏览器将优先使用 `theme-color` 元标签。
:::

更多信息，请参阅 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color" target="_blank" rel="noopener noreferrer">MDN theme-color 文档</a>。

## 全局变量

虽然主题部分中的应用变量和阶梯变量对于更改应用颜色很有用，但通常需要一些在多个组件中使用的变量。以下变量在组件之间共享，用于更改全局内边距设置等。

### 应用变量

| 名称                      | 描述                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| `--ion-font-family`       | 应用的字体家族                                                                     |
| `--ion-statusbar-padding` | 应用的状态栏顶部内边距                                                           |
| `--ion-safe-area-top`     | 调整应用的安全区域顶部插入边距                                                  |
| `--ion-safe-area-right`   | 调整应用的安全区域右侧插入边距                                                |
| `--ion-safe-area-bottom`  | 调整应用的安全区域底部插入边距                                               |
| `--ion-safe-area-left`    | 调整应用的安全区域左侧插入边距                                                 |
| `--ion-margin`            | 调整[边距属性](../layout/css-utilities.md#element-margin) 的边距    |
| `--ion-padding`           | 调整[内边距属性](../layout/css-utilities.md#element-padding) 的内边距 |

### 网格变量

| 名称                           | 描述                                    |
| ------------------------------ | ---------------------------------------------- |
| `--ion-grid-columns`           | 网格中的列数                  |
| `--ion-grid-padding-xs`        | xs 断点下网格的内边距         |
| `--ion-grid-padding-sm`        | sm 断点下网格的内边距         |
| `--ion-grid-padding-md`        | md 断点下网格的内边距         |
| `--ion-grid-padding-lg`        | lg 断点下网格的内边距         |
| `--ion-grid-padding-xl`        | xl 断点下网格的内边距         |
| `--ion-grid-column-padding-xs` | xs 断点下网格列的内边距 |
| `--ion-grid-column-padding-sm` | sm 断点下网格列的内边距 |
| `--ion-grid-column-padding-md` | md 断点下网格列的内边距 |
| `--ion-grid-column-padding-lg` | lg 断点下网格列的内边距 |
| `--ion-grid-column-padding-xl` | xl 断点下网格列的内边距 |

## 变量的已知限制

### Alpha 问题

目前还没有完整的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">浏览器支持</a> 用于十六进制颜色的 Alpha 通道使用。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">`rgba()`</a> 函数只接受 `R, G, B, A`（红、绿、蓝、透明度）格式的值。以下代码显示了传递给 `rgba()` 的正确和错误值的示例。

```css
/* 这些示例使用相同的颜色：blueviolet。 */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), 0.5); /* 错误！不支持十六进制。 */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), 0.5); /* 成功！ */
}
```

:::note
更多关于如何获取和设置 CSS 变量的信息，请参阅 [CSS 变量](css-variables.md) 部分。
:::

Ionic 在多个组件中使用了带有透明度（Alpha）的颜色。为了使这正常工作，那些属性必须以 RGB 格式提供。更改任何以 `-rgb` 结尾的属性时，**必须以逗号分隔的格式提供，且不带括号**，这一点很重要。下面是一些更改文本和背景颜色的示例。

```css
:root {
  /* 这些示例使用相同的颜色：sienna。 */
  --ion-text-color: #a0522d;
  --ion-text-color-rgb: 160, 82, 45;

  /* 这些示例使用相同的颜色：lightsteelblue。 */
  --ion-background-color: #b0c4de;
  --ion-background-color-rgb: 176, 196, 222;
}
```

请注意，RGB 格式的颜色与十六进制属性是完全相同的颜色，但现在可以与 `rgba()` 一起使用。例如，`--ion-text-color-rgb` 现在可以按以下方式使用：

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```

### 媒体查询中的变量

目前不支持在 [媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) 中使用 CSS 变量，但有开放草案提议添加 [自定义媒体查询](https://drafts.csswg.org/mediaqueries-5/#custom-mq) 和 [自定义环境变量](https://drafts.csswg.org/css-env-1/)，这将解决这个问题！然而，在目前的支持状态下，以下代码将**无法**工作：

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* 不工作 :( */
}
```

### 修改 CSS 颜色变量

虽然可以轻松使用 Sass 的内置函数来修改颜色，但目前修改在 CSS 变量中设置的颜色并不那么容易。这可以通过在 CSS 中拆分 [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) 或 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) 通道并修改每个值来实现，但这很复杂且功能不全。

这到底是什么意思？基本上，使用 CSS 预处理器（如 Sass）允许我们使用函数来操作单个颜色。例如，我们可以在 Sass 中创建以下颜色：

```scss
// 背景颜色、暗色和亮色
$background: #0054e9;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// 文本颜色、更深和更浅
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

经过 Sass 编译器处理后，颜色将具有以下值：

| 变量            | 值                                          |
| ------------------- | ---------------------------------------------- |
| `$background`       | <CodeColor color="#0054e9">#0054e9</CodeColor> |
| `$background-shade` | <CodeColor color="#004acd">#004acd</CodeColor> |
| `$background-tint`  | <CodeColor color="#1a65eb">#1a65eb</CodeColor> |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor> |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor> |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor> |

然而，由于 CSS 变量可以在运行时设置并且更具动态性，目前无法使用简单的函数来操作它们。

这通常不是问题，但当应用需要动态主题时，就会带来问题。在 Ionic 中，这就是为什么每个颜色都有 [变体](colors.md#layered-colors)，以及为什么主题定制需要 [阶梯颜色](themes.md#stepped-colors) 的原因。

有关于 [颜色修改提案](https://github.com/w3c/csswg-drafts/issues/3187) 的草案和讨论，这将使这成为可能。

## 安全区域内边距

显示器的安全区域是指未被设备缺口（刘海）、状态栏或属于设备 UI 而非应用的其他元素覆盖的部分。安全区域的尺寸因设备和方向（纵向或横向）而异。

例如，以下是 iPhone 14 Pro Max 的截图。红色部分是安全区域，白色部分是应用内容会被覆盖的地方。

| 纵向                                                                       | 横向                                                                        |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| <img src={require('@site/static/img/theming/ios-portrait-top.png').default} /> | <img src={require('@site/static/img/theming/ios-landscape-left.png').default} /> |

为了适应这一点，Ionic 会自动为某些组件添加内边距。例如，放置在 `ion-modal` 中的第一个 `ion-toolbar` 组件将根据设备安全区域的顶部边缘接收内边距。这样可以避免设备的缺口覆盖标题文本。

<img src={require('@site/static/img/theming/modal-header-padding.png').default} />

通过 CSS 使用 [应用变量](#application-variables) 中描述的 `--ion-safe-area-(dir)` 变量可以手动调整此内边距。可以为整个应用程序设置值，也可以基于每个组件设置。例如：

```css
html {
  --ion-safe-area-left: 25px;
}

ion-modal {
  --ion-safe-area-top: 0;
}
```