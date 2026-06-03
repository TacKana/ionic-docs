---
title: "ion-radio"
---
import Props from '@ionic-internal/component-api/v8/radio/props.md';
import Events from '@ionic-internal/component-api/v8/radio/events.md';
import Methods from '@ionic-internal/component-api/v8/radio/methods.md';
import Parts from '@ionic-internal/component-api/v8/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/radio/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/radio/slots.md';

<head>
  <title>ion-radio：适用于 iOS 和 Android 的单选按钮组件</title>
  <meta name="description" content="Radio 组件应在 iOS 和 Android 设备上的 ion-radio-group 内部使用。阅读以了解更多关于单选按钮属性的使用和安装信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Radio 应在[单选按钮组](./radio-group)内部使用。按下某个单选按钮将选中它，并取消选中之前选中的单选按钮（如果有）。也可以通过将父级单选按钮组的 value 属性设置为该单选按钮的 value 值，以编程方式选中它。

当单选按钮位于单选按钮组中时，任何时候只有一个单选按钮会被选中。如果应选择多个项目，则应使用[复选框](./checkbox)。单选按钮可以在组中禁用，以防止与其交互。

## 基本用法

import Basic from '@site/static/usage/v8/radio/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置位置。此属性映射了 flexbox 的 `flex-direction` 属性。

import LabelPlacement from '@site/static/usage/v8/radio/label-placement/index.md';

<LabelPlacement />

## 标签换行

无论标签位置如何，长文本默认不会换行。如果单选按钮的宽度受限，溢出的文本将被截断并显示省略号。您可以通过在单选按钮文本的包装器上添加 `ion-text-wrap` 类，或使用 `::part()` 选择器设置 `label` shadow part 的样式来启用文本换行。

import LabelWrap from '@site/static/usage/v8/radio/label-wrap/index.md';

<LabelWrap />

## 对象值引用

默认情况下，单选按钮组使用严格相等（`===`）来确定某个选项是否被选中。这可以通过向 `compareWith` 属性提供属性名或函数来覆盖。

import UsingComparewith from '@site/static/usage/v8/radio/using-comparewith/index.md';

<UsingComparewith />

## 对齐

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。此属性映射了 flexbox 的 `align-items` 属性。

:::note
堆叠式单选按钮可以使用 `alignment` 属性进行对齐。当标签和控件需要水平居中时，这非常有用。
:::

import Alignment from '@site/static/usage/v8/radio/alignment/index.md';

<Alignment />

## 排列

开发者可以使用 `justify` 属性来控制标签和控件在一行上的排列方式。此属性映射了 flexbox 的 `justify-content` 属性。

import Justify from '@site/static/usage/v8/radio/justify/index.md';

<Justify />

:::note
演示中使用 `ion-item` 仅是为了强调 `justify` 的工作方式。`justify` 的正常运行并不需要它。
:::

## 取消选择单选按钮

默认情况下，单选按钮一旦被选中就无法取消选择；再次按下它将保持选中状态。可以通过使用父级单选按钮组上的 `allowEmptySelection` 属性来修改此行为，从而允许取消选择单选按钮。

import EmptySelection from '@site/static/usage/v8/radio/empty-selection/index.md';

<EmptySelection />

## 帮助和错误文本

帮助和错误文本可以在单选按钮组中使用 `helperText` 和 `errorText` 属性。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-radio-group`，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据您自己的验证逻辑手动添加类。

import HelperError from '@site/static/usage/v8/radio/helper-error/index.md';

<HelperError />


## 主题

### 颜色

import Colors from '@site/static/usage/v8/radio/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/radio/theming/css-shadow-parts/index.md';

<CSSParts />

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
