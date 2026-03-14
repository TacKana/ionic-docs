---
title: 'ion-segment'
---

import Props from '@ionic-internal/component-api/v7/segment/props.md';
import Events from '@ionic-internal/component-api/v7/segment/events.md';
import Methods from '@ionic-internal/component-api/v7/segment/methods.md';
import Parts from '@ionic-internal/component-api/v7/segment/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/segment/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/segment/slots.md';

<head>
  <title>ion-segment：分段控件 API 文档</title>
  <meta
    name="description"
    content="ion-segment 用于展示一组相关的按钮，有时也被称为分段控件。查看我们的 Segment API 文档以了解更多使用细节。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段控件以水平行形式展示一组相关的按钮，有时也被称为分段控制器。它们可以显示在工具栏或主要内容区域中。

它们的功能类似于标签页（tabs），选择其中一个会取消选择其他所有选项。分段控件适用于在内容区域内切换不同视图。当点击某个控件需要在页面间导航时，应使用标签页而非分段控件。

## 基本用法

分段控件由多个 [segment button](./segment-button)（分段按钮）组成，每个按钮都有一个 `value` 属性。将 segment 的 `value` 属性设置为与某个按钮的值相匹配，即可选中该按钮。分段控件也可以被禁用，以防止用户与其交互。

import Basic from '@site/static/usage/v7/segment/basic/index.md';

<Basic />

## 可滚动的分段控件

分段控件默认不可滚动。每个分段按钮都有一个固定宽度，宽度由分段按钮数量除以屏幕宽度决定。这确保了每个分段按钮都能在屏幕上显示而无需滚动。因此，一些标签较长的分段按钮可能会被截断。为了避免这种情况，我们建议使用较短的标签，或者通过将 `scrollable` 属性设置为 `true` 来切换到可滚动的分段控件。这将使分段控件可以水平滚动，同时允许每个分段按钮具有可变宽度。

import Scrollable from '@site/static/usage/v7/segment/scrollable/index.md';

<Scrollable />

## 工具栏中的分段控件

<!-- 复用 Toolbar 目录中的示例 -->

import Toolbar from '@site/static/usage/v7/toolbar/segments/index.md';

<Toolbar />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/segment/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/segment/theming/css-properties/index.md';

<CSSProps />

## 无障碍访问

### 键盘交互

该组件支持完整的键盘导航，用于在 `ion-segment-button` 元素之间切换和选择。默认情况下，键盘导航仅会聚焦 `ion-segment-button` 元素，但您可以使用 `selectOnFocus` 属性来确保在聚焦时也选中它们。下表详细说明了每个按键的作用：

| 按键                                 | 描述                                     |
| ------------------------------------ | ---------------------------------------- |
| <kbd>ArrowRight</kbd>                | 聚焦下一个可聚焦元素。                   |
| <kbd>ArrowLeft</kbd>                 | 聚焦上一个可聚焦元素。                   |
| <kbd>Home</kbd>                      | 聚焦第一个可聚焦元素。                   |
| <kbd>End</kbd>                       | 聚焦最后一个可聚焦元素。                 |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 选中当前已聚焦的元素。                   |

## 接口

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便在使用此组件发出的 Ionic 事件时获得更强的类型支持。

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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />