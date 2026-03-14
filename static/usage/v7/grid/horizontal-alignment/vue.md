```html
<template>
  <b>列对齐在起始位置</b>
  <ion-grid>
    <ion-row class="ion-justify-content-start">
      <ion-col size="3"> 1 </ion-col>
      <ion-col size="3"> 2 </ion-col>
    </ion-row>
  </ion-grid>

  <b>列对齐在中心位置</b>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size="3"> 1 </ion-col>
      <ion-col size="3"> 2 </ion-col>
    </ion-row>
  </ion-grid>

  <b>列对齐在末尾位置</b>
  <ion-grid>
    <ion-row class="ion-justify-content-end">
      <ion-col size="3"> 1 </ion-col>
      <ion-col size="3"> 2 </ion-col>
    </ion-row>
  </ion-grid>

  <b>列对齐方式为周围等距</b>
  <ion-grid>
    <ion-row class="ion-justify-content-around">
      <ion-col size="3"> 1 </ion-col>
      <ion-col size="3"> 2 </ion-col>
    </ion-row>
  </ion-grid>

  <b>列对齐方式为两端对齐</b>
  <ion-grid>
    <ion-row class="ion-justify-content-between">
      <ion-col size="3"> 1 </ion-col>
      <ion-col size="3"> 2 </ion-col>
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