```html
<template>
  <ion-list>
    <!-- 默认情况下重新排序手势是禁用的，启用它即可拖放项目 -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-item>
        <ion-label> 项目 1 </ion-label>
        <ion-reorder slot="end">
          <ion-icon :icon="pizza"></ion-icon>
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 2 </ion-label>
        <ion-reorder slot="end">
          <ion-icon :icon="pizza"></ion-icon>
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 3 </ion-label>
        <ion-reorder slot="end">
          <ion-icon :icon="pizza"></ion-icon>
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 4 </ion-label>
        <ion-reorder slot="end">
          <ion-icon :icon="pizza"></ion-icon>
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 5 </ion-label>
        <ion-reorder slot="end">
          <ion-icon :icon="pizza"></ion-icon>
        </ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderCustomEvent } from '@ionic/vue';
  import { pizza } from 'ionicons/icons';

  const handleReorder = (event: ItemReorderCustomEvent) => {
    // `from` 和 `to` 属性分别包含拖动开始时和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位项目
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  };
</script>
```