---
title: 颜色
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

# 颜色

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组属性的集合，包括一个 `shade`（暗色调）和 `tint`（亮色调），在 Ionic 中广泛使用。

可以通过 `color` 属性将颜色应用于 Ionic 组件，以更改默认颜色。请注意在下面的按钮中，文本和背景会根据设置的 `color` 而变化。当按钮上没有设置 `color` 时，默认使用 `primary` 颜色。

```html
<ion-button>Default（默认）</ion-button>
<ion-button color="primary">Primary（主要）</ion-button>
<ion-button color="secondary">Secondary（次要）</ion-button>
<ion-button color="tertiary">Tertiary（第三）</ion-button>
<ion-button color="success">Success（成功）</ion-button>
<ion-button color="warning">Warning（警告）</ion-button>
<ion-button color="danger">Danger（危险）</ion-button>
<ion-button color="light">Light（浅色）</ion-button>
<ion-button color="medium">Medium（中等）</ion-button>
<ion-button color="dark">Dark（深色）</ion-button>
```

## 分层颜色

每种颜色包含以下属性：`base`（基础色）、`contrast`（对比色）、`shade`（暗色调）和 `tint`（亮色调）。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，它是相同的颜色，只是使用 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>。请参阅 [Alpha 问题](advanced.md#alpha-问题)了解为什么还需要 `rgb` 属性。从下面的下拉列表中选择，查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要更改颜色的默认值，需要设置该颜色的所有列出的变体。例如，要将 secondary（次要）颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，设置以下 CSS 属性：

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0, 102, 0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

当 `secondary` 应用于按钮时，不仅使用基础色 <CodeColor color="#006600">#006600</CodeColor>，还使用对比色 <CodeColor color="#ffffff">#ffffff</CodeColor> 作为文本，以及暗色调 <CodeColor color="#005a00">#005a00</CodeColor> 和亮色调 <CodeColor color="#1a751a">#1a751a</CodeColor> 用于按钮的不同状态。

:::note
不确定如何从基础色获取变体颜色？试试我们的[颜色生成器](color-generator.md)，它可以计算所有变体并提供可直接复制粘贴到应用中的代码！
:::

有关 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过设置 Ionic 组件上的 `color` 属性，或使用 CSS 进行样式设置，来添加颜色以便在整个应用中使用。继续阅读以了解如何手动添加新颜色，或使用下面的[新建颜色创建器](#新建颜色创建器)快速生成新颜色的代码并复制粘贴到应用中。

要添加新颜色，首先在根级别定义该颜色所有变体的 CSS 变量。例如，要添加一个名为 `favorite` 的新颜色，我们可以定义以下变量：

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105, 187, 123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255, 255, 255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

然后，创建一个使用这些 CSS 变量的新类。类的格式**必须**为 `.ion-color-{COLOR}`，其中 `{COLOR}` 是要添加的颜色名称：

```css
.ion-color-favorite {
  --ion-color-base: var(--ion-color-favorite);
  --ion-color-base-rgb: var(--ion-color-favorite-rgb);
  --ion-color-contrast: var(--ion-color-favorite-contrast);
  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);
  --ion-color-shade: var(--ion-color-favorite-shade);
  --ion-color-tint: var(--ion-color-favorite-tint);
}
```

添加类之后，可以在任何支持 `color` 属性的 Ionic 组件上使用该颜色。下面是在 Ionic 按钮上使用 `favorite` 颜色的示例：

```html
<ion-button color="favorite">Favorite（收藏）</ion-button>
```

在根级别定义的 CSS 变量也可以用于使用 CSS 对任何元素进行样式设置：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

有关设置和使用 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 新建颜色创建器

在下面通过更改名称和值来创建新颜色，然后将代码复制粘贴到你的项目中。

<NewColorGenerator />
