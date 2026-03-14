---
title: 内容组件
---
import Props from '@ionic-internal/component-api/v8/content/props.md';
import Events from '@ionic-internal/component-api/v8/content/events.md';
import Methods from '@ionic-internal/component-api/v8/content/methods.md';
import Parts from '@ionic-internal/component-api/v8/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/content/slots.md';

<head>
  <title>ion-content: Ionic 应用内容的可滚动组件</title>
  <meta name="description" content="ion-content 提供了一个易于使用的内容区域，包含控制可滚动区域的有用方法。了解更多关于 Ionic 应用的这个 CSS 组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


内容组件提供一个易于使用的内容区域，并包含一些控制可滚动区域的有用方法。
在单个视图中应该只有一个内容组件。

内容组件与许多其他 Ionic 组件一样，可以通过 [CSS 实用工具](/docs/layout/css-utilities) 中提供的全局样式进行自定义，或使用 CSS 和可用的 [CSS 自定义属性](#css-custom-properties) 单独设置样式，从而修改其内边距、外边距等属性。


## 基本用法

import Basic from '@site/static/usage/v8/content/basic/index.md';

<Basic />


## 页眉和页脚

内容组件可以是页面中唯一的顶级组件，也可以与 [页眉](./header)、[页脚](./footer) 或两者一起使用。当与页眉或页脚一起使用时，它会调整自身大小以填充剩余高度。

import HeaderFooter from '@site/static/usage/v8/content/header-footer/index.md';

<HeaderFooter />


## 全屏内容

默认情况下，内容会填充 [页眉](./header) 和 [页脚](./footer) 之间的空间，但不会延伸到它们后面。在某些情况下，可能需要让内容在页眉和页脚后面滚动，例如当其中任何一个设置了 `translucent` 属性，或在工具栏上设置了 `opacity` 时。这可以通过将内容的 `fullscreen` 属性设置为 `true` 来实现。

import Fullscreen from '@site/static/usage/v8/content/fullscreen/index.md';

<Fullscreen />


## 固定内容

要将元素放置在可滚动区域之外，请将它们分配给 `fixed` 插槽。这样做会将元素 [绝对定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#absolute_positioning) 到内容的左上角。要更改元素的位置，可以使用 [top、right、bottom 和 left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) CSS 属性进行样式设置。

`fixedSlotPlacement` 属性用于确定 `fixed` 插槽中的内容在 DOM 中是放置在主内容之前还是之后。当设置为 `before` 时，固定插槽内容将放置在主内容之前，因此会在主内容之前获得键盘焦点。当主内容包含无限滚动列表时，这很有用，可以防止通过按 Tab 键到达 [浮动操作按钮](./fab) 或其他固定内容。

import Fixed from '@site/static/usage/v8/content/fixed/index.md';

<Fixed />

## 滚动方法

内容组件提供了可调用的 [方法](#methods)，用于将内容滚动到底部、顶部或特定位置。可以传入一个 `duration` 参数，以实现平滑过渡，而不是立即改变位置。

import ScrollMethods from '@site/static/usage/v8/content/scroll-methods/index.md';

<ScrollMethods />

## 滚动事件

出于性能考虑，内容组件的滚动事件默认是禁用的。但可以通过将 `scrollEvents` 设置为 `true` 来启用。在监听任何滚动 [事件](#events) 之前，这是必要的步骤。

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

内容组件不会自动向任何一侧应用内边距以考虑 [安全区域](/docs/theming/advanced#safe-area-padding)。这是因为内容组件通常与其他应用了自己内边距的组件（如 [页眉](./header) 和 [页脚](./footer)）一起使用。但是，如果单独使用内容组件，可能需要对安全区域应用内边距。这可以通过 CSS 使用 [应用变量](../theming/advanced.md#application-variables) 中描述的 `--ion-safe-area-(dir)` 变量来实现。

最常见的用例是为状态栏向内容顶部应用内边距。这可以通过将 `padding-top` 属性设置为 `--ion-safe-area-top` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
```

另一个常见用例是在设备处于横屏模式且刘海在左侧时，为内容左侧应用内边距以考虑刘海。这可以通过将 `padding-left` 属性设置为 `--ion-safe-area-left` 变量的值来实现。

```css
ion-content::part(scroll) {
  padding-left: var(--ion-safe-area-left, 0);
}
```

import SafeArea from '@site/static/usage/v8/content/theming/safe-area/index.md';

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于在 `ionScrollStart` 和 `ionScrollEnd` 事件上提供更强的类型检查。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于在 `ionScroll` 事件上提供更强的类型检查。

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