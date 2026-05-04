---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - 在影子树内部设置 CSS 属性样式</title>
  <meta
    name="description"
    content="CSS Shadow Parts 允许开发者为影子树内部的元素设置 CSS 属性样式。阅读本文以了解更多关于自定义 Ionic Shadow DOM 组件的内容。"
  />
</head>

CSS Shadow Parts 允许开发者为影子树内部的元素设置 CSS 属性样式。这在自定义 Ionic Framework <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 组件时极其有用。

<LegacyAnchor id="exposing-a-part" />
<LegacyAnchor id="how-part-works" />
<LegacyAnchor id="structural-pseudo-classes" />
<LegacyAnchor id="vendor-prefixed-pseudo-elements" />

## 为什么需要 Shadow Parts？

Ionic Framework 是一组分布式的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>。Web Components 遵循 <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM 规范</a>以实现样式和标记的封装。

:::note
Ionic Framework 组件**并非全部**都是 Shadow DOM 组件。如果一个组件是 Shadow DOM 组件，其[组件文档](../components.md)的右上角会有一个徽章标识。[按钮组件](../api/button.md)就是 Shadow DOM 组件的一个示例。
:::

Shadow DOM 有助于防止样式从组件中泄漏出去，并意外地应用到其他元素上。例如，我们为 `ion-button` 组件分配了一个 `.button` 类。如果没有 Shadow DOM 封装，用户在自定义元素上设置 `.button` 类时，就会继承 Ionic Framework 的按钮样式。由于 `ion-button` 是 Shadow 组件，所以不存在这个问题。

然而，由于这种封装性，样式也无法渗透到 Shadow 组件的内部元素中。这意味着，如果 Shadow 组件在其影子树内渲染元素，则无法直接用 CSS 定位这些内部元素。以 `ion-select` 组件为例，它渲染的标记如下：

```html
<ion-select>
  #shadow-root
  <div class="select-text select-placeholder"></div>
  <div class="select-icon"></div>
</ion-select>
```

占位符文本和图标元素位于 `#shadow-root` 内部，这意味着以下 CSS **无法**用于设置占位符的样式：

```css
/* 不生效 */
ion-select .select-placeholder {
  color: blue;
}
```

那么，我们如何解决这个问题呢？答案就是 [CSS Shadow Parts](#shadow-parts-explained)！

<LegacyAnchor id="shadow-parts-explained" />

## Shadow Parts 详解

Shadow parts 允许开发者从影子树外部，为影子树内部的元素设置样式。为了实现这一点，必须[暴露 part](#exposing-a-part)，然后就可以使用 [::part](#how-part-works) 来设置样式。

### 暴露一个 part

在创建 Shadow DOM 组件时，可以通过在影子树内部的元素上分配 `part` 属性来添加一个 part。这在 Ionic Framework 组件中已经实现，最终用户无需进行任何操作。

继续以 `ion-select` 组件为例，标记更新如下：

```html
<ion-select>
  #shadow-root
  <div part="placeholder" class="select-text select-placeholder"></div>
  <div part="icon" class="select-icon"></div>
</ion-select>
```

上面展示了两个 part：`placeholder` 和 `icon`。有关其所有 parts，请参阅 [select 组件文档](../api/select.md#css-shadow-parts)。

通过这些暴露的 parts，现在可以使用 [::part](#how-part-works) 直接设置元素的样式。

### ::part 的工作原理

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 伪元素允许开发者选择影子树内部已通过 part 属性暴露的元素。

我们知道 `ion-select` 暴露了一个 `placeholder` part，用于在未选择值时设置文本样式，我们可以通过以下方式自定义它：

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

使用 `::part` 设置样式允许更改该元素所接受的任何 CSS 属性。

除了能够定位 part 之外，<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">伪元素</a>无需显式暴露即可设置样式：

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
[厂商前缀伪元素](#vendor-prefixed-pseudo-elements)和[结构伪类](#structural-pseudo-classes)存在一些已知的限制。
:::

## Ionic Framework Parts

所有 Ionic Framework 组件暴露的 parts 都可以在其 API 页面的 CSS Shadow Parts 标题下找到。要查看所有组件及其 API 页面，请参阅[组件文档](../components.md)。

组件要具有 parts 必须满足以下条件：

- 它是一个 [Shadow DOM](../reference/glossary.md#shadow) 组件。如果是 [Scoped](../reference/glossary.md#scoped) 或 Light DOM 组件，其子元素可以直接进行样式设置。如果一个组件是 Scoped 或 Shadow 组件，其[组件文档页面](../components.md)上会标明其名称。
- 它包含子元素。例如，`ion-card-header` 是一个 Shadow 组件，但所有样式都应用于宿主元素。由于它没有子元素，因此不需要 parts。
- 子元素不是结构性元素。在某些组件中，例如 `ion-title`，子元素是用于定位内部元素的结构性元素。我们不建议自定义结构性元素，因为这可能导致不可预期的结果。

:::note
我们欢迎对新增 parts 提出建议。请在请求 part 时，创建一个<a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">新的 GitHub issue</a>并尽可能提供详细信息。
:::

## 已知限制

### 浏览器支持

所有主流浏览器的最新版本都支持 CSS Shadow Parts。但是，某些旧版本不支持 shadow parts。在应用程序中实现 parts 之前，请验证<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">浏览器支持</a>是否满足要求。如果需要支持旧版本浏览器，我们建议继续使用 [CSS 变量](../theming/css-variables.md)进行样式设置。

### 厂商前缀伪元素

<p>
  目前不支持<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">厂商前缀</a>伪元素。例如，任何 `::-webkit-scrollbar` 伪元素：
</p>

```css
/* 不生效 */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

更多信息请参阅<a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub 上的这个问题</a>。

### 结构伪类

大多数伪类都可以与 parts 一起使用，但<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">结构伪类</a>除外。以下是不起作用的结构伪类示例。

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

### parts 链式调用

`::part()` 伪元素无法匹配额外的 `::part()`。

例如，`my-component::part(button)::part(label)` 无法匹配任何元素。这是因为这样做会暴露比预期更多的结构信息。

如果 `<my-component>` 的内部按钮使用类似 `part="label => button-label"` 的方式将按钮的内部 parts 转发到面板自身的 part 元素映射中，那么像 `my-component::part(button-label)` 这样的选择器将仅选择该按钮的标签，而忽略任何其他标签。