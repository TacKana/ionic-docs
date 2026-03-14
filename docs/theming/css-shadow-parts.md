---
title: 阴影部分（Shadow Parts）
---

<head>
  <title>CSS Shadow Parts - 在影子树内部设置 CSS 属性样式</title>
  <meta
    name="description"
    content="CSS Shadow Parts 允许开发者在影子树内部的元素上设置 CSS 属性样式。阅读本文了解如何自定义 Ionic Shadow DOM 组件。"
  />
</head>

CSS Shadow Parts 允许开发者在影子树内部的元素上设置 CSS 属性样式。这对于自定义 Ionic Framework 的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 组件非常有用。

## 为什么需要 Shadow Parts？

Ionic Framework 是一组分布式的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>。Web Components 遵循 <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM 规范</a>来实现样式和标记的封装。

:::note
Ionic Framework 组件**并非全部**都是 Shadow DOM 组件。如果一个组件是 Shadow DOM 组件，其[组件文档](../components.md)的右上角会显示一个徽章标识。例如[按钮组件](../api/button.md)就是一个 Shadow DOM 组件。
:::

Shadow DOM 有助于防止样式从组件中泄漏，并意外应用到其他元素上。例如，我们为 `ion-button` 组件分配了一个 `.button` 类。如果没有 Shadow DOM 封装，如果用户在自己的元素上设置了 `.button` 类，它会继承 Ionic Framework 的按钮样式。由于 `ion-button` 是一个 Shadow 组件，这不会成为问题。

然而，由于这种封装，样式也无法渗透到 Shadow 组件的内部元素中。这意味着如果 Shadow 组件在其影子树内渲染元素，则无法直接用 CSS 定位这些内部元素。以 `ion-select` 组件为例，它会渲染以下标记：

```html
<ion-select>
  #shadow-root
  <div class="select-text select-placeholder"></div>
  <div class="select-icon"></div>
</ion-select>
```

占位符文本和图标元素位于 `#shadow-root` 内部，这意味着以下 CSS **无法**用于设置占位符样式：

```css
/* 不生效 */
ion-select .select-placeholder {
  color: blue;
}
```

那么我们如何解决这个问题呢？答案是 [CSS Shadow Parts](#shadow-parts-explained)！

## Shadow Parts 详解

Shadow parts 允许开发者从影子树外部为影子树内部的元素设置样式。为此，必须[暴露 part 属性](#exposing-a-part)，然后可以使用 [::part](#how-part-works) 来设置样式。

### 暴露 Part

在创建 Shadow DOM 组件时，可以通过在影子树内部的元素上分配 `part` 属性来添加 part。这在 Ionic Framework 的组件中已经实现，最终用户无需进行任何操作。

继续以 `ion-select` 组件为例，更新后的标记如下所示：

```html
<ion-select>
  #shadow-root
  <div part="placeholder" class="select-text select-placeholder"></div>
  <div part="icon" class="select-icon"></div>
</ion-select>
```

上面显示了两个 parts：`placeholder` 和 `icon`。有关所有可用的 parts，请参阅 [select 组件文档](../api/select.md#css-shadow-parts)。

通过这些暴露的 parts，现在可以使用 [::part](#how-part-works) 直接设置元素的样式。

### ::part 工作原理

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 伪元素允许开发者选择影子树中已通过 part 属性暴露的元素。

我们知道 `ion-select` 暴露了一个 `placeholder` part，用于在未选择值时设置文本样式，我们可以通过以下方式自定义它：

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

使用 `::part` 设置样式允许更改该元素接受的任何 CSS 属性。

除了能够定位 part 之外，还可以设置<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">伪元素</a>的样式，而无需显式暴露它们：

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Parts 也可以与大多数<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">伪类</a>一起使用：

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
[特定前缀的伪元素](#vendor-prefixed-pseudo-elements)和[结构性伪类](#structural-pseudo-classes)存在一些已知限制。
:::

## Ionic Framework Parts

所有 Ionic Framework 组件暴露的 parts 都可以在其 API 页面的 CSS Shadow Parts 标题下找到。要查看所有组件及其 API 页面，请参阅[组件文档](../components.md)。

组件必须满足以下条件才能拥有 parts：

- 它是一个 [Shadow DOM](../reference/glossary.md#shadow) 组件。如果它是 [Scoped](../reference/glossary.md#scoped) 或 Light DOM 组件，则可以直接定位子元素。如果一个组件是 Scoped 或 Shadow，它将在[组件文档页面](../components.md)上以其名称列出。
- 它包含子元素。例如，`ion-card-header` 是一个 Shadow 组件，但所有样式都应用于宿主元素。由于它没有子元素，因此不需要 parts。
- 子元素不是结构性元素。在某些组件中，包括 `ion-title`，子元素是用于定位内部元素的结构性元素。我们不建议自定义结构性元素，因为这可能导致意外结果。

:::note
我们欢迎对额外 parts 的建议。请在请求 part 时，创建一个<a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">新的 GitHub issue</a>，并提供尽可能多的信息。
:::

## 已知限制

### 浏览器支持

所有主流浏览器的最新版本都支持 CSS Shadow Parts。但是，某些旧版本不支持 shadow parts。在应用中实现 parts 之前，请确认<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">浏览器支持</a>满足要求。如果需要支持旧版本浏览器，我们建议继续使用 [CSS 变量](../theming/css-variables.md)进行样式设置。

### 特定前缀的伪元素

<p>
  目前不支持<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
    特定前缀的
  </a>伪元素。例如，任何 `::-webkit-scrollbar` 伪元素：
</p>

```css
/* 不生效 */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

更多信息请参阅 <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub 上的此问题</a>。

### 结构性伪类

大多数伪类都支持 parts，但是<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">结构性伪类</a>不支持。以下是不支持的结构性伪类示例：

```css
/* 不生效 */
my-component::part(container):first-child {
  background: green;
}

/* 不生效 */
my-component::part(container):last-child {
  background: green;
}
```

### 链式 Parts

`::part()` 伪元素不能匹配其他 `::part()`。

例如，`my-component::part(button)::part(label)` 不会匹配任何内容。因为这样做会暴露超出预期的更多结构信息。

如果 `<my-component>` 的内部按钮使用类似 `part="label => button-label"` 的方式将按钮的内部 parts 转发到面板自身的 part 元素映射中，那么像 `my-component::part(button-label)` 这样的选择器将只选择该按钮的标签，而忽略其他标签。