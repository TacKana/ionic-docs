---
title: "ion-card"
---
import Props from '@ionic-internal/component-api/v8/card/props.md';
import Events from '@ionic-internal/component-api/v8/card/events.md';
import Methods from '@ionic-internal/component-api/v8/card/methods.md';
import Parts from '@ionic-internal/component-api/v8/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/card/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/card/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-card：Ionic Framework API 的卡片 UI 组件</title>
  <meta name="description" content="ion-card UI 组件是获取更详细信息的入口点。卡片可以是单个组件，也可以由头部、标题、副标题和内容组成。" />
</head>

<EncapsulationPill type="shadow" />


卡片是显示文本、图像、按钮和列表等内容的容器。
卡片可以是单个组件，但通常由头部、标题、副标题和内容组成。
卡片被拆分为多个组件以适应此结构：
[卡片头部](./card-header)、[卡片标题](./card-title)、[卡片副标题](./card-subtitle)
和[卡片内容](./card-content)。


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


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
