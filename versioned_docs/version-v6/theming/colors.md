---
title: 颜色
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS 颜色组件：样式化或更改默认应用颜色</title>
  <meta
    name="description"
    content="Ionic 有九种默认颜色，可用于更改许多组件的颜色。了解如何利用 Ionic CSS 颜色属性来样式化您的应用。"
  />
</head>

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组多个属性的集合，包括在 Ionic 中使用的 `shade` 和 `tint`。

可以通过使用 `color` 属性将颜色应用于 Ionic 组件以更改默认颜色。请注意下面的按钮中，文本和背景会根据设置的 `color` 而变化。当按钮上没有设置 `color` 时，默认使用 `primary` 颜色。

```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>
```

## 分层颜色

每种颜色由以下属性组成：`base`、`contrast`、`shade` 和 `tint`。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，它是相同的颜色，只是采用 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>。请参阅[Alpha 问题](advanced.md#the-alpha-problem)了解为什么还需要 `rgb` 属性。从下面的下拉列表中选择，查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要更改颜色的默认值，应设置该颜色的所有列出的变体。例如，要将 secondary 颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，设置以下 CSS 属性：

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

当 `secondary` 应用于按钮时，不仅使用了基础颜色 <CodeColor color="#006600">#006600</CodeColor>，还使用对比色 <CodeColor color="#ffffff">#ffffff</CodeColor> 用于文本，以及 shade <CodeColor color="#005a00">#005a00</CodeColor> 和 tint <CodeColor color="#1a751a">#1a751a</CodeColor> 用于按钮的不同状态。

:::note
不确定如何从基础颜色获取变体颜色？试试我们的[颜色生成器](color-generator.md)，它可以计算所有变体并提供可复制粘贴到应用中的代码！
:::

有关 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过设置 Ionic 组件上的 `color` 属性，或通过 CSS 进行样式化，来添加颜色以供整个应用程序使用。请继续阅读以了解如何手动添加新颜色，或使用下面的[新颜色创建器](#new-color-creator)快速生成新颜色的代码以复制粘贴到应用中。

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

然后，创建一个使用这些 CSS 变量的新类。该类**必须**以 `.ion-color-{COLOR}` 格式编写，其中 `{COLOR}` 是要添加的颜色名称：

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

添加类后，可以在任何支持 `color` 属性的 Ionic 组件上使用该颜色。下面是在 Ionic 按钮上使用 `favorite` 颜色的示例。

```html
<ion-button color="favorite">Favorite</ion-button>
```

在根级别定义的 CSS 变量也可以用于使用 CSS 样式化任何元素：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

有关设置和使用 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 新颜色创建器

通过更改名称和值在下面创建一个新颜色，然后复制粘贴下面的代码到您的项目中。

<NewColorGenerator />
