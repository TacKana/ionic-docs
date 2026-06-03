---
title: "ion-picker"
---
import Props from '@ionic-internal/component-api/v8/picker/props.md';
import Events from '@ionic-internal/component-api/v8/picker/events.md';
import Methods from '@ionic-internal/component-api/v8/picker/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker/slots.md';

<head>
  <title>ion-picker：在列中显示选项列表</title>
  <meta name="description" content="Picker 显示一个或多个列，其中包含供用户选择的选项。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Picker 显示一个或多个列，其中包含供用户选择的选项。

import Basic from '@site/static/usage/v8/picker/basic/index.md';

<Basic />

## 前缀和后缀内容

使用 `prefix` 和 `suffix` 插槽向选择器添加额外内容。

import PrefixSuffix from '@site/static/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## 主题

### CSS 变量

选择器的高亮和淡入淡出效果可以使用 `ion-picker` 上的 CSS 变量进行自定义。开发者可以通过直接定位 `ion-picker-column-options` 并使用宿主级别样式来自定义其单独外观。

import CSSProps from '@site/static/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## 在 Modal 中使用 Picker

Picker 可以显示在覆盖层（如 `ion-modal`）内部，以创建带有确认或取消按钮的选择器体验。

import ModalExample from '@site/static/usage/v8/picker/modal/index.md';

<ModalExample />

## 无障碍

### 屏幕阅读器

Picker 通过在每个 [Picker Column](./picker-column) 上实现 [`slider` 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)来支持使用屏幕阅读器进行导航。以下手势可用于导航 Picker。

| 手势 | 功能 |
| - | - |
| 向左滑动 | 将焦点移动到上一个 Picker Column。 |
| 向右滑动 | 将焦点移动到下一个 Picker Column。 |
| 向上滑动 | 在 Picker Column 中选择下一个选项。 |
| 向下滑动 | 在 Picker Column 中选择上一个选项。 |
| 双击并上下滑动 | 调整 Picker Column 中所选选项。可替代上下滑动使用。 |

:::caution
向上滑动和向下滑动手势依赖于如 [`slider` 文档](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)所述的正确合成按键事件。[基于 Chromium 的浏览器无法正确合成键盘事件](https://issues.chromium.org/issues/40816094)，但在 Chromium 浏览器实现此功能之前，可以使用"双击并上下滑动"手势作为替代方案。
:::

### 键盘交互

每个 [Picker Column](./picker-column) 在聚焦时可以使用键盘进行导航。

| 键                    | 描述                           |
| --------------------  | -----------------------------  |
| <kbd>ArrowUp</kbd>   | 滚动到上一个选项。              |
| <kbd>ArrowDown</kbd> | 滚动到下一个选项。              |
| <kbd>PageUp</kbd>    | 向上滚动多个选项。              |
| <kbd>PageDown</kbd>  | 向下滚动多个选项。              |
| <kbd>Home</kbd>      | 滚动到第一个选项。              |
| <kbd>End</kbd>       | 滚动到最后一个选项。            |

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
