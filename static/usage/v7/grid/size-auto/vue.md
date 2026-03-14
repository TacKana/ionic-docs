```html
<template>
  <b>第 1 列设置了 <code>size</code> 为 <code>"auto"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <b>第 3 列包含输入框且设置了 <code>size</code> 为 <code>"auto"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col size="auto">
        <ion-input placeholder="3"></ion-input>
      </ion-col>
      <ion-col>4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <b>第 2 列设置了 <code>size</code> 为 <code>"auto"</code> 并定义了宽度</b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col size="auto">
        <div style="width: 150px">2</div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
  import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/vue';
</script>

<style scoped>
  ion-col {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
  }
</style>
```