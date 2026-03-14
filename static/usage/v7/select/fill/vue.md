```html
<template>
  <!-- 实线填充风格的选择框，标签采用悬浮定位 -->
  <ion-select label="Solid select" label-placement="floating" fill="solid">
    <ion-select-option value="apple">苹果</ion-select-option>
    <ion-select-option value="banana">香蕉</ion-select-option>
    <ion-select-option value="orange">橙子</ion-select-option>
  </ion-select>

  <br />

  <!-- 轮廓线风格的选择框，标签采用悬浮定位 -->
  <ion-select label="Outline select" label-placement="floating" fill="outline">
    <ion-select-option value="apple">苹果</ion-select-option>
    <ion-select-option value="banana">香蕉</ion-select-option>
    <ion-select-option value="orange">橙子</ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
  import { IonSelect, IonSelectOption } from '@ionic/vue';
</script>
```