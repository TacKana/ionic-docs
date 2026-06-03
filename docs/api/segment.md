---
title: "ion-segment"
---
import Props from '@ionic-internal/component-api/v8/segment/props.md';
import Events from '@ionic-internal/component-api/v8/segment/events.md';
import Methods from '@ionic-internal/component-api/v8/segment/methods.md';
import Parts from '@ionic-internal/component-api/v8/segment/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/segment/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/segment/slots.md';

<head>
  <title>ion-segment：分段控件的 API 文档</title>
  <meta name="description" content="ion-segment 显示一组相关按钮——有时称为分段控件。查看我们的分段 API 文档，了解更多用法信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


分段控件在一行中显示一组相关按钮，有时称为分段控件。它们可以显示在工具栏内部或主要内容中。

其功能类似于选项卡，选择一个会取消选择所有其他选项。分段控件在内容内部切换不同视图时非常有用。当点击控件应在页面之间导航时，应使用选项卡而不是分段控件。


## 基本用法

分段控件由 [segment 按钮](./segment-button)组成，每个按钮都有一个 `value` 属性。在分段控件上设置 `value` 属性以匹配某个按钮的值来选择该按钮。分段控件也可以被禁用，以防止用户与其交互。

import Basic from '@site/static/usage/v8/segment/basic/index.md';

<Basic />


## 可滚动的分段控件

默认情况下，分段控件不可滚动。每个分段按钮都有固定宽度，宽度由屏幕宽度除以分段按钮数量决定。这确保了每个分段按钮都可以显示在屏幕上而无需滚动。因此，一些标签较长的分段按钮可能会被截断。为了避免这种情况，我们建议使用较短的标签，或者通过将 `scrollable` 属性设置为 `true` 来切换到可滚动的分段控件。这将使分段控件水平滚动，但允许每个分段按钮具有可变宽度。

import Scrollable from '@site/static/usage/v8/segment/scrollable/index.md';

<Scrollable />


## 工具栏中的分段控件

<!-- 复用 Toolbar 目录下的 playground -->
import Toolbar from '@site/static/usage/v8/toolbar/segments/index.md';

<Toolbar />


## 可滑动分段控件

每个[分段按钮](./segment-button.md)可以与一个[分段内容](./segment-content.md)元素关联，该元素将在分段激活时显示。
通过这种方式，每个分段的内容可以在之间滑动或滚动，并且分段控件会更新
以反映当前可见的内容。

:::warning
在使用可滑动分段控件时，如果没有为 `ion-segment` 分配初始 `value`，分段控件将默认为第一个分段按钮的值。

可滑动分段控件中不能禁用分段按钮。
:::

import Swipeable from '@site/static/usage/v8/segment/swipeable/index.md';

<Swipeable />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/segment/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/segment/theming/css-properties/index.md';

<CSSProps />


## 无障碍

### 键盘交互

该组件具有完整的键盘支持，用于在 `ion-segment-button` 元素之间导航和选择。默认情况下，键盘导航只会聚焦 `ion-segment-button` 元素，但你也可以使用 `selectOnFocus` 属性来确保它们在获得焦点时也被选中。下表详细说明了每个键的作用：

| 键                                    | 描述                          |
| ------------------------------------- | ----------------------------- |
| <kbd>ArrowRight</kbd>                | 聚焦下一个可聚焦元素。         |
| <kbd>ArrowLeft</kbd>                 | 聚焦上一个可聚焦元素。         |
| <kbd>Home</kbd>                      | 聚焦第一个可聚焦元素。         |
| <kbd>End</kbd>                       | 聚焦最后一个可聚焦元素。       |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 选择当前聚焦的元素。           |

## 接口

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
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
