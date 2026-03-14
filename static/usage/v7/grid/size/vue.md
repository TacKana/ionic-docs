```html
<template>
  <b>第二列设置了 <code>size</code> 为 <code>"8"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col size="8">2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <b>第三列和第四列设置了 <code>size</code> 为 <code>"3"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col size="3">3</ion-col>
      <ion-col size="3">4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <b>第一列和第二列设置了 <code>size</code> 为 <code>"4"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col size="4">1</ion-col>
      <ion-col size="4">2</ion-col>
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