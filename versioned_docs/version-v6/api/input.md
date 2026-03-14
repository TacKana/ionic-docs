---
title: 'ion-input'
---

import Props from '@ionic-internal/component-api/v6/input/props.md';
import Events from '@ionic-internal/component-api/v6/input/events.md';
import Methods from '@ionic-internal/component-api/v6/input/methods.md';
import Parts from '@ionic-internal/component-api/v6/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/input/slots.md';

<head>
  <title>ion-input：自定义输入值类型样式与CSS属性</title>
  <meta
    name="description"
    content="ion-input 是 HTML input 元素的封装，提供自定义值类型样式和功能。它可在桌面设备上使用，并能与移动设备键盘集成。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

输入组件是对 HTML input 元素的封装，具有自定义样式和附加功能。它接受与 HTML input 大部分相同的属性，在桌面设备上表现优异，并能与移动设备键盘无缝集成。

## 基本用法

import Basic from '@site/static/usage/v6/input/basic/index.md';

<Basic />

## 类型

输入组件仅适用于文本类型的输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。默认 `type` 为 `"text"`。

import Types from '@site/static/usage/v6/input/types/index.md';

<Types />

## 标签定位

默认情况下，标签将占据其内容的宽度。可以更改标签的定位方式，例如固定宽度、堆叠式或浮动式标签。

import Labels from '@site/static/usage/v6/input/labels/index.md';

<Labels />

## 清除选项

输入组件提供了两种清除输入内容的方式，具体取决于你与它的交互方式。第一种是添加 `clearInput` 属性，当输入框有 `value` 时会显示清除按钮。第二种是 `clearOnEdit` 属性，它会在输入框失焦后再次输入时清除内容。对于 `type` 设置为 `"password"` 的输入框，默认启用 `clearOnEdit` 属性。

import Clear from '@site/static/usage/v6/input/clear/index.md';

<Clear />

## 填充式输入

当输入框位于 item 内部时，Material Design 提供了填充式样式。可以通过将 item 的 `fill` 属性设置为 `"solid"` 或 `"outline"` 来应用这些样式。

import Fill from '@site/static/usage/v6/input/fill/index.md';

<Fill />

## 辅助文本与错误文本

可以通过在 `"helper"` 和 `"error"` 插槽中添加备注，在带有输入框的 item 内部使用辅助文本和错误文本。除非将 `ion-invalid` 类添加到 `ion-item` 上，否则错误插槽不会显示。在 Angular 中，这会通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证逻辑手动添加此类。

<!-- 复用 Item 目录中的示例 -->

import HelperError from '@site/static/usage/v6/item/helper-error/index.md';

<HelperError />

## 字符计数器

字符计数器是显示在输入框下方的辅助文本，用于通知用户已输入的字符数占输入框可接受总字符数的比例。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传递一个格式化函数来自定义此行为。

<!-- 复用 Item 目录中的示例 -->

import Counter from '@site/static/usage/v6/item/counter/index.md';

<Counter />

## 过滤用户输入

开发者可以使用 `ionInput` 事件来响应用户输入（例如按键）更新输入值。这对于过滤无效或不需要的字符非常有用。

当在状态变量中存储值时，我们建议同时更新状态变量和 `ion-input` 组件的值。这可以确保状态变量和 `ion-input` 组件值保持同步。

import FilteringData from '@site/static/usage/v6/input/filtering/index.md';

<FilteringData />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/input/theming/colors/index.md';

<Colors />

### CSS 自定义属性

输入组件使用作用域封装，这意味着它会在运行时通过为每个样式追加一个额外的类来自动限定其 CSS 的作用域。覆盖 CSS 中的作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。直接以 `ion-input` 为目标进行自定义是无效的，因此我们建议添加一个类并通过该类进行自定义。

import CSSProps from '@site/static/usage/v6/input/theming/css-properties/index.md';

<CSSProps />

## 接口

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

虽然并非必需，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
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