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
  <title>ion-segment：分段控件的 API 文档</title>
  <meta
    name="description"
    content="ion-segment 显示一组相关按钮——有时称为分段控件。查看我们的 Segment API 文档以了解更多关于用法的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段控件（Segment）在水平行中显示一组相关按钮，有时称为分段控件。它们可以显示在工具栏内部或主要内容中。

其功能类似于标签，选择一个将取消选择所有其他选项。分段控件对于在内容中的不同视图之间切换很有用。当点击控件应在页面之间导航时，应使用标签而不是分段控件。

## 基本用法

分段控件由[分段按钮（segment button）](./segment-button)组成，每个按钮都有一个 `value` 属性。将分段控件上的 `value` 属性设置为与按钮的值匹配，以选择该按钮。分段控件也可以禁用，以防止用户与其交互。

import Basic from '@site/static/usage/v7/segment/basic/index.md';

<Basic />

## 可滚动分段控件

分段控件默认不可滚动。每个分段按钮都有固定宽度，宽度是通过分段按钮数量除以屏幕宽度来确定的。这确保每个分段按钮都可以在屏幕上显示而无需滚动。因此，一些标签较长的分段按钮可能会被截断。为了避免这种情况，我们建议使用较短的标签或通过将 `scrollable` 属性设置为 `true` 来切换到可滚动分段控件。这将导致分段水平滚动，但允许每个分段按钮具有可变宽度。

import Scrollable from '@site/static/usage/v7/segment/scrollable/index.md';

<Scrollable />

## 工具栏中的分段控件

{/* 复用 Toolbar 目录下的 playground */}

import Toolbar from '@site/static/usage/v7/toolbar/segments/index.md';

<Toolbar />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/segment/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/segment/theming/css-properties/index.md';

<CSSProps />

## 无障碍访问

### 键盘交互

该组件具有完整的键盘支持，用于在 `ion-segment-button` 元素之间导航和选择。默认情况下，键盘导航只会聚焦 `ion-segment-button` 元素，但你可以使用 `selectOnFocus` 属性确保它们在聚焦时也被选中。下表详细说明了每个键的作用：

| 键                                  | 描述                         |
| ----------------------------------- | ---------------------------- |
| <kbd>右箭头</kbd>                   | 聚焦下一个可聚焦元素。       |
| <kbd>左箭头</kbd>                   | 聚焦上一个可聚焦元素。       |
| <kbd>Home</kbd>                     | 聚焦第一个可聚焦元素。       |
| <kbd>End</kbd>                      | 聚焦最后一个可聚焦元素。     |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd>| 选择当前聚焦的元素。         |

## 接口

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
