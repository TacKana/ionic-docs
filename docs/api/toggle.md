---
title: "ion-toggle"
---

import Props from '@ionic-internal/component-api/v8/toggle/props.md';
import Events from '@ionic-internal/component-api/v8/toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toggle/slots.md';

<head>
  <title>ion-toggle: 自定义 Ionic 应用切换按钮</title>
  <meta name="description" content="Toggle 用于更改单个选项的状态。使用 ion-toggle 创建可开关的自定义切换按钮，适用于您的应用程序。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toggle 是更改单个选项状态的开关。可以通过按压或滑动来打开或关闭它们。Toggle 也可以通过设置 `checked` 属性以编程方式选中。

## 基本用法

import Basic from '@site/static/usage/v8/toggle/basic/index.md';

<Basic />

## 开 / 关标签

Toggle 可以通过设置 `enableOnOffLabels` 属性来启用开/关标签。这对无障碍很重要，因为它使区分已选中和未选中的 toggle 更加容易。

import OnOff from '@site/static/usage/v8/toggle/on-off/index.md';

<OnOff />

## 列表中的 Toggle

Toggle 也可以通过在列表视图中使用 [Item](./item) 和 [List](./list) 组件来使用。

import List from '@site/static/usage/v8/toggle/list/index.md';

<List />

## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v8/toggle/label-placement/index.md';

<LabelPlacement />

## 对齐

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。此属性反映了 flexbox 的 `align-items` 属性。

:::note
可以使用 `alignment` 属性来对齐堆叠的 toggle。当标签和控件需要在水平方向上居中时，这很有用。
:::

import Alignment from '@site/static/usage/v8/toggle/alignment/index.md';

<Alignment />

## 排列

开发者可以使用 `justify` 属性来控制标签和控件在一行上的排列方式。

import Justify from '@site/static/usage/v8/toggle/justify/index.md';

<Justify />

## 帮助文本与错误文本

帮助文本和错误文本可以通过 `helperText` 和 `errorText` 属性在 toggle 内部使用。除非在 `ion-toggle` 上添加了 `ion-invalid` 和 `ion-touched` 类，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据您自己的验证逻辑手动添加类。

import HelperError from '@site/static/usage/v8/toggle/helper-error/index.md';

<HelperError />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/toggle/theming/colors/index.md';

<Colors />

### CSS 自定义属性

CSS 自定义属性可以与标准 CSS 结合使用，以定位 toggle 的不同部分。我们可以直接修改 toggle 的 `width` 和 `height` 来更改轨道的大小，同时使用 `--handle-width` 和 `--handle-height` 自定义属性来定制手柄的大小。

import CSSProps from '@site/static/usage/v8/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

我们可以通过定位暴露的特定阴影部分来进一步定制 toggle。这些部分上的任何 CSS 属性都可以设置样式，并且它们也可以与 CSS 自定义属性结合使用。

import CSSParts from '@site/static/usage/v8/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## 接口

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口使用，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
