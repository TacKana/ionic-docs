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

面包屑（Breadcrumb）是面包屑导航组件中的单个导航项。它可以作为应用内部链接，也可以显示为纯文本。每个面包屑与下一个面包屑之间都有一个分隔符，并且可以选择性地包含图标。

更多信息请查阅 [Breadcrumbs](./breadcrumbs) 文档。

## 接口

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口以获得更强的类型约束。

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