```html
<template>
  <b>列 1 的 <code>size</code> 属性设置为 <code>"auto"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <b>列 3 包含一个输入框，且 <code>size</code> 属性设置为 <code>"auto"</code></b>
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

  <b>列 2 的 <code>size</code> 属性设置为 <code>"auto"</code>，并且定义了宽度</b>
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