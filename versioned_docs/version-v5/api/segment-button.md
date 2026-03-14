---
sidebar_label: 'ion-segment-按钮'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/segment-button/props.md';
import Events from '@ionic-internal/component-api/v5/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v5/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v5/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/segment-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/segment-button/slots.md';

# ion-segment-按钮

分段按钮是[分段](segment.md)内部的一组相关按钮。它们以水平行显示。通过将分段的`value`设置为分段按钮的`value`，可以默认选中某个分段按钮。一次只能选择一个分段按钮。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 带文本和点击监听器的分段按钮 -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button>
    <ion-label>朋友</ion-label>
  </ion-segment-button>
  <ion-segment-button>
    <ion-label>敌人</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 第一个选中且最后一个禁用的分段按钮 -->
<ion-segment value="paid">
  <ion-segment-button value="paid">
    <ion-label>付费</ion-label>
  </ion-segment-button>
  <ion-segment-button value="free">
    <ion-label>免费</ion-label>
  </ion-segment-button>
  <ion-segment-button disabled value="top">
    <ion-label>置顶</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 带值和图标的分段按钮 -->
<ion-segment>
  <ion-segment-button value="camera">
    <ion-icon name="camera"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="bookmark">
    <ion-icon name="bookmark"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 具有选中最后一个按钮的值 的分段 -->
<ion-segment value="shared">
  <ion-segment-button value="bookmarks">
    <ion-label>书签</ion-label>
  </ion-segment-button>
  <ion-segment-button value="reading">
    <ion-label>阅读列表</ion-label>
  </ion-segment-button>
  <ion-segment-button value="shared">
    <ion-label>共享链接</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 仅标签 -->
<ion-segment value="1">
  <ion-segment-button value="1">
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2">
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3">
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 仅图标 -->
<ion-segment value="heart">
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在上方 -->
<ion-segment value="2">
  <ion-segment-button value="1">
    <ion-label>项目一</ion-label>
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="2">
    <ion-label>项目二</ion-label>
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="3">
    <ion-label>项目三</ion-label>
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在下方 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-bottom">
    <ion-icon name="call"></ion-icon>
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2" layout="icon-bottom">
    <ion-icon name="heart"></ion-icon>
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-bottom">
    <ion-icon name="pin"></ion-icon>
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 图标在起始位置 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-start">
    <ion-label>项目一</ion-label>
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="2" layout="icon-start">
    <ion-label>项目二</ion-label>
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-start">
    <ion-label>项目三</ion-label>
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在结束位置 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-end">
    <ion-icon name="call"></ion-icon>
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2" disabled layout="icon-end">
    <ion-icon name="heart"></ion-icon>
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-end">
    <ion-icon name="pin"></ion-icon>
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'segment-button-example',
  templateUrl: 'segment-button-example.html',
  styleUrls: ['./segment-button-example.css'],
})
export class SegmentButtonExample {
  segmentChanged(ev: any) {
    console.log('分段已更改', ev);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 带文本的分段按钮 -->
<ion-segment>
  <ion-segment-button>
    <ion-label>朋友</ion-label>
  </ion-segment-button>
  <ion-segment-button>
    <ion-label>敌人</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 第一个选中且最后一个禁用的分段按钮 -->
<ion-segment value="paid">
  <ion-segment-button value="paid">
    <ion-label>付费</ion-label>
  </ion-segment-button>
  <ion-segment-button value="free">
    <ion-label>免费</ion-label>
  </ion-segment-button>
  <ion-segment-button disabled value="top">
    <ion-label>置顶</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 带值和图标的分段按钮 -->
<ion-segment>
  <ion-segment-button value="camera">
    <ion-icon name="camera"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="bookmark">
    <ion-icon name="bookmark"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 具有选中最后一个按钮的值 的分段 -->
<ion-segment value="shared">
  <ion-segment-button value="bookmarks">
    <ion-label>书签</ion-label>
  </ion-segment-button>
  <ion-segment-button value="reading">
    <ion-label>阅读列表</ion-label>
  </ion-segment-button>
  <ion-segment-button value="shared">
    <ion-label>共享链接</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 仅标签 -->
<ion-segment value="1">
  <ion-segment-button value="1">
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2">
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3">
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 仅图标 -->
<ion-segment value="heart">
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在上方 -->
<ion-segment value="2">
  <ion-segment-button value="1">
    <ion-label>项目一</ion-label>
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="2">
    <ion-label>项目二</ion-label>
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="3">
    <ion-label>项目三</ion-label>
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在下方 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-bottom">
    <ion-icon name="call"></ion-icon>
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2" layout="icon-bottom">
    <ion-icon name="heart"></ion-icon>
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-bottom">
    <ion-icon name="pin"></ion-icon>
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 图标在起始位置 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-start">
    <ion-label>项目一</ion-label>
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="2" layout="icon-start">
    <ion-label>项目二</ion-label>
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-start">
    <ion-label>项目三</ion-label>
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 图标在结束位置 -->
<ion-segment value="1">
  <ion-segment-button value="1" layout="icon-end">
    <ion-icon name="call"></ion-icon>
    <ion-label>项目一</ion-label>
  </ion-segment-button>
  <ion-segment-button value="2" disabled layout="icon-end">
    <ion-icon name="heart"></ion-icon>
    <ion-label>项目二</ion-label>
  </ion-segment-button>
  <ion-segment-button value="3" layout="icon-end">
    <ion-icon name="pin"></ion-icon>
    <ion-label>项目三</ion-label>
  </ion-segment-button>
</ion-segment>
```

```javascript
// 监听分段的 ionChange 事件
const segment = document.querySelector('ion-segment');
segment.addEventListener('ionChange', (ev) => {
  console.log('分段已更改', ev);
});
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { call, camera, bookmark, heart, pin } from 'ionicons/icons';

export const SegmentButtonExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>分段按钮</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- 带文本和点击监听器的分段按钮 --*/}
        <IonSegment onIonChange={(e) => console.log(`${e.detail.value} 分段已选中`)}>
          <IonSegmentButton value="Friends">
            <IonLabel>朋友</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Enemies">
            <IonLabel>敌人</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 第一个选中且最后一个禁用的分段按钮 --*/}
        <IonSegment value="paid">
          <IonSegmentButton value="paid">
            <IonLabel>付费</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="free">
            <IonLabel>免费</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton disabled value="top">
            <IonLabel>置顶</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 带值和图标的分段按钮 --*/}
        <IonSegment>
          <IonSegmentButton value="camera">
            <IonIcon icon={camera} />
          </IonSegmentButton>
          <IonSegmentButton value="bookmark">
            <IonIcon icon={bookmark} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- 具有选中最后一个按钮的值 的分段 --*/}
        <IonSegment value="shared">
          <IonSegmentButton value="bookmarks">
            <IonLabel>书签</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="reading">
            <IonLabel>阅读列表</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="shared">
            <IonLabel>共享链接</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 仅标签 --*/}
        <IonSegment value="1">
          <IonSegmentButton value="1">
            <IonLabel>项目一</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>项目二</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3">
            <IonLabel>项目三</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 仅图标 --*/}
        <IonSegment value="heart">
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- 图标在上方 --*/}
        <IonSegment value="2">
          <IonSegmentButton value="1">
            <IonLabel>项目一</IonLabel>
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>项目二</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="3">
            <IonLabel>项目三</IonLabel>
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- 图标在下方 --*/}
        <IonSegment value="1">
          <IonSegmentButton value="1" layout="icon-bottom">
            <IonIcon icon={call} />
            <IonLabel>项目一</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2" layout="icon-bottom">
            <IonIcon icon={heart} />
            <IonLabel>项目二</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3" layout="icon-bottom">
            <IonIcon icon={pin} />
            <IonLabel>项目三</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 图标在起始位置 --*/}
        <IonSegment value="1">
          <IonSegmentButton value="1" layout="icon-start">
            <IonLabel>项目一</IonLabel>
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="2" layout="icon-start">
            <IonLabel>项目二</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="3" layout="icon-start">
            <IonLabel>项目三</IonLabel>
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- 图标在结束位置 --*/}
        <IonSegment value="1">
          <IonSegmentButton value="1" layout="icon-end">
            <IonIcon icon={call} />
            <IonLabel>项目一</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2" disabled layout="icon-end">
            <IonIcon icon={heart} />
            <IonLabel>项目二</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3" layout="icon-end">
            <IonIcon icon={pin} />
            <IonLabel>项目三</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'segment-button-example',
  styleUrl: 'segment-button-example.css',
})
export class SegmentButtonExample {
  segmentChanged(ev: any) {
    console.log('分段已更改', ev);
  }

  render() {
    return [
      // 带文本和点击监听器的分段按钮
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button>
          <ion-label>朋友</ion-label>
        </ion-segment-button>
        <ion-segment-button>
          <ion-label>敌人</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 第一个选中且最后一个禁用的分段按钮
      <ion-segment value="paid">
        <ion-segment-button value="paid">
          <ion-label>付费</ion-label>
        </ion-segment-button>
        <ion-segment-button value="free">
          <ion-label>免费</ion-label>
        </ion-segment-button>
        <ion-segment-button disabled value="top">
          <ion-label>置顶</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 带值和图标的分段按钮
      <ion-segment>
        <ion-segment-button value="camera">
          <ion-icon name="camera"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="bookmark">
          <ion-icon name="bookmark"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // 具有选中最后一个按钮的值 的分段
      <ion-segment value="shared">
        <ion-segment-button value="bookmarks">
          <ion-label>书签</ion-label>
        </ion-segment-button>
        <ion-segment-button value="reading">
          <ion-label>阅读列表</ion-label>
        </ion-segment-button>
        <ion-segment-button value="shared">
          <ion-label>共享链接</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 仅标签
      <ion-segment value="1">
        <ion-segment-button value="1">
          <ion-label>项目一</ion-label>
        </ion-segment-button>
        <ion-segment-button value="2">
          <ion-label>项目二</ion-label>
        </ion-segment-button>
        <ion-segment-button value="3">
          <ion-label>项目三</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 仅图标
      <ion-segment value="heart">
        <ion-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // 图标在上方
      <ion-segment value="2">
        <ion-segment-button value="1">
          <ion-label>项目一</ion-label>
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="2">
          <ion-label>项目二</ion-label>
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="3">
          <ion-label>项目三</ion-label>
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // 图标在下方
      <ion-segment value="1">
        <ion-segment-button value="1" layout="icon-bottom">
          <ion-icon name="call"></ion-icon>
          <ion-label>项目一</ion-label>
        </ion-segment-button>
        <ion-segment-button value="2" layout="icon-bottom">
          <ion-icon name="heart"></ion-icon>
          <ion-label>项目二</ion-label>
        </ion-segment-button>
        <ion-segment-button value="3" layout="icon-bottom">
          <ion-icon name="pin"></ion-icon>
          <ion-label>项目三</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 图标在起始位置
      <ion-segment value="1">
        <ion-segment-button value="1" layout="icon-start">
          <ion-label>项目一</ion-label>
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="2" layout="icon-start">
          <ion-label>项目二</ion-label>
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="3" layout="icon-start">
          <ion-label>项目三</ion-label>
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // 图标在结束位置
      <ion-segment value="1">
        <ion-segment-button value="1" layout="icon-end">
          <ion-icon name="call"></ion-icon>
          <ion-label>项目一</ion-label>
        </ion-segment-button>
        <ion-segment-button value="2" disabled layout="icon-end">
          <ion-icon name="heart"></ion-icon>
          <ion-label>项目二</ion-label>
        </ion-segment-button>
        <ion-segment-button value="3" layout="icon-end">
          <ion-icon name="pin"></ion-icon>
          <ion-label>项目三</ion-label>
        </ion-segment-button>
      </ion-segment>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 带文本和点击监听器的分段按钮 -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button>
      <ion-label>朋友</ion-label>
    </ion-segment-button>
    <ion-segment-button>
      <ion-label>敌人</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 第一个选中且最后一个禁用的分段按钮 -->
  <ion-segment value="paid">
    <ion-segment-button value="paid">
      <ion-label>付费</ion-label>
    </ion-segment-button>
    <ion-segment-button value="free">
      <ion-label>免费</ion-label>
    </ion-segment-button>
    <ion-segment-button disabled value="top">
      <ion-label>置顶</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 带值和图标的分段按钮 -->
  <ion-segment>
    <ion-segment-button value="camera">
      <ion-icon :icon="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon :icon="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- 具有选中最后一个按钮的值 的分段 -->
  <ion-segment value="shared">
    <ion-segment-button value="bookmarks">
      <ion-label>书签</ion-label>
    </ion-segment-button>
    <ion-segment-button value="reading">
      <ion-label>阅读列表</ion-label>
    </ion-segment-button>
    <ion-segment-button value="shared">
      <ion-label>共享链接</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 仅标签 -->
  <ion-segment value="1">
    <ion-segment-button value="1">
      <ion-label>项目一</ion-label>
    </ion-segment-button>
    <ion-segment-button value="2">
      <ion-label>项目二</ion-label>
    </ion-segment-button>
    <ion-segment-button value="3">
      <ion-label>项目三</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 仅图标 -->
  <ion-segment value="heart">
    <ion-segment-button value="call">
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- 图标在上方 -->
  <ion-segment value="2">
    <ion-segment-button value="1">
      <ion-label>项目一</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="2">
      <ion-label>项目二</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="3">
      <ion-label>项目三</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- 图标在下方 -->
  <ion-segment value="1">
    <ion-segment-button value="1" layout="icon-bottom">
      <ion-icon :icon="call"></ion-icon>
      <ion-label>项目一</ion-label>
    </ion-segment-button>
    <ion-segment-button value="2" layout="icon-bottom">
      <ion-icon :icon="heart"></ion-icon>
      <ion-label>项目二</ion-label>
    </ion-segment-button>
    <ion-segment-button value="3" layout="icon-bottom">
      <ion-icon :icon="pin"></ion-icon>
      <ion-label>项目三</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 图标在起始位置 -->
  <ion-segment value="1">
    <ion-segment-button value="1" layout="icon-start">
      <ion-label>项目一</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="2" layout="icon-start">
      <ion-label>项目二</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="3" layout="icon-start">
      <ion-label>项目三</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- 图标在结束位置 -->
  <ion-segment value="1">
    <ion-segment-button value="1" layout="icon-end">
      <ion-icon :icon="call"></ion-icon>
      <ion-label>项目一</ion-label>
    </ion-segment-button>
    <ion-segment-button value="2" disabled layout="icon-end">
      <ion-icon :icon="heart"></ion-icon>
      <ion-label>项目二</ion-label>
    </ion-segment-button>
    <ion-segment-button value="3" layout="icon-end">
      <ion-icon :icon="pin"></ion-icon>
      <ion-label>项目三</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
  import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
  import { bookmark, call, camera, heart, pin } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonLabel, IonSegment, IonSegmentButton },
    methods: {
      segmentChanged(ev: CustomEvent) {
        console.log('分段已更改', ev);
      }
    },
    setup() {
      return {
        bookmark,
        call,
        camera,
        heart,
        pin
      }
    }
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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />