---
title: 'ion-chip: Ionic 框架应用中的名称、文本、图标和头像组件'
description: 'ion-chip 用于在小块区域中表示复杂实体，例如联系人信息。一个芯片可以包含多种不同元素，如姓名、头像、文本和图标。'
sidebar_label: 'ion-chip'
demoUrl: '/docs/demos/api/chip/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/chip/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/chip/props.md';
import Events from '@ionic-internal/component-api/v5/chip/events.md';
import Methods from '@ionic-internal/component-api/v5/chip/methods.md';
import Parts from '@ionic-internal/component-api/v5/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/chip/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/chip/slots.md';

# ion-chip

芯片用于在小块区域中表示复杂实体，例如联系人信息。一个芯片可以包含多种不同元素，如头像、文本和图标。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-chip>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">次级标签</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">次级背景深色标签</ion-label>
</ion-chip>

<ion-chip [disabled]="true">
  <ion-label>禁用芯片</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-label>按钮芯片</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>图标芯片</ion-label>
  <ion-icon name="close"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>头像芯片</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-chip>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">次级标签</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">次级背景深色标签</ion-label>
</ion-chip>

<ion-chip disabled="true">
  <ion-label>禁用芯片</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>默认</ion-label>
</ion-chip>

<ion-chip>
  <ion-label>按钮芯片</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>图标芯片</ion-label>
  <ion-icon name="close"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>头像芯片</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>
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
  IonChip,
  IonLabel,
  IonIcon,
  IonAvatar,
} from '@ionic/react';
import { pin, heart, closeCircle, close } from 'ionicons/icons';

export const ChipExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ChipExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonChip>
          <IonLabel>默认</IonLabel>
        </IonChip>

        <IonChip>
          <IonLabel color="secondary">次级标签</IonLabel>
        </IonChip>

        <IonChip color="secondary">
          <IonLabel color="dark">次级背景深色标签</IonLabel>
        </IonChip>

        <IonChip disabled={true}>
          <IonLabel>禁用芯片</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={pin} />
          <IonLabel>默认</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={heart} color="dark" />
          <IonLabel>默认</IonLabel>
        </IonChip>

        <IonChip>
          <IonLabel>按钮芯片</IonLabel>
          <IonIcon icon={closeCircle} />
        </IonChip>

        <IonChip>
          <IonIcon icon={pin} color="primary" />
          <IonLabel>图标芯片</IonLabel>
          <IonIcon icon={close} />
        </IonChip>

        <IonChip>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>头像芯片</IonLabel>
          <IonIcon icon={closeCircle} />
        </IonChip>
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
  tag: 'chip-example',
  styleUrl: 'chip-example.css',
})
export class ChipExample {
  render() {
    return [
      <ion-chip>
        <ion-label>默认</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-label color="secondary">次级标签</ion-label>
      </ion-chip>,

      <ion-chip color="secondary">
        <ion-label color="dark">次级背景深色标签</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="pin"></ion-icon>
        <ion-label>默认</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="heart" color="dark"></ion-icon>
        <ion-label>默认</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-label>按钮芯片</ion-label>
        <ion-icon name="close-circle"></ion-icon>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="pin" color="primary"></ion-icon>
        <ion-label>图标芯片</ion-label>
        <ion-icon name="close"></ion-icon>
      </ion-chip>,

      <ion-chip>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-avatar>
        <ion-label>头像芯片</ion-label>
        <ion-icon name="close-circle"></ion-icon>
      </ion-chip>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-chip>
    <ion-label>默认</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-label color="secondary">次级标签</ion-label>
  </ion-chip>

  <ion-chip color="secondary">
    <ion-label color="dark">次级背景深色标签</ion-label>
  </ion-chip>

  <ion-chip :disabled="true">
    <ion-label>禁用芯片</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin"></ion-icon>
    <ion-label>默认</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="heart" color="dark"></ion-icon>
    <ion-label>默认</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-label>按钮芯片</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <ion-label>图标芯片</ion-label>
    <ion-icon :icon="close"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>头像芯片</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>
</template>

<script>
  import { IonAvatar, IonChip, IonIcon, IonLabel } from '@ionic/vue';
  import { close, closeCircle, heart, pin } from 'ionicons/icons';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonChip, IonIcon, IonLabel },
    setup() {
      return { close, closeCircle, heart, pin };
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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />