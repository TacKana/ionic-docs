---
sidebar_label: 'ion-thumbnail'
demoUrl: '/docs/demos/api/thumbnail/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/thumbnail/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v5/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v5/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v5/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/thumbnail/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/thumbnail/slots.md';

# ion-thumbnail

缩略图（thumbnail）是一种方形组件，通常用于包裹图片或图标。它们可以方便地展示一组较大的图片，或提供全尺寸图片的预览。

缩略图可以单独使用，也可以放在任何元素内部。如果放置在 `ion-item` 内，缩略图会调整尺寸以适应父组件。若要将缩略图定位在项目的左侧或右侧，请分别将 `slot` 属性设置为 `start` 或 `end`。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-thumbnail>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-thumbnail>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>
  <ion-label>项目缩略图</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-thumbnail>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-thumbnail>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>
  <ion-label>项目缩略图</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonThumbnail, IonItem, IonLabel, IonContent } from '@ionic/react';

export const ThumbnailExample: React.FC = () => (
  <IonContent>
    <IonThumbnail>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonThumbnail>

    <IonItem>
      <IonThumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonThumbnail>
      <IonLabel>项目缩略图</IonLabel>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'thumbnail-example',
  styleUrl: 'thumbnail-example.css',
})
export class ThumbnailExample {
  render() {
    return [
      <ion-thumbnail>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </ion-thumbnail>,

      <ion-item>
        <ion-thumbnail slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-thumbnail>
        <ion-label>项目缩略图</ion-label>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-thumbnail>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>

  <ion-item>
    <ion-thumbnail slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-thumbnail>
    <ion-label>项目缩略图</ion-label>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonThumbnail },
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