---
title: 卡片组件
---
import Props from '@ionic-internal/component-api/v8/card/props.md';
import Events from '@ionic-internal/component-api/v8/card/events.md';
import Methods from '@ionic-internal/component-api/v8/card/methods.md';
import Parts from '@ionic-internal/component-api/v8/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/card/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/card/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-card: Ionic 框架的卡片 UI 组件 API</title>
  <meta name="description" content="ion-card UI 组件是通往更详细信息的人口。卡片可以是单个组件，也可以由页眉、标题、副标题和内容组成。" />
</head>

<EncapsulationPill type="shadow" />

卡片是用于展示文本、图像、按钮和列表等内容的容器。一个卡片可以是单个组件，但通常由页眉、标题、副标题和内容组成。为了适应这种结构，卡片被拆分为多个组件：[card header](./card-header)、[card title](./card-title)、[card subtitle](./card-subtitle) 和 [card content](./card-content)。

## 基本用法

import Basic from '@site/static/usage/v8/card/basic/index.md';

<Basic />

## 媒体卡片

import Media from '@site/static/usage/v8/card/media/index.md';

<Media />

## 卡片按钮

import Buttons from '@site/static/usage/v8/card/buttons/index.md';

<Buttons />

## 列表卡片

import List from '@site/static/usage/v8/card/list/index.md';

<List />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/card/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/card/theming/css-properties/index.md';

<CSSProps />

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