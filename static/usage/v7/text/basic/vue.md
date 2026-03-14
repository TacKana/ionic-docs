```html
<template>
  <ion-text color="primary">
    <h1>H1: 敏捷的棕色狐狸跳过了懒狗</h1>
  </ion-text>

  <ion-text color="secondary">
    <h2>H2: 敏捷的棕色狐狸跳过了懒狗</h2>
  </ion-text>

  <ion-text color="tertiary">
    <h3>H3: 敏捷的棕色狐狸跳过了懒狗</h3>
  </ion-text>

  <p>
    <ion-text color="warning"><ion-icon :icon="warning"></ion-icon></ion-text>
    我看见一个狼人手里拿着中餐菜单。在雨中漫步于
    <ion-text color="success"><sub>苏活区</sub></ion-text>的街道。他
    <ion-text color="medium"><i>正在</i></ion-text>寻找一家叫"李好福"的餐厅。打算来一份
    <ion-text color="danger">超大份的牛肉炒面。</ion-text>
  </p>
</template>

<script setup lang="ts">
  import { IonIcon, IonText } from '@ionic/vue';
  import { warning } from 'ionicons/icons';
</script>
```