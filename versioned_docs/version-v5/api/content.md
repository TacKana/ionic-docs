---
sidebar_label: 'ion-content'
demoUrl: '/docs/demos/api/content/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/content/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/content/props.md';
import Events from '@ionic-internal/component-api/v5/content/events.md';
import Methods from '@ionic-internal/component-api/v5/content/methods.md';
import Parts from '@ionic-internal/component-api/v5/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/content/slots.md';

# ion-content

内容组件提供了一个易于使用的内容区域，并附带一些控制可滚动区域的有用方法。在单个视图中，通常只应放置一个内容组件。

与许多其他 Ionic 组件一样，可以通过 [CSS 工具类](../layout/css-utilities.md) 提供的全局样式来自定义内容组件的内边距、外边距等，也可以使用 CSS 和可用的 [CSS 自定义属性](#css-custom-properties) 进行单独样式设置。

## 固定内容

若要将元素置于可滚动区域之外，可以在元素上添加 `slot="fixed"`。这会将元素绝对定位在左上角。要将元素放置在其他位置，可以使用 [top、right、bottom 和 left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) 样式进行定位。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content
  [scrollEvents]="true"
  (ionScrollStart)="logScrollStart()"
  (ionScroll)="logScrolling($event)"
  (ionScrollEnd)="logScrollEnd()"
>
  <h1>主要内容</h1>

  <div slot="fixed">
    <h1>固定内容</h1>
  </div>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <h1>主要内容</h1>

  <div slot="fixed">
    <h1>固定内容</h1>
  </div>
</ion-content>
```

```javascript
var content = document.querySelector('ion-content');
content.scrollEvents = true;
content.addEventListener('ionScrollStart', () => console.log('滚动开始'));
content.addEventListener('ionScroll', (ev) => console.log('滚动中', ev.detail));
content.addEventListener('ionScrollEnd', () => console.log('滚动结束'));
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent } from '@ionic/react';

const ContentExample: React.FC = () => (
  <IonContent scrollEvents={true} onIonScrollStart={() => {}} onIonScroll={() => {}} onIonScrollEnd={() => {}}>
    <h1>主要内容</h1>

    <div slot="fixed">
      <h1>固定内容</h1>
    </div>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'content-example',
  styleUrl: 'content-example.css',
})
export class ContentExample {
  logScrollStart() {
    console.log('滚动开始');
  }

  logScrolling(ev) {
    console.log('滚动中', ev);
  }

  logScrollEnd() {
    console.log('滚动结束');
  }

  render() {
    return [
      <ion-content
        scrollEvents={true}
        onIonScrollStart={() => this.logScrollStart()}
        onIonScroll={(ev) => this.logScrolling(ev)}
        onIonScrollEnd={() => this.logScrollEnd()}
      >
        <h1>主要内容</h1>

        <div slot="fixed">
          <h1>固定内容</h1>
        </div>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content
    :scroll-events="true"
    @ionScrollStart="logScrollStart()"
    @ionScroll="logScrolling($event)"
    @ionScrollEnd="logScrollEnd()"
  >
    <h1>主要内容</h1>

    <div slot="fixed">
      <h1>固定内容</h1>
    </div>
  </ion-content>
</template>

<script>
  import { IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent },
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