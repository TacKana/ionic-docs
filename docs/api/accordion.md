---
title: "ion-accordion"
---
import Props from '@ionic-internal/component-api/v8/accordion/props.md';
import Events from '@ionic-internal/component-api/v8/accordion/events.md';
import Methods from '@ionic-internal/component-api/v8/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v8/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/accordion/slots.md';

<head>
  <title>ion-accordion：手风琴组件：如何构建及示例</title>
  <meta name="description" content="ion-accordion 组件提供可折叠的内容区域，用于减少垂直空间并组织信息。了解如何构建一个并查看示例。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

手风琴组件在内容中提供可折叠的部分，以减少垂直空间，同时提供一种组织和分组信息的方式。所有 `ion-accordion` 组件都应分组在 `ion-accordion-group` 组件内。

## 基本用法

import Basic from '@site/static/usage/v8/accordion/basic/index.md';

<Basic />

## 切换手风琴

通过设置 `ion-accordion-group` 上的 `value` 属性来控制哪个手风琴处于打开状态。设置此属性允许开发者以编程方式展开或折叠某些手风琴。

import Toggle from '@site/static/usage/v8/accordion/toggle/index.md';

<Toggle />

## 监听手风琴状态变化

:::caution
其他组件（如 [Input](./input) 和 [Textarea](./textarea)）发出的大多数 `ionChange` 事件都会冒泡。因此，如果在手风琴内部使用了这些组件，这些事件会冒泡并触发手风琴组上的 `ionChange` 监听器。

在手风琴内部使用会发出 `ionChange` 的其他组件时，建议在手风琴组上的 `ionChange` 回调中检查事件对象上的 `target` 键，以确认 `ionChange` 来自手风琴组而非任何子元素。
:::

开发者可以监听 `ionChange` 事件以在手风琴展开或折叠时收到通知。

import ListenChanges from '@site/static/usage/v8/accordion/listen-changes/index.md';

<ListenChanges />

## 多个手风琴

开发者可以使用 `multiple` 属性允许同时打开多个手风琴。

import Multiple from '@site/static/usage/v8/accordion/multiple/index.md';

<Multiple />

## 禁用手风琴

### 单个手风琴

单个手风琴可以通过 `ion-accordion` 上的 `disabled` 属性来禁用。

import DisableIndividual from '@site/static/usage/v8/accordion/disable/individual/index.md';

<DisableIndividual />

### 手风琴组

手风琴组可以通过 `ion-accordion-group` 上的 `disabled` 属性来禁用。

import DisableGroup from '@site/static/usage/v8/accordion/disable/group/index.md';

<DisableGroup />

## 只读手风琴

### 单个手风琴

单个手风琴可以通过 `ion-accordion` 上的 `readonly` 属性设置为只读。

import ReadonlyIndividual from '@site/static/usage/v8/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### 手风琴组

手风琴组可以通过 `ion-accordion-group` 上的 `readonly` 属性设置为只读。

import ReadonlyGroup from '@site/static/usage/v8/accordion/readonly/group/index.md';

<ReadonlyGroup />

## 结构

### 头部

`header` 插槽用作切换手风琴展开或折叠的触发器。我们建议在此处使用 `ion-item`，以利用其无障碍和主题功能。

在 `header` 插槽中使用 `ion-item` 时，`ion-item` 的 `button` 属性会设置为 `true`，`detail` 属性设置为 `false`。此外，我们还会自动向 `ion-item` 添加一个切换图标。当您展开或折叠手风琴时，此图标会自动旋转。更多信息请参见[自定义图标](#图标)。

### 内容

`content` 插槽用作手风琴中根据状态显示或隐藏的部分。您可以在此放置任何内容，但另一个 `ion-content` 实例除外，因为每个页面只能添加一个 `ion-content` 实例。

## 自定义

### 展开样式

有两种内置展开样式：`compact` 和 `inset`。此展开样式通过 `ion-accordion-group` 上的 `expand` 属性设置。

当 `expand="inset"` 时，手风琴组会带有边框圆角。在 `md` 模式下，整个手风琴在打开时会向下移动。

import ExpansionStyles from '@site/static/usage/v8/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### 高级展开样式

您可以通过根据手风琴的状态设置样式来自定义展开行为。`ion-accordion` 上有四种状态类。使用这些类进行样式设置可以创建高级状态转换：

| 类名 | 描述 |
| ---------- | ----------- |
| `.accordion-expanding` | 手风琴正在展开时应用 |
| `.accordion-expanded` | 手风琴完全展开时应用 |
| `.accordion-collapsing` | 手风琴正在折叠时应用 |
| `.accordion-collapsed` | 手风琴完全折叠时应用 |

如果需要定位手风琴的特定部分，我们建议直接定位到元素。例如，如果要在手风琴展开时自定义头部插槽中的 ion-item，可以使用以下选择器：

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v8/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### 图标

在 `header` 插槽中使用 `ion-item` 时，我们会自动添加一个 `ion-icon`。所使用的图标类型可通过 `toggleIcon` 属性控制，图标添加到的插槽可通过 `toggleIconSlot` 属性控制。

如果您希望自行管理图标或使用非 `ion-icon` 的图标，可以将 `ion-accordion-toggle-icon` 类添加到图标元素上。

无论选择哪种方式，图标都会在您展开或折叠手风琴时自动旋转。

import Icons from '@site/static/usage/v8/accordion/customization/icons/index.md';

<Icons />

### 主题

由于 `ion-accordion` 作为头部和内容元素的外壳，您可以轻松地根据需要设置手风琴的主题。您可以通过定位插槽中的 `ion-item` 来设置头部主题。由于您使用的是 `ion-item`，您还可以使用所有 [ion-item CSS 变量](./item#css-自定义属性) 和 [ion-item Shadow Parts](./item#css-shadow-parts)。通过定位 `content` 插槽中的元素，也可以轻松实现内容主题的设置。

import Theming from '@site/static/usage/v8/accordion/customization/theming/index.md';

<Theming />

## 无障碍

### 动画

默认情况下，展开或折叠手风琴项时动画是启用的。当浏览器支持 `prefers-reduced-motion` 媒体查询且设置为 `reduce` 时，动画将自动禁用。对于不支持此功能的浏览器，可以通过在 Ionic Framework 应用中设置 `animated` 配置来禁用动画。

import AccessibilityAnimations from '@site/static/usage/v8/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### 键盘交互

在 `ion-accordion-group` 内部使用时，`ion-accordion` 具有完整的键盘支持。下表详细说明了每个键的功能：

| 键                                  | 描述                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 当焦点在手风琴头部时，手风琴会根据组件的当前状态折叠或展开。 |
| <kbd>Tab</kbd>                       | 将焦点移动到下一个可聚焦元素。                   |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | 将焦点移动到上一个可聚焦元素。               |
| <kbd>Down Arrow</kbd>                | - 当焦点在手风琴头部时，将焦点移动到下一个手风琴头部。  <br />- 当焦点在最后一个手风琴头部时，将焦点移动到第一个手风琴头部。 |
| <kbd>Up Arrow</kbd>                  | - 当焦点在手风琴头部时，将焦点移动到上一个手风琴头部。  <br />- 当焦点在第一个手风琴头部时，将焦点移动到最后一个手风琴头部。 |
| <kbd>Home</kbd>                      | 当焦点在手风琴头部时，将焦点移动到第一个手风琴头部。 |
| <kbd>End</kbd>                       | 当焦点在手风琴头部时，将焦点移动到最后一个手风琴头部。 |

## 性能

### 动画

手风琴动画的工作原理是在动画开始时获取 `content` 插槽的高度。手风琴期望此高度在整个动画过程中保持不变。因此，开发者应避免在动画期间执行任何可能改变内容高度的操作。

例如，使用 [ion-img](./img) 可能会因其延迟加载图像而导致布局偏移。这意味着在动画播放过程中，`ion-img` 会加载图像数据，并且 `ion-img` 的尺寸会随之改变以适应加载的图像数据。这可能导致 `content` 插槽的高度发生变化。开发者有以下几种避免此问题的方法：

1. 使用不带延迟加载的 `img` 元素。`ion-img` 始终使用延迟加载，但 `img` 默认不使用延迟加载。这是最简单的方案，适用于从延迟加载中获益不明显的小图像。

2. 在 `ion-img` 上设置最小宽度和高度。如果您需要使用延迟加载且预先知道图像的尺寸（例如加载相同大小的图标），您可以使用 CSS 为 `ion-img` 设置最小宽度或高度。这样既能利用延迟加载的优势，又能避免布局偏移。使用带有 `loading="lazy"` 的 `img` 元素时也同样适用！

3. 如果以上方案都不适用，开发者可以考虑通过 [ion-accordion-group](./accordion-group) 上的 `animated` 属性完全禁用动画。

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
