---
title: 进度条组件
---
import Props from '@ionic-internal/component-api/v8/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v8/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v8/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v8/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/progress-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/progress-bar/slots.md';

<head>
  <title>ion-progress-bar: 应用加载指示进度条</title>
  <meta name="description" content="ion-progress-bar 是水平加载指示器，用于向用户显示应用进程的当前状态——例如提交表单或保存更新。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


进度条用于向用户显示正在进行的进程状态，例如应用加载、表单提交或保存更新。进度条分为两种类型：`determinate`（确定性）和 `indeterminate`（非确定性）。

## 确定性进度条

确定性进度条是默认类型。当操作的完成百分比已知时，应使用此类型。通过设置 `value` 属性来表示进度。这可用于显示进度从轨迹的 0% 增加到 100%。

import Determinate from '@site/static/usage/v8/progress-bar/determinate/index.md';

<Determinate />

### 缓冲状态

如果设置了 `buffer` 属性，将显示带有动画圆圈的缓冲流以指示活动状态。`buffer` 属性的值也会通过可见轨迹的长度来表示。如果 `buffer` 的值小于 `value` 属性，则不会有可见轨迹。如果 `buffer` 等于 `1`，则缓冲流将被隐藏。

import Buffer from '@site/static/usage/v8/progress-bar/buffer/index.md';

<Buffer />


## 非确定性进度条

当进程所需时间未知时，应使用非确定性类型。该进度条不与 `value` 绑定，而是持续在轨迹上滑动，直到进程完成。

import Indeterminate from '@site/static/usage/v8/progress-bar/indeterminate/index.md';

<Indeterminate />


## 工具栏中的进度条

<!-- 复用 Toolbar 目录中的示例 -->
import Toolbar from '@site/static/usage/v8/toolbar/progress-bars/index.md';

<Toolbar />


## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/progress-bar/theming/colors/index.md';

<Colors />


### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/progress-bar/theming/css-properties/index.md';

<CSSProps />


### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/progress-bar/theming/css-shadow-parts/index.md';

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