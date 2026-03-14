---
sidebar_label: 'ion-reorder-group（重新排序组）'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v5/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v5/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v5/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/reorder-group/slots.md';

# ion-reorder-group（重新排序组）

重新排序组是使用 `ion-reorder` 组件的项目的包装组件。有关用于在 `ion-reorder-group` 内拖动项目的锚点组件的更多信息，请参阅[重新排序文档](reorder.md)。

当用户拖动项目并将其放置在新位置时，将触发 `ionItemReorder` 事件。应该实现一个处理程序来调用 `complete()` 方法。

`ionItemReorder` 事件的 `detail` 属性包含有关重新排序操作的所有相关信息，包括 `from` 和 `to` 索引。在重新排序的上下文中，项目会从某个索引 `from` 移动到新的索引 `to`。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认情况下重新排序手势是禁用的，启用它以拖放项目 -->
<ion-reorder-group (ionItemReorder)="doReorder($event)" disabled="false">
  <!-- 默认重新排序图标，项目末尾对齐 -->
  <ion-item>
    <ion-label> 项目 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- 默认重新排序图标，项目开头对齐 -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 4 </ion-label>
  </ion-item>

  <!-- 自定义重新排序图标，位于项目末尾 -->
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

  <!-- 项目包裹在 reorder 中，整个项目都可以被拖动 -->
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

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css'],
})
export class ReorderGroupExample {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', ev.detail.from, '拖动到', ev.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
    // 此方法也可以由重新排序组直接调用
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
```

### 更新数据

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css'],
})
export class ReorderGroupExample {
  items = [1, 2, 3, 4, 5];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // 在使用项目调用 complete 方法之前，它们将保持拖动前的顺序
    console.log('complete 调用前', this.items);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
    // 将 items 变量更新为项目的新顺序
    this.items = ev.detail.complete(this.items);

    // 调用 complete 方法后，项目将按照新顺序排列
    console.log('complete 调用后', this.items);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认情况下重新排序手势是禁用的，启用它以拖放项目 -->
<ion-reorder-group disabled="false">
  <!-- 默认重新排序图标，项目末尾对齐 -->
  <ion-item>
    <ion-label> 项目 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> 项目 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- 默认重新排序图标，项目开头对齐 -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> 项目 4 </ion-label>
  </ion-item>

  <!-- 自定义重新排序图标，位于项目末尾 -->
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

  <!-- 项目包裹在 reorder 中，整个项目都可以被拖动 -->
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

```javascript
const reorderGroup = document.querySelector('ion-reorder-group');

reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
  // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
  console.log('从索引', detail.from, '拖动到', detail.to);

  // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
  // 此方法也可以由重新排序组直接调用
  detail.complete();
});
```

### 更新数据

```javascript
const items = [1, 2, 3, 4, 5];
const reorderGroup = document.querySelector('ion-reorder-group');

reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
  // 在使用项目调用 complete 方法之前，它们将保持拖动前的顺序
  console.log('complete 调用前', items);

  // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
  // 将 items 变量更新为项目的新顺序
  items = detail.complete(items);

  // 调用 complete 方法后，项目将按照新顺序排列
  console.log('complete 调用后', items);
});
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonIcon, IonContent } from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';
import { pizza } from 'ionicons/icons';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
  console.log('从索引', event.detail.from, '拖动到', event.detail.to);

  // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
  // 此方法也可以由重新排序组直接调用
  event.detail.complete();
}

export const ReorderGroupExample: React.FC = () => (
  <IonContent>
    {/*-- 默认情况下重新排序手势是禁用的，启用它以拖放项目 --*/}
    <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
      {/*-- 默认重新排序图标，项目末尾对齐 --*/}
      <IonItem>
        <IonLabel>项目 1</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      <IonItem>
        <IonLabel>项目 2</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      {/*-- 默认重新排序图标，项目开头对齐 --*/}
      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>项目 3</IonLabel>
      </IonItem>

      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>项目 4</IonLabel>
      </IonItem>

      {/*-- 自定义重新排序图标，位于项目末尾 --*/}
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

      {/*-- 项目包裹在 reorder 中，整个项目都可以被拖动 --*/}
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

### 更新数据

```tsx
const items = [1, 2, 3, 4, 5];

function doReorder(event: CustomEvent) {
  // 在使用项目调用 complete 方法之前，它们将保持拖动前的顺序
  console.log('complete 调用前', this.items);

  // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
  // 将 items 变量更新为项目的新顺序
  this.items = event.detail.complete(this.items);

  // 调用 complete 方法后，项目将按照新顺序排列
  console.log('complete 调用后', this.items);
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'reorder-group-example',
  styleUrl: 'reorder-group-example.css',
})
export class ReorderGroupExample {
  doReorder(ev: any) {
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', ev.detail.from, '拖动到', ev.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
    // 此方法也可以由重新排序组直接调用
    ev.detail.complete();
  }

  render() {
    return [
      // 默认情况下重新排序手势是禁用的，启用它以拖放项目
      <ion-reorder-group onIonItemReorder={(ev) => this.doReorder(ev)} disabled={false}>
        {/* 默认重新排序图标，项目末尾对齐 */}
        <ion-item>
          <ion-label>项目 1</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>项目 2</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        {/* 默认重新排序图标，项目开头对齐 */}
        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>项目 3</ion-label>
        </ion-item>

        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>项目 4</ion-label>
        </ion-item>

        {/* 自定义重新排序图标，位于项目末尾 */}
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

        {/* 项目包裹在 reorder 中，整个项目都可以被拖动 */}
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

### 更新数据

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'reorder-group-example',
  styleUrl: 'reorder-group-example.css',
})
export class ReorderGroupExample {
  @State() items = [1, 2, 3, 4, 5];

  doReorder(ev: any) {
    // 在使用项目调用 complete 方法之前，它们将保持拖动前的顺序
    console.log('complete 调用前', this.items);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
    // 将 items 变量更新为项目的新顺序
    this.items = ev.detail.complete(this.items);

    // 调用 complete 方法后，项目将按照新顺序排列
    console.log('complete 调用后', this.items);
  }

  render() {
    return [
      // 默认情况下重新排序手势是禁用的，启用它以拖放项目
      <ion-reorder-group onIonItemReorder={(ev) => this.doReorder(ev)} disabled={false}>
        {this.items.map((item) => (
          <ion-item>
            <ion-label>项目 {item}</ion-label>
            <ion-reorder slot="end"></ion-reorder>
          </ion-item>
        ))}
      </ion-reorder-group>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认情况下重新排序手势是禁用的，启用它以拖放项目 -->
  <ion-reorder-group @ionItemReorder="doReorder($event)" disabled="false">
    <!-- 默认重新排序图标，项目末尾对齐 -->
    <ion-item>
      <ion-label> 项目 1 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 2 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <!-- 默认重新排序图标，项目开头对齐 -->
    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> 项目 3 </ion-label>
    </ion-item>

    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> 项目 4 </ion-label>
    </ion-item>

    <!-- 自定义重新排序图标，位于项目末尾 -->
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

    <!-- 项目包裹在 reorder 中，整个项目都可以被拖动 -->
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
      const doReorder = (event: CustomEvent) => {
        // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
        console.log('从索引', event.detail.from, '拖动到', event.detail.to);

        // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
        // 此方法也可以由重新排序组直接调用
        event.detail.complete();
      };
      return { doReorder, pizza };
    },
  });
</script>
```

### 更新数据

```html
<script>
  ...
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    ...
    setup() {
      const items = ref([1, 2, 3, 4, 5]);

      const doReorder = (event: CustomEvent) => {
        // 在使用项目调用 complete 方法之前，它们将保持拖动前的顺序
        console.log('complete 调用前', items.value);

        // 完成重新排序，并根据手势结束的位置在 DOM 中定位该项目。
        // 将 items 变量更新为项目的新顺序
        items.value = event.detail.complete(items.value);

        // 调用 complete 方法后，项目将按照新顺序排列
        console.log('complete 调用后', items.value);
      }
      return { doReorder, items, ... }
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