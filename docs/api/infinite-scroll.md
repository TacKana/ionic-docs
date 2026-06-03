---
title: "ion-infinite-scroll"
---

import Props from '@ionic-internal/component-api/v8/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v8/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v8/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v8/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/infinite-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/infinite-scroll/slots.md';

<head>
  <title>ion-infinite-scroll: 无限滚动操作组件</title>
  <meta name="description" content="ion-infinite-scroll 组件在用户滚动到距离页面底部或顶部指定距离时调用要执行的操作。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


无限滚动组件在用户滚动到距离页面底部或顶部指定距离时调用要执行的操作。

分配给 `ionInfinite` 事件的表达式在用户到达定义的距离时被调用。当此表达式完成所有任务后，它应调用无限滚动实例上的 `complete()` 方法。

## 基本用法

import Basic from '@site/static/usage/v8/infinite-scroll/basic/index.md';

<Basic />

## 加载文本和旋转器

`ion-infinite-scroll-content` 负责无限滚动交互的视觉显示。默认情况下，此组件根据无限滚动的状态改变其外观。它显示一个根据用户所在平台看起来最佳的旋转器。旋转器和加载文本都可以通过设置 `ion-infinite-scroll-content` 组件上的属性进行自定义。

import InfiniteScrollContent from '@site/static/usage/v8/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## 自定义内容

将 `ion-infinite-scroll` 和 `ion-infinite-scroll-content` 组件分离，使开发人员可以根据需要创建自己的内容组件。此内容可以包含任何内容，从 SVG 元素到具有独特 CSS 动画的元素。

import CustomContent from '@site/static/usage/v8/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## 与虚拟滚动一起使用

无限滚动需要滚动容器。使用虚拟滚动解决方案时，您需要禁用 `ion-content` 上的滚动，并使用 `.ion-content-scroll-host` 类目标指示哪个元素容器负责滚动容器。

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

:::note

`virtual-scroll-element` 是指负责滚动内容的滚动容器。这可能是您使用的虚拟滚动解决方案直接提供的组件。

:::

## 辅助功能

开发人员应将 `role="feed"` 属性分配给随着用户滚动而添加或移除项目的可滚动列表。

单个列表项应具有 `role="article"` 或直接使用 `<article>` 元素。

例如，在 `ion-list` 中渲染一系列项目时：

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article">
      First item
    </ion-item>
    <ion-item role="article">
      Second item
    </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

请参阅 [ARIA: feed role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) 文档获取更多信息。

## 接口

### InfiniteScrollCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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
