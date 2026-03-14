---
title: 'ion-item'
---

import Props from '@ionic-internal/component-api/v6/item/props.md';
import Events from '@ionic-internal/component-api/v6/item/events.md';
import Methods from '@ionic-internal/component-api/v6/item/methods.md';
import Parts from '@ionic-internal/component-api/v6/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/item/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/item/slots.md';

<head>
  <title>ion-item：用于输入、编辑或删除的 iOS 与 Android 项目元素</title>
  <meta
    name="description"
    content="iOS/Android 的 ion-item 元素可包含文本、图标、图像和其他自定义元素。它们被放置在列表中，可以进行输入、删除、编辑等操作。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

项目（Item）是能够包含文本、图标、头像、图像、输入框以及任何其他原生或自定义元素的容器。通常它们与其他项目一起放置在[列表（list）](./list)中。项目可以进行滑动、删除、重新排序、编辑等操作。

## 基本用法

项目默认左对齐文本，当文本宽度超过项目宽度时会显示省略号。我们可以使用 Ionic 框架提供的 CSS 工具来修改此行为，例如在下方的示例中使用 `.ion-text-wrap` 类。如需查看更多可以添加到项目中以转换文本的类，请参阅 [CSS 工具文档](/docs/layout/css-utilities)。

import Basic from '@site/static/usage/v6/item/basic/index.md';

<Basic />

## 可点击项目

如果一个项目设置了 `href` 或 `button` 属性，则被视为“可点击”。可点击项目在视觉上有一些不同之处，以表明它们可以被交互。例如，在 `md` 模式下，可点击项目在激活时会显示涟漪效果；在 `ios` 模式下激活时会高亮显示；并且在 `ios` 模式下默认会显示[详情箭头（detail arrow）](#detail-arrows)。

import Clickable from '@site/static/usage/v6/item/clickable/index.md';

<Clickable />

## 详情箭头

默认情况下，[可点击项目](#clickable-items)在 `ios` 模式下会显示右侧箭头图标。要隐藏可点击元素的右侧箭头图标，请将 `detail` 属性设置为 `false`。要在不自然显示的项目上显示右侧箭头图标，请将 `detail` 属性设置为 `true`。

import DetailArrows from '@site/static/usage/v6/item/detail-arrows/index.md';

<DetailArrows />

<!--

TODO 将此功能作为 CSS 变量重新添加回来

在 `md` 模式下，此功能默认不启用，但可以通过设置以下 CSS 变量来启用：

```css
--item-detail-push-show: true;
```

更多信息请参阅 [主题文档](/docs/theming/css-variables)。

-->

## 项目分隔线

项目默认显示一条底部内嵌边框。该边框在左侧有内边距，并且不会出现在任何放置在 `"start"` 插槽中的内容下方。`lines` 属性可以修改为 `"full"` 或 `"none"`，分别表示显示全宽边框或不显示边框。

import Lines from '@site/static/usage/v6/item/lines/index.md';

<Lines />

## 媒体项目

[头像（avatar）](./avatar) 和 [缩略图（thumbnail）](./thumbnail) 可以放置在项目内部。这在制作图像和文本列表时非常有用。

import Media from '@site/static/usage/v6/item/media/index.md';

<Media />

## 项目中的按钮

项目内部的按钮样式会比外部的按钮小。要使按钮大小与项目外部的按钮匹配，请将 `size` 属性设置为 `"default"`。

import Buttons from '@site/static/usage/v6/item/buttons/index.md';

<Buttons />

## 项目中的图标

import Icons from '@site/static/usage/v6/item/icons/index.md';

<Icons />

## 项目输入框

import Inputs from '@site/static/usage/v6/item/inputs/index.md';

<Inputs />

## 辅助文本与错误文本

在包含输入框的项目中，可以通过在 `"helper"` 和 `"error"` 插槽中放置注释来使用辅助文本和错误文本。除非向 `ion-item` 添加了 `ion-invalid` 类，否则错误插槽不会显示。在 Angular 中，这会通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加此类。

import HelperError from '@site/static/usage/v6/item/helper-error/index.md';

<HelperError />

## 项目计数器

项目计数器是显示在输入框下方的辅助文本，用于通知用户已输入字符数占输入框可接受总字符数的比例。添加 `counter` 后，默认行为是将显示的值格式化为 `已输入长度 / 最大长度`。可以通过向 `counterFormatter` 属性传递一个格式化函数来自定义此行为。

import Counter from '@site/static/usage/v6/item/counter/index.md';

<Counter />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/item/theming/colors/index.md';

<Colors />

### CSS 阴影部件

import CSSParts from '@site/static/usage/v6/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/item/theming/css-properties/index.md';

<CSSProps />

### 输入高亮

包含输入框的项目在聚焦、验证通过或验证失败时，会用不同颜色高亮显示输入框的底部边框。默认情况下，`md` 项目的高亮高度设置为 `2px`，而 `ios` 没有高亮（技术上高度设置为 `0`）。可以使用 `--highlight-height` CSS 属性来更改高度。要关闭高亮，请将此变量设置为 `0`。

高亮颜色会根据项目状态变化，但默认所有状态都使用 Ionic 的颜色。聚焦时，输入高亮将使用 `primary` 颜色。如果输入有效，则使用 `success` 颜色；无效输入将使用 `danger` 颜色。这可以通过提供的 CSS 属性进行自定义。

import InputHighlight from '@site/static/usage/v6/item/theming/input-highlight/index.md';

<InputHighlight />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />