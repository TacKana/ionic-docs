```html
<template>
  <b>在 xs 断点下保持不变，从 sm 断点起将第一列后推、第二列前拉</b>
  <ion-grid>
    <ion-row>
      <ion-col push-sm="6">1</ion-col>
      <ion-col pull-sm="6">2</ion-col>
    </ion-row>
  </ion-grid>

  <b>在 xs 断点下保持不变，从 md 断点起将中间列后推、最后一列前拉</b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col push-md="3">2</ion-col>
      <ion-col push-md="3">3</ion-col>
      <ion-col pull-md="6">4</ion-col>
    </ion-row>
  </ion-grid>

  <b>在 xs 断点下交换首尾三列，在 lg 及以上断点反排列序</b>
  <ion-grid>
    <ion-row>
      <ion-col push="6" push-lg="10">1</ion-col>
      <ion-col push="6" push-lg="6">2</ion-col>
      <ion-col push="6" push-lg="2">3</ion-col>
      <ion-col pull="6" pull-lg="2">4</ion-col>
      <ion-col pull="6" pull-lg="6">5</ion-col>
      <ion-col pull="6" pull-lg="10">6</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
</script>

<style scoped>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```