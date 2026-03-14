```html
<template>
  <ion-list>
    <ion-reorder-group :disabled="isDisabled" @ionItemReorder="handleReorder($event)">
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

  <!-- 默认情况下重新排序手势是禁用的，启用后即可拖放项目 -->
  <ion-button @click="toggleReorder()"> 切换重新排序 </ion-button>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup,
    ItemReorderCustomEvent,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const isDisabled = ref(true);

  const handleReorder = (event: ItemReorderCustomEvent) => {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位项目
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  };

  const toggleReorder = () => {
    isDisabled.value = !isDisabled.value;
  };
</script>
```