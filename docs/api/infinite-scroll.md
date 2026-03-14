---
title: 无限滚动组件
---

import Props from '@ionic-internal/component-api/v8/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v8/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v8/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v8/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/infinite-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/infinite-scroll/slots.md';

<head>
  <title>ion-infinite-scroll：无限滚动操作组件</title>
  <meta name="description" content="当用户滚动到距离页面底部或顶部指定距离时，ion-infinite-scroll 组件会触发一个操作。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

无限滚动组件会在用户滚动到距离页面底部或顶部指定距离时触发一个操作。

当用户到达该定义距离时，将调用分配给 `ionInfinite` 事件的表达式。当此表达式完成所有任务后，它应调用无限滚动实例的 `complete()` 方法。

## 基本用法

import Basic from '@site/static/usage/v8/infinite-scroll/basic/index.md';

<Basic />

## 加载文本与旋转器

`ion-infinite-scroll-content` 负责无限滚动交互的视觉展示。默认情况下，该组件会根据无限滚动的状态改变其外观。它会显示一个根据用户所在平台看起来最合适的旋转器。旋转器和加载文本都可以通过在 `ion-infinite-scroll-content` 组件上设置属性来自定义。

import InfiniteScrollContent from '@site/static/usage/v8/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## 自定义内容

将 `ion-infinite-scroll` 和 `ion-infinite-scroll-content` 组件分开，允许开发者在需要时创建自己的内容组件。这些内容可以包含任何元素，从 SVG 元素到具有独特 CSS 动画的元素。

import CustomContent from '@site/static/usage/v8/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## 与虚拟滚动结合使用

无限滚动需要一个滚动容器。当使用虚拟滚动解决方案时，您需要禁用 `ion-content` 上的滚动，并通过 `.ion-content-scroll-host` 类目标指定哪个元素容器负责滚动容器。

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- 您的虚拟滚动内容 -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

:::note

`virtual-scroll-element` 指的是负责滚动内容的滚动容器。这可能是您正在使用的虚拟滚动解决方案直接提供的组件。

:::

## 无障碍访问

开发者应为可滚动的项目列表分配 `role="feed"` 属性，这些项目会随着用户滚动而添加或移除。

单个列表项应具有 `role="article"` 或直接使用 `<article>` 元素。

例如，在 `ion-list` 中渲染一组项目时：

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article">
      第一个项目
    </ion-item>
    <ion-item role="article">
      第二个项目
    </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

请参阅 [ARIA: feed 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) 文档获取更多信息。

## 接口

### InfiniteScrollCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
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