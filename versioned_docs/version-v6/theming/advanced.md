---
title: Advanced Theming
sidebar_label: Advanced
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

`theme-color` 元标签的值为浏览器提供了一种颜色，用于自定义页面或周围界面的显示效果。这种元标签还可以接受媒体查询，允许开发者为浅色和深色模式分别设置主题颜色。

`theme-color` 元标签的 `content` 值必须包含有效的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noopener noreferrer">CSS 颜色</a>，且不能包含 CSS 变量。

:::note
`theme-color` 元标签控制在网页浏览器或 PWA 中运行时的界面主题，当应用通过 Capacitor 或 Cordova 部署时无效。如果你需要自定义状态栏下方的区域，我们推荐使用 [Capacitor 状态栏插件](https://capacitorjs.com/docs/apis/status-bar)。
:::

以下示例演示了如何使用 `theme-color` 在 iOS 15 上自定义浏览器界面样式。

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#3880ff" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#eb445a" />
```

| 浅色模式                                                                                                           | 深色模式                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![浅色模式下浏览器界面的主题颜色。](/img/theming/theme-color-light.png '浅色模式主题颜色') | ![深色模式下浏览器界面的主题颜色。](/img/theming/theme-color-dark.png '深色模式主题颜色') |

`theme-color` 元标签也可用于自定义 macOS Monterey 或更新版本上 Safari 的工具栏样式。

iOS 15 和 macOS 上的 Safari 会自动确定合适的主题颜色，但如果你需要更精确的控制，添加此元标签会很有用。

有一小部分颜色浏览器不会使用，因为它们会干扰浏览器界面。例如，在 macOS 的 Safari 中设置 `content="red"` 是无效的，因为该颜色与工具栏中的红色关闭按钮冲突。如果你遇到这种情况，可以尝试稍微调整颜色选择。

:::note
如果同时存在 `theme-color` 元标签和 `manifest.json` 中的 `theme`，浏览器会优先使用 `theme-color` 元标签。
:::

更多信息，请参阅 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color" target="_blank" rel="noopener noreferrer">MDN theme-color 文档</a>。

## 全局变量

虽然主题章节中的应用变量和阶梯变量有助于改变应用颜色，但经常需要一些在多个组件中使用的变量。以下变量在组件间共享，用于更改全局内边距设置等。

### 应用变量

| 名称                       | 描述                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `--ion-font-family`        | 应用的字体家族                                                                     |
| `--ion-statusbar-padding`  | 应用的状态栏顶部内边距                                                             |
| `--ion-safe-area-top`      | 调整应用的安全区域顶部内边距                                                       |
| `--ion-safe-area-right`    | 调整应用的安全区域右侧内边距                                                       |
| `--ion-safe-area-bottom`   | 调整应用的安全区域底部内边距                                                       |
| `--ion-safe-area-left`     | 调整应用的安全区域左侧内边距                                                       |
| `--ion-margin`             | 调整[外边距属性](../layout/css-utilities.md#element-margin)的边距值              |
| `--ion-padding`            | 调整[内边距属性](../layout/css-utilities.md#element-padding)的内边距值           |

### 网格变量

| 名称                              | 描述                                     |
| --------------------------------- | ---------------------------------------- |
| `--ion-grid-columns`              | 网格的列数                               |
| `--ion-grid-padding-xs`           | 在 xs 断点下网格的内边距                 |
| `--ion-grid-padding-sm`           | 在 sm 断点下网格的内边距                 |
| `--ion-grid-padding-md`           | 在 md 断点下网格的内边距                 |
| `--ion-grid-padding-lg`           | 在 lg 断点下网格的内边距                 |
| `--ion-grid-padding-xl`           | 在 xl 断点下网格的内边距                 |
| `--ion-grid-column-padding-xs`    | 在 xs 断点下网格列的内边距               |
| `--ion-grid-column-padding-sm`    | 在 sm 断点下网格列的内边距               |
| `--ion-grid-column-padding-md`    | 在 md 断点下网格列的内边距               |
| `--ion-grid-column-padding-lg`    | 在 lg 断点下网格列的内边距               |
| `--ion-grid-column-padding-xl`    | 在 xl 断点下网格列的内边距               |

## 变量的已知限制

### 透明度问题

目前浏览器对十六进制颜色的透明度使用还没有完整的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">支持</a>。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">`rgba()`</a> 函数只接受 `R, G, B, A`（红、绿、蓝、透明度）格式的值。以下代码展示了传递给 `rgba()` 的正确和错误值的示例。

```css
/* 这些示例使用相同的颜色：蓝紫色。 */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), 0.5); /* 错误！不支持十六进制。 */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), 0.5); /* 有效！ */
}
```

:::note
更多关于如何获取和设置 CSS 变量的信息，请参阅 [CSS 变量](css-variables.md) 章节。
:::

Ionic 在多个组件中使用了带有透明度（alpha）的颜色。为了使此功能正常工作，这些属性必须以 RGB 格式提供。当更改任何以 `-rgb` 结尾的属性时，重要的是它们也必须以逗号分隔的格式提供，**且不带括号**。以下是一些更改文本和背景颜色的示例。

```css
:root {
  /* 这些示例使用相同的颜色：赭色。 */
  --ion-text-color: #a0522d;
  --ion-text-color-rgb: 160, 82, 45;

  /* 这些示例使用相同的颜色：浅钢蓝色。 */
  --ion-background-color: #b0c4de;
  --ion-background-color-rgb: 176, 196, 222;
}
```

请注意，RGB 格式的颜色与十六进制属性完全相同，但现在可以与 `rgba()` 一起使用。例如，现在可以按以下方式使用 `--ion-text-color-rgb`：

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```

### 媒体查询中的变量

目前 [媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) 中的 CSS 变量尚不支持，但已有开放草案来添加 [自定义媒体查询](https://drafts.csswg.org/mediaqueries-5/#custom-mq) 和 [自定义环境变量](https://drafts.csswg.org/css-env-1/)，这将解决此问题！然而，在当前的支持状态下，以下代码将**无法**工作：

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* 无法工作 :( */
}
```

### 修改 CSS 颜色变量

虽然在 Sass 中使用内置函数可以轻松修改颜色，但目前修改 CSS 变量中设置的颜色并不容易。在 CSS 中可以通过拆分 [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) 或 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) 通道并修改每个值来实现，但这很复杂且功能不全。

这具体意味着什么？基本上，使用 CSS 预处理器（如 Sass）允许我们使用函数来操作单个颜色。例如，我们可以在 Sass 中创建以下颜色：

```scss
// 背景颜色、暗色调和亮色调
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// 文本颜色、更深色和更浅色
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

经过 Sass 编译器处理后，颜色将具有以下值：

| 变量                | 值                                          |
| ------------------- | ---------------------------------------------- |
| `$background`       | <CodeColor color="#3880ff">#3880ff</CodeColor> |
| `$background-shade` | <CodeColor color="#3171e0">#3171e0</CodeColor> |
| `$background-tint`  | <CodeColor color="#4c8dff">#4c8dff</CodeColor> |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor> |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor> |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor> |

然而，由于 CSS 变量可以在运行时设置且更具动态性，目前无法使用简单函数来操作它们。

这通常不是问题，但当应用需要动态主题时就会带来困扰。在 Ionic 中，这就是为什么每个颜色都有[变体](colors.md#layered-colors)，以及为什么主题定制需要[阶梯颜色](themes.md#stepped-colors)的原因。

目前有草案和议题正在讨论[颜色修改提案](https://github.com/w3c/csswg-drafts/issues/3187)，这将使这一功能成为可能。