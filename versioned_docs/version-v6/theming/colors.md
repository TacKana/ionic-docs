---
title: Colors
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS 颜色组件：自定义应用默认色彩方案</title>
  <meta
    name="description"
    content="Ionic 提供九种默认颜色，可用于调整多种组件的色彩。学习如何利用 Ionic CSS 颜色属性来定制你的应用样式。"
  />
</head>

Ionic 提供了九种默认颜色，可用于调整多种组件的色彩。每种颜色实际上是一组包含多个属性的集合，包括 `shade`（暗调）和 `tint`（亮调），这些属性在整个 Ionic 框架中被广泛使用。

可以通过 `color` 属性将颜色应用于 Ionic 组件，以改变其默认色彩。观察下列按钮，你会发现文本和背景颜色会根据设置的 `color` 属性而变化。当按钮未设置 `color` 属性时，默认使用 `primary` 颜色。

```html
<ion-button>默认</ion-button>
<ion-button color="primary">主色</ion-button>
<ion-button color="secondary">辅色</ion-button>
<ion-button color="tertiary">第三色</ion-button>
<ion-button color="success">成功色</ion-button>
<ion-button color="warning">警告色</ion-button>
<ion-button color="danger">危险色</ion-button>
<ion-button color="light">浅色</ion-button>
<ion-button color="medium">中灰色</ion-button>
<ion-button color="dark">深色</ion-button>
```

## 分层色彩

每种颜色包含以下属性：`base`（基色）、`contrast`（对比色）、`shade`（暗调）和 `tint`（亮调）。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，这是同一颜色的 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">RGB 格式</a>。关于为什么需要 `rgb` 属性的解释，请参阅 [Alpha 通道问题](advanced.md#the-alpha-problem)。从下面的下拉菜单中选择，可以查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要修改颜色的默认值，需要设置该颜色所有列出的变体属性。例如，要将次要颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，需设置以下 CSS 属性：

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

当 `secondary` 颜色应用于按钮时，不仅会使用基色 <CodeColor color="#006600">#006600</CodeColor>，还会使用对比色 <CodeColor color="#ffffff">#ffffff</CodeColor> 作为文本颜色，同时使用暗调 <CodeColor color="#005a00">#005a00</CodeColor> 和亮调 <CodeColor color="#1a751a">#1a751a</CodeColor> 来呈现按钮的不同状态。

:::note
不确定如何从基色计算出变体颜色？试试我们的 [颜色生成器](color-generator.md)，它可以自动计算所有变体并提供可直接复制/粘贴到应用中的代码！
:::

更多关于 CSS 变量的信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过在 Ionic 组件上设置 `color` 属性，或使用 CSS 样式来为整个应用程序添加新颜色。继续阅读了解如何手动添加新颜色，或者使用下面的 [新颜色创建器](#new-color-creator) 快速生成新颜色的代码，以便复制并粘贴到你的应用中。

要添加新颜色，首先需要在根级别定义该颜色所有变体的 CSS 变量。例如，要添加名为 `favorite` 的新颜色，我们可以定义以下变量：

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

然后，创建一个使用这些 CSS 变量的新类。该类 **必须** 按照 `.ion-color-{COLOR}` 的格式命名，其中 `{COLOR}` 是要添加的颜色名称：

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

添加该类之后，该颜色就可以用于任何支持 `color` 属性的 Ionic 组件。下面是一个在 Ionic 按钮上使用 `favorite` 颜色的示例。

```html
<ion-button color="favorite">最爱</ion-button>
```

在根级别定义的 CSS 变量也可以通过 CSS 来样式化任何元素：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

更多关于设置和使用 CSS 变量的信息，请参阅 [CSS 变量文档](css-variables.md)。

## 新颜色创建器

通过修改下面的名称和值来创建新颜色，然后将生成的代码复制并粘贴到你的项目中。

<NewColorGenerator />