---
sidebar_label: 'ion-segment'
demoUrl: '/docs/demos/api/segment/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/segment/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/segment/props.md';
import Events from '@ionic-internal/component-api/v5/segment/events.md';
import Methods from '@ionic-internal/component-api/v5/segment/methods.md';
import Parts from '@ionic-internal/component-api/v5/segment/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/segment/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/segment/slots.md';

# ion-segment

分段选择器在一行中显示一组相关的按钮，有时也被称为分段控件。它们可以显示在工具栏中或主内容中。

其功能类似于选项卡，选择一个会取消选择所有其他选项。分段选择器用于在内容中切换不同视图。当点击控件需要在页面间导航时，应使用选项卡而不是分段选择器。

## 可滚动分段选择器

分段选择器默认不可滚动。每个分段按钮具有固定宽度，该宽度由分段按钮数量除以屏幕宽度决定。这确保了每个分段按钮无需滚动即可显示在屏幕上。因此，一些标签较长的分段按钮可能会被截断。为避免这种情况，我们建议使用较短的标签，或者通过将 `scrollable` 属性设置为 `true` 来切换到可滚动的分段选择器。这将使分段选择器水平滚动，但允许每个分段按钮具有可变宽度。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认分段选择器 -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="friends">
    <ion-label>朋友</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>敌人</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 禁用状态的分段选择器 -->
<ion-segment (ionChange)="segmentChanged($event)" disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>晴朗</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>雨天</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 带锚点的分段选择器 -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="dogs">
    <ion-label>狗</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>猫</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 可滚动的分段选择器 -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 次要颜色的分段选择器 -->
<ion-segment (ionChange)="segmentChanged($event)" color="secondary">
  <ion-segment-button value="standard">
    <ion-label>标准</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>混合</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>卫星</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 在工具栏中的分段选择器 -->
<ion-toolbar>
  <ion-segment (ionChange)="segmentChanged($event)">
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- 带默认选中的分段选择器 -->
<ion-segment (ionChange)="segmentChanged($event)" value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('分段选择器已更改', ev);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认分段选择器 -->
<ion-segment>
  <ion-segment-button value="friends">
    <ion-label>朋友</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>敌人</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 禁用状态的分段选择器 -->
<ion-segment disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>晴朗</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>雨天</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 带锚点的分段选择器 -->
<ion-segment>
  <ion-segment-button value="dogs">
    <ion-label>狗</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>猫</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 可滚动的分段选择器 -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- 次要颜色的分段选择器 -->
<ion-segment color="secondary">
  <ion-segment-button value="standard">
    <ion-label>标准</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>混合</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>卫星</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- 在工具栏中的分段选择器 -->
<ion-toolbar>
  <ion-segment>
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- 带默认选中的分段选择器 -->
<ion-segment value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```javascript
// 监听所有分段选择器的 ionChange 事件
const segments = document.querySelectorAll('ion-segment');
for (let i = 0; i < segments.length; i++) {
  segments[i].addEventListener('ionChange', (ev) => {
    console.log('分段选择器已更改', ev);
  });
}
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
import { call, home, heart, pin, star, globe, basket, camera, bookmark } from 'ionicons/icons';

export const SegmentExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>分段选择器示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- 默认分段选择器 --*/}
        <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>朋友</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>敌人</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 禁用状态的分段选择器 --*/}
        <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>晴朗</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>雨天</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 带锚点的分段选择器 --*/}
        <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>狗</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>猫</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 可滚动的分段选择器 --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- 次要颜色的分段选择器 --*/}
        <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>标准</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>混合</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>卫星</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- 在工具栏中的分段选择器 --*/}
        <IonToolbar>
          <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- 带默认选中的分段选择器 --*/}
        <IonSegment onIonChange={(e) => console.log('选中的分段', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
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
  tag: 'segment-example',
  styleUrl: 'segment-example.css',
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('分段选择器已更改', ev);
  }

  render() {
    return [
      // 默认分段选择器
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="friends">
          <ion-label>朋友</ion-label>
        </ion-segment-button>
        <ion-segment-button value="enemies">
          <ion-label>敌人</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 禁用状态的分段选择器
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} disabled={true} value="sunny">
        <ion-segment-button value="sunny">
          <ion-label>晴朗</ion-label>
        </ion-segment-button>
        <ion-segment-button value="rainy">
          <ion-label>雨天</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 带锚点的分段选择器
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="dogs">
          <ion-label>狗</ion-label>
        </ion-segment-button>
        <ion-segment-button value="cats">
          <ion-label>猫</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 可滚动的分段选择器
      <ion-segment scrollable value="heart">
        <ion-segment-button value="home">
          <ion-icon name="home"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="star">
          <ion-icon name="star"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="globe">
          <ion-icon name="globe"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="basket">
          <ion-icon name="basket"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // 次要颜色的分段选择器
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} color="secondary">
        <ion-segment-button value="standard">
          <ion-label>标准</ion-label>
        </ion-segment-button>
        <ion-segment-button value="hybrid">
          <ion-label>混合</ion-label>
        </ion-segment-button>
        <ion-segment-button value="sat">
          <ion-label>卫星</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // 在工具栏中的分段选择器
      <ion-toolbar>
        <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
          <ion-segment-button value="camera">
            <ion-icon name="camera"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="bookmark">
            <ion-icon name="bookmark"></ion-icon>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>,

      // 带默认选中的分段选择器
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} value="javascript">
        <ion-segment-button value="python">
          <ion-label>Python</ion-label>
        </ion-segment-button>
        <ion-segment-button value="javascript">
          <ion-label>Javascript</ion-label>
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
  <!-- 默认分段选择器 -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="friends">
      <ion-label>朋友</ion-label>
    </ion-segment-button>
    <ion-segment-button value="enemies">
      <ion-label>敌人</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 禁用状态的分段选择器 -->
  <ion-segment @ionChange="segmentChanged($event)" disabled value="sunny">
    <ion-segment-button value="sunny">
      <ion-label>晴朗</ion-label>
    </ion-segment-button>
    <ion-segment-button value="rainy">
      <ion-label>雨天</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 带锚点的分段选择器 -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="dogs">
      <ion-label>狗</ion-label>
    </ion-segment-button>
    <ion-segment-button value="cats">
      <ion-label>猫</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 可滚动的分段选择器 -->
  <ion-segment scrollable value="heart">
    <ion-segment-button value="home">
      <ion-icon name="home"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon name="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon name="pin"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="star">
      <ion-icon name="star"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="call">
      <ion-icon name="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="globe">
      <ion-icon name="globe"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="basket">
      <ion-icon name="basket"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- 次要颜色的分段选择器 -->
  <ion-segment @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>标准</ion-label>
    </ion-segment-button>
    <ion-segment-button value="hybrid">
      <ion-label>混合</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>卫星</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- 在工具栏中的分段选择器 -->
  <ion-toolbar>
    <ion-segment @ionChange="segmentChanged($event)">
      <ion-segment-button value="camera">
        <ion-icon name="camera"></ion-icon>
      </ion-segment-button>
      <ion-segment-button value="bookmark">
        <ion-icon name="bookmark"></ion-icon>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

  <!-- 带默认选中的分段选择器 -->
  <ion-segment @ionChange="segmentChanged($event)" value="javascript">
    <ion-segment-button value="python">
      <ion-label>Python</ion-label>
    </ion-segment-button>
    <ion-segment-button value="javascript">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
  import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSegment, IonSegmentButton, IonToolbar },
    methods: {
      segmentChanged(ev: CustomEvent) {
        console.log('分段选择器已更改', ev);
      },
    },
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