---
title: 'ion-slide'
---

import Props from '@ionic-internal/component-api/v6/slide/props.md';
import Events from '@ionic-internal/component-api/v6/slide/events.md';
import Methods from '@ionic-internal/component-api/v6/slide/methods.md';
import Parts from '@ionic-internal/component-api/v6/slide/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/slide/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/slide/slots.md';

<head>
  <title>ion-slide | Ionic 框架应用中的幻灯片 API 组件</title>
  <meta
    name="description"
    content="Slide 是 Slides 的子组件 API，写作 ion-slide。所有幻灯片内容都应在此组件中编写，并与 Slides 组件配合使用。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

:::note
该组件已被弃用，建议直接使用 Swiper.js。请参阅 [Slides 文档](./slides#migration) 获取迁移指南。
:::

Slide 组件是 [Slides](./slides) 的子组件。模板应写作 `ion-slide`。所有幻灯片内容都应在此组件中编写，并应与 [Slides](./slides) 组件配合使用。

更多使用信息，请参阅 [Slides API 文档](./slides)。

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