```html
<template>
  <ion-list>
    <ion-radio-group value="truncated">
      <ion-item>
        <ion-radio value="truncated">默认使用省略号截断</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-part" class="wrapped">通过标签阴影部分应用 text-wrap 实现换行</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-div">
          <div class="ion-text-wrap">通过包装元素应用 ion-text-wrap 类实现换行</div>
        </ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/vue';
</script>

<style scoped>
  ion-list {
    width: 250px;
  }

  ion-radio.wrapped::part(label) {
    white-space: normal;
  }
</style>
```