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
  <title>ion-toggle：Ionic 应用的自定义切换按钮</title>
  <meta
    name="description"
    content="Toggle 更改单个选项的状态。使用 ion-toggle 创建可自定义的切换按钮，为你的应用实现打开或关闭功能。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

切换开关（Toggle）是更改单个选项状态的开关。可以通过按下或滑动来打开或关闭它们。切换开关也可以通过设置 `checked` 属性以编程方式选中。

## 基本用法

import Basic from '@site/static/usage/v7/toggle/basic/index.md';

<Basic />

## 开/关标签

切换开关可以通过设置 `enableOnOffLabels` 属性来启用开/关标签。这对无障碍访问很重要，因为它使已选中和未选中的切换开关更容易区分。

import OnOff from '@site/static/usage/v7/toggle/on-off/index.md';

<OnOff />

## 列表中的切换开关

切换开关也可以通过使用[项目（Item）](./item)和[列表（List）](./list)组件在列表视图中使用。

import List from '@site/static/usage/v7/toggle/list/index.md';

<List />

## 标签位置

开发者可以使用 `labelPlacement` 属性控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v7/toggle/label-placement/index.md';

<LabelPlacement />

## 对齐

开发者可以使用 `alignment` 属性控制标签和控件在交叉轴上的对齐方式。此属性对应 flexbox 的 `align-items` 属性。

:::note
堆叠的切换开关可以使用 `alignment` 属性进行对齐。当标签和控件需要在水平方向上居中时，这很有用。
:::

import Alignment from '@site/static/usage/v7/toggle/alignment/index.md';

<Alignment />

## 排列（Justify）

开发者可以使用 `justify` 属性控制标签和控件在一行上的排列方式。

import Justify from '@site/static/usage/v7/toggle/justify/index.md';

<Justify />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/toggle/theming/colors/index.md';

<Colors />

### CSS 自定义属性

CSS 自定义属性可以与标准 CSS 结合使用，以定位切换开关的不同部分。我们可以直接修改切换开关的 `width` 和 `height` 来改变轨道的尺寸，同时使用 `--handle-width` 和 `--handle-height` 自定义属性来自定义手柄尺寸。

import CSSProps from '@site/static/usage/v7/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部分

我们可以通过定位暴露的特定阴影部分来进一步自定义切换开关。这些部分上的任何 CSS 属性都可以设置样式，并且也可以与 CSS 自定义属性结合使用。

import CSSParts from '@site/static/usage/v7/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## 从旧版切换开关语法迁移

Ionic 7.0 引入了更简单的切换开关语法。这种新语法减少了设置切换开关所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法需要移除 `ion-label` 并将标签直接传递给 `ion-toggle`。标签的位置可以使用 `ion-toggle` 上的 `labelPlacement` 属性进行配置。标签和控件在一行上的排列方式可以使用 `ion-toggle` 上的 `justify` 属性控制。

import Migration from '@site/static/usage/v7/toggle/migration/index.md';

<Migration />

:::note
在之前的 Ionic 版本中，`ion-item` 是 `ion-toggle` 正常运行所必需的。从 Ionic 7.0 开始，仅当项目放置在 `ion-list` 中时，才应在 `ion-item` 中使用 `ion-toggle`。此外，`ion-toggle` 的正常运行不再需要 `ion-item`。
:::

### 使用旧版语法

Ionic 使用启发式方法检测应用是否在使用现代切换开关语法。在某些情况下，继续使用旧版语法可能更可取。开发者可以将 `ion-toggle` 上的 `legacy` 属性设置为 `true`，以强制该切换开关实例使用旧版语法。

## 接口

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
