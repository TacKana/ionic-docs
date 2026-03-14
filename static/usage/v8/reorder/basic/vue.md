```html
<template>
  <ion-list>
    <!-- 默认情况下重排序手势被禁用，启用后即可拖放项目 -->
    <ion-reorder-group :disabled="false" @ionReorderEnd="handleReorderEnd($event)">
      <ion-item>
        <ion-label> 项目 1 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 2 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 3 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 4 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> 项目 5 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/vue';

  const handleReorderEnd = (event: ReorderEndCustomEvent) => {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重排序，并根据手势结束位置在DOM中定位项目。
    // 此方法也可由重排序组直接调用。
    event.detail.complete();
  };
</script>
```