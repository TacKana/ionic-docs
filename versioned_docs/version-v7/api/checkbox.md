---
title: 'ion-checkbox'
---

import Props from '@ionic-internal/component-api/v7/checkbox/props.md';
import Events from '@ionic-internal/component-api/v7/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v7/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v7/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/checkbox/slots.md';

<head>
  <title>ion-checkbox：用于选择多个选项的 Ionic 应用复选框</title>
  <meta
    name="description"
    content="ion-checkbox 允许从一组选项中选择多个选项，激活时会显示为选中状态（打勾）。了解 Ionic 应用中的复选框组件。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

复选框允许从一组选项中选择多个选项。激活时，它们会显示为选中状态（打勾）。点击复选框将切换 `checked` 属性。也可以通过设置 `checked` 属性以编程方式选中它们。

## 基本用法

import Basic from '@site/static/usage/v7/checkbox/basic/index.md';

<Basic />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。此属性与 flexbox 的 `flex-direction` 属性相对应。

import LabelPlacement from '@site/static/usage/v7/checkbox/label-placement/index.md';

<LabelPlacement />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。此属性与 flexbox 的 `align-items` 属性相对应。

:::note
堆叠的复选框可以使用 `alignment` 属性进行对齐。当标签和控件需要水平居中对齐时，这很有用。
:::

import Alignment from '@site/static/usage/v7/checkbox/alignment/index.md';

<Alignment />

## 排列方式

开发者可以使用 `justify` 属性来控制标签和控件在行上的排列方式。此属性与 flexbox 的 `justify-content` 属性相对应。

import Justify from '@site/static/usage/v7/checkbox/justify/index.md';

<Justify />

:::note
`ion-item` 仅在演示中用于强调 `justify` 的工作方式。要让 `justify` 正常工作，并不需要 `ion-item`。
:::

## 不确定状态复选框

import Indeterminate from '@site/static/usage/v7/checkbox/indeterminate/index.md';

<Indeterminate />

## 标签内的链接

复选框标签有时会附带链接。这些链接可以提供与复选框相关的更多信息。但是，点击链接不应选中复选框。为了实现这一点，我们可以使用 [stopPropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 来阻止点击事件冒泡。使用这种方法时，标签的其余部分仍然保持可点击。

import LabelLink from '@site/static/usage/v7/checkbox/label-link/index.md';

<LabelLink />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/checkbox/theming/css-properties/index.md';

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

## 从旧版复选框语法迁移

Ionic 7.0 中引入了更简洁的复选框语法。这种新语法减少了设置复选框所需的样板代码，解决了可访问性问题，并改善了开发体验。

开发者可以逐个复选框进行迁移。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法需要移除 `ion-label`，并将标签直接传递到 `ion-checkbox` 内部。标签的位置可以通过 `ion-checkbox` 上的 `labelPlacement` 属性进行配置。标签和控件在行上的排列方式可以通过 `ion-checkbox` 上的 `justify` 属性来控制。

import Migration from '@site/static/usage/v7/checkbox/migration/index.md';

<Migration />

:::note
在 Ionic 的早期版本中，`ion-checkbox` 需要 `ion-item` 才能正常工作。从 Ionic 7.0 开始，仅当 `ion-item` 放置在 `ion-list` 中时，才应在 `ion-item` 中使用 `ion-checkbox`。此外，`ion-checkbox` 不再需要 `ion-item` 即可正常工作。
:::

### 使用旧版语法

Ionic 使用启发式方法来检测应用是否使用现代复选框语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-checkbox` 上的 `legacy` 属性设置为 `true`，以强制该复选框实例使用旧版语法。

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