```html
<template>
  <ion-text color="primary">
    <h1>H1：敏捷的棕色狐狸跳过了懒狗</h1>
  </ion-text>

  <ion-text color="secondary">
    <h2>H2：敏捷的棕色狐狸跳过了懒狗</h2>
  </ion-text>

  <ion-text color="tertiary">
    <h3>H3：敏捷的棕色狐狸跳过了懒狗</h3>
  </ion-text>

  <p>
    <ion-text color="warning"><ion-icon :icon="warning"></ion-icon></ion-text>
    我看见一个狼人手里拿着中文菜单。在雨中走过索霍区的
    <ion-text color="success"><sub>街道</sub></ion-text>。他
    <ion-text color="medium"><i>正在</i></ion-text>寻找一家叫"李好福"的餐馆。打算点一份
    <ion-text color="danger">大盘牛肉炒面。</ion-text>
  </p>
</template>

<script setup lang="ts">
  import { IonIcon, IonText } from '@ionic/vue';
  import { warning } from 'ionicons/icons';
</script>
```