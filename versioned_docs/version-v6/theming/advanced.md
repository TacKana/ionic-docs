---
title: 高级主题化
sidebar_label: 高级
---

import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>高级主题化：使用 CSS 快速自定义应用颜色 | Ionic</title>
  <meta
    name="description"
    content="基于 CSS 的主题化使应用能够通过加载 CSS 文件或更改 CSS 属性值来快速自定义颜色。阅读以了解 Ionic 高级主题化。"
  />
</head>

基于 CSS 的主题化使应用能够通过加载 CSS 文件或更改几个 CSS 属性值来快速自定义颜色。

## `theme-color` Meta

meta 标签的 `theme-color` 值指示浏览器可用于自定义页面显示或周围界面的颜色。这种 meta 标签还可以接受媒体查询，允许开发者为浅色和深色模式设置主题颜色。

`theme-color` meta 的 `content` 值必须包含有效的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noopener noreferrer">CSS 颜色</a>，不能包含 CSS 变量。

:::note
`theme-color` meta 控制的是在 Web 浏览器中或作为 PWA 运行时的界面主题，当应用使用 Capacitor 或 Cordova 部署时没有效果。如果您希望自定义状态栏下方的区域，我们建议使用 [Capacitor Status Bar Plugin](https://capacitorjs.com/docs/apis/status-bar)。
:::

下面的示例演示了如何使用 `theme-color` 在 iOS 15 上样式化浏览器界面。

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#3880ff" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#eb445a" />
```

| 浅色模式                                                                                         | 深色模式                                                                                           |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![浏览器界面中的浅色模式主题颜色。](/img/theming/theme-color-light.png '浅色模式主题颜色')        | ![浏览器界面中的深色模式主题颜色。](/img/theming/theme-color-dark.png '深色模式主题颜色')          |

`theme-color` meta 也可用于自定义 macOS Monterey 或更新版本上 Safari 的工具栏。

Safari on iOS 15 和 macOS 会自动确定要使用的适当主题颜色，但如果您需要对主题进行更多控制，添加此 meta 标签会很有用。

有一小部分颜色浏览器不会使用，因为它们会干扰浏览器界面。例如，在 macOS 上的 Safari 中设置 `content="red"` 将不起作用，因为该颜色会干扰工具栏中的红色关闭按钮。如果遇到这种情况，请尝试稍微调整您的颜色选择。

:::note
如果同时存在，浏览器将优先使用 `theme-color` meta，而不是 `manifest.json` 中的 `theme`。
:::

有关更多信息，请参阅 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color" target="_blank" rel="noopener noreferrer">MDN theme-color 文档</a>。

## 全局变量

虽然主题部分中的应用变量和阶梯变量对于更改应用的颜色很有用，但通常还需要在多个组件中使用的变量。以下变量在组件之间共享，用于更改全局内边距设置等。

### 应用变量

| 名称                      | 描述                                                                |
| ------------------------- | ------------------------------------------------------------------- |
| `--ion-font-family`       | 应用的字体族                                                        |
| `--ion-statusbar-padding` | 应用的状态栏顶部内边距                                              |
| `--ion-safe-area-top`     | 调整应用的 safe area 顶部 inset                                     |
| `--ion-safe-area-right`   | 调整应用的 safe area 右侧 inset                                     |
| `--ion-safe-area-bottom`  | 调整应用的 safe area 底部 inset                                     |
| `--ion-safe-area-left`    | 调整应用的 safe area 左侧 inset                                     |
| `--ion-margin`            | 调整[外边距属性](../layout/css-utilities.md#element-margin)的外边距 |
| `--ion-padding`           | 调整[内边距属性](../layout/css-utilities.md#element-padding)的内边距 |

### 网格变量

| 名称                           | 描述                               |
| ------------------------------ | ---------------------------------- |
| `--ion-grid-columns`           | 网格的列数                         |
| `--ion-grid-padding-xs`        | xs 断点处网格的内边距              |
| `--ion-grid-padding-sm`        | sm 断点处网格的内边距              |
| `--ion-grid-padding-md`        | md 断点处网格的内边距              |
| `--ion-grid-padding-lg`        | lg 断点处网格的内边距              |
| `--ion-grid-padding-xl`        | xl 断点处网格的内边距              |
| `--ion-grid-column-padding-xs` | xs 断点处网格列的内边距            |
| `--ion-grid-column-padding-sm` | sm 断点处网格列的内边距            |
| `--ion-grid-column-padding-md` | md 断点处网格列的内边距            |
| `--ion-grid-column-padding-lg` | lg 断点处网格列的内边距            |
| `--ion-grid-column-padding-xl` | xl 断点处网格列的内边距            |

## 变量的已知限制

### Alpha 问题

目前还没有完全支持对十六进制颜色进行 alpha 使用的<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">浏览器支持</a>。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">`rgba()`</a> 函数只接受 `R, G, B, A`（红, 绿, 蓝, Alpha）格式的值。以下代码展示了传递给 `rgba()` 的正确和错误值的示例。

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
  color: rgba(var(--violet-rgb), 0.5); /* 有效！ */
}
```

:::note
有关如何获取和设置 CSS 变量的更多信息，请参阅 [CSS 变量](css-variables.md)部分。
:::

Ionic 在多个组件中使用带有不透明度（alpha）的颜色。为了使其工作，这些属性必须以 RGB 格式提供。当更改任何以 `-rgb` 结尾的变体属性时，重要的是它们也以逗号分隔的格式提供，**不带括号**。以下是更改文本和背景颜色的一些示例。

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

[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)中的 CSS 变量目前不受支持，但有开放的草案来添加[自定义媒体查询](https://drafts.csswg.org/mediaqueries-5/#custom-mq)和[自定义环境变量](https://drafts.csswg.org/css-env-1/)来解决这个问题！但是，在当前的支持状态下，以下代码将**不**起作用：

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* 不起作用 :( */
}
```

### 修改 CSS 颜色变量

虽然可以使用 Sass 的内置函数轻松更改颜色，但目前还不容易修改 CSS 变量中设置的颜色。这可以通过在 CSS 中拆分 [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) 或 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) 通道并修改每个值来实现，但这很复杂且功能不完整。

这到底意味着什么？基本上，使用 CSS 预处理器（如 Sass）允许我们使用函数来操作单个颜色。例如，我们可以在 Sass 中创建以下颜色：

```scss
// 背景颜色、暗色调和亮色调
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// 文本颜色、较深和较浅
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

经过 Sass 编译器处理后，颜色将具有以下值：

| 变量              | 值                                              |
| ----------------- | ----------------------------------------------- |
| `$background`       | <CodeColor color="#3880ff">#3880ff</CodeColor>  |
| `$background-shade` | <CodeColor color="#3171e0">#3171e0</CodeColor>  |
| `$background-tint`  | <CodeColor color="#4c8dff">#4c8dff</CodeColor>  |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor>  |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor>  |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor>  |

但是，由于 CSS 变量可以在运行时设置且更加动态，目前无法使用简单的函数来操作它们。

这通常不是问题，但当应用需要动态主题化时，就会出现问题。在 Ionic 中，这就是为什么每种颜色都有[变体](colors.md#layered-colors)，以及为什么[阶梯颜色](themes.md#stepped-colors)对于主题化是必需的。

有关此问题的讨论和草案，请参阅 [color modification proposals](https://github.com/w3c/csswg-drafts/issues/3187)。
