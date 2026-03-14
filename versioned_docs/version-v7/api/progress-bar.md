---
title: 'ion-progress-bar'
---

import Props from '@ionic-internal/component-api/v7/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v7/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v7/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v7/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/progress-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/progress-bar/slots.md';

<head>
  <title>ion-progress-bar：应用进度条加载指示器</title>
  <meta
    name="description"
    content="ion-progress-bar 是水平加载指示器，用于告知用户应用内进行中任务的状态——例如提交表单或保存更新。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

进度条用于告知用户进行中任务的状态，例如应用加载、表单提交或保存更新。进度条有两种类型：`determinate`（确定型）和 `indeterminate`（不确定型）。

## 确定型进度条

确定型是默认类型。当操作进度百分比已知时应使用此类型。通过设置 `value` 属性来显示进度，可用于展示从轨道 0% 到 100% 的进度增长过程。

import Determinate from '@site/static/usage/v7/progress-bar/determinate/index.md';

<Determinate />

### 缓冲状态

若设置了 `buffer` 属性，将显示带有动画圆点的缓冲流以指示活动状态。`buffer` 属性的值也会通过可见轨道的长度来体现。如果 `buffer` 的值小于 `value` 属性，则不会显示可见轨道。若 `buffer` 等于 `1`，缓冲流将被隐藏。

import Buffer from '@site/static/usage/v7/progress-bar/buffer/index.md';

<Buffer />

## 不确定型进度条

不确定型应用于无法预估任务所需时间的情况。该进度条不与 `value` 值绑定，而是在任务完成前持续在轨道上滑动。

import Indeterminate from '@site/static/usage/v7/progress-bar/indeterminate/index.md';

<Indeterminate />

## 工具栏中的进度条

<!-- 复用 Toolbar 目录中的示例 -->

import Toolbar from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<Toolbar />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/progress-bar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/progress-bar/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/progress-bar/theming/css-shadow-parts/index.md';

<CSSParts />

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