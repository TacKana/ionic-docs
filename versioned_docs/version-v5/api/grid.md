---
title: 'Ion-Grid：使用网格构建移动优先的自定义应用布局'
description: 'Ion-Grid 是一个移动优先的 flexbox 系统，用于通过 12 列布局和基于屏幕尺寸的不同断点来构建自定义的应用程序显示布局。'
sidebar_label: 'ion-grid'
demoUrl: '/docs/demos/api/grid/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/grid/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/grid/props.md';
import Events from '@ionic-internal/component-api/v5/grid/events.md';
import Methods from '@ionic-internal/component-api/v5/grid/methods.md';
import Parts from '@ionic-internal/component-api/v5/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/grid/slots.md';

# ion-grid

网格是一个强大的、移动优先的 flexbox 系统，用于构建自定义布局。

它由三个单元组成——网格、[行](row.md)和[列](col.md)。列将扩展以填充行，并将调整大小以适应额外的列。它基于一个 12 列的布局，并根据屏幕尺寸提供不同的断点。可以使用 CSS 自定义列数。

更多信息请参阅[响应式网格文档](../layout/grid.md)。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">ion-col size="6"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol size="3">ion-col size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol size="3" offset="3">
          ion-col size="3" offset="3"
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="ion-align-self-start">ion-col start</IonCol>
        <IonCol className="ion-align-self-center">ion-col center</IonCol>
        <IonCol className="ion-align-self-end">ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-start">
        <IonCol>start ion-col</IonCol>
        <IonCol>start ion-col</IonCol>
        <IonCol className="ion-align-self-end">start ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center">
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-end">
        <IonCol>end ion-col</IonCol>
        <IonCol className="ion-align-self-start">end ion-col start</IonCol>
        <IonCol>end ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6" size-lg offset="3">
          ion-col size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          ion-col size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-example',
  styleUrl: 'grid-example.css',
})
export class GridExample {
  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">ion-col [size="6"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col size="3">ion-col [size="3"]</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col size="3" offset="3">
            ion-col [size="3"] [offset="3"]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-align-self-start">ion-col [start]</ion-col>
          <ion-col class="ion-align-self-center">ion-col [center]</ion-col>
          <ion-col class="ion-align-self-end">ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-start">
          <ion-col>[start] ion-col</ion-col>
          <ion-col>[start] ion-col</ion-col>
          <ion-col class="ion-align-self-end">[start] ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>[end] ion-col</ion-col>
          <ion-col class="ion-align-self-start">[end] ion-col [start]</ion-col>
          <ion-col>[end] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" sizeLg="" offset="3">
            ion-col [size="6"] [sizeLg] [offset="3"]
          </ion-col>
          <ion-col size="3" sizeLg="">
            ion-col [size="3"] [sizeLg]
          </ion-col>
        </ion-row>
      </ion-grid>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6"> ion-col [size="6"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col>
        ion-col
        <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
      <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
      <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-start">
      <ion-col> [start] ion-col </ion-col>
      <ion-col> [start] ion-col </ion-col>
      <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-center">
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-end">
      <ion-col> [end] ion-col </ion-col>
      <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
      <ion-col> [end] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
      <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
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