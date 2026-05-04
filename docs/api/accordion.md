---
title: 手风琴组件
---
import Props from '@ionic-internal/component-api/v8/accordion/props.md';
import Events from '@ionic-internal/component-api/v8/accordion/events.md';
import Methods from '@ionic-internal/component-api/v8/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v8/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/accordion/slots.md';

<head>
  <title>ion-accordion：手风琴组件：如何构建及示例</title>
  <meta name="description" content="Ion-accordion 组件提供内容中的可折叠区块，以减少垂直空间占用并组织信息。了解如何构建手风琴组件并查看相关示例。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


手风琴组件（Accordions）在你的内容中提供可折叠区块，以减少垂直空间占用，同时提供组织和分组信息的方式。所有 `ion-accordion` 组件都应分组放置在 `ion-accordion-group` 组件内。

## 基本用法

import Basic from '@site/static/usage/v8/accordion/basic/index.md';

<Basic />

## 切换手风琴

通过设置 `ion-accordion-group` 上的 `value` 属性来控制哪个手风琴是展开的。设置此属性允许开发者通过编程方式展开或折叠特定的手风琴。

import Toggle from '@site/static/usage/v8/accordion/toggle/index.md';

<Toggle />

## 监听手风琴状态变化

:::caution
大多数由其他组件（如 [Input](./input) 和 [Textarea](./textarea)）发出的 `ionChange` 事件会冒泡。因此，如果这些关联组件在手风琴内部使用，这些事件会向上冒泡并导致你在手风琴组（Accordion Group）上的 `ionChange` 监听器触发。

当在手风琴内部使用其他会发出 `ionChange` 事件的组件时，建议让手风琴组上的 `ionChange` 回调函数检查传递给回调函数的事件中的 `target` 键，以验证 `ionChange` 是来自手风琴组而非任何子元素。
:::

开发者可以监听 `ionChange` 事件，以便在手风琴展开或折叠时收到通知。

import ListenChanges from '@site/static/usage/v8/accordion/listen-changes/index.md';

<ListenChanges />

## 多手风琴

开发者可以通过 `multiple` 属性允许多个手风琴同时展开。

import Multiple from '@site/static/usage/v8/accordion/multiple/index.md';

<Multiple />

## 禁用手风琴

### 单个手风琴

可以通过在 `ion-accordion` 上设置 `disabled` 属性来禁用单个手风琴。

import DisableIndividual from '@site/static/usage/v8/accordion/disable/individual/index.md';

<DisableIndividual />

### 手风琴组

可以通过在 `ion-accordion-group` 上设置 `disabled` 属性来禁用手风琴组。

import DisableGroup from '@site/static/usage/v8/accordion/disable/group/index.md';

<DisableGroup />

## 只读手风琴

### 单个手风琴

可以通过在 `ion-accordion` 上设置 `readonly` 属性来将单个手风琴设为只读。

import ReadonlyIndividual from '@site/static/usage/v8/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### 手风琴组

可以通过在 `ion-accordion-group` 上设置 `readonly` 属性来将手风琴组设为只读。

import ReadonlyGroup from '@site/static/usage/v8/accordion/readonly/group/index.md';

<ReadonlyGroup />

## 结构剖析

### 头部（Header）

`header` 插槽用作切换按钮，用于展开或折叠你的手风琴。我们建议你在此处使用 `ion-item`，以利用其无障碍功能和主题化功能。

当在 `header` 插槽中使用 `ion-item` 时，`ion-item` 的 `button` 属性会被设置为 `true`，`detail` 属性会被设置为 `false`。此外，我们还会自动向 `ion-item` 添加一个切换图标。当你展开或折叠手风琴时，此图标会自动旋转。更多信息请参阅 [自定义图标](#icons)。

### 内容（Content）

`content` 插槽用作手风琴的一部分，根据手风琴的状态来显示或隐藏。你可以在此放置任何内容，但不能放置另一个 `ion-content` 实例，因为每个页面只应添加一个 `ion-content` 实例。

## 自定义

### 展开样式

有两种内置的展开样式：`compact`（紧凑型）和 `inset`（内嵌型）。此展开样式通过 `ion-accordion-group` 上的 `expand` 属性设置。

当 `expand="inset"` 时，手风琴组会获得边框圆角。在 `md` 模式下，整个手风琴在展开时会向下移动。

import ExpansionStyles from '@site/static/usage/v8/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### 高级展开样式

你可以根据手风琴的状态进行样式设计来自定义展开行为。有四个状态类应用于 `ion-accordion`。使用这些类进行样式设计可以让你创建高级的状态过渡效果：

| 类名 | 描述 |
| ---------- | ----------- |
| `.accordion-expanding` | 在手风琴正在展开时应用 |
| `.accordion-expanded` | 在手风琴完全展开时应用 |
| `.accordion-collapsing` | 在手风琴正在折叠时应用 |
| `.accordion-collapsed` | 在手风琴完全折叠时应用 |

如果你需要定位手风琴的特定部分，我们建议直接定位该元素。例如，如果你想在手风琴展开时自定义头部插槽中的 ion-item，可以使用以下选择器：

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v8/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

<LegacyAnchor id="icons" />

### 图标

当在 `header` 插槽中使用 `ion-item` 时，我们会自动添加一个 `ion-icon`。所使用的图标类型可以通过 `toggleIcon` 属性控制，其添加到的插槽可以通过 `toggleIconSlot` 属性控制。

如果你想自己管理图标或使用非 `ion-icon` 的图标，可以将 `ion-accordion-toggle-icon` 类添加到图标元素。

无论你选择哪种方式，图标都会在你展开或折叠手风琴时自动旋转。

import Icons from '@site/static/usage/v8/accordion/customization/icons/index.md';

<Icons />

### 主题化

由于 `ion-accordion` 充当头部和内容元素的外壳，你可以轻松地对手风琴进行主题化。你可以通过定位已插入的 `ion-item` 来为主题化头部。由于你使用的是 `ion-item`，你还可以访问所有 [ion-item CSS 变量](./item#css-custom-properties) 和 [ion-item 阴影部件](./item#css-shadow-parts)。通过定位 `content` 插槽中的元素，也可以轻松实现内容主题化。

import Theming from '@site/static/usage/v8/accordion/customization/theming/index.md';

<Theming />

## 无障碍功能

### 动画

默认情况下，展开或折叠手风琴项时会启用动画。当支持 `prefers-reduced-motion` 媒体查询且其值为 `reduce` 时，动画会自动禁用。对于不支持此功能的浏览器，可以通过在 Ionic Framework 应用中设置 `animated` 配置来禁用动画。

import AccessibilityAnimations from '@site/static/usage/v8/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### 键盘交互

当在 `ion-accordion-group` 内部使用时，`ion-accordion` 具有完整的键盘支持，可用于与组件交互。下表详细说明了每个按键的作用：

| 按键                                  | 描述                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| <kbd>空格键</kbd> 或 <kbd>回车键</kbd> | 当焦点在手风琴头部时，根据组件的状态展开或折叠手风琴。 |
| <kbd>Tab</kbd>                       | 将焦点移动到下一个可聚焦元素。                   |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | 将焦点移动到上一个可聚焦元素。               |
| <kbd>向下箭头</kbd>                | - 当焦点在手风琴头部时，将焦点移动到下一个手风琴头部。<br />- 当焦点在最后一个手风琴头部时，将焦点移动到第一个手风琴头部。 |
| <kbd>向上箭头</kbd>                  | - 当焦点在手风琴头部时，将焦点移动到上一个手风琴头部。<br />- 当焦点在第一个手风琴头部时，将焦点移动到最后一个手风琴头部。 |
| <kbd>Home</kbd>                      | 当焦点在手风琴头部时，将焦点移动到第一个手风琴头部。 |
| <kbd>End</kbd>                       | 当焦点在手风琴头部时，将焦点移动到最后一个手风琴头部。 |

## 性能

### 动画

手风琴动画的工作原理是在动画开始时知道 `content` 插槽的高度。手风琴期望此高度在整个动画过程中保持一致。因此，开发者应避免执行任何可能在动画期间改变内容高度的操作。

例如，使用 [ion-img](./img) 可能会导致布局偏移，因为它会延迟加载图像。这意味着随着动画的播放，`ion-img` 会加载图像数据，并且 `ion-img` 的尺寸会改变以适应加载的图像数据。这可能导致 `content` 插槽的高度发生变化。开发者有几种方法可以避免这种情况：

1. 使用没有延迟加载的 `img` 元素。`ion-img` 总是使用延迟加载，但 `img` 默认不使用延迟加载。这是最简单的选项，如果你有不需要显著受益于延迟加载的小图像，效果很好。

2. 在 `ion-img` 上设置最小宽度和高度。如果你需要使用延迟加载并且提前知道图像的尺寸（例如，如果你加载的是相同大小的图标），可以使用 CSS 设置 `ion-img` 的最小宽度或高度。这使开发者既能获得延迟加载的好处，又能避免布局偏移。在使用带有 `loading="lazy"` 的 `img` 元素时也适用！

3. 如果这些选项都不适用，开发者可能需要考虑通过使用 [ion-accordion-group](./accordion-group) 上的 `animated` 属性完全禁用动画。

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 阴影部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />