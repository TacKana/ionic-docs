---
title: 'ion-infinite-scroll'
---

import Props from '@ionic-internal/component-api/v6/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v6/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v6/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v6/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/infinite-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/infinite-scroll/slots.md';

<head>
  <title>无限滚动组件 | ion-infinite-scroll 操作组件</title>
  <meta
    name="description"
    content="当用户滚动到距离页面底部或顶部指定距离时，ion-infinite-scroll 组件会触发一个要执行的操作。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

无限滚动组件会在用户滚动到距离页面底部或顶部指定距离时，触发一个要执行的操作。

当用户达到该定义距离时，将调用分配给 `ionInfinite` 事件的表达式。当此表达式完成所有任务后，应调用无限滚动实例上的 `complete()` 方法。

import Basic from '@site/static/usage/v6/infinite-scroll/basic/index.md';

<Basic />

## 加载文本与旋转器

`ion-infinite-scroll-content` 负责无限滚动交互的视觉展示。默认情况下，该组件会根据无限滚动的状态改变其外观。它会显示一个根据用户所在平台优化显示的旋转器。通过设置 `ion-infinite-scroll-content` 组件的属性，可以自定义旋转器和加载文本。

import InfiniteScrollContent from '@site/static/usage/v6/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## 自定义内容

将 `ion-infinite-scroll` 和 `ion-infinite-scroll-content` 组件分离，允许开发者在需要时创建自己的内容组件。这些内容可以包含任何元素，从 SVG 元素到带有独特 CSS 动画的元素。

import CustomContent from '@site/static/usage/v6/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## 与虚拟滚动结合使用

无限滚动需要一个滚动容器才能正常工作。当使用虚拟滚动方案时，您需要禁用 `ion-content` 的滚动，并通过 `.ion-content-scroll-host` 类目标指定哪个元素容器负责滚动容器。

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

## 无障碍访问

开发者应为可滚动的项目列表分配 `role="feed"` 属性，这些项目会随着用户滚动而添加或移除。

单个列表项应具有 `role="article"` 属性或直接使用 `<article>` 元素。

例如，在 `ion-list` 中渲染项目集合时：

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article"> 第一项 </ion-item>
    <ion-item role="article"> 第二项 </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

请参阅 [ARIA：feed 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) 文档以获取更多信息。

## 接口

### InfiniteScrollCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便为此组件发出的 Ionic 事件提供更强的类型定义。

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