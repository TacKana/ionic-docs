---
title: 'ion-content'
---

import Props from '@ionic-internal/component-api/v6/content/props.md';
import Events from '@ionic-internal/component-api/v6/content/events.md';
import Methods from '@ionic-internal/component-api/v6/content/methods.md';
import Parts from '@ionic-internal/component-api/v6/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/content/slots.md';

<head>
  <title>ion-content：用于 Ionic 应用内容区域的可滚动 CSS 组件</title>
  <meta
    name="description"
    content="ion-content 提供了一个易于使用的内容区域，并附带控制可滚动区域的有用方法。了解更多关于这个 Ionic 应用的 CSS 组件。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

内容组件提供了一个易于使用的内容区域，并附带一些控制可滚动区域的有用方法。单个视图中只应存在一个内容组件。

内容组件与许多其他 Ionic 组件一样，可以通过 [CSS 实用工具](/docs/layout/css-utilities) 中提供的全局样式进行自定义，以修改其内边距、外边距等属性，或者使用 CSS 和可用的 [CSS 自定义属性](#css-custom-properties) 单独进行样式设置。

## 基本用法

import Basic from '@site/static/usage/v6/content/basic/index.md';

<Basic />

## 页眉与页脚

内容组件可以作为页面中唯一的顶级组件，也可以与 [页眉](./header)、[页脚](./footer) 或两者一起使用。当与页眉或页脚一起使用时，它会调整自身大小以填充剩余的高度空间。

import HeaderFooter from '@site/static/usage/v6/content/header-footer/index.md';

<HeaderFooter />

## 全屏内容

默认情况下，内容会填充 [页眉](./header) 和 [页脚](./footer) 之间的空间，但不会延伸到它们背后。在某些情况下，可能希望内容在页眉和页脚背后滚动，例如当页眉或页脚设置了 `translucent` 属性，或者在工具栏上设置了 `opacity` 时。这可以通过将内容组件的 `fullscreen` 属性设置为 `true` 来实现。

import Fullscreen from '@site/static/usage/v6/content/fullscreen/index.md';

<Fullscreen />

## 固定内容

要将元素放置在可滚动区域之外，请将它们分配到 `fixed` 插槽。这样做会将元素 [绝对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) 到内容的左上角。要改变元素的位置，可以使用 [top、right、bottom 和 left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) 这些 CSS 属性进行样式设置。

import Fixed from '@site/static/usage/v6/content/fixed/index.md';

<Fixed />

## 滚动方法

内容组件提供了可调用的 [方法](#methods)，用于将内容滚动到底部、顶部或特定位置。可以传入 `duration` 参数以实现平滑过渡，而不是瞬间改变位置。

import ScrollMethods from '@site/static/usage/v6/content/scroll-methods/index.md';

<ScrollMethods />

## 滚动事件

出于性能考虑，内容组件的滚动事件默认是禁用的。但是，可以通过将 `scrollEvents` 设置为 `true` 来启用它们。在监听任何滚动 [事件](#events) 之前，这是必要的步骤。

import ScrollEvents from '@site/static/usage/v6/content/scroll-events/index.md';

<ScrollEvents />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/content/theming/css-properties/index.md';

<CSSProps />

## 接口

### ScrollBaseDetail

```typescript
interface ScrollBaseDetail {
  isScrolling: boolean;
}
```

### ScrollDetail

```typescript
interface ScrollDetail extends GestureDetail, ScrollBaseDetail {
  scrollTop: number;
  scrollLeft: number;
}
```

### ScrollBaseCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便为 `ionScrollStart` 和 `ionScrollEnd` 事件提供更强的类型约束。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便为 `ionScroll` 事件提供更强的类型约束。

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
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