---
title: "ion-content"
---
import Props from '@ionic-internal/component-api/v8/content/props.md';
import Events from '@ionic-internal/component-api/v8/content/events.md';
import Methods from '@ionic-internal/component-api/v8/content/methods.md';
import Parts from '@ionic-internal/component-api/v8/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/content/slots.md';

<head>
  <title>ion-content：Ionic 应用内容的可滚动组件</title>
  <meta name="description" content="ion-content 提供了一个易于使用的内容区域，并附有控制可滚动区域的有用方法。了解更多关于此 Ionic 应用 CSS 组件的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


内容组件提供了一个易于使用的内容区域，并附带一些控制可滚动区域的有用方法。每个视图中仅应有一个内容组件。

内容组件与许多其他 Ionic 组件一样，可以使用 [CSS 工具](/layout/css-utilities) 提供的全局样式进行自定义，以修改其内边距、外边距等，或者使用 CSS 和可用的 [CSS 自定义属性](#css-custom-properties) 单独设置其样式。


## 基本用法

import Basic from '@site/static/usage/v8/content/basic/index.md';

<Basic />


## 头部和底部

内容可以是页面中唯一的顶级组件，也可以与[头部](./header)、[底部](./footer)或两者一起使用。与头部或底部一起使用时，它将调整其大小以填充剩余高度。

import HeaderFooter from '@site/static/usage/v8/content/header-footer/index.md';

<HeaderFooter />


## 全屏内容

默认情况下，内容填充[头部](./header)和[底部](./footer)之间的空间，但不会在它们后方显示。在某些情况下，可能需要内容在头部和底部后方滚动，例如当其中任何一个设置了 `translucent` 属性，或者工具栏设置了 `opacity` 时。这可以通过将内容的 `fullscreen` 属性设置为 `true` 来实现。

import Fullscreen from '@site/static/usage/v8/content/fullscreen/index.md';

<Fullscreen />


## 固定内容

要将元素放置在可滚动区域之外，将它们分配给 `fixed` 插槽。这样做会将元素[绝对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning)到内容的左上角。要更改元素的位置，可以使用 [top、right、bottom 和 left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS 属性设置其样式。

`fixedSlotPlacement` 属性用于确定 `fixed` 插槽中的内容在 DOM 中放置于主内容之前还是之后。当设置为 `before` 时，固定插槽内容将放置在主内容之前，因此会在主内容获得键盘焦点之前接收键盘焦点。当主内容包含无限滚动列表时，这可以防止通过按 Tab 键访问到 [FAB](./fab) 或其他固定内容。

import Fixed from '@site/static/usage/v8/content/fixed/index.md';

<Fixed />

## 滚动方法

内容提供了可以调用的[方法](#methods)，用于将内容滚动到底部、顶部或特定位置。可以传递 `duration` 参数以实现平滑过渡，而不是瞬间改变位置。

import ScrollMethods from '@site/static/usage/v8/content/scroll-methods/index.md';

<ScrollMethods />

## 滚动事件

出于性能考虑，内容的滚动事件默认是禁用的。但是，可以通过将 `scrollEvents` 设置为 `true` 来启用它们。在监听任何滚动[事件](#events)之前，这是必需的。

import ScrollEvents from '@site/static/usage/v8/content/scroll-events/index.md';

<ScrollEvents />


## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/content/theming/css-properties/index.md';

<CSSProps />

### 安全区域内边距

内容组件不会自动为任何边应用内边距以适应[安全区域](/theming/advanced#安全区域内边距)。这是因为内容组件通常与其他应用了自身内边距的组件（如[头部](./header)和[底部](./footer)）一起使用。但是，如果内容组件单独使用，则可能需要为安全区域应用内边距。这可以通过 CSS 使用[应用变量](../theming/advanced.md#应用变量)中描述的 `--ion-safe-area-(dir)` 变量来实现。

最常见的用例是为内容顶部应用内边距以适应状态栏。可以通过将 `padding-top` 属性设置为 `--ion-safe-area-top` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
```

另一个常见用例是为内容左侧应用内边距，以适应设备处于横屏模式时凹口在左侧的情况。可以通过将 `padding-left` 属性设置为 `--ion-safe-area-left` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-left: var(--ion-safe-area-left, 0);
}
```

import SafeArea from '@site/static/usage/v8/content/theming/safe-area/index.md';

<SafeArea />

## Interfaces

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

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以为 `ionScrollStart` 和 `ionScrollEnd` 事件提供更强的类型支持。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以为 `ionScroll` 事件提供更强的类型支持。

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
}
```


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
