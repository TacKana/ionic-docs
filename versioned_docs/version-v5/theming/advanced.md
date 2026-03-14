---
title: 高级主题定制
sidebar_label: 高级
---

import CodeColor from '@components/page/theming/CodeColor';

# 高级主题定制

基于 CSS 的主题系统能够通过加载 CSS 文件或修改少量 CSS 属性值，快速实现应用的颜色自定义。

## 全局变量

虽然主题部分的应用变量和阶梯色变量在修改应用颜色时非常有用，但通常还需要一些在多个组件中使用的共享变量。以下变量在组件间共享，用于调整全局间距设置等。

### 应用变量

| 名称                      | 描述                                                                         |
| ------------------------- | ---------------------------------------------------------------------------- |
| `--ion-font-family`       | 应用的字体族                                                                 |
| `--ion-statusbar-padding` | 应用顶部状态栏的内边距                                                       |
| `--ion-safe-area-top`     | 调整应用顶部安全区域的内边距                                                 |
| `--ion-safe-area-right`   | 调整应用右侧安全区域的内边距                                                 |
| `--ion-safe-area-bottom`  | 调整应用底部安全区域的内边距                                                 |
| `--ion-safe-area-left`    | 调整应用左侧安全区域的内边距                                                 |
| `--ion-margin`            | 调整[外边距属性](../layout/css-utilities.md#element-margin)的外边距          |
| `--ion-padding`           | 调整[内边距属性](../layout/css-utilities.md#element-padding)的内边距         |

### 网格变量

| 名称                           | 描述                                       |
| ------------------------------ | ------------------------------------------ |
| `--ion-grid-columns`           | 网格的列数                                 |
| `--ion-grid-padding-xs`        | xs 断点下网格的内边距                      |
| `--ion-grid-padding-sm`        | sm 断点下网格的内边距                      |
| `--ion-grid-padding-md`        | md 断点下网格的内边距                      |
| `--ion-grid-padding-lg`        | lg 断点下网格的内边距                      |
| `--ion-grid-padding-xl`        | xl 断点下网格的内边距                      |
| `--ion-grid-column-padding-xs` | xs 断点下网格列的内边距                    |
| `--ion-grid-column-padding-sm` | sm 断点下网格列的内边距                    |
| `--ion-grid-column-padding-md` | md 断点下网格列的内边距                    |
| `--ion-grid-column-padding-lg` | lg 断点下网格列的内边距                    |
| `--ion-grid-column-padding-xl` | xl 断点下网格列的内边距                    |

## 已知限制

### Alpha 通道问题

目前浏览器对十六进制颜色使用 Alpha 通道的支持尚不完善。`rgba()` 函数仅接受 `R, G, B, A`（红、绿、蓝、透明度）格式的值。以下代码展示了传递给 `rgba()` 的正确和错误值示例。

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
  color: rgba(var(--violet-rgb), 0.5); /* 正确！ */
}
```

:::note
有关如何获取和设置 CSS 变量的更多信息，请参阅 [CSS 变量](css-variables.md) 部分。
:::

Ionic 在多个组件中使用了带透明度（Alpha）的颜色。为了使这些组件正常工作，相关属性必须采用 RGB 格式提供。当修改任何以 `-rgb` 结尾的属性时，务必以逗号分隔的格式提供，且**不带括号**。以下是一些修改文本和背景颜色的示例。

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

请注意，RGB 格式的颜色与十六进制属性表示的颜色完全相同，但现在可以与 `rgba()` 一起使用。例如，`--ion-text-color-rgb` 现在可以这样使用：

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```

### 媒体查询中的变量

目前在[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)中使用 CSS 变量尚不支持，但已有开放草案计划添加[自定义媒体查询](https://drafts.csswg.org/mediaqueries-5/#custom-mq)和[自定义环境变量](https://drafts.csswg.org/css-env-1/)来解决这个问题！然而，在当前的支持状态下，以下代码将**无法**工作：

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* 无法工作 :( */
}
```

### 修改 CSS 颜色变量

虽然使用 Sass 内置函数可以轻松调整颜色，但目前修改 CSS 变量中设置的颜色并不那么简单。在 CSS 中，可以通过拆分 [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) 或 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) 通道并修改每个值来实现，但这比较复杂且功能尚不完善。

这具体意味着什么？基本上，使用 CSS 预处理器（如 Sass）允许我们使用函数来操作单个颜色。例如，我们可以在 Sass 中创建以下颜色：

```scss
// 背景颜色、暗色和亮色变体
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// 文本颜色、更深和更浅变体
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

经过 Sass 编译器处理后，颜色将具有以下值：

| 变量                | 值                                              |
| ------------------- | ----------------------------------------------- |
| `$background`       | <CodeColor color="#3880ff">#3880ff</CodeColor> |
| `$background-shade` | <CodeColor color="#3171e0">#3171e0</CodeColor> |
| `$background-tint`  | <CodeColor color="#4c8dff">#4c8dff</CodeColor> |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor> |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor> |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor> |

然而，由于 CSS 变量可以在运行时设置且更具动态性，目前无法使用简单函数来操作它们。

这通常不是问题，但当应用需要动态主题时，就会带来挑战。在 Ionic 中，这就是为什么[每种颜色都有变体](colors.md#layered-colors)，以及为什么[阶梯色](themes.md#stepped-colors)对于主题定制是必要的。

已有草案和议题正在讨论[颜色修改提案](https://github.com/w3c/csswg-drafts/issues/3187)，这将使这一功能成为可能。