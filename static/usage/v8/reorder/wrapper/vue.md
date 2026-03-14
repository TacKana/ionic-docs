```html
<template>
  <ion-list>
    <!-- 默认情况下重新排序手势是禁用的，启用后可以拖拽项目进行排序 -->
    <ion-reorder-group :disabled="false" @ionReorderEnd="handleReorderEnd($event)">
      <ion-reorder>
        <ion-item>
          <ion-label> 项目 1 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> 项目 2 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> 项目 3 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> 项目 4 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> 项目 5 </ion-label>
        </ion-item>
      </ion-reorder>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/vue';

  const handleReorderEnd = (event: ReorderEndCustomEvent) => {
    // `from` 和 `to` 属性分别包含了拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽至', event.detail.to);

    // 完成重新排序操作，并根据手势结束的位置在 DOM 中定位项目。
    // 此方法也可以由重新排序组直接调用。
    event.detail.complete();
  };
</script>
```