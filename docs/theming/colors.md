---
title: 颜色
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS 颜色组件：设置样式或更改默认应用颜色</title>
  <meta
    name="description"
    content="Ionic 有九种默认颜色，可用于更改许多组件的颜色。了解如何利用 Ionic CSS 颜色属性为应用设置样式。"
  />
</head>

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一个包含多个属性的集合，包括在 Ionic 中使用的 `shade` 和 `tint`。

可以将颜色应用于 Ionic 组件，通过使用 `color` 属性来更改默认颜色。请注意，下方按钮的文本和背景会根据设置的 `color` 而变化。当按钮未设置 `color` 时，默认使用 `primary` 颜色。

```html
<ion-button>默认</ion-button>
<ion-button color="primary">主要</ion-button>
<ion-button color="secondary">次要</ion-button>
<ion-button color="tertiary">第三</ion-button>
<ion-button color="success">成功</ion-button>
<ion-button color="warning">警告</ion-button>
<ion-button color="danger">危险</ion-button>
<ion-button color="light">浅色</ion-button>
<ion-button color="medium">中等</ion-button>
<ion-button color="dark">深色</ion-button>
```

## 分层颜色

每种颜色由以下属性组成：`base`（基础）、`contrast`（对比）、`shade`（暗色调）和 `tint`（亮色调）。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，该属性是相同的颜色，只是使用 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>。请参阅[Alpha 问题](advanced.md#alpha-问题)了解为什么还需要 `rgb` 属性的解释。从下面的下拉列表中选择，查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要更改颜色的默认值，应设置该颜色的所有列出的变体。例如，要将次要颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，请设置以下 CSS 属性：

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

当将 `secondary` 应用于按钮时，不仅使用基础颜色 <CodeColor color="#006600">#006600</CodeColor>，文本还使用对比颜色 <CodeColor color="#ffffff">#ffffff</CodeColor>，以及按钮不同状态的暗色调 <CodeColor color="#005a00">#005a00</CodeColor> 和亮色调 <CodeColor color="#1a751a">#1a751a</CodeColor> 颜色。

:::note
不确定如何从基础颜色获得各种变体颜色？试试我们的[颜色生成器](color-generator.md)，它可以计算所有变体并提供可直接复制/粘贴到应用中的代码！
:::

有关 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过在 Ionic 组件上设置 `color` 属性，或通过 CSS 设置样式，来添加颜色供整个应用使用。继续阅读下面的内容，了解如何手动添加新颜色，或使用下面的[新颜色创建器](#新颜色创建器)快速生成新颜色的代码，以便复制并粘贴到应用中。

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

添加类之后，该颜色就可以用于任何支持 `color` 属性的 Ionic 组件。以下是 Ionic 按钮上使用 `favorite` 颜色的示例：

```html
<ion-button color="favorite">收藏</ion-button>
```

在根级别定义的 CSS 变量也可用于通过 CSS 为任何元素设置样式：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

有关设置和使用 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 新颜色创建器

在下方通过更改名称和值来创建新颜色，然后将代码复制粘贴到您的项目中。

<NewColorGenerator />
