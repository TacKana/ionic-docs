# CSS 阴影部分

CSS 阴影部分允许开发者对影子树内部的元素的 CSS 属性进行样式设置。这在自定义 Ionic Framework <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 组件时非常有用。

## 为什么使用阴影部分？

Ionic Framework 是一组分布式 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>。Web Components 遵循 <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM 规范</a>来封装样式和标记。

:::note
Ionic Framework 组件**并非全部**都是 Shadow DOM 组件。如果组件是 Shadow DOM 组件，其[组件文档](../components.md)的右上角会有一个徽章。Shadow DOM 组件的一个例子是[按钮组件](../api/button.md)。
:::

Shadow DOM 有助于防止样式从组件中泄露出去并意外应用于其他元素。例如，我们为 `ion-button` 组件分配了一个 `.button` 类。如果没有 Shadow DOM 封装，如果用户在其自己的元素上设置了 `.button` 类，则会继承 Ionic Framework 的按钮样式。由于 `ion-button` 是一个 Shadow 组件，因此不存在这个问题。

然而，由于这种封装，样式也无法渗透到 Shadow 组件的内部元素中。这意味着如果 Shadow 组件在其影子树内渲染元素，则无法直接使用 CSS 定位这些内部元素。以 `ion-select` 组件为例，它渲染了以下标记：

```html
<ion-select>
  #shadow-root
  <div class=""select-text" select-placeholder"></div>
  <div class=""select-icon""></div>
</ion-select>
```

占位文本和图标元素位于 `#shadow-root` 内部，这意味着以下 CSS **不会**对占位符样式生效：

```css
/* 不起作用 */
ion-select .select-placeholder {
  color: blue;
}
```

那么如何解决这个问题呢？[CSS 阴影部分](#阴影部分详解)！

## 阴影部分详解

阴影部分允许开发者从影子树外部对影子树内部进行样式设置。为此，[必须暴露部分](#暴露部分)，然后可以通过 [::part](#part-如何工作) 进行样式设置。

### 暴露部分

在创建 Shadow DOM 组件时，可以通过在元素上分配 `part` 属性来向影子树内的元素添加部分。这是在 Ionic Framework 的组件中添加的，不需要最终用户执行任何操作。

继续以 `ion-select` 组件为例，标记更新后如下所示：

```html
<ion-select>
  #shadow-root
  <div part=""placeholder"" class=""select-text" select-placeholder"></div>
  <div part=""icon"" class=""select-icon""></div>
</ion-select>
```

上面显示了两个部分：`placeholder` 和 `icon`。有关所有部分，请参阅 [select 文档](../api/select.md#css-shadow-parts)。

暴露了这些部分之后，现在可以使用 [::part](#part-如何工作) 直接对元素进行样式设置。

### ::part 如何工作

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 伪元素允许开发者选择影子树内已通过 part 属性暴露的元素。

由于我们知道 `ion-select` 暴露了一个 `placeholder` 部分，用于在未选择值时设置文本样式，我们可以按以下方式自定义它：

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

使用 `::part` 进行样式设置允许更改该元素接受的任何 CSS 属性。

除了能够定位部分之外，<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">伪元素</a>也可以在不显式暴露的情况下进行样式设置：

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

部分也可以与大多数 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">伪类</a>一起使用：

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
[厂商前缀伪元素](#厂商前缀伪元素)和[结构伪类](#结构伪类)存在一些已知限制。
:::

## Ionic Framework 部分

Ionic Framework 组件的所有已暴露部分可以在其 API 页面的 CSS 阴影部分标题下找到。要查看所有组件及其 API 页面，请参阅[组件文档](../components.md)。

组件必须满足以下条件才能拥有部分：

- 它是一个 [Shadow DOM](../reference/glossary.md#shadow) 组件。如果是 [Scoped（作用域）](../reference/glossary.md#scoped) 或 Light DOM 组件，子元素可以直接被定位。如果组件是 Scoped 或 Shadow 的，会在其[组件文档页面](../components.md)上以其名称列出。
- 它包含子元素。例如，`ion-card-header` 是一个 Shadow 组件，但所有样式都应用于宿主元素。由于它没有子元素，因此不需要部分。
- 子元素不是结构性的。在某些组件中，包括 `ion-title`，子元素是用于定位内部元素的结构元素。我们不建议自定义结构元素，因为这可能会导致意外结果。

:::note
我们欢迎对额外部分的建议。在请求添加部分时，请尽量在 <a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">新建 GitHub issue</a> 中提供尽可能多的信息。
:::

## 已知限制

### 浏览器支持

CSS 阴影部分在所有主流浏览器的最新版本中都得到支持。但是，某些较旧版本不支持阴影部分。在应用中实现部分之前，请验证<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">浏览器支持</a>是否满足要求。如果需要支持较旧版本的浏览器，我们建议继续使用 [CSS 变量](../theming/css-variables.md)进行样式设置。

### 厂商前缀伪元素

<!-- prettier-ignore -->
<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">厂商前缀</a>伪元素目前不受支持。例如，任何 `::-webkit-scrollbar` 伪元素：

```css
/* 不起作用 */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

请参阅 <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub 上的这个 issue</a> 了解更多信息。

### 结构伪类

大多数伪类都支持部分，但<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">结构伪类</a>不受支持。以下是不起作用的结构伪类示例：

```css
/* 不起作用 */
my-component::part(container):first-child {
  background: green;
}

/* 不起作用 */
my-component::part(container):last-child {
  background: green;
}
```

### 链接部分

`::part()` 伪元素不能匹配额外的 `::part()`。

例如，`my-component::part(button)::part(label)` 不匹配任何内容。因为这样做会暴露比预期更多的结构信息。

如果 `<my-component>` 的内部按钮使用类似 `part="label => button-label"` 的方式将按钮的内部部分转发到面板自己的部分元素映射中，那么像 `my-component::part(button-label)` 这样的选择器将只选择该按钮的标签，而忽略任何其他标签。
