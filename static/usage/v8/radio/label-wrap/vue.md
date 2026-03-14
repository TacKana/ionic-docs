```html
<template>
  <ion-list>
    <ion-radio-group value="truncated">
      <ion-item>
        <ion-radio value="truncated">默认截断并显示省略号</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-part" class="wrapped">将 text-wrap 应用于标签 shadow part 实现换行</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-div">
          <div class="ion-text-wrap">通过 ion-text-wrap 类应用于包装元素实现换行</div>
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