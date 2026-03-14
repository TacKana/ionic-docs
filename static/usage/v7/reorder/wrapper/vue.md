```html
<template>
  <ion-list>
    <!-- 默认情况下重排序手势处于禁用状态，启用后即可拖放项目 -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-reorder>
        <ion-item>
          <ion-label> Item 1 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 2 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 3 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 4 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 5 </ion-label>
        </ion-item>
      </ion-reorder>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderCustomEvent } from '@ionic/vue';

  const handleReorder = (event: ItemReorderCustomEvent) => {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽至', event.detail.to);

    // 完成重排序，并根据手势结束位置将项目定位在 DOM 中。
    // 此方法也可由 reorder group 直接调用。
    event.detail.complete();
  };
</script>
```