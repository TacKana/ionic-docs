---
title: 'ion-content'
---

import Props from '@ionic-internal/component-api/v7/content/props.md';
import Events from '@ionic-internal/component-api/v7/content/events.md';
import Methods from '@ionic-internal/component-api/v7/content/methods.md';
import Parts from '@ionic-internal/component-api/v7/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/content/slots.md';

<head>
  <title>ion-content：Ionic 应用内容的可滚动组件</title>
  <meta
    name="description"
    content="ion-content 提供了一个易于使用的内容区域，并带有控制可滚动区域的有用方法。了解更多关于这个 Ionic 应用的 CSS 组件。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

内容组件提供了一个易于使用的内容区域，并带有一些控制可滚动区域的有用方法。
单个视图中只应存在一个内容组件。

与许多其他 Ionic 组件一样，可以通过 [CSS 实用工具](/v7/layout/css-utilities) 中提供的全局样式自定义内容的填充、边距等，或使用 CSS 和可用的 [CSS 自定义属性](#css-custom-properties) 单独设置样式。

## 基本用法

import Basic from '@site/static/usage/v7/content/basic/index.md';

<Basic />

## 页眉与页脚

内容组件可以是页面中唯一的顶层组件，也可以与 [页眉](./header)、[页脚](./footer) 或两者结合使用。当与页眉或页脚一起使用时，它会自动调整大小以填充剩余高度。

import HeaderFooter from '@site/static/usage/v7/content/header-footer/index.md';

<HeaderFooter />

## 全屏内容

默认情况下，内容填充在 [页眉](./header) 和 [页脚](./footer) 之间的空间，但不会延伸到它们后面。在某些情况下，可能希望内容滚动到页眉和页脚后面，例如当其中任何一个设置了 `translucent` 属性，或在工具栏上设置了 `opacity` 时。这可以通过将内容组件的 `fullscreen` 属性设置为 `true` 来实现。

import Fullscreen from '@site/static/usage/v7/content/fullscreen/index.md';

<Fullscreen />

## 固定内容

要将元素放置在可滚动区域之外，请将它们分配到 `fixed` 插槽。这样做会将元素 [绝对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) 到内容的左上角。要更改元素的位置，可以使用 [top、right、bottom 和 left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS 属性进行样式设置。

import Fixed from '@site/static/usage/v7/content/fixed/index.md';

<Fixed />

## 滚动方法

内容组件提供了可调用的 [方法](#methods)，用于将内容滚动到底部、顶部或特定点。可以向这些方法传递 `duration` 参数，以实现平滑过渡而不是瞬间改变位置。

import ScrollMethods from '@site/static/usage/v7/content/scroll-methods/index.md';

<ScrollMethods />

## 滚动事件

出于性能考虑，内容组件的滚动事件默认是禁用的。但是，可以通过将 `scrollEvents` 设置为 `true` 来启用。在监听任何滚动 [事件](#events) 之前，必须先启用此选项。

import ScrollEvents from '@site/static/usage/v7/content/scroll-events/index.md';

<ScrollEvents />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/content/theming/css-properties/index.md';

<CSSProps />

### 安全区域填充

内容组件不会自动向其任何一侧应用填充以考虑 [安全区域](/v7/theming/advanced#safe-area-padding)。这是因为内容组件通常与自身应用填充的其他组件（如 [页眉](./header) 和 [页脚](./footer)）结合使用。但是，如果内容组件单独使用，则可能需要对安全区域应用填充。这可以通过 CSS 使用 [应用变量](../theming/advanced.md#application-variables) 中描述的 `--ion-safe-area-(dir)` 变量来实现。

最常见的用例是向内容顶部应用填充以考虑状态栏。这可以通过将 `padding-top` 属性设置为 `--ion-safe-area-top` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
```

另一个常见用例是当设备处于横屏模式且刘海在左侧时，向内容左侧应用填充以考虑刘海。这可以通过将 `padding-left` 属性设置为 `--ion-safe-area-left` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-left: var(--ion-safe-area-left, 0);
}
```

import SafeArea from '@site/static/usage/v7/content/theming/safe-area/index.md';

<SafeArea />

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便为 `ionScrollStart` 和 `ionScrollEnd` 事件提供更强的类型检查。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便为 `ionScroll` 事件提供更强的类型检查。

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
}
```

## 属性

<Props />

<LegacyAnchor id="events" />

## 事件

<Events />

<LegacyAnchor id="methods" />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

<LegacyAnchor id="css-custom-properties" />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
