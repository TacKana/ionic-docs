---
title: Colors
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

# 颜色

Ionic 提供了九种默认颜色，可用于改变许多组件的颜色。每种颜色实际上是一组包含多个属性的集合，包括一个 `shade`（暗色调）和一个 `tint`（亮色调），在整个 Ionic 中使用。

可以通过 `color` 属性将颜色应用于 Ionic 组件，以更改其默认颜色。请注意，下方按钮的文本和背景会根据设置的 `color` 发生变化。当按钮未设置 `color` 时，默认使用 `primary` 颜色。

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

每种颜色由以下属性组成：`base`（基础色）、`contrast`（对比色）、`shade`（暗色调）和 `tint`（亮色调）。`base` 和 `contrast` 颜色还需要一个 `rgb` 属性，它是相同的颜色，只是以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>表示。请参阅 [透明度问题](advanced.md#the-alpha-problem) 了解为何需要 `rgb` 属性的解释。从下方下拉菜单中选择，可查看 Ionic 提供的所有默认颜色及其变体。

<LayeredColorsSelect />

## 修改颜色

要更改颜色的默认值，应设置该颜色所有列出的变体。例如，要将次要颜色更改为 <CodeColor color="#006600">#006600</CodeColor>，请设置以下 CSS 属性：

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

当 `secondary` 应用于按钮时，不仅会使用基础色 <CodeColor color="#006600">#006600</CodeColor>，还会使用对比色 <CodeColor color="#ffffff">#ffffff</CodeColor> 作为文本颜色，以及暗色调 <CodeColor color="#005a00">#005a00</CodeColor> 和亮色调 <CodeColor color="#1a751a">#1a751a</CodeColor> 作为按钮不同状态的颜色。

:::note
不确定如何从基础色获取变体颜色？试试我们的 [颜色生成器](color-generator.md)，它可以计算所有变体，并提供可直接复制/粘贴到应用中的代码！
:::

有关 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 添加颜色

可以通过在 Ionic 组件上设置 `color` 属性或使用 CSS 样式，为整个应用程序添加颜色以供使用。继续阅读以了解如何手动添加新颜色，或使用下方的 [新颜色生成器](#new-color-creator) 快速生成新颜色的代码，以便复制并粘贴到应用程序中。

要添加新颜色，首先需要在根级别定义该颜色所有变体的 CSS 变量。例如，要添加一个名为 `favorite` 的新颜色，我们可以定义以下变量：

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

然后，创建一个使用这些 CSS 变量的新类。该类 **必须** 以 `.ion-color-{COLOR}` 的格式编写，其中 `{COLOR}` 是要添加的颜色名称：

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

添加类之后，该颜色就可以用于任何支持 `color` 属性的 Ionic 组件。以下是在 Ionic 按钮上使用 `favorite` 颜色的示例。

```html
<ion-button color="favorite">Favorite</ion-button>
```

在根级别定义的 CSS 变量也可以通过 CSS 来样式化任何元素：

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

有关设置和使用 CSS 变量的更多信息，请参阅 [CSS 变量文档](css-variables.md)。

## 新颜色生成器

通过更改名称和值在下方创建新颜色，然后将生成的代码复制并粘贴到您的项目中。

<NewColorGenerator />