---
title: 'ion-progress-bar'
---

import Props from '@ionic-internal/component-api/v6/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v6/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v6/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v6/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/progress-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/progress-bar/slots.md';

<head>
  <title>进度条 | 用于加载指示的水平应用进度条</title>
  <meta
    name="description"
    content="ion-progress-bar 是水平加载指示器，用于告知用户当前应用进程的状态，例如提交表单或保存更新。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

进度条用于向用户展示当前进程的状态，例如应用加载、提交表单或保存更新。进度条有两种类型：`determinate`（确定型）和 `indeterminate`（不确定型）。

## Determinate（确定型）

确定型是默认类型。当操作完成百分比已知时，应使用此类型。通过设置 `value` 属性来表示进度。这可用于显示从轨道 0% 到 100% 的进度增长。

import Determinate from '@site/static/usage/v6/progress-bar/determinate/index.md';

<Determinate />

### 缓冲

如果设置了 `buffer` 属性，将会显示带有动画圆圈的缓冲流来表示活动状态。`buffer` 属性的值也会通过可见轨道的多少来表示。如果 `buffer` 的值小于 `value` 属性，则不会显示可见轨道。如果 `buffer` 等于 `1`，则缓冲流将被隐藏。

import Buffer from '@site/static/usage/v6/progress-bar/buffer/index.md';

<Buffer />

## Indeterminate（不确定型）

当进程所需时间未知时，应使用不确定型。进度条不与 `value` 绑定，而是持续在轨道上滑动，直到进程完成。

import Indeterminate from '@site/static/usage/v6/progress-bar/indeterminate/index.md';

<Indeterminate />

## 工具栏中的进度条

<!-- 复用 Toolbar 目录中的演示示例 -->

import Toolbar from '@site/static/usage/v6/toolbar/progress-bars/index.md';

<Toolbar />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/progress-bar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/progress-bar/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/progress-bar/theming/css-shadow-parts/index.md';

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