---
title: "ion-checkbox"
---

import Props from '@ionic-internal/component-api/v8/checkbox/props.md';
import Events from '@ionic-internal/component-api/v8/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v8/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v8/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/checkbox/slots.md';

<head>
  <title>ion-checkbox：Ionic 应用的多选复选框</title>
  <meta name="description" content="ion-checkbox 允许从一组选项中选择多个选项，激活时显示为已选中（打勾）。了解 Ionic 应用的复选框组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


复选框允许从一组选项中选择多个选项。激活时显示为已选中（打勾）状态。点击复选框将切换 `checked` 属性。也可以通过设置 `checked` 属性以编程方式选中它们。

## 基本用法

import Basic from '@site/static/usage/v8/checkbox/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置方式。此属性对应 flexbox 的 `flex-direction` 属性。

import LabelPlacement from '@site/static/usage/v8/checkbox/label-placement/index.md';

<LabelPlacement />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。此属性对应 flexbox 的 `align-items` 属性。

:::note
堆叠复选框可以使用 `alignment` 属性进行对齐。当标签和控件需要在水平方向上居中时，这非常有用。
:::

import Alignment from '@site/static/usage/v8/checkbox/alignment/index.md';

<Alignment />

## 对齐排列

开发者可以使用 `justify` 属性来控制标签和控件在一行上的排列方式。此属性对应 flexbox 的 `justify-content` 属性。

import Justify from '@site/static/usage/v8/checkbox/justify/index.md';

<Justify />


:::note
`ion-item` 仅在演示中使用以强调 `justify` 的工作方式。`justify` 的正常运行并不需要它。
:::

## 不定状态复选框

import Indeterminate from '@site/static/usage/v8/checkbox/indeterminate/index.md';

<Indeterminate />

## 标签内的链接

复选框标签有时可以附带链接。这些链接可以提供与复选框相关的更多信息。但是，点击链接不应选中复选框。为了实现这一点，我们可以使用 [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) 来阻止点击事件冒泡。使用此方法时，标签的其余部分仍然可以点击。

import LabelLink from '@site/static/usage/v8/checkbox/label-link/index.md';

<LabelLink />

## 帮助和错误文本

可以通过 `helperText` 和 `errorText` 属性在复选框内部使用帮助和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-checkbox`，否则错误文本不会显示。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据您自己的验证逻辑手动添加类。

import HelperError from '@site/static/usage/v8/checkbox/helper-error/index.md';

<HelperError />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以对此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
