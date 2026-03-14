```html
<template>
  <b>在 xs 断点下保持不变，在 sm 及以上断点下第一列右推、第二列左拉</b>
  <ion-grid>
    <ion-row>
      <ion-col push-sm="6">1</ion-col>
      <ion-col pull-sm="6">2</ion-col>
    </ion-row>
  </ion-grid>

  <b>在 xs 断点下保持不变，在 md 及以上断点下中间列右推、最后一列左拉</b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col push-md="3">2</ion-col>
      <ion-col push-md="3">3</ion-col>
      <ion-col pull-md="6">4</ion-col>
    </ion-row>
  </ion-grid>

  <b>在 xs 断点下交换首尾三列，在 lg 及以上断点下反转列顺序</b>
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

<script lang="ts">
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
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