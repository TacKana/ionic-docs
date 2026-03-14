---
title: 'ion-accordion'
---

import Props from '@ionic-internal/component-api/v6/accordion/props.md';
import Events from '@ionic-internal/component-api/v6/accordion/events.md';
import Methods from '@ionic-internal/component-api/v6/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v6/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/accordion/slots.md';

<head>
  <title>Ion-Accordion 组件：如何构建与使用示例 | Ionic</title>
  <meta
    name="description"
    content="Ion-accordion 组件提供内容中的可折叠区域，以减少垂直空间占用并组织信息。了解如何构建及查看示例。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

手风琴（Accordion）组件在您的内容中提供可折叠的区域，既能减少垂直空间占用，又能提供组织和分组信息的方式。所有 `ion-accordion` 组件都应分组放置在 `ion-accordion-group` 组件内。

## 基础用法

import Basic from '@site/static/usage/v6/accordion/basic/index.md';

<Basic />

## 切换手风琴状态

哪个手风琴处于展开状态是通过设置 `ion-accordion-group` 上的 `value` 属性来控制的。设置此属性允许开发者以编程方式展开或折叠特定的手风琴。

import Toggle from '@site/static/usage/v6/accordion/toggle/index.md';

<Toggle />

## 监听手风琴状态变化

开发者可以监听 `ionChange` 事件，以便在手风琴展开或折叠时收到通知。

import ListenChanges from '@site/static/usage/v6/accordion/listen-changes/index.md';

<ListenChanges />

## 多手风琴展开

开发者可以通过 `multiple` 属性允许多个手风琴同时展开。

import Multiple from '@site/static/usage/v6/accordion/multiple/index.md';

<Multiple />

## 禁用手风琴

### 单个手风琴

可以通过 `ion-accordion` 上的 `disabled` 属性禁用单个手风琴。

import DisableIndividual from '@site/static/usage/v6/accordion/disable/individual/index.md';

<DisableIndividual />

### 手风琴组

可以通过 `ion-accordion-group` 上的 `disabled` 属性禁用手风琴组。

import DisableGroup from '@site/static/usage/v6/accordion/disable/group/index.md';

<DisableGroup />

## 只读手风琴

### 单个手风琴

可以通过 `ion-accordion` 上的 `readonly` 属性将单个手风琴设置为只读。

import ReadonlyIndividual from '@site/static/usage/v6/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### 手风琴组

可以通过 `ion-accordion-group` 上的 `readonly` 属性将手风琴组设置为只读。

import ReadonlyGroup from '@site/static/usage/v6/accordion/readonly/group/index.md';

<ReadonlyGroup />

## 结构解析

### 头部

`header` 插槽用作切换按钮，用于展开或折叠您的手风琴。我们建议您在此处使用 `ion-item`，以利用其辅助功能和主题化功能。

当在 `header` 插槽中使用 `ion-item` 时，`ion-item` 的 `button` 属性设置为 `true`，`detail` 属性设置为 `false`。此外，我们还会自动向 `ion-item` 添加一个切换图标。该图标会在您展开或折叠手风琴时自动旋转。更多信息请参阅 [自定义图标](#icons)。

### 内容

`content` 插槽用作手风琴的一部分，根据手风琴的状态显示或隐藏。您可以在此处放置任何内容，但不能放置另一个 `ion-content` 实例，因为每个页面只应添加一个 `ion-content` 实例。

## 自定义

### 展开样式

有两种内置的展开样式：`compact` 和 `inset`。此展开样式通过 `ion-accordion-group` 上的 `expand` 属性设置。

当 `expand="inset"` 时，手风琴组会获得边框半径。在 `md` 模式下，整个手风琴在展开时会向下移动。

import ExpansionStyles from '@site/static/usage/v6/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### 高级展开样式

您可以根据手风琴的状态进行样式定制，从而自定义展开行为。`ion-accordion` 上应用了四种状态类。使用这些类进行样式设计可以创建高级的状态过渡效果：

| 类名                  | 描述                                       |
| --------------------- | ------------------------------------------ |
| `.accordion-expanding`  | 当手风琴正在展开时应用                 |
| `.accordion-expanded`   | 当手风琴完全展开时应用                   |
| `.accordion-collapsing` | 当手风琴正在折叠时应用                 |
| `.accordion-collapsed`  | 当手风琴完全折叠时应用                   |

如果您需要定位手风琴的特定部分，我们建议直接定位该元素。例如，如果您想在手风琴展开时自定义 `header` 插槽中的 `ion-item`，可以使用以下选择器：

```css
ion-accordion.accordion-expanding ion-item[slot='header'],
ion-accordion.accordion-expanded ion-item[slot='header'] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v6/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### 图标

当在 `header` 插槽中使用 `ion-item` 时，我们会自动添加一个 `ion-icon`。使用的图标类型可以通过 `toggleIcon` 属性控制，而图标添加到的插槽可以通过 `toggleIconSlot` 属性控制。

如果您想自行管理图标或使用非 `ion-icon` 的图标，可以向图标元素添加 `ion-accordion-toggle-icon` 类。

无论您选择哪种方式，图标都会在您展开或折叠手风琴时自动旋转。

import Icons from '@site/static/usage/v6/accordion/customization/icons/index.md';

<Icons />

### 主题定制

由于 `ion-accordion` 充当头部和内容元素的容器，您可以随心所欲地轻松定制手风琴的主题。您可以通过定位已插槽的 `ion-item` 来定制头部样式。由于您使用的是 `ion-item`，您还可以访问所有 [ion-item CSS 变量](./item#css-custom-properties) 和 [ion-item 阴影部件](./item#css-shadow-parts)。定制内容主题也很容易，只需定位 `content` 插槽中的元素即可。

import Theming from '@site/static/usage/v6/accordion/customization/theming/index.md';

<Theming />

## 无障碍访问

### 动画效果

默认情况下，展开或折叠手风琴项时会启用动画。当支持 `prefers-reduced-motion` 媒体查询且其设置为 `reduce` 时，动画将自动禁用。对于不支持此功能的浏览器，可以通过在 Ionic Framework 应用中设置 `animated` 配置来禁用动画。

import AccessibilityAnimations from '@site/static/usage/v6/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### 键盘导航

当在 `ion-accordion-group` 内部使用时，`ion-accordion` 具有完整的键盘支持，可与组件进行交互。下表详细说明了每个按键的功能：

| 按键                | 功能                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `空格键` 或 `回车键` | 当焦点位于手风琴头部时，根据组件的状态，手风琴将折叠或展开。                                                                                                                       |
| `Tab`               | 将焦点移动到下一个可聚焦元素。                                                                                                                                                     |
| `Shift` + `Tab`     | 将焦点移动到上一个可聚焦元素。                                                                                                                                                     |
| `向下箭头`          | - 当焦点位于手风琴头部时，将焦点移动到下一个手风琴头部。<br />- 当焦点位于最后一个手风琴头部时，将焦点移动到第一个手风琴头部。     |
| `向上箭头`          | - 当焦点位于手风琴头部时，将焦点移动到上一个手风琴头部。<br />- 当焦点位于第一个手风琴头部时，将焦点移动到最后一个手风琴头部。 |
| `Home`              | 当焦点位于手风琴头部时，将焦点移动到第一个手风琴头部。                                                                                                                             |
| `End`               | 当焦点位于手风琴头部时，将焦点移动到最后一个手风琴头部。                                                                                                                           |

## 性能优化

### 动画效果

手风琴动画的工作原理是在动画开始时获取 `content` 插槽的高度。手风琴期望此高度在整个动画过程中保持一致。因此，开发者应避免在动画期间执行任何可能改变内容高度的操作。

例如，使用 [ion-img](./img) 可能会导致布局偏移，因为它会延迟加载图像。这意味着，在动画播放过程中，`ion-img` 将加载图像数据，并且 `ion-img` 的尺寸将根据加载的图像数据发生变化。这可能导致 `content` 插槽的高度发生变化。开发者有几个选项可以避免这种情况：

1. 使用 `img` 元素而不进行任何延迟加载。`ion-img` 始终使用延迟加载，但 `img` 默认不使用延迟加载。这是最简单的选项，如果您有小型图像且延迟加载没有显著好处，则效果很好。

2. 在 `ion-img` 上设置最小宽度和高度。如果您需要使用延迟加载并且提前知道图像的尺寸（例如，如果您正在加载相同尺寸的图标），可以使用 CSS 设置 `ion-img` 的最小宽度或高度。这样可以在避免布局偏移的同时获得延迟加载的好处。在使用带有 `loading="lazy"` 的 `img` 元素时也同样有效！

3. 如果这些选项都不适用，开发者可能需要考虑通过使用 [ion-accordion-group](./accordion-group) 上的 `animated` 属性来完全禁用动画。

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