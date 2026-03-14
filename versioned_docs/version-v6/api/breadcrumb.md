---
title: 'ion-breadcrumb'
---

import Props from '@ionic-internal/component-api/v6/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v6/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v6/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v6/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/breadcrumb/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

面包屑导航项（Breadcrumb）是面包屑导航组件（Breadcrumbs）的子项。一个面包屑可以链接到应用内的其他页面，也可以显示为纯文本。每个面包屑与其后一个面包屑之间有分隔符，并且可以选择性地包含图标。

更多信息请参阅[面包屑导航（Breadcrumbs）](./breadcrumbs)文档。

## 接口

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

虽然非必需，但使用此接口可以替代 `CustomEvent` 接口以提供更强的类型检查。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />