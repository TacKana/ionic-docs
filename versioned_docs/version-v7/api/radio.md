---
title: 'ion-radio'
---

import Props from '@ionic-internal/component-api/v7/radio/props.md';
import Events from '@ionic-internal/component-api/v7/radio/events.md';
import Methods from '@ionic-internal/component-api/v7/radio/methods.md';
import Parts from '@ionic-internal/component-api/v7/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/radio/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/radio/slots.md';

<head>
  <title>ion-radio：适用于 iOS 和 Android 的单选按钮组件</title>
  <meta
    name="description"
    content="Radio 组件应在 iOS 和 Android 设备的 ion-radio-groups 内部使用。阅读了解更多关于单选按钮属性用法和安装的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

单选按钮（Radio）应在[单选按钮组（radio group）](./radio-group)内部使用。按下一个单选按钮将选中它并取消选中之前选中的单选按钮（如果有的话）。也可以通过将父级单选按钮组的 value 属性设置为该单选按钮的值，以编程方式选中它们。

当单选按钮在单选按钮组内时，任何时候只有一个单选按钮被选中。如果应该选择多个项目，则应使用[复选框（checkbox）](./checkbox)。可以禁用组内的单选按钮以防止与其交互。

## 基本用法

import Basic from '@site/static/usage/v7/radio/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性控制标签相对于控件的位置。此属性对应 flexbox 的 `flex-direction` 属性。

import LabelPlacement from '@site/static/usage/v7/radio/label-placement/index.md';

<LabelPlacement />

## 标签换行

无论标签位置如何，长文本默认不会换行。如果单选按钮的宽度受限，溢出的文本将用省略号截断。你可以通过向单选按钮文本周围的包装器添加 `ion-text-wrap` 类，或使用 `::part()` 选择器设置 `label` 阴影部分的样式来启用文本换行。

import LabelWrap from '@site/static/usage/v7/radio/label-wrap/index.md';

<LabelWrap />

## 对象值引用

默认情况下，单选按钮组使用严格相等（`===`）来确定是否选择了选项。可以通过为 `compareWith` 属性提供属性名称或函数来覆盖此行为。

import UsingComparewith from '@site/static/usage/v7/radio/using-comparewith/index.md';

<UsingComparewith />

## 对齐

开发者可以使用 `alignment` 属性控制标签和控件在交叉轴上的对齐方式。此属性对应 flexbox 的 `align-items` 属性。

:::note
堆叠的单选按钮可以使用 `alignment` 属性进行对齐。当标签和控件需要在水平方向上居中时，这很有用。
:::

import Alignment from '@site/static/usage/v7/radio/alignment/index.md';

<Alignment />

## 排列（Justify）

开发者可以使用 `justify` 属性控制标签和控件在一行上的排列方式。此属性对应 flexbox 的 `justify-content` 属性。

import Justify from '@site/static/usage/v7/radio/justify/index.md';

<Justify />

:::note
`ion-item` 仅用于演示中强调 `justify` 的工作原理。`justify` 的正常运行不需要它。
:::

## 取消选中单选按钮

默认情况下，单选按钮一旦选中就不能取消选中；再次按它会保持选中状态。可以通过在父级单选按钮组上使用 `allowEmptySelection` 属性来修改此行为，从而允许取消选中单选按钮。

import EmptySelection from '@site/static/usage/v7/radio/empty-selection/index.md';

<EmptySelection />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/radio/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/radio/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部分

import CSSParts from '@site/static/usage/v7/radio/theming/css-shadow-parts/index.md';

<CSSParts />

## 从旧版单选按钮语法迁移

Ionic 7.0 引入了更简单的单选按钮语法。这种新语法减少了设置单选按钮所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

开发者可以逐个迁移每个单选按钮。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法需要移除 `ion-label` 并将标签直接传递给 `ion-radio`。标签的位置可以使用 `ion-radio` 上的 `labelPlacement` 属性进行配置。标签和控件在一行上的排列方式可以使用 `ion-radio` 上的 `justify` 属性控制。

import Migration from '@site/static/usage/v7/radio/migration/index.md';

<Migration />

:::note
在之前的 Ionic 版本中，`ion-item` 是 `ion-radio` 正常运行所必需的。从 Ionic 7.0 开始，仅当项目放置在 `ion-list` 中时，才应在 `ion-item` 中使用 `ion-radio`。此外，`ion-radio` 的正常运行不再需要 `ion-item`。
:::

### 使用旧版语法

Ionic 使用启发式方法检测应用是否在使用现代单选按钮语法。在某些情况下，继续使用旧版语法可能更可取。开发者可以将 `ion-radio` 上的 `legacy` 属性设置为 `true`，以强制该单选按钮实例使用旧版语法。

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
