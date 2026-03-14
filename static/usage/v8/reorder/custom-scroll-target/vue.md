```html
<template>
  <ion-content :scroll-y="false">
    <div class="ion-content-scroll-host">
      <ion-list>
        <!-- 默认情况下重新排序手势是禁用的，启用后即可拖拽项目 -->
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
    </div>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup,
    ReorderEndCustomEvent,
  } from '@ionic/vue';

  const handleReorderEnd = (event: ReorderEndCustomEvent) => {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目。
    // 此方法也可由 reorder group 直接调用。
    event.detail.complete();
  };
</script>

<style scoped>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```