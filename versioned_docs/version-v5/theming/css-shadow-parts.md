# CSS 阴影部件

CSS 阴影部件允许开发者对影子树内部的元素进行 CSS 属性样式定制。这对于自定义 Ionic Framework 的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 组件非常有用。

## 为什么需要阴影部件？

Ionic Framework 是一套分布式的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>。Web Components 遵循 <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM 规范</a>以实现样式和标记的封装。

:::note
Ionic Framework 组件**并非全部**都是 Shadow DOM 组件。如果一个组件是 Shadow DOM 组件，在其[组件文档](../components.md)的右上角会有一个标识。例如，[按钮组件](../api/button.md)就是一个 Shadow DOM 组件。
:::

Shadow DOM 有助于防止样式从组件中泄漏并意外应用到其他元素上。例如，我们为 `ion-button` 组件分配了一个 `.button` 类。如果没有 Shadow DOM 封装，用户在自定义元素上设置 `.button` 类时，就会继承 Ionic Framework 的按钮样式。由于 `ion-button` 是 Shadow 组件，这不会成为问题。

然而，由于这种封装特性，样式也无法渗透到 Shadow 组件的内部元素中。这意味着如果 Shadow 组件在其影子树内部渲染元素，就无法直接通过 CSS 定位这些内部元素。以 `ion-select` 组件为例，它会渲染以下标记：

```html
<ion-select>
  #shadow-root
  <div class="”select-text" select-placeholder”></div>
  <div class="”select-icon”"></div>
</ion-select>
```

占位符文本和图标元素都在 `#shadow-root` 内部，这意味着以下 CSS **无法**生效来样式化占位符：

```css
/* 无法生效 */
ion-select .select-placeholder {
  color: blue;
}
```

那么我们该如何解决这个问题呢？答案就是 [CSS 阴影部件](#shadow-parts-explained)！

## 阴影部件详解

阴影部件允许开发者从影子树外部来样式化影子树内部的元素。为了实现这一点，需要先[暴露部件](#exposing-a-part)，然后通过 [::part](#how-part-works) 进行样式设置。

### 暴露部件

在创建 Shadow DOM 组件时，可以通过在影子树内的元素上分配 `part` 属性来添加部件。这在 Ionic Framework 的组件中已经实现，最终用户无需进行任何操作。

继续以 `ion-select` 组件为例，其标记会更新为如下形式：

```html
<ion-select>
  #shadow-root
  <div part="”placeholder”" class="”select-text" select-placeholder”></div>
  <div part="”icon”" class="”select-icon”"></div>
</ion-select>
```

上面展示了两个部件：`placeholder` 和 `icon`。查看 [select 文档](../api/select.md#css-shadow-parts) 了解其所有可用部件。

暴露这些部件后，现在可以直接使用 [::part](#how-part-works) 来样式化元素。

### ::part 的工作原理

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 伪元素允许开发者选择影子树中已通过 part 属性暴露的元素。

既然我们知道 `ion-select` 暴露了一个 `placeholder` 部件，用于在没有选择值时样式化文本，我们可以通过以下方式自定义它：

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

使用 `::part` 进行样式设置，允许更改该元素接受的任何 CSS 属性。

除了能够定位部件本身，还可以样式化 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">伪元素</a>，而无需显式暴露它们：

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

部件也兼容大多数 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">伪类</a>：

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
目前已知一些限制，包括[厂商前缀伪元素](#vendor-prefixed-pseudo-elements)和[结构伪类](#structural-pseudo-classes)。
:::

## Ionic Framework 部件

所有 Ionic Framework 组件暴露的部件都可以在其 API 页面的 CSS Shadow Parts 标题下找到。要查看所有组件及其 API 页面，请参阅[组件文档](../components.md)。

组件要具备部件，必须满足以下条件：

- 它是 [Shadow DOM](../reference/glossary.md#shadow) 组件。如果是 [Scoped](../reference/glossary.md#scoped)> 或 Light DOM 组件，可以直接定位子元素。如果组件是 Scoped 或 Shadow，其名称会在其[组件文档页面](../components.md)上列出。
- 它包含子元素。例如，`ion-card-header` 是 Shadow 组件，但所有样式都应用于宿主元素。由于它没有子元素，因此不需要部件。
- 子元素不是结构性元素。在某些组件中，包括 `ion-title`，子元素是用于定位内部元素的结构性元素。我们不建议自定义结构性元素，因为这可能导致意外的结果。

:::note
我们欢迎对额外部件的建议。请在请求部件时，创建一个 <a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">新的 GitHub issue</a>，并尽可能提供详细信息。
:::

## 已知限制

### 浏览器支持

CSS 阴影部件在所有主流浏览器的最新版本中都得到支持。然而，一些旧版本不支持阴影部件。在应用中实现部件前，请确认<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">浏览器支持</a>满足要求。如果需要支持旧版本浏览器，我们建议继续使用 [CSS 变量](../theming/css-variables.md) 进行样式设置。

### 厂商前缀伪元素

<!-- prettier-ignore -->
目前不支持 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">厂商前缀</a>伪元素。例如，任何 `::-webkit-scrollbar` 伪元素：

```css
/* 无法生效 */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

有关更多信息，请参阅 <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub 上的此问题</a>。

### 结构伪类

大多数伪类都与部件兼容，但是<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">结构伪类</a>例外。以下是不兼容的结构伪类示例：

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

### 部件链式调用

`::part()` 伪元素无法匹配其他的 `::part()`。

例如，`my-component::part(button)::part(label)` 不会匹配任何元素。这是因为这样做会暴露超出预期的结构信息。

如果 `<my-component>` 的内部按钮使用了类似 `part="label => button-label"` 的方式，将按钮的内部部件转发到面板自身的部件元素映射中，那么像 `my-component::part(button-label)` 这样的选择器将只选择该按钮的标签，而忽略其他所有标签。