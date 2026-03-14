```html
<template>
  <ion-radio-group value="start">
    <ion-radio value="start" label-placement="start">标签置于起始位置</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="end">
    <ion-radio value="end" label-placement="end">标签置于结束位置</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="fixed">
    <ion-radio value="fixed" label-placement="fixed">固定宽度标签</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="stacked">
    <ion-radio value="stacked" label-placement="stacked">堆叠标签</ion-radio>
  </ion-radio-group>
</template>

<script setup lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```