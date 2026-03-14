---
title: 选择器组件
---
import Props from '@ionic-internal/component-api/v8/picker/props.md';
import Events from '@ionic-internal/component-api/v8/picker/events.md';
import Methods from '@ionic-internal/component-api/v8/picker/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker/slots.md';

<head>
  <title>ion-picker：以列的形式展示选项列表</title>
  <meta name="description" content="选择器会显示一列或多列选项供用户选择。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

选择器会显示一列或多列选项供用户选择。

import Basic from '@site/static/usage/v8/picker/basic/index.md';

<Basic />

## 前缀与后缀内容

使用 `prefix` 和 `suffix` 插槽可以为选择器添加额外的内容。

import PrefixSuffix from '@site/static/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## 主题定制

### CSS 变量

选择器的高亮和淡出效果可以通过在 `ion-picker` 上使用 CSS 变量进行自定义。开发者可以通过直接定位 `ion-picker-column-options` 并使用宿主级别的样式来自定义其外观。

import CSSProps from '@site/static/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## 模态框中的选择器

选择器可以显示在覆盖层（如 `ion-modal`）内部，以创建带有确认或取消按钮的选择器体验。

import ModalExample from '@site/static/usage/v8/picker/modal/index.md';

<ModalExample />

## 无障碍访问

### 屏幕阅读器

选择器通过在每个[选择器列](./picker-column)上实现 [`slider` 角色](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role)来支持屏幕阅读器导航。可以使用以下手势来浏览选择器。

| 手势 | 功能 |
| - | - |
| 向左滑动 | 将焦点移至上一个选择器列。 |
| 向右滑动 | 将焦点移至下一个选择器列。 |
| 向上滑动 | 在选择器列中选择下一个选项。 |
| 向下滑动 | 在选择器列中选择上一个选项。 |
| 双击并向上/向下滑动 | 调整选择器列中的选定选项。可作为向上/向下滑动的替代方案。 |

:::caution
向上滑动和向下滑动手势依赖于正确的键盘事件合成，如 [`slider` 文档](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role)所述。[基于 Chromium 的浏览器未能正确合成键盘事件](https://issues.chromium.org/issues/40816094)，但在基于 Chromium 的浏览器实现此功能之前，可以使用“双击并向上/向下滑动”手势作为替代方案。
:::

### 键盘交互

每个[选择器列](./picker-column)在获得焦点时都可以使用键盘进行导航。

| 按键                  | 描述                          |
| -------------------- | ------------------------------------ |
| <kbd>ArrowUp</kbd>   | 向上滚动至上一个选项。       |
| <kbd>ArrowDown</kbd> | 向下滚动至下一个选项。           |
| <kbd>PageUp</kbd>    | 向上滚动多个选项。   |
| <kbd>PageDown</kbd>  | 向下滚动多个选项。 |
| <kbd>Home</kbd>      | 滚动至第一个选项。          |
| <kbd>End</kbd>       | 滚动至最后一个选项。           |

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