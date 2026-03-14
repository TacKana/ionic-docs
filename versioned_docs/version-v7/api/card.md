---
title: 'ion-card'
---

import Props from '@ionic-internal/component-api/v7/card/props.md';
import Events from '@ionic-internal/component-api/v7/card/events.md';
import Methods from '@ionic-internal/component-api/v7/card/methods.md';
import Parts from '@ionic-internal/component-api/v7/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/card/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/card/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-card: Ionic Framework 卡片UI组件API</title>
  <meta
    name="description"
    content="ion-card UI组件是通往更详细信息的入口。卡片可以是单个组件，也可以由页眉、标题、副标题和内容组成。"
  />
</head>

<EncapsulationPill type="shadow" />

卡片是用于展示文本、图像、按钮和列表等内容的容器。卡片可以是一个独立的组件，但通常由页眉、标题、副标题和内容组成。为适应这种结构，卡片被拆分为多个组件：[card header](./card-header)、[card title](./card-title)、[card subtitle](./card-subtitle) 和 [card content](./card-content)。

## 基本用法

import Basic from '@site/static/usage/v7/card/basic/index.md';

<Basic />

## 媒体卡片

import Media from '@site/static/usage/v7/card/media/index.md';

<Media />

## 卡片按钮

import Buttons from '@site/static/usage/v7/card/buttons/index.md';

<Buttons />

## 列表卡片

import List from '@site/static/usage/v7/card/list/index.md';

<List />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/card/theming/colors/index.md';

<Colors />

### CSS自定义属性

import CSSProps from '@site/static/usage/v7/card/theming/css-properties/index.md';

<CSSProps />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS自定义属性

<CustomProps />

## 插槽

<Slots />