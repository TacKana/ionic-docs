---
title: 切换按钮组件
---
import Props from '@ionic-internal/component-api/v8/toggle/props.md';
import Events from '@ionic-internal/component-api/v8/toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toggle/slots.md';

<head>
  <title>ion-toggle: Ionic 应用的自定义切换按钮</title>
  <meta name="description" content="Toggle 用于切换单个选项的状态。使用 ion-toggle 创建可自定义的切换按钮，可在应用中开启或关闭。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toggle（切换按钮）是用于改变单个选项状态的开关。可以通过点击或滑动来开启或关闭。也可以通过设置 `checked` 属性以编程方式选中。

## 基本用法

import Basic from '@site/static/usage/v8/toggle/basic/index.md';

<Basic />


## 开启/关闭标签

通过设置 `enableOnOffLabels` 属性，Toggle 可以启用开/关标签。这对可访问性非常重要，因为它能更容易地区分选中和未选中的 Toggle。

import OnOff from '@site/static/usage/v8/toggle/on-off/index.md';

<OnOff />


## 列表中的 Toggle

Toggle 也可以与 [Item](./item) 和 [List](./list) 组件结合使用，在列表视图中呈现。

import List from '@site/static/usage/v8/toggle/list/index.md';

<List />


## 标签位置

开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v8/toggle/label-placement/index.md';

<LabelPlacement />

## 对齐方式

开发者可以使用 `alignment` 属性来控制标签和控件在交叉轴上的对齐方式。该属性与 flexbox 的 `align-items` 属性相对应。

:::note
堆叠排列的 Toggle 可以使用 `alignment` 属性进行对齐。这在需要将标签和控件水平居中对齐时非常有用。
:::

import Alignment from '@site/static/usage/v8/toggle/alignment/index.md';

<Alignment />

## 布局方式

开发者可以使用 `justify` 属性来控制标签和控件在行内的排列方式。

import Justify from '@site/static/usage/v8/toggle/justify/index.md';

<Justify />

## 辅助文本与错误文本

可以使用 `helperText` 和 `errorText` 属性在 Toggle 内部添加辅助文本和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-toggle` 上，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误信息。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据您自己的验证逻辑手动添加这些类。

import HelperError from '@site/static/usage/v8/toggle/helper-error/index.md';

<HelperError />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/toggle/theming/colors/index.md';

<Colors />

### CSS 自定义属性

CSS 自定义属性可以与标准 CSS 结合使用，以针对 Toggle 的不同部分进行样式设置。我们可以直接修改 Toggle 的 `width` 和 `height` 来改变轨道的尺寸，同时使用 `--handle-width` 和 `--handle-height` 自定义属性来定制手柄的大小。

import CSSProps from '@site/static/usage/v8/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

我们可以通过定位暴露的特定 Shadow Parts 来进一步自定义 Toggle。这些部件上的任何 CSS 属性都可以被样式化，并且它们也可以与 CSS 自定义属性结合使用。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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