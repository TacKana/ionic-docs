---
title: 'ion-toggle'
---

import Props from '@ionic-internal/component-api/v7/toggle/props.md';
import Events from '@ionic-internal/component-api/v7/toggle/events.md';
import Methods from '@ionic-internal/component-api/v7/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v7/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/toggle/slots.md';

<head>
  <title>ion-toggle: Ionic 应用的自定义开关按钮</title>
  <meta
    name="description"
    content="Toggle 用于切换单个选项的状态。使用 ion-toggle 可以为你的应用创建可自定义的开关按钮，实现开启或关闭功能。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

开关（Toggle）是用于改变单个选项状态的切换组件。可以通过按压或滑动手势来开启或关闭。也可以通过设置 `checked` 属性以编程方式选中开关。

## 基本用法

import Basic from '@site/static/usage/v7/toggle/basic/index.md';

<Basic />

## 开/关标签

通过设置 `enableOnOffLabels` 属性，开关可以启用开/关标签。这对于可访问性很重要，因为它让用户更容易区分选中和未选中的开关状态。

import OnOff from '@site/static/usage/v7/toggle/on-off/index.md';

<OnOff />

## 列表中的开关

开关也可以与 [Item](./item) 和 [List](./list) 组件结合使用，在列表视图中呈现。

import List from '@site/static/usage/v7/toggle/list/index.md';

<List />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于开关控件的位置。

import LabelPlacement from '@site/static/usage/v7/toggle/label-placement/index.md';

<LabelPlacement />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和开关在交叉轴上的对齐方式。该属性与 flexbox 的 `align-items` 属性用法一致。

:::note
堆叠排列的开关可以使用 `alignment` 属性进行对齐。当标签和控件需要水平居中对齐时，这非常有用。
:::

import Alignment from '@site/static/usage/v7/toggle/alignment/index.md';

<Alignment />

## 布局对齐

开发者可以使用 `justify` 属性来控制标签和开关在一行上的排列方式。

import Justify from '@site/static/usage/v7/toggle/justify/index.md';

<Justify />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/toggle/theming/colors/index.md';

<Colors />

### CSS 自定义属性

CSS 自定义属性可以与标准 CSS 结合使用，来定制开关的不同部分。我们可以直接修改开关的 `width` 和 `height` 来改变轨道的尺寸，同时使用 `--handle-width` 和 `--handle-height` 自定义属性来调整手柄的大小。

import CSSProps from '@site/static/usage/v7/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS 影子部件

我们还可以通过定位暴露的特定影子部件来进一步定制开关。这些部件上的任何 CSS 属性都可以被样式化，并且它们也可以与 CSS 自定义属性结合使用。

import CSSParts from '@site/static/usage/v7/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

<LegacyAnchor id="migrating-from-legacy-toggle-syntax" />

## 从旧版开关语法迁移

Ionic 7.0 引入了一种更简洁的开关语法。这种新语法减少了设置开关所需的模板代码，解决了可访问性问题，并改善了开发体验。

虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法涉及移除 `ion-label`，并直接将标签传递到 `ion-toggle` 内部。标签的位置可以通过 `ion-toggle` 上的 `labelPlacement` 属性进行配置。标签和控件在一行上的排列方式可以通过 `ion-toggle` 上的 `justify` 属性来控制。

import Migration from '@site/static/usage/v7/toggle/migration/index.md';

<Migration />

:::note
在 Ionic 的早期版本中，`ion-toggle` 需要依赖 `ion-item` 才能正常工作。从 Ionic 7.0 开始，只有当 `ion-item` 被放置在 `ion-list` 中时，才需要在其中使用 `ion-toggle`。此外，`ion-toggle` 不再需要 `ion-item` 也能正常工作。
:::

### 使用旧版语法

Ionic 使用启发式方法来检测应用是否在使用现代开关语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-toggle` 上的 `legacy` 属性设置为 `true`，以强制该开关实例使用旧版语法。

## 接口

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

虽然这不是必需的，但这个接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型约束。

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
}
```

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />