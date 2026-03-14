---
sidebar_label: 'ion-reorder'
demoUrl: '/docs/demos/api/reorder/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/reorder/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/reorder/props.md';
import Events from '@ionic-internal/component-api/v5/reorder/events.md';
import Methods from '@ionic-internal/component-api/v5/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v5/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/reorder/slots.md';

# ion-reorder

Reorder（重排）是一个组件，允许拖拽项目组中的某一项来改变其在组内的顺序。它必须在 `ion-reorder-group` 组件内使用，以提供可视化的拖放界面。

`ion-reorder` 是用于在 `ion-reorder-group` 内部拖放项目的锚点。关于如何完成重排操作，请参阅 [Reorder Group](reorder-group.md) 获取更多信息。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认情况下，重排手势是禁用的，需要启用它才能拖放项目 -->
<ion-reorder-group disabled="false">
  <!-- 默认的重排图标，项目右对齐 -->
  <ion-item>
    <ion-label> 项目 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- 默认的重排图标，项目左对齐 -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 4 </ion-label>
  </ion-item>

  <!-- 自定义重排图标，项目右对齐 -->
  <ion-item>
    <ion-label> 项目 5 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 6 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- 项目包裹在 reorder 内，整个项目都可以被拖拽 -->
  <ion-reorder>
    <ion-item>
      <ion-label> 项目 7 </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label> 项目 8 </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认情况下，重排手势是禁用的，需要启用它才能拖放项目 -->
<ion-reorder-group disabled="false">
  <!-- 默认的重排图标，项目右对齐 -->
  <ion-item>
    <ion-label> 项目 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- 默认的重排图标，项目左对齐 -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 4 </ion-label>
  </ion-item>

  <!-- 自定义重排图标，项目右对齐 -->
  <ion-item>
    <ion-label> 项目 5 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 6 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- 项目包裹在 reorder 内，整个项目都可以被拖拽 -->
  <ion-reorder>
    <ion-item>
      <ion-label> 项目 7 </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label> 项目 8 </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent } from '@ionic/react';
import { pizza } from 'ionicons/icons';

export const ReorderExample: React.FC = () => (
  <IonContent>
    {/*-- 默认情况下，重排手势是禁用的，需要启用它才能拖放项目 --*/}
    <IonReorderGroup disabled={false}>
      {/*-- 默认的重排图标，项目右对齐 --*/}
      <IonItem>
        <IonLabel>项目 1</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      <IonItem>
        <IonLabel>项目 2</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      {/*-- 默认的重排图标，项目左对齐 --*/}
      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>项目 3</IonLabel>
      </IonItem>

      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>项目 4</IonLabel>
      </IonItem>

      {/*-- 自定义重排图标，项目右对齐 --*/}
      <IonItem>
        <IonLabel>项目 5</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      <IonItem>
        <IonLabel>项目 6</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      {/*-- 项目包裹在 reorder 内，整个项目都可以被拖拽 --*/}
      <IonReorder>
        <IonItem>
          <IonLabel>项目 7</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>项目 8</IonLabel>
        </IonItem>
      </IonReorder>
    </IonReorderGroup>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'reorder-example',
  styleUrl: 'reorder-example.css',
})
export class ReorderExample {
  render() {
    return [
      // 默认情况下，重排手势是禁用的，需要启用它才能拖放项目
      <ion-reorder-group disabled={false}>
        {/* 默认的重排图标，项目右对齐 */}
        <ion-item>
          <ion-label>项目 1</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>项目 2</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        {/* 默认的重排图标，项目左对齐 */}
        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>项目 3</ion-label>
        </ion-item>

        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>项目 4</ion-label>
        </ion-item>

        {/* 自定义重排图标，项目右对齐 */}
        <ion-item>
          <ion-label>项目 5</ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>项目 6</ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        {/* 项目包裹在 reorder 内，整个项目都可以被拖拽 */}
        <ion-reorder>
          <ion-item>
            <ion-label>项目 7</ion-label>
          </ion-item>
        </ion-reorder>

        <ion-reorder>
          <ion-item>
            <ion-label>项目 8</ion-label>
          </ion-item>
        </ion-reorder>
      </ion-reorder-group>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认情况下，重排手势是禁用的，需要启用它才能拖放项目 -->
  <ion-reorder-group :disabled="false">
    <!-- 默认的重排图标，项目右对齐 -->
    <ion-item>
      <ion-label> 项目 1 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 2 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <!-- 默认的重排图标，项目左对齐 -->
    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> 项目 3 </ion-label>
    </ion-item>

    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> 项目 4 </ion-label>
    </ion-item>

    <!-- 自定义重排图标，项目右对齐 -->
    <ion-item>
      <ion-label> 项目 5 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 6 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <!-- 项目包裹在 reorder 内，整个项目都可以被拖拽 -->
    <ion-reorder>
      <ion-item>
        <ion-label> 项目 7 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> 项目 8 </ion-label>
      </ion-item>
    </ion-reorder>
  </ion-reorder-group>
</template>

<script>
  import { IonIcon, IonItem, IonLabel, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { pizza } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonIcon,
      IonItem,
      IonLabel,
      IonReorder,
      IonReorderGroup,
    },
    setup() {
      return { pizza };
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