---
title: Colors
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS 颜色组件：自定义应用默认配色方案</title>
  <meta
    name="description"
    content="Ionic 内置九种默认颜色，可用于调整多种组件的配色。学习如何使用 Ionic CSS 颜色属性来设计你的应用样式。"
  />
</head>

Ionic 提供了九种默认颜色，可用于调整众多组件的配色。每种颜色实际上是一组包含多个属性的集合，其中包括 `shade`（暗调）和 `tint`（亮调），这些属性在 Ionic 组件中被广泛使用。

通过 `color` 属性，可以将颜色应用于 Ionic 组件，以改变其默认配色。观察下面的按钮，你会发现文本和背景颜色会根据所设置的 `color` 值而变化。当按钮未设置 `color` 属性时，默认使用 `primary` 颜色。

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

<LegacyAnchor id="layered-colors" />

## 分层颜色体系

每种颜色包含以下属性：`base`（基色）、`contrast`（对比色）、`shade`（暗调）和 `tint`（亮调）。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，该属性表示相同的颜色，只是以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>呈现。关于为何需要 `rgb` 属性的解释，请参阅 [透明度问题](advanced.md#the-alpha-problem)。从下面的下拉菜单中选择，可以查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要修改某个颜色的默认值，需要设置该颜色所有列出的变体属性。例如，要将 secondary 颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，需设置以下 CSS 属性：

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

当 `secondary` 颜色应用于按钮时，不仅会使用基色 <CodeColor color="#006600">#006600</CodeColor>，还会使用对比色 <CodeColor color="#ffffff">#ffffff</CodeColor> 作为文本颜色，同时使用暗调 <CodeColor color="#005a00">#005a00</CodeColor> 和亮调 <CodeColor color="#1a751a">#1a751a</CodeColor> 作为按钮不同状态的颜色。

:::note
不确定如何从基色计算出各种变体颜色？试试我们的 [颜色生成器](color-generator.md)，它可以计算所有变体并提供可直接复制/粘贴到应用中的代码！
:::

有关 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过在 Ionic 组件上设置 `color` 属性，或使用 CSS 样式的方式，为整个应用添加新的颜色。继续阅读了解如何手动添加新颜色，或使用下面的 [新颜色创建器](#new-color-creator) 快速生成新颜色的代码，以便复制粘贴到你的应用中。

要添加新颜色，首先需要在根元素上为该颜色的所有变体定义 CSS 变量。例如，要添加一个名为 `favorite` 的新颜色，我们可以定义以下变量：

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

然后，创建一个使用这些 CSS 变量的新 CSS 类。该类 **必须** 遵循 `.ion-color-{COLOR}` 的格式，其中 `{COLOR}` 是要添加的颜色名称：

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

添加该类后，该颜色就可以用于任何支持 `color` 属性的 Ionic 组件。以下是在 Ionic 按钮上使用 `favorite` 颜色的示例。

```html
<ion-button color="favorite">Favorite</ion-button>
```

在根元素上定义的 CSS 变量也可以通过 CSS 用于任何元素的样式设置：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

有关设置和使用 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

<LegacyAnchor id="new-color-creator" />

## 新颜色创建器

通过修改下面的名称和值来创建新颜色，然后将生成的代码复制并粘贴到你的项目中。

<NewColorGenerator />