---
title: 'Range Slider | ion-range: Slider Knob Controls with Labels'
description: 'ion-range 让您可以通过移动滑块从数值范围中进行选择。它支持双滑块模式，但默认使用单个滑块控制数值，标签可以放置在任意一侧。'
sidebar_label: 'ion-range'
demoUrl: '/docs/demos/api/range/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/range/props.md';
import Events from '@ionic-internal/component-api/v5/range/events.md';
import Methods from '@ionic-internal/component-api/v5/range/methods.md';
import Parts from '@ionic-internal/component-api/v5/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/range/slots.md';

# ion-range

Range 滑块（Slider）组件让用户可以通过移动滑块旋钮从数值范围中进行选择。它支持双旋钮模式，但默认情况下单旋钮控制滑块的值。

## 滑块标签

通过为元素添加 `slot="start"` 或 `slot="end"` 属性，可以将标签放置在滑块的任意一侧。该元素不一定是 `ion-label`，可以添加到任意元素上以将其置于滑块的左侧或右侧。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonIcon,
  IonItemDivider,
} from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';

export const RangeExamples: React.FC = () => {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonRange 示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>默认</IonItemDivider>
          <IonItem>
            <IonRange pin={true} value={value} onIonChange={(e) => setValue(e.detail.value as number)} />
          </IonItem>
          <IonItem>
            <IonLabel>值: {value}</IonLabel>
          </IonItem>

          <IonItemDivider>最小值与最大值</IonItemDivider>
          <IonItem>
            <IonRange min={-200} max={200} color="secondary">
              <IonLabel slot="start">-200</IonLabel>
              <IonLabel slot="end">200</IonLabel>
            </IonRange>
          </IonItem>

          <IonItemDivider>图标</IonItemDivider>
          <IonItem>
            <IonRange min={20} max={80} step={2}>
              <IonIcon size="small" slot="start" icon={sunny} />
              <IonIcon slot="end" icon={sunny} />
            </IonRange>
          </ion-item>

          <IonItemDivider>带吸附点与刻度</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
          </IonItem>

          <IonItemDivider>带吸附点但无刻度</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary" />
          </IonItem>

          <IonItemDivider>双旋钮</IonItemDivider>
          <IonItem>
            <IonRange
              dualKnobs={true}
              min={0}
              max={60}
              step={3}
              snaps={true}
              onIonChange={(e) => setRangeValue(e.detail.value as any)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              值: 下限: {rangeValue.lower} 上限: {rangeValue.upper}
            </IonLabel>
          </IonItem>
        </IonList>
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
  tag: 'range-example',
  styleUrl: 'range-example.css',
})
export class RangeExample {
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-range color="danger" pin={true}></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={-200} max={200} color="secondary">
            <ion-label slot="start">-200</ion-label>
            <ion-label slot="end">200</ion-label>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={20} max={80} step={2}>
            <ion-icon size="small" slot="start" name="sunny"></ion-icon>
            <ion-icon slot="end" name="sunny"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range dualKnobs={true} min={21} max={72} step={3} snaps={true}></ion-range>
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
  <ion-list>
    <ion-item>
      <ion-range color="danger" pin="true"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="-200" max="200" color="secondary">
        <ion-label slot="start">-200</ion-label>
        <ion-label slot="end">200</ion-label>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="20" max="80" step="2">
        <ion-icon size="small" slot="start" name="sunny"></ion-icon>
        <ion-icon slot="end" name="sunny"></ion-icon>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range ref="rangeDualKnobs" dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonRange },
    mounted() {
      // 为双旋钮 ion-range 设置初始值
      this.$refs.rangeDualKnobs.value = { lower: 24, upper: 42 };
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