---
title: 'ion-breadcrumb'
---

import Props from '@ionic-internal/component-api/v7/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v7/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v7/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v7/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/breadcrumb/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

面包屑（Breadcrumb）是作为面包屑组件子元素的单个导航项。面包屑可以链接到应用中的其他位置，也可以是纯文本。每个面包屑与其下一个面包屑之间有一个分隔符，并且可以选择性地包含图标。

更多信息请参阅[面包屑](./breadcrumbs)文档。

## 接口

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口以提供更强的类型支持。

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
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
