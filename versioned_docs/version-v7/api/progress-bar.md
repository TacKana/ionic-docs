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
  <title>ion-progress-bar：用于加载指示器的应用进度条</title>
  <meta
    name="description"
    content="ion-progress-bar 是水平加载指示器，通知用户正在进行的应用进程的状态——例如提交表单或保存更新。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

进度条（Progress bar）通知用户正在进行的进程的状态，例如加载应用、提交表单或保存更新。有两种类型的进度条：`determinate`（确定）和 `indeterminate`（不确定）。

## 确定模式

确定是默认类型。当知道操作的百分比时应使用此模式。进度通过设置 `value` 属性来表示。这可用于显示进度从 0 增加到轨道的 100%。

import Determinate from '@site/static/usage/v7/progress-bar/determinate/index.md';

<Determinate />

### 缓冲

如果设置了 `buffer` 属性，将显示一个带有动画圆圈的缓冲流以指示活动。`buffer` 属性的值也将通过可见轨道的多少来表示。如果 `buffer` 的值小于 `value` 属性，则不会有可见轨道。如果 `buffer` 等于 `1`，则缓冲流将被隐藏。

import Buffer from '@site/static/usage/v7/progress-bar/buffer/index.md';

<Buffer />

## 不确定模式

当不知道进程需要多长时间时，应使用不确定类型。进度条不依赖于 `value`，而是沿着轨道持续滑动，直到进程完成。

import Indeterminate from '@site/static/usage/v7/progress-bar/indeterminate/index.md';

<Indeterminate />

## 工具栏中的进度条

{/* 复用 Toolbar 目录下的 playground */}

import Toolbar from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<Toolbar />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/progress-bar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/progress-bar/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部分

import CSSParts from '@site/static/usage/v7/progress-bar/theming/css-shadow-parts/index.md';

<CSSParts />

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
