---
title: 'ion-accordion'
---

import Props from '@ionic-internal/component-api/v7/accordion/props.md';
import Events from '@ionic-internal/component-api/v7/accordion/events.md';
import Methods from '@ionic-internal/component-api/v7/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v7/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/accordion/slots.md';

<head>
  <title>ion-accordion：手风琴组件：如何构建及示例</title>
  <meta
    name="description"
    content="ion-accordion 组件提供可折叠区域，减少垂直空间并组织信息。了解如何构建并查看示例。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

手风琴（Accordion）在内容中提供可折叠区域，以减少垂直空间，同时提供组织和分组信息的方式。所有 `ion-accordion` 组件应分组在 `ion-accordion-group` 组件内。

## 基本用法

import Basic from '@site/static/usage/v7/accordion/basic/index.md';

<Basic />

## 切换手风琴

通过设置 `ion-accordion-group` 上的 `value` 属性来控制哪个手风琴处于打开状态。设置此属性允许开发者以编程方式展开或折叠特定的手风琴。

import Toggle from '@site/static/usage/v7/accordion/toggle/index.md';

<Toggle />

## 监听手风琴状态变化

:::caution
其他组件（如 [Input](./input) 和 [Textarea](./textarea)）发出的大多数 `ionChange` 事件会冒泡。因此，如果在手风琴内部使用了这些组件，这些事件会向上冒泡，导致手风琴组上的 `ionChange` 监听器触发。

在手风琴内部使用会发出 `ionChange` 的其他组件时，建议让手风琴组上的 `ionChange` 回调检查事件对象上的 `target` 键，以确认 `ionChange` 来自手风琴组而不是任何子元素。
:::

开发者可以监听 `ionChange` 事件，以便在手风琴展开或折叠时收到通知。

import ListenChanges from '@site/static/usage/v7/accordion/listen-changes/index.md';

<ListenChanges />

## 多个手风琴

开发者可以使用 `multiple` 属性允许同时打开多个手风琴。

import Multiple from '@site/static/usage/v7/accordion/multiple/index.md';

<Multiple />

## 禁用手风琴

### 单个手风琴

可以使用 `ion-accordion` 上的 `disabled` 属性禁用单个手风琴。

import DisableIndividual from '@site/static/usage/v7/accordion/disable/individual/index.md';

<DisableIndividual />

### 手风琴组

可以使用 `ion-accordion-group` 上的 `disabled` 属性禁用手风琴组。

import DisableGroup from '@site/static/usage/v7/accordion/disable/group/index.md';

<DisableGroup />

## 只读手风琴

### 单个手风琴

可以使用 `ion-accordion` 上的 `readonly` 属性将单个手风琴设置为只读。

import ReadonlyIndividual from '@site/static/usage/v7/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### 手风琴组

可以使用 `ion-accordion-group` 上的 `readonly` 属性将手风琴组设置为只读。

import ReadonlyGroup from '@site/static/usage/v7/accordion/readonly/group/index.md';

<ReadonlyGroup />

## 结构

### 头部（Header）

`header` 插槽用作展开或折叠手风琴的切换开关。我们建议在此处使用 `ion-item`，以利用无障碍访问和主题功能。

在 `header` 插槽中使用 `ion-item` 时，`ion-item` 的 `button` 属性被设置为 `true`，`detail` 属性被设置为 `false`。此外，我们还会自动向 `ion-item` 添加一个切换图标。展开或折叠手风琴时，该图标会自动旋转。更多信息请参阅[自定义图标](#图标)。

### 内容（Content）

`content` 插槽用作手风琴中根据其状态显示或隐藏的部分。除了另一个 `ion-content` 实例外，你可以在此放置任何内容，因为每页只应添加一个 `ion-content` 实例。

## 自定义

### 展开样式

有两种内置的展开样式：`compact` 和 `inset`。此展开样式通过 `ion-accordion-group` 上的 `expand` 属性设置。

当 `expand="inset"` 时，手风琴组具有边框圆角。在 `md` 模式下，整个手风琴在打开时会向下移动。

import ExpansionStyles from '@site/static/usage/v7/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### 高级展开样式

你可以通过根据手风琴的状态设置样式来自定义展开行为。有四个状态类应用于 `ion-accordion`。使用这些类设置样式可以让你创建高级状态过渡：

| 类名                     | 描述                     |
| ----------------------- | ------------------------ |
| `.accordion-expanding`  | 手风琴正在展开时应用       |
| `.accordion-expanded`   | 手风琴完全展开时应用       |
| `.accordion-collapsing` | 手风琴正在折叠时应用       |
| `.accordion-collapsed`  | 手风琴完全折叠时应用       |

如果需要定位手风琴的特定部分，我们建议直接定位元素。例如，如果想在手风琴展开时自定义 header 插槽中的 ion-item，可以使用以下选择器：

```css
ion-accordion.accordion-expanding ion-item[slot='header'],
ion-accordion.accordion-expanded ion-item[slot='header'] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v7/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### 图标

在 `header` 插槽中使用 `ion-item` 时，我们会自动添加一个 `ion-icon`。使用的图标类型可以通过 `toggleIcon` 属性控制，图标添加到的插槽可以通过 `toggleIconSlot` 属性控制。

如果你想自己管理图标或使用非 `ion-icon` 的图标，可以将 `ion-accordion-toggle-icon` 类添加到图标元素上。

无论选择哪个选项，展开或折叠手风琴时图标都会自动旋转。

import Icons from '@site/static/usage/v7/accordion/customization/icons/index.md';

<Icons />

### 主题

由于 `ion-accordion` 是 header 和 content 元素的外壳，你可以轻松地按自己的喜好为主题设置样式。你可以通过定位 slot 中的 `ion-item` 来设置 header 的样式。由于使用了 `ion-item`，你还可以访问所有 [ion-item CSS 变量](./item#css-自定义属性) 和 [ion-item 阴影部分](./item#css-阴影部分)。设置内容样式也可以通过定位 `content` 插槽中的元素轻松实现。

import Theming from '@site/static/usage/v7/accordion/customization/theming/index.md';

<Theming />

## 无障碍访问

### 动画

默认情况下，展开或折叠手风琴项时动画是启用的。当 `prefers-reduced-motion` 媒体查询被支持且设置为 `reduce` 时，动画将自动禁用。对于不支持此功能的浏览器，可以通过在 Ionic 框架应用中设置 `animated` 配置来禁用动画。

import AccessibilityAnimations from '@site/static/usage/v7/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### 键盘交互

在 `ion-accordion-group` 内部使用时，`ion-accordion` 拥有完整的键盘支持来与组件交互。下表详细说明了每个键的作用：

| 键                                   | 描述                                                                                                                               |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 当焦点在手风琴头部时，手风琴将根据组件状态折叠或展开。                                                                              |
| <kbd>Tab</kbd>                       | 将焦点移动到下一个可聚焦元素。                                                                                                      |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | 将焦点移动到上一个可聚焦元素。                                                                                                      |
| <kbd>下箭头</kbd>                    | - 当焦点在手风琴头部时，将焦点移动到下一个手风琴头部。<br />- 当焦点在最后一个手风琴头部时，将焦点移动到第一个手风琴头部。        |
| <kbd>上箭头</kbd>                    | - 当焦点在手风琴头部时，将焦点移动到上一个手风琴头部。<br />- 当焦点在第一个手风琴头部时，将焦点移动到最后一个手风琴头部。        |
| <kbd>Home</kbd>                      | 当焦点在手风琴头部时，将焦点移动到第一个手风琴头部。                                                                                |
| <kbd>End</kbd>                       | 当焦点在手风琴头部时，将焦点移动到最后一个手风琴头部。                                                                              |

## 性能

### 动画

手风琴动画的工作原理是在动画开始时知道 `content` 插槽的高度。手风琴期望此高度在整个动画过程中保持一致。因此，开发者应避免在动画期间执行任何可能改变内容高度的操作。

例如，使用 [ion-img](./img) 可能会因为其延迟加载图像而导致布局偏移。这意味着在动画播放时，`ion-img` 会加载图像数据，并且 `ion-img` 的尺寸会随着加载的图像数据而变化。这可能导致 `content` 插槽的高度发生变化。开发者有几种选择来避免这种情况：

1. 使用不带任何延迟加载的 `img` 元素。`ion-img` 始终使用延迟加载，但 `img` 默认不使用延迟加载。这是最简单的选择，适用于那些从延迟加载中获益不多的小图像。

2. 在 `ion-img` 上设置最小宽度和高度。如果需要使用延迟加载并预先知道图像的尺寸（例如加载相同大小的图标），可以使用 CSS 设置 `ion-img` 的最小宽度或高度。这让你既能享受延迟加载的好处，又能避免布局偏移。在使用带有 `loading="lazy"` 的 `img` 元素时也同样适用！

3. 如果这两个选项都不适用，开发者可以考虑通过对 [ion-accordion-group](./accordion-group) 使用 `animated` 属性来完全禁用动画。

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
