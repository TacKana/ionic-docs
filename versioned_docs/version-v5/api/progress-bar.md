---
title: 'Progress Bar | 用于加载指示的水平应用进度条'
description: 'ion-progress-bar 是水平加载指示器，用于向用户展示应用进程的当前状态——例如表单提交或保存更新。'
sidebar_label: 'ion-progress-bar'
demoUrl: '/docs/demos/api/progress-bar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v5/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v5/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v5/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/progress-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/progress-bar/slots.md';

# ion-progress-bar

进度条用于向用户展示当前进程的状态，例如应用加载、表单提交或保存更新。进度条分为两种类型：`determinate`（确定性）和 `indeterminate`（不确定性）。

## 进度条类型

### 确定性进度条

确定性进度条是默认类型。当操作完成百分比已知时，应使用此类型。通过设置 `value` 属性来表示进度，可用于展示从轨道 0% 到 100% 的进度增长。

如果设置了 `buffer` 属性，将显示带有动画圆点的缓冲流以指示活动状态。`buffer` 属性的值也通过可见轨道的长度来表示。如果 `buffer` 的值小于 `value` 属性，则不会有可见轨道。如果 `buffer` 等于 `1`，则缓冲流将被隐藏。

### 不确定性进度条

当进程所需时间未知时，应使用不确定性进度条类型。进度条不与 `value` 绑定，而是持续在轨道上滑动，直到进程完成。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认进度条 -->
<ion-progress-bar></ion-progress-bar>

<!-- 50% 的默认进度条 -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- 彩色进度条 -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- 其他类型 -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认进度条 -->
<ion-progress-bar></ion-progress-bar>

<!-- 50% 的默认进度条 -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- 彩色进度条 -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- 其他类型 -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonProgressBar, IonContent } from '@ionic/react';

export const ProgressbarExample: React.FC = () => (
  <IonContent>
    {/*-- 默认进度条 --*/}
    <IonProgressBar></IonProgressBar>
    <br />

    {/*-- 50% 的默认进度条 --*/}
    <IonProgressBar value={0.5}></IonProgressBar>
    <br />

    {/*-- 彩色进度条 --*/}
    <IonProgressBar color="primary" value={0.5}></IonProgressBar>
    <br />
    <IonProgressBar color="secondary" value={0.5}></IonProgressBar>
    <br />

    {/*-- 其他类型 --*/}
    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>
    <br />
    <IonProgressBar type="indeterminate"></IonProgressBar>
    <br />
    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>
    <br />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'progress-bar-example',
  styleUrl: 'progress-bar-example.css',
})
export class ProgressBarExample {
  render() {
    return [
      // 默认进度条
      <ion-progress-bar></ion-progress-bar>,

      // 50% 的默认进度条
      <ion-progress-bar value={0.5}></ion-progress-bar>,

      // 彩色进度条
      <ion-progress-bar color="primary" value={0.5}></ion-progress-bar>,
      <ion-progress-bar color="secondary" value={0.5}></ion-progress-bar>,

      // 其他类型
      <ion-progress-bar value={0.25} buffer={0.5}></ion-progress-bar>,
      <ion-progress-bar type="indeterminate"></ion-progress-bar>,
      <ion-progress-bar type="indeterminate" reversed={true}></ion-progress-bar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认进度条 -->
  <ion-progress-bar></ion-progress-bar>

  <!-- 50% 的默认进度条 -->
  <ion-progress-bar value="0.5"></ion-progress-bar>

  <!-- 彩色进度条 -->
  <ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
  <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

  <!-- 其他类型 -->
  <ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
</template>

<script>
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonProgressBar },
  });
</script>
```

</TabItem>

</Tabs>

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