---
title: 单选按钮组件
---
import Props from '@ionic-internal/component-api/v8/radio/props.md';
import Events from '@ionic-internal/component-api/v8/radio/events.md';
import Methods from '@ionic-internal/component-api/v8/radio/methods.md';
import Parts from '@ionic-internal/component-api/v8/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/radio/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/radio/slots.md';

<head>
  <title>ion-radio：适用于 iOS 和 Android 的单选组件</title>
  <meta name="description" content="单选组件应配合 ion-radio-group 在 iOS 和 Android 设备上使用。阅读以了解更多关于单选属性用法和安装的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


单选按钮应放置在 [radio group（单选组）](./radio-group) 内部使用。点击一个单选按钮会选中它，并取消选中之前被选中的那个（如果存在）。也可以通过编程方式，将父级单选组的值属性设置为该单选按钮的值来选中它。

当单选按钮处于单选组内部时，任何时刻都只能有一个被选中。如果需要选中多个选项，则应使用 [复选框](./checkbox)。组内的单选按钮可以设置为禁用状态以防止交互。

## 基本用法

import Basic from '@site/static/usage/v8/radio/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置位置。此属性与 flexbox 的 `flex-direction` 属性功能对应。

import LabelPlacement from '@site/static/usage/v8/radio/label-placement/index.md';

<LabelPlacement />

## 标签换行

无论标签位置如何，默认情况下长文本不会自动换行。如果单选按钮的宽度受到限制，溢出的文本将被截断并显示省略号。你可以通过在单选按钮文本的包装元素上添加 `ion-text-wrap` 类，或者使用 `::part()` 选择器为 `label` 阴影部件添加样式来启用文本换行。

import LabelWrap from '@site/static/usage/v8/radio/label-wrap/index.md';

<LabelWrap />

## 对象值引用

默认情况下，单选组使用严格相等 (`===`) 来判断一个选项是否被选中。可以通过为 `compareWith` 属性提供属性名或函数来覆盖此行为。

import UsingComparewith from '@site/static/usage/v8/radio/using-comparewith/index.md';

<UsingComparewith />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。此属性与 flexbox 的 `align-items` 属性功能对应。

:::note
堆叠的单选按钮可以使用 `alignment` 属性进行对齐。当标签和控件需要水平居中对齐时，这很有用。
:::

import Alignment from '@site/static/usage/v8/radio/alignment/index.md';

<Alignment />

## 主轴对齐

开发者可以使用 `justify` 属性来控制标签和控件在主轴上的排列方式。此属性与 flexbox 的 `justify-content` 属性功能对应。

import Justify from '@site/static/usage/v8/radio/justify/index.md';

<Justify />

:::note
`ion-item` 仅在演示中用于强调 `justify` 的工作原理。`justify` 的正常工作并不需要它。
:::

## 取消选中单选按钮

默认情况下，一旦单选按钮被选中就无法取消选择；再次点击它仍会保持选中状态。可以通过在父级单选组上使用 `allowEmptySelection` 属性来修改此行为，该属性允许单选按钮被取消选中。

import EmptySelection from '@site/static/usage/v8/radio/empty-selection/index.md';

<EmptySelection />

## 辅助与错误文本

可以在单选组内部使用 `helperText` 和 `errorText` 属性来显示辅助文本和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-radio-group`，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证逻辑手动添加这些类。

import HelperError from '@site/static/usage/v8/radio/helper-error/index.md';

<HelperError />


## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/radio/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/radio/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部件

import CSSParts from '@site/static/usage/v8/radio/theming/css-shadow-parts/index.md';

<CSSParts />

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