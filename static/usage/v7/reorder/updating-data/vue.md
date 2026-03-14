```html
<template>
  <ion-list>
    <!-- 默认情况下重新排序手势是禁用的，启用它即可拖放项目 -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-item v-for="item in items" :key="item">
        <ion-label> 项目 {{ item }} </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderCustomEvent } from '@ionic/vue';
  import { ref } from 'vue';

  const items = ref([1, 2, 3, 4, 5]);

  const handleReorder = (event: ItemReorderCustomEvent) => {
    // 在调用 complete 方法之前，项目将保持拖拽前的顺序
    console.log('完成前', items.value);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目
    // 更新 items 变量为项目的新顺序
    items.value = event.detail.complete(items.value);

    // 调用 complete 方法后，项目将按新顺序排列
    console.log('完成后', items.value);
  };
</script>
```