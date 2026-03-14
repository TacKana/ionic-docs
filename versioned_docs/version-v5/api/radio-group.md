---
sidebar_label: 'ion-radio-group'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/radio-group/props.md';
import Events from '@ionic-internal/component-api/v5/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v5/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v5/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/radio-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/radio-group/slots.md';

# ion-radio-group

单选按钮组（radio group）是一组[单选按钮](radio.md)的集合。它允许用户从一组选项中最多选择一个。当选中属于同一个单选按钮组中的某个按钮时，之前在该组内被选中的按钮会自动取消选中。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-radio-group>
    <ion-list-header>
      <ion-label> 汽车制造商 </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Cord</ion-label>
      <ion-radio value="cord"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Duesenberg</ion-label>
      <ion-radio value="duesenberg"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Hudson</ion-label>
      <ion-radio value="hudson"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Packard</ion-label>
      <ion-radio value="packard"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Studebaker</ion-label>
      <ion-radio value="studebaker"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-list>
  <ion-radio-group>
    <ion-list-header>
      <ion-label> 汽车制造商 </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Cord</ion-label>
      <ion-radio value="cord"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Duesenberg</ion-label>
      <ion-radio value="duesenberg"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Hudson</ion-label>
      <ion-radio value="hudson"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Packard</ion-label>
      <ion-radio value="packard"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Studebaker</ion-label>
      <ion-radio value="studebaker"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonList, IonRadioGroup, IonListHeader, IonLabel, IonRadio, IonItem, IonContent } from '@ionic/react';

export const RadioGroupExample: React.FC = () => (
  <IonContent>
    <IonList>
      <IonRadioGroup>
        <IonListHeader>
          <IonLabel>汽车制造商</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Cord</IonLabel>
          <IonRadio value="cord" />
        </IonItem>

        <IonItem>
          <IonLabel>Duesenberg</IonLabel>
          <IonRadio value="duesenberg" />
        </IonItem>

        <IonItem>
          <IonLabel>Hudson</IonLabel>
          <IonRadio value="hudson" />
        </IonItem>

        <IonItem>
          <IonLabel>Packard</IonLabel>
          <IonRadio value="packard" />
        </IonItem>

        <IonItem>
          <IonLabel>Studebaker</IonLabel>
          <IonRadio value="studebaker" />
        </IonItem>
      </IonRadioGroup>
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'radio-group-example',
  styleUrl: 'radio-group-example.css',
})
export class RadioGroupExample {
  render() {
    return [
      <ion-list>
        <ion-radio-group>
          <ion-list-header>
            <ion-label>汽车制造商</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Cord</ion-label>
            <ion-radio value="cord"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Duesenberg</ion-label>
            <ion-radio value="duesenberg"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Hudson</ion-label>
            <ion-radio value="hudson"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Packard</ion-label>
            <ion-radio value="packard"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Studebaker</ion-label>
            <ion-radio value="studebaker"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-list>
    <ion-radio-group>
      <ion-list-header>
        <ion-label> 汽车制造商 </ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Cord</ion-label>
        <ion-radio value="cord"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Duesenberg</ion-label>
        <ion-radio value="duesenberg"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Hudson</ion-label>
        <ion-radio value="hudson"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Packard</ion-label>
        <ion-radio value="packard"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Studebaker</ion-label>
        <ion-radio value="studebaker"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonRadio,
      IonRadioGroup,
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