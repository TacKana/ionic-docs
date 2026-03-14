```html
<template>
  <ion-list>
    <ion-radio-group value="start">
      <ion-item>
        <ion-radio value="start" justify="start">标签靠行首对齐</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="end">
      <ion-item>
        <ion-radio value="end" justify="end">标签靠行尾对齐</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="space-between">
      <ion-item>
        <ion-radio value="space-between" justify="space-between">标签与控件两端对齐</ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```