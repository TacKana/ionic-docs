---
title: 复选框组件
---

import Props from '@ionic-internal/component-api/v8/checkbox/props.md';
import Events from '@ionic-internal/component-api/v8/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v8/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v8/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/checkbox/slots.md';

<head>
  <title>ion-checkbox: Ionic 应用复选框，用于选择多个选项</title>
  <meta name="description" content="ion-checkbox 允许从一组选项中选择多个选项，激活时显示为选中（打勾）状态。了解 Ionic 应用的复选框组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


复选框允许用户从一组选项中选择多个选项。激活时，它们会显示为选中（打勾）状态。点击复选框将切换 `checked` 属性。也可以通过编程方式设置 `checked` 属性来选中它们。

## 基本用法

import Basic from '@site/static/usage/v8/checkbox/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置位置。该属性与 flexbox 的 `flex-direction` 属性类似。

import LabelPlacement from '@site/static/usage/v8/checkbox/label-placement/index.md';

<LabelPlacement />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。该属性与 flexbox 的 `align-items` 属性类似。

:::note
可以使用 `alignment` 属性来对齐堆叠的复选框。当需要水平居中标签和控件时，这很有用。
:::

import Alignment from '@site/static/usage/v8/checkbox/alignment/index.md';

<Alignment />

## 内容分布

开发者可以使用 `justify` 属性来控制标签和控件在行内的分布方式。该属性与 flexbox 的 `justify-content` 属性类似。

import Justify from '@site/static/usage/v8/checkbox/justify/index.md';

<Justify />


:::note
示例中仅使用 `ion-item` 来强调 `justify` 的工作原理。`justify` 正确运行并不需要它。
:::

## 不确定状态复选框

import Indeterminate from '@site/static/usage/v8/checkbox/indeterminate/index.md';

<Indeterminate />

## 标签内的链接

复选框标签有时可能需要包含链接。这些链接可以提供与复选框相关的更多信息。然而，点击链接不应选中复选框。为此，我们可以使用 [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) 来阻止点击事件冒泡。采用这种方法时，标签的其余部分仍然保持可点击状态。

import LabelLink from '@site/static/usage/v8/checkbox/label-link/index.md';

<LabelLink />

## 辅助文本与错误文本

可以通过 `helperText` 和 `errorText` 属性在复选框内部使用辅助文本和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-checkbox` 上，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证逻辑手动添加这些类。

import HelperError from '@site/static/usage/v8/checkbox/helper-error/index.md';

<HelperError />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/checkbox/theming/css-properties/index.md';

<CSSProps />

## 接口

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对该组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

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