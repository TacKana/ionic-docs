---
sidebar_label: 'ion-note'
demoUrl: '/docs/demos/api/note/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/note/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/note/props.md';
import Events from '@ionic-internal/component-api/v5/note/events.md';
import Methods from '@ionic-internal/component-api/v5/note/methods.md';
import Parts from '@ionic-internal/component-api/v5/note/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/note/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/note/slots.md';

# ion-note

注释（note）通常是作为副标题使用的文本元素，用于提供更多信息。注释默认样式显示为灰色。注释可以在项目（item）中用作元数据文本。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认注释 -->
<ion-note>默认注释</ion-note>

<!-- 注释颜色 -->
<ion-note color="primary">主要注释</ion-note>
<ion-note color="secondary">次要注释</ion-note>
<ion-note color="danger">危险注释</ion-note>
<ion-note color="light">浅色注释</ion-note>
<ion-note color="dark">深色注释</ion-note>

<!-- 列表中的注释 -->
<ion-list>
  <ion-item>
    <ion-label>注释（末尾）</ion-label>
    <ion-note slot="end">开启</ion-note>
  </ion-item>

  <ion-item>
    <ion-note slot="start">关闭</ion-note>
    <ion-label>注释（起始）</ion-label>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认注释 -->
<ion-note>默认注释</ion-note>

<!-- 注释颜色 -->
<ion-note color="primary">主要注释</ion-note>
<ion-note color="secondary">次要注释</ion-note>
<ion-note color="danger">危险注释</ion-note>
<ion-note color="light">浅色注释</ion-note>
<ion-note color="dark">深色注释</ion-note>

<!-- 列表中的注释 -->
<ion-list>
  <ion-item>
    <ion-label>注释（末尾）</ion-label>
    <ion-note slot="end">开启</ion-note>
  </ion-item>

  <ion-item>
    <ion-note slot="start">关闭</ion-note>
    <ion-label>注释（起始）</ion-label>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonNote, IonList, IonItem, IonLabel, IonContent } from '@ionic/react';

export const NoteExample: React.FC = () => (
  <IonContent>
    {/*-- 默认注释 --*/}
    <IonNote>默认注释</IonNote>
    <br />

    {/*-- 注释颜色 --*/}
    <IonNote color="primary">主要注释</IonNote>
    <br />
    <IonNote color="secondary">次要注释</IonNote>
    <br />
    <IonNote color="danger">危险注释</IonNote>
    <br />
    <IonNote color="light">浅色注释</IonNote>
    <br />
    <IonNote color="dark">深色注释</IonNote>
    <br />

    {/*-- 列表中的注释 --*/}
    <IonList>
      <IonItem>
        <IonLabel>注释（末尾）</IonLabel>
        <IonNote slot="end">开启</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">关闭</IonNote>
        <IonLabel>注释（起始）</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'note-example',
  styleUrl: 'note-example.css',
})
export class NoteExample {
  render() {
    return [
      // 默认注释
      <ion-note>默认注释</ion-note>,

      // 注释颜色
      <ion-note color="primary">主要注释</ion-note>,
      <ion-note color="secondary">次要注释</ion-note>,
      <ion-note color="danger">危险注释</ion-note>,
      <ion-note color="light">浅色注释</ion-note>,
      <ion-note color="dark">深色注释</ion-note>,

      // 列表中的注释
      <ion-list>
        <ion-item>
          <ion-label>注释（末尾）</ion-label>
          <ion-note slot="end">开启</ion-note>
        </ion-item>

        <ion-item>
          <ion-note slot="start">关闭</ion-note>
          <ion-label>注释（起始）</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认注释 -->
  <ion-note>默认注释</ion-note>

  <!-- 注释颜色 -->
  <ion-note color="primary">主要注释</ion-note>
  <ion-note color="secondary">次要注释</ion-note>
  <ion-note color="danger">危险注释</ion-note>
  <ion-note color="light">浅色注释</ion-note>
  <ion-note color="dark">深色注释</ion-note>

  <!-- 列表中的注释 -->
  <ion-list>
    <ion-item>
      <ion-label>注释（末尾）</ion-label>
      <ion-note slot="end">开启</ion-note>
    </ion-item>

    <ion-item>
      <ion-note slot="start">关闭</ion-note>
      <ion-label>注释（起始）</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonNote } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonNote },
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