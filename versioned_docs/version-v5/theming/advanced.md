---
title: 高级主题化
sidebar_label: 高级
---

import CodeColor from '@components/page/theming/CodeColor';

# 高级主题化

基于 CSS 的主题化使应用能够通过加载 CSS 文件或更改几个 CSS 属性值来快速自定义颜色。

## 全局变量

虽然主题部分中的应用和阶梯变量对于更改应用的颜色很有用，但通常还需要在多个组件中使用的变量。以下变量在组件之间共享，用于更改全局内边距设置等。

### 应用变量

| 名称                      | 描述                                                              |
| ------------------------- | ----------------------------------------------------------------- |
| `--ion-font-family`       | 应用的字体家族                                                    |
| `--ion-statusbar-padding` | 应用的状态栏顶部内边距                                            |
| `--ion-safe-area-top`     | 调整应用的安全区域顶部插入                                         |
| `--ion-safe-area-right`   | 调整应用的安全区域右侧插入                                         |
| `--ion-safe-area-bottom`  | 调整应用的安全区域底部插入                                         |
| `--ion-safe-area-left`    | 调整应用的安全区域左侧插入                                         |
| `--ion-margin`            | 调整[边距属性](../layout/css-utilities.md#元素边距)的边距          |
| `--ion-padding`           | 调整[内边距属性](../layout/css-utilities.md#元素内边距)的内边距    |

### 网格变量

| 名称                           | 描述                                      |
| ------------------------------ | ----------------------------------------- |
| `--ion-grid-columns`           | 网格中的列数                              |
| `--ion-grid-padding-xs`        | xs 断点处的网格内边距                     |
| `--ion-grid-padding-sm`        | sm 断点处的网格内边距                     |
| `--ion-grid-padding-md`        | md 断点处的网格内边距                     |
| `--ion-grid-padding-lg`        | lg 断点处的网格内边距                     |
| `--ion-grid-padding-xl`        | xl 断点处的网格内边距                     |
| `--ion-grid-column-padding-xs` | xs 断点处的网格列内边距                   |
| `--ion-grid-column-padding-sm` | sm 断点处的网格列内边距                   |
| `--ion-grid-column-padding-md` | md 断点处的网格列内边距                   |
| `--ion-grid-column-padding-lg` | lg 断点处的网格列内边距                   |
| `--ion-grid-column-padding-xl` | xl 断点处的网格列内边距                   |

## 已知限制

### Alpha 问题

目前还没有完整的<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">浏览器支持</a>用于十六进制颜色的 alpha 使用。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">`rgba()`</a> 函数只接受 `R, G, B, A`（红, 绿, 蓝, Alpha）格式的值。以下代码展示了传递给 `rgba()` 的正确和错误值的示例。

```css
/* 这些示例使用相同的颜色：blueviolet（蓝紫色） */
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

Ionic 在多个组件中使用带有不透明度（alpha）的颜色。为了使其正常工作，这些属性必须以 RGB 格式提供。在更改任何以 `-rgb` 结尾的变体属性时，重要的是它们也必须以逗号分隔的格式提供，**不带括号**。以下是一些更改文本和背景颜色的示例。

```css
:root {
  /* 这些示例使用相同的颜色：sienna（赭色） */
  --ion-text-color: #a0522d;
  --ion-text-color-rgb: 160, 82, 45;

  /* 这些示例使用相同的颜色：lightsteelblue（亮钢蓝） */
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

[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)中的 CSS 变量目前不受支持，但有开放的草案来解决这个问题，包括[自定义媒体查询](https://drafts.csswg.org/mediaqueries-5/#custom-mq)和[自定义环境变量](https://drafts.csswg.org/css-env-1/)。然而，在当前的支持状态下，以下代码将**不能**工作：

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* 不起作用 :( */
}
```

### 修改 CSS 颜色变量

虽然使用 Sass 的内置函数可以轻松地改变颜色，但目前修改 CSS 变量中设置的颜色并不那么容易。这可以在 CSS 中通过拆分 [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) 或 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) 通道并修改每个值来实现，但这样做很复杂且功能不完整。

这到底意味着什么？基本上，使用 CSS 预处理器（如 Sass）允许我们使用函数来操作单一颜色。例如，我们可以在 Sass 中创建以下颜色：

```scss
// 背景颜色、暗色调和亮色调
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// 文本颜色，更深和更浅
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

经过 Sass 编译器处理后，颜色将具有以下值：

| 变量               | 值                                              |
| ------------------- | ----------------------------------------------- |
| `$background`       | <CodeColor color="#3880ff">#3880ff</CodeColor>  |
| `$background-shade` | <CodeColor color="#3171e0">#3171e0</CodeColor>  |
| `$background-tint`  | <CodeColor color="#4c8dff">#4c8dff</CodeColor>  |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor>  |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor>  |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor>  |

然而，由于 CSS 变量可以在运行时设置且更加动态，目前无法使用简单的函数来操作它们。

这通常不是问题，但当应用需要动态主题化时就会出现问题。在 Ionic 中，这就是为什么[每种颜色都有变体](colors.md#分层颜色)，以及为什么[阶梯颜色](themes.md#阶梯颜色)对主题化是必要的。

有一些草案和 issues 在讨论[颜色修改提案](https://github.com/w3c/csswg-drafts/issues/3187)，这将使这成为可能。
