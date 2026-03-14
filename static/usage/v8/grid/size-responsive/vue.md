```html
<template>
  <b>在 xs 断点下垂直堆叠，sm 及以上断点等宽排列</b>
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-sm="3">1</ion-col>
      <ion-col size="12" size-sm="3">2</ion-col>
      <ion-col size="12" size-sm="3">3</ion-col>
      <ion-col size="12" size-sm="3">4</ion-col>
    </ion-row>
  </ion-grid>

  <b>在 md 断点前保持等宽，md 及以上断点时最后一列占满宽度</b>
  <ion-grid>
    <ion-row>
      <ion-col size-md="6">1</ion-col>
      <ion-col size-md="6">2</ion-col>
      <ion-col size-md="12">3</ion-col>
    </ion-row>
  </ion-grid>

  <b>md 断点前每行 2 列，md 断点每行 3 列，lg 及以上断点等宽排列</b>
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="4" size-lg="2">1</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">2</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">3</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">4</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">5</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">6</ion-col>
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