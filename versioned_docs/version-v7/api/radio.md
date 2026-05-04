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
    content="单选按钮组件应配合 ion-radio-groups 在 iOS 和 Android 设备上使用。阅读以了解更多关于单选按钮属性用法和安装的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

单选按钮应在 [单选按钮组](./radio-group) 内部使用。点击一个单选按钮会选中它并取消选中之前选中的按钮（如果存在）。也可以通过编程方式选中，只需将父级单选按钮组的 `value` 属性设置为该单选按钮的值。

当单选按钮位于单选按钮组内时，任何时刻只能有一个被选中。如果需要同时选中多个项目，则应使用 [复选框](./checkbox)。可以对组内的单选按钮禁用，以防止用户与之交互。

## 基本用法

import Basic from '@site/static/usage/v7/radio/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。该属性与 flexbox 的 `flex-direction` 属性相对应。

import LabelPlacement from '@site/static/usage/v7/radio/label-placement/index.md';

<LabelPlacement />

## 标签换行

无论标签位置如何，默认情况下长文本不会自动换行。如果单选按钮的宽度受限，溢出的文本将被截断并以省略号显示。可以通过在包裹单选按钮文本的容器上添加 `ion-text-wrap` 类，或使用 `::part()` 选择器对 `label` 阴影部件进行样式设置，来启用文本换行。

import LabelWrap from '@site/static/usage/v7/radio/label-wrap/index.md';

<LabelWrap />

## 对象值引用

默认情况下，单选按钮组使用严格相等（`===`）来判断选项是否被选中。可以通过为 `compareWith` 属性提供属性名或函数来覆盖此行为。

import UsingComparewith from '@site/static/usage/v7/radio/using-comparewith/index.md';

<UsingComparewith />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。该属性与 flexbox 的 `align-items` 属性相对应。

:::note
堆叠排列的单选按钮可以使用 `alignment` 属性进行对齐。当标签和控件需要在水平方向上居中对齐时，这很有用。
:::

import Alignment from '@site/static/usage/v7/radio/alignment/index.md';

<Alignment />

## 布局方式

开发者可以使用 `justify` 属性来控制标签和控件在行内的排列方式。该属性与 flexbox 的 `justify-content` 属性相对应。

import Justify from '@site/static/usage/v7/radio/justify/index.md';

<Justify />

:::note
`ion-item` 仅在演示中用于强调 `justify` 的工作原理。`justify` 正常工作并不需要 `ion-item`。
:::

## 取消选中单选按钮

默认情况下，单选按钮一旦被选中就不能取消选中；再次点击它仍将保持选中状态。可以通过在父级单选按钮组上使用 `allowEmptySelection` 属性来修改此行为，该属性允许取消选中单选按钮。

import EmptySelection from '@site/static/usage/v7/radio/empty-selection/index.md';

<EmptySelection />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/radio/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/radio/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部件

import CSSParts from '@site/static/usage/v7/radio/theming/css-shadow-parts/index.md';

<CSSParts />

<LegacyAnchor id="migrating-from-legacy-radio-syntax" />

## 从旧版单选按钮语法迁移

Ionic 7.0 引入了一种更简洁的单选按钮语法。这种新语法减少了设置单选按钮所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

开发者可以逐个单选按钮进行迁移。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法需要移除 `ion-label` 并将标签直接放在 `ion-radio` 内部。标签的位置可以通过 `ion-radio` 上的 `labelPlacement` 属性进行配置。标签和控件在行内的排列方式可以通过 `ion-radio` 上的 `justify` 属性来控制。

import Migration from '@site/static/usage/v7/radio/migration/index.md';

<Migration />

:::note
在 Ionic 的旧版本中，`ion-radio` 需要配合 `ion-item` 才能正常工作。从 Ionic 7.0 开始，仅当 `ion-item` 放置在 `ion-list` 中时，才需要在其中使用 `ion-radio`。此外，`ion-radio` 正常工作不再需要 `ion-item`。
:::

### 使用旧版语法

Ionic 使用启发式方法来检测应用是否在使用现代单选按钮语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-radio` 上的 `legacy` 属性设置为 `true`，以强制该单选按钮实例使用旧版语法。

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