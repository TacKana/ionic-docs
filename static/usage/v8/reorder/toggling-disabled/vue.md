```html
<template>
  <ion-list>
    <ion-reorder-group :disabled="isDisabled" @ionReorderEnd="handleReorderEnd($event)">
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

  <!-- 默认情况下重排序手势是禁用的，启用后即可拖拽项目 -->
  <ion-button @click="toggleReorder()"> 切换重排序 </ion-button>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup,
    ReorderEndCustomEvent,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const isDisabled = ref(true);

  const handleReorderEnd = (event: ReorderEndCustomEvent) => {
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的位置索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重排序，并根据手势结束的位置将项目重新放置在 DOM 中
    // 此方法也可以由 reorder group 直接调用
    event.detail.complete();
  };

  const toggleReorder = () => {
    isDisabled.value = !isDisabled.value;
  };
</script>
```