---
title: 'CSS 变量 | 用于变量和组件的 CSS 自定义属性'
description: 'Ionic 组件使用 CSS 变量构建，便于自定义应用属性。它们允许将值存储在一个地方，然后在多个地方引用。'
sidebar_label: CSS 变量
---

# CSS 变量

Ionic 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 变量</a>构建，便于应用的自定义。CSS 变量允许将值存储在一个地方，然后在多个其他地方引用。它们还使得可以在运行时动态更改 CSS（这以前需要 CSS 预处理器）。CSS 变量使得覆盖 Ionic 组件以匹配品牌或主题比以往任何时候都更容易。

## 设置值

### 全局变量

CSS 变量可以在应用中的 `:root` 选择器中全局设置。它们也可以仅针对特定模式应用。有关 Ionic 提供的全局变量的更多信息，请参阅 [Ionic 变量](#ionic-变量)。

使用 Ionic CLI 创建 Angular 项目时，会创建 `src/theme/variables.scss` 文件，你可以在其中覆盖默认的 Ionic 变量。

```css
/* 为所有模式设置变量 */
:root {
  /* 设置整个应用的背景 */
  --ion-background-color: #ff3700;

  /* 设置整个应用的字体家族 */
  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}

/* 仅针对 iOS 设置整个应用的文本颜色 */
.ios {
  --ion-text-color: #000;
}

/* 仅针对 Material Design 设置整个应用的文本颜色 */
.md {
  --ion-text-color: #222;
}
```

### 组件变量

要为特定组件设置 CSS 变量，请在其选择器中添加变量。有关 Ionic 提供的组件级变量的更多信息，请参阅 [Ionic 变量](#ionic-变量)。

```css
/* 设置所有 ion-button 元素的颜色 */
ion-button {
  --color: #222;
}

/* 设置具有 .fancy-button 类的 ion-button 的背景 */
.fancy-button {
  --background: #00ff00;
}
```

### 通过 JavaScript 设置变量

CSS 变量也可以使用 JavaScript 通过 [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) 进行更改：

```js
const el = document.querySelector('.fancy-button');
el.style.setProperty('--background', '#36454f');
```

## 获取值

### 使用 CSS

可以使用 [var() CSS 函数](https://developer.mozilla.org/en-US/docs/Web/CSS/var) 获取 CSS 变量的值，如果需要，还可以附带任意数量的回退值。在下面的示例中，`--background` 属性将设置为 `--charcoal` 变量的值（如果已定义），如果未定义，则使用 `#36454f`。

```css
.fancy-button {
  --background: var(--charcoal, #36454f);
}
```

### 使用 JavaScript

可以使用 JavaScript 通过 [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue) 读取 CSS 变量的值：

```js
const el = document.querySelector('.fancy-button');
const color = el.style.getPropertyValue('--charcoal');
```

## Ionic 变量

### 组件变量

Ionic 提供了存在于组件级别的变量，例如 `--background` 和 `--color`。要查看组件支持的自定义属性列表，请查看其 [API 参考](../api.md)中的 `CSS Custom Properties` 部分。例如，请参阅 [Button CSS 自定义属性](../api/button.md#css-custom-properties)。

### 全局变量

Ionic 提供了几个全局变量，用于简化整个应用的主题化。有关更多信息，请参阅[颜色](colors.md)、[主题](themes.md)和[高级主题化](advanced.md)。
