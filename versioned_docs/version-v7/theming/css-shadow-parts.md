---
title: CSS 阴影部分
---

<head>
  <title>CSS 阴影部分 - 设置 Shadow 树内部的 CSS 属性样式</title>
  <meta
    name="description"
    content="CSS 阴影部分 允许开发者设置 Shadow 树内部元素的 CSS 属性样式。阅读以了解有关自定义 Ionic Shadow DOM 组件的更多信息。"
  />
</head>

CSS 阴影部分 允许开发者设置 Shadow 树内部元素的 CSS 属性样式。这对于自定义 Ionic Framework <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 组件非常有用。

## 为什么使用 Shadow Parts？

Ionic Framework 是一组分布式 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>。Web Components 遵循 <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM 规范</a> 以封装样式和标记。

:::note
Ionic Framework 组件**并非全部**都是 Shadow DOM 组件。如果组件是 Shadow DOM 组件，其[组件文档](../components.md) 的右上角会有一个徽章。Shadow DOM 组件的一个示例是 [button 组件](../api/button.md)。
:::

Shadow DOM 有助于防止样式从组件中泄漏并意外应用于其他元素。例如，我们为 `ion-button` 组件分配了 `.button` 类。如果没有 Shadow DOM 封装，如果用户在自己的元素上设置了类 `.button`，该元素将继承 Ionic Framework 按钮的样式。由于 `ion-button` 是一个 Shadow 组件，这不会成为问题。

然而，由于这种封装，样式也无法渗透到 Shadow 组件的内部元素中。这意味着如果 Shadow 组件在其 shadow 树内渲染元素，则无法直接使用 CSS 定位这些内部元素。以 `ion-select` 组件为例，它渲染以下标记：

```html
<ion-select>
  #shadow-root
  <div class="select-text select-placeholder"></div>
  <div class="select-icon"></div>
</ion-select>
```

占位符文本和图标元素位于 `#shadow-root` 内部，这意味着以下 CSS 将**无法**设置占位符的样式：

```css
/* 无法生效 */
ion-select .select-placeholder {
  color: blue;
}
```

那么如何解决这个问题呢？[CSS 阴影部分](#shadow-parts-说明)！

## Shadow Parts 说明

Shadow parts 允许开发者从 shadow 树外部设置 shadow 树内部的样式。为此，[必须暴露 part](#暴露-part)，然后可以使用 [::part](#part-的工作方式) 进行样式设置。

### 暴露 part

创建 Shadow DOM 组件时，可以通过在元素上分配 `part` 属性来将 part 添加到 shadow 树内的元素中。这是在 Ionic Framework 中添加到组件的，无需最终用户操作。

继续使用 `ion-select` 组件作为示例，标记更新如下所示：

```html
<ion-select>
  #shadow-root
  <div part="placeholder" class="select-text select-placeholder"></div>
  <div part="icon" class="select-icon"></div>
</ion-select>
```

上面显示了两个 part：`placeholder` 和 `icon`。有关其所有 part，请参阅 [select 文档](../api/select.md#css-阴影部分)。

通过这些暴露的 part，现在可以使用 [::part](#part-的工作方式) 直接设置元素的样式。

### ::part 的工作方式

<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 伪元素允许开发者选择 shadow 树内通过 part 属性暴露的元素。

由于我们知道 `ion-select` 暴露了一个 `placeholder` part 用于在未选择值时设置文本样式，我们可以按以下方式自定义它：

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

使用 `::part` 进行样式设置允许更改该元素接受的任何 CSS 属性。

除了能够定位 part 之外，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">伪元素</a> 也可以在未明确暴露的情况下设置样式：

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Parts 也适用于大多数 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">伪类</a>：

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
[厂商前缀伪元素](#厂商前缀伪元素)和[结构伪类](#结构伪类)存在一些已知限制。
:::

## Ionic Framework Parts

Ionic Framework 组件的所有暴露 part 都可以在其 API 页面的 CSS 阴影部分 标题下找到。要查看所有组件及其 API 页面，请参阅 [组件文档](../components.md)。

组件要拥有 part，必须满足以下条件：

- 它是一个 [Shadow DOM](../reference/glossary.md#shadow) 组件。如果是 [Scoped](../reference/glossary.md#scoped) 或 Light DOM 组件，则可以直接定位子元素。如果组件是 Scoped 或 Shadow，将在其[组件文档页面](../components.md)上按其名称列出。
- 它包含子元素。例如，`ion-card-header` 是一个 Shadow 组件，但所有样式都应用于宿主元素。由于它没有子元素，因此不需要 parts。
- 子元素不是结构性的。在某些组件中，包括 `ion-title`，子元素是用于定位内部元素的结构元素。我们不建议自定义结构元素，因为这可能会产生意外结果。

:::note
我们欢迎对额外 part 的建议。请求 part 时，请尽可能多地提供信息创建一个 <a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">新的 GitHub issue</a>。
:::

## 已知限制

### 浏览器支持

所有主要浏览器的最新版本都支持 CSS 阴影部分。但是，某些旧版本不支持 shadow parts。在应用中实现 parts 之前，请验证<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">浏览器支持</a>是否满足要求。如果需要支持旧版本浏览器，我们建议继续使用 [CSS Variables](../theming/css-variables.md) 进行样式设置。

### 厂商前缀伪元素

<p>
  目前不支持 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
    厂商前缀
  </a> 伪元素。例如，任何 `::-webkit-scrollbar` 伪元素：
</p>

```css
/* 无法生效 */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

有关更多信息，请参阅 <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub 上的这个问题</a>。

### 结构伪类

大多数伪类在 parts 中受支持，但 <a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">结构伪类</a> 不受支持。以下是不生效的结构伪类示例：

```css
/* 无法生效 */
my-component::part(container):first-child {
  background: green;
}

/* 无法生效 */
my-component::part(container):last-child {
  background: green;
}
```

### 链式 Parts

`::part()` 伪元素不能匹配额外的 `::part()`。

例如，`my-component::part(button)::part(label)` 不会匹配任何内容。这是因为这样做会暴露比预期更多的结构信息。

如果 `<my-component>` 的内部按钮使用类似 `part="label => button-label"` 的方式将按钮的内部 parts 转发到面板自己的 part 元素映射中，那么像 `my-component::part(button-label)` 这样的选择器将只选择该按钮的标签，忽略任何其他标签。
