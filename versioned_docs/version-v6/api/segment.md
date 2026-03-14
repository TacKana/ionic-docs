---
title: 'ion-segment'
---

import Props from '@ionic-internal/component-api/v6/segment/props.md';
import Events from '@ionic-internal/component-api/v6/segment/events.md';
import Methods from '@ionic-internal/component-api/v6/segment/methods.md';
import Parts from '@ionic-internal/component-api/v6/segment/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/segment/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/segment/slots.md';

<head>
  <title>ion-segment：分段控件 API 文档</title>
  <meta
    name="description"
    content="ion-segment 以水平行形式显示一组相关按钮，有时也称为分段控件。查看我们的 Segment API 文档以了解更多用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段组件以水平行形式显示一组相关按钮，有时也称为分段控件。它们可以显示在工具栏或主要内容区域内。

分段控件的功能类似于选项卡，选择其中一个会取消选择所有其他项。分段控件适用于在内容区域内切换不同视图。当点击控件需要在页面之间导航时，应使用选项卡而不是分段控件。

## 基本用法

分段控件由 [segment buttons](./segment-button) 组成，每个按钮上都有一个 `value` 属性。将分段控件的 `value` 属性设置为与某个按钮的值匹配，即可选中该按钮。分段控件也可以被禁用，以防止用户与其交互。

import Basic from '@site/static/usage/v6/segment/basic/index.md';

<Basic />

## 可滚动的分段控件

分段控件默认不可滚动。每个分段按钮具有固定宽度，其宽度由分段按钮数量除以屏幕宽度来确定。这确保了每个分段按钮都能显示在屏幕上而无需滚动。因此，某些标签较长的分段按钮可能会被截断。为避免这种情况，我们建议使用较短的标签，或者通过将 `scrollable` 属性设置为 `true` 来切换到可滚动的分段控件。这将使分段控件水平滚动，但允许每个分段按钮具有可变宽度。

import Scrollable from '@site/static/usage/v6/segment/scrollable/index.md';

<Scrollable />

## 工具栏中的分段控件

<!-- 复用 Toolbar 目录中的示例 -->

import Toolbar from '@site/static/usage/v6/toolbar/segments/index.md';

<Toolbar />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/segment/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/segment/theming/css-properties/index.md';

<CSSProps />

## 无障碍访问

### 键盘导航

该组件完全支持键盘导航，用于在 `ion-segment-button` 元素之间移动和选择。默认情况下，键盘导航仅聚焦 `ion-segment-button` 元素，但您可以使用 `selectOnFocus` 属性来确保它们在获得焦点时也被选中。下表详细说明了每个按键的功能：

| 按键                 | 功能                                           |
| -------------------- | ---------------------------------------------- |
| `ArrowRight`         | 聚焦下一个可聚焦元素。                         |
| `ArrowLeft`          | 聚焦上一个可聚焦元素。                         |
| `Home`               | 聚焦第一个可聚焦元素。                         |
| `End`                | 聚焦最后一个可聚焦元素。                       |
| `Space` 或 `Enter`   | 选择当前聚焦的元素。                           |

## 接口

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便为此组件发出的 Ionic 事件提供更强的类型约束。

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