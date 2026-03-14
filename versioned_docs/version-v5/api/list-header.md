---
sidebar_label: 'ion-list-header'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/list-header/props.md';
import Events from '@ionic-internal/component-api/v5/list-header/events.md';
import Methods from '@ionic-internal/component-api/v5/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v5/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/list-header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/list-header/slots.md';

# ion-list-header

ListHeader 是列表的头部组件。
与 ItemDivider 不同，ListHeader 的样式设计是为了在列表项中更加突出。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认列表头部 -->
<ion-list-header>
  <ion-label>列表头部</ion-label>
</ion-list-header>

<!-- 带按钮的列表头部 -->
<ion-list-header>
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 带轮廓按钮的列表头部 -->
<ion-list-header>
  <ion-label>本周新内容</ion-label>
  <ion-button fill="outline">查看全部</ion-button>
</ion-list-header>

<!-- 全线条的列表头部 -->
<ion-list-header lines="full">
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 内嵌线条的列表头部 -->
<ion-list-header lines="inset">
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 列表中的列表头部 -->
<ion-list>
  <ion-list-header lines="inset">
    <ion-label>最近</ion-label>
    <ion-button>清除</ion-button>
  </ion-list-header>
  <ion-item lines="none">
    <ion-label color="primary">
      <h1>I got you babe</h1>
    </ion-label>
  </ion-item>
</ion-list>

<ion-list>
  <ion-list-header lines="inset">
    <ion-label>热门趋势</ion-label>
  </ion-list-header>
  <ion-item>
    <ion-label color="primary">
      <h1>harry styles</h1>
    </ion-label>
  </ion-item>
  <ion-item>
    <ion-label color="primary">
      <h1>christmas</h1>
    </ion-label>
  </ion-item>
  <ion-item lines="none">
    <ion-label color="primary">
      <h1>falling</h1>
    </ion-label>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认列表头部 -->
<ion-list-header>
  <ion-label>列表头部</ion-label>
</ion-list-header>

<!-- 带按钮的列表头部 -->
<ion-list-header>
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 带轮廓按钮的列表头部 -->
<ion-list-header>
  <ion-label>本周新内容</ion-label>
  <ion-button fill="outline">查看全部</ion-button>
</ion-list-header>

<!-- 全线条的列表头部 -->
<ion-list-header lines="full">
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 内嵌线条的列表头部 -->
<ion-list-header lines="inset">
  <ion-label>本周新内容</ion-label>
  <ion-button>查看全部</ion-button>
</ion-list-header>

<!-- 列表中的列表头部 -->
<ion-list>
  <ion-list-header lines="inset">
    <ion-label>最近</ion-label>
    <ion-button>清除</ion-button>
  </ion-list-header>
  <ion-item lines="none">
    <ion-label color="primary">
      <h1>I got you babe</h1>
    </ion-label>
  </ion-item>
</ion-list>

<ion-list>
  <ion-list-header lines="inset">
    <ion-label>热门趋势</ion-label>
  </ion-list-header>
  <ion-item>
    <ion-label color="primary">
      <h1>harry styles</h1>
    </ion-label>
  </ion-item>
  <ion-item>
    <ion-label color="primary">
      <h1>christmas</h1>
    </ion-label>
  </ion-item>
  <ion-item lines="none">
    <ion-label color="primary">
      <h1>falling</h1>
    </ion-label>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonButton, IonContent, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

export const ListHeaderExample: React.FC = () => (
  <IonContent>
    {/*-- 默认列表头部 --*/}
    <IonListHeader>
      <IonLabel>列表头部</IonLabel>
    </IonListHeader>

    {/*-- 带按钮的列表头部 --*/}
    <IonListHeader>
      <IonLabel>本周新内容</IonLabel>
      <IonButton>查看全部</IonButton>
    </IonListHeader>

    {/*-- 带轮廓按钮的列表头部 --*/}
    <IonListHeader>
      <IonLabel>本周新内容</IonLabel>
      <IonButton fill="outline">查看全部</IonButton>
    </IonListHeader>

    {/*-- 全线条的列表头部 --*/}
    <IonListHeader lines="full">
      <IonLabel>本周新内容</IonLabel>
      <IonButton>查看全部</IonButton>
    </IonListHeader>

    {/*-- 内嵌线条的列表头部 --*/}
    <IonListHeader lines="inset">
      <IonLabel>本周新内容</IonLabel>
      <IonButton>查看全部</IonButton>
    </IonListHeader>

    {/*-- 列表中的列表头部 --*/}
    <IonList>
      <IonListHeader lines="inset">
        <IonLabel>最近</IonLabel>
        <IonButton>清除</IonButton>
      </IonListHeader>
      <IonItem lines="none">
        <IonLabel color="primary">
          <h1>I got you babe</h1>
        </IonLabel>
      </IonItem>
    </IonList>

    <IonList>
      <IonListHeader lines="inset">
        <IonLabel>热门趋势</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel color="primary">
          <h1>harry styles</h1>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel color="primary">
          <h1>christmas</h1>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel color="primary">
          <h1>falling</h1>
        </IonLabel>
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
  tag: 'list-header-example',
  styleUrl: 'list-header-example.css',
})
export class ListHeaderExample {
  render() {
    return [
      // 默认列表头部
      <ion-list-header>
        <ion-label>列表头部</ion-label>
      </ion-list-header>,

      // 带按钮的列表头部
      <ion-list-header>
        <ion-label>本周新内容</ion-label>
        <ion-button>查看全部</ion-button>
      </ion-list-header>,

      // 带轮廓按钮的列表头部
      <ion-list-header>
        <ion-label>本周新内容</ion-label>
        <ion-button fill="outline">查看全部</ion-button>
      </ion-list-header>,

      // 全线条的列表头部
      <ion-list-header lines="full">
        <ion-label>本周新内容</ion-label>
        <ion-button>查看全部</ion-button>
      </ion-list-header>,

      // 内嵌线条的列表头部
      <ion-list-header lines="inset">
        <ion-label>本周新内容</ion-label>
        <ion-button>查看全部</ion-button>
      </ion-list-header>,

      // 列表中的列表头部
      <ion-list>
        <ion-list-header lines="inset">
          <ion-label>最近</ion-label>
          <ion-button>清除</ion-button>
        </ion-list-header>
        <ion-item lines="none">
          <ion-label color="primary">
            <h1>I got you babe</h1>
          </ion-label>
        </ion-item>
      </ion-list>,

      <ion-list>
        <ion-list-header lines="inset">
          <ion-label>热门趋势</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label color="primary">
            <h1>harry styles</h1>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label color="primary">
            <h1>christmas</h1>
          </ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="primary">
            <h1>falling</h1>
          </ion-label>
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
  <!-- 默认列表头部 -->
  <ion-list-header>
    <ion-label>列表头部</ion-label>
  </ion-list-header>

  <!-- 带按钮的列表头部 -->
  <ion-list-header>
    <ion-label>本周新内容</ion-label>
    <ion-button>查看全部</ion-button>
  </ion-list-header>

  <!-- 带轮廓按钮的列表头部 -->
  <ion-list-header>
    <ion-label>本周新内容</ion-label>
    <ion-button fill="outline">查看全部</ion-button>
  </ion-list-header>

  <!-- 全线条的列表头部 -->
  <ion-list-header lines="full">
    <ion-label>本周新内容</ion-label>
    <ion-button>查看全部</ion-button>
  </ion-list-header>

  <!-- 内嵌线条的列表头部 -->
  <ion-list-header lines="inset">
    <ion-label>本周新内容</ion-label>
    <ion-button>查看全部</ion-button>
  </ion-list-header>

  <!-- 列表中的列表头部 -->
  <ion-list>
    <ion-list-header lines="inset">
      <ion-label>最近</ion-label>
      <ion-button>清除</ion-button>
    </ion-list-header>
    <ion-item lines="none">
      <ion-label color="primary">
        <h1>I got you babe</h1>
      </ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header lines="inset">
      <ion-label>热门趋势</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label color="primary">
        <h1>harry styles</h1>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label color="primary">
        <h1>christmas</h1>
      </ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-label color="primary">
        <h1>falling</h1>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonListHeader },
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