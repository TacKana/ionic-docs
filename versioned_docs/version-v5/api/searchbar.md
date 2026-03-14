---
title: '搜索栏图标在键盘文本显示中的应用 | Ion-Search Bar'
description: '搜索栏是一种用于在集合中进行搜索的文本字段。了解如何在 Android 和 iOS 键盘显示中将 Ion-Search Bar 作为图标使用。'
sidebar_label: 'ion-searchbar'
demoUrl: '/docs/demos/api/searchbar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/searchbar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/searchbar/props.md';
import Events from '@ionic-internal/component-api/v5/searchbar/events.md';
import Methods from '@ionic-internal/component-api/v5/searchbar/methods.md';
import Parts from '@ionic-internal/component-api/v5/searchbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/searchbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/searchbar/slots.md';

# ion-searchbar

搜索栏是一种文本字段，可用于在集合中进行搜索。它可以显示在工具栏或主要内容区域内。

在需要搜索列表时，应使用搜索栏替代普通输入框。在搜索栏的文本字段中输入内容后，会显示一个清除按钮。点击清除按钮将清空文本字段，但输入焦点会保持。还可以启用取消按钮，点击该按钮将清空输入内容并失去焦点。

## 键盘显示

### Android 平台

默认情况下，点击输入框会使键盘出现，提交按钮上显示一个放大镜图标。您可以选择将 `inputmode` 属性设置为 `"search"`，这会将图标从放大镜更改为回车符号。

### iOS 平台

默认情况下，点击输入框会使键盘出现，灰色提交按钮上显示文本“return”。您可以选择将 `inputmode` 属性设置为 `"search"`，这会将文本从“return”更改为“go”，并将按钮颜色从灰色更改为蓝色。或者，您也可以将 `ion-searchbar` 包裹在带有 `action` 属性的 `form` 元素中。这将使键盘出现一个蓝色的提交按钮，上面写着“search”。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认搜索栏 -->
<ion-searchbar></ion-searchbar>

<!-- 始终显示取消按钮的搜索栏 -->
<ion-searchbar showCancelButton="always"></ion-searchbar>

<!-- 从不显示取消按钮的搜索栏 -->
<ion-searchbar showCancelButton="never"></ion-searchbar>

<!-- 聚焦时显示取消按钮的搜索栏 -->
<ion-searchbar showCancelButton="focus"></ion-searchbar>

<!-- 危险色搜索栏 -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- 带初始值的搜索栏 -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- 电话类型的搜索栏 -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- 数字输入模式的搜索栏 -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- 禁用状态的搜索栏 -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- 带取消按钮且自定义取消按钮文本的搜索栏 -->
<ion-searchbar showCancelButton="focus" cancelButtonText="自定义取消"></ion-searchbar>

<!-- 自定义防抖时间的搜索栏 -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- 带动画效果的搜索栏 -->
<ion-searchbar animated></ion-searchbar>

<!-- 带占位符的搜索栏 -->
<ion-searchbar placeholder="筛选日程"></ion-searchbar>

<!-- 工具栏内的搜索栏 -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认搜索栏 -->
<ion-searchbar></ion-searchbar>

<!-- 始终显示取消按钮的搜索栏 -->
<ion-searchbar show-cancel-button="always"></ion-searchbar>

<!-- 从不显示取消按钮的搜索栏 -->
<ion-searchbar show-cancel-button="never"></ion-searchbar>

<!-- 聚焦时显示取消按钮的搜索栏 -->
<ion-searchbar show-cancel-button="focus"></ion-searchbar>

<!-- 危险色搜索栏 -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- 带初始值的搜索栏 -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- 电话类型的搜索栏 -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- 数字输入模式的搜索栏 -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- 禁用状态的搜索栏 -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- 带取消按钮且自定义取消按钮文本的搜索栏 -->
<ion-searchbar show-cancel-button="focus" cancel-button-text="自定义取消"></ion-searchbar>

<!-- 自定义防抖时间的搜索栏 -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- 带动画效果的搜索栏 -->
<ion-searchbar animated></ion-searchbar>

<!-- 带占位符的搜索栏 -->
<ion-searchbar placeholder="筛选日程"></ion-searchbar>

<!-- 工具栏内的搜索栏 -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

export const SearchBarExamples: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar 示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>默认搜索栏</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>

        <p>始终显示取消按钮的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="always"
        ></IonSearchbar>

        <p>从不显示取消按钮的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="never"
        ></IonSearchbar>

        <p>聚焦时显示取消按钮的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>

        <p>危险色搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          color="danger"
        ></IonSearchbar>

        <p>电话类型的搜索栏</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)} type="tel"></IonSearchbar>

        <p>数字输入模式的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          inputmode="numeric"
        ></IonSearchbar>

        <p>禁用状态的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          disabled={true}
        ></IonSearchbar>

        <p>带取消按钮且自定义取消按钮文本的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
          cancelButtonText="自定义取消"
        ></IonSearchbar>

        <p>自定义防抖时间的搜索栏 - 注意：防抖仅在 onIonChange 事件中有效</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          debounce={1000}
        ></IonSearchbar>

        <p>带动画效果的搜索栏</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)} animated></IonSearchbar>

        <p>带占位符的搜索栏</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          placeholder="筛选日程"
        ></IonSearchbar>

        <p>工具栏内的搜索栏</p>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonContent>
      <IonFooter>
        <IonToolbar>搜索文本：{searchText ?? '(无)'}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchbar-example',
  styleUrl: 'searchbar-example.css',
})
export class SearchbarExample {
  render() {
    return [
      // 默认搜索栏
      <ion-searchbar></ion-searchbar>,

      // 始终显示取消按钮的搜索栏
      <ion-searchbar showCancelButton="always"></ion-searchbar>,

      // 从不显示取消按钮的搜索栏
      <ion-searchbar showCancelButton="never"></ion-searchbar>,

      // 聚焦时显示取消按钮的搜索栏
      <ion-searchbar showCancelButton="focus"></ion-searchbar>,

      // 危险色搜索栏
      <ion-searchbar color="danger"></ion-searchbar>,

      // 带初始值的搜索栏
      <ion-searchbar value="Ionic"></ion-searchbar>,

      // 电话类型的搜索栏
      <ion-searchbar type="tel"></ion-searchbar>,

      // 数字输入模式的搜索栏
      <ion-searchbar inputmode="numeric"></ion-searchbar>,

      // 禁用状态的搜索栏
      <ion-searchbar disabled={true}></ion-searchbar>,

      // 带取消按钮且自定义取消按钮文本的搜索栏
      <ion-searchbar showCancelButton="focus" cancelButtonText="自定义取消"></ion-searchbar>,

      // 自定义防抖时间的搜索栏
      <ion-searchbar debounce={500}></ion-searchbar>,

      // 带动画效果的搜索栏
      <ion-searchbar animated={true}></ion-searchbar>,

      // 带占位符的搜索栏
      <ion-searchbar placeholder="筛选日程"></ion-searchbar>,

      // 工具栏内的搜索栏
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认搜索栏 -->
  <ion-searchbar></ion-searchbar>

  <!-- 始终显示取消按钮的搜索栏 -->
  <ion-searchbar show-cancel-button="always"></ion-searchbar>

  <!-- 从不显示取消按钮的搜索栏 -->
  <ion-searchbar show-cancel-button="never"></ion-searchbar>

  <!-- 聚焦时显示取消按钮的搜索栏 -->
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>

  <!-- 危险色搜索栏 -->
  <ion-searchbar color="danger"></ion-searchbar>

  <!-- 带初始值的搜索栏 -->
  <ion-searchbar value="Ionic"></ion-searchbar>

  <!-- 电话类型的搜索栏 -->
  <ion-searchbar type="tel"></ion-searchbar>

  <!-- 数字输入模式的搜索栏 -->
  <ion-searchbar inputmode="numeric"></ion-searchbar>

  <!-- 禁用状态的搜索栏 -->
  <ion-searchbar disabled="true"></ion-searchbar>

  <!-- 带取消按钮且自定义取消按钮文本的搜索栏 -->
  <ion-searchbar show-cancel-button="focus" cancel-button-text="自定义取消"></ion-searchbar>

  <!-- 自定义防抖时间的搜索栏 -->
  <ion-searchbar debounce="500"></ion-searchbar>

  <!-- 带动画效果的搜索栏 -->
  <ion-searchbar animated></ion-searchbar>

  <!-- 带占位符的搜索栏 -->
  <ion-searchbar placeholder="筛选日程"></ion-searchbar>

  <!-- 工具栏内的搜索栏 -->
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

<script>
  import { IonSearchbar, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar, IonToolbar },
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

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />