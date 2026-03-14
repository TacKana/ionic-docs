```html
<template>
  <!-- 主色调单选按钮组 -->
  <ion-radio-group value="primary">
    <ion-radio aria-label="Primary" color="primary" value="primary"></ion-radio>
  </ion-radio-group>
  <!-- 次要色调单选按钮组 -->
  <ion-radio-group value="secondary">
    <ion-radio aria-label="Secondary" color="secondary" value="secondary"></ion-radio>
  </ion-radio-group>
  <!-- 第三色调单选按钮组 -->
  <ion-radio-group value="tertiary">
    <ion-radio aria-label="Tertiary" color="tertiary" value="tertiary"></ion-radio>
  </ion-radio-group>
  <!-- 成功状态单选按钮组 -->
  <ion-radio-group value="success">
    <ion-radio aria-label="Success" color="success" value="success"></ion-radio>
  </ion-radio-group>
  <!-- 警告状态单选按钮组 -->
  <ion-radio-group value="warning">
    <ion-radio aria-label="Warning" color="warning" value="warning"></ion-radio>
  </ion-radio-group>
  <!-- 危险状态单选按钮组 -->
  <ion-radio-group value="danger">
    <ion-radio aria-label="Danger" color="danger" value="danger"></ion-radio>
  </ion-radio-group>
  <!-- 浅色主题单选按钮组 -->
  <ion-radio-group value="light">
    <ion-radio aria-label="Light" color="light" value="light"></ion-radio>
  </ion-radio-group>
  <!-- 中等色调单选按钮组 -->
  <ion-radio-group value="medium">
    <ion-radio aria-label="Medium" color="medium" value="medium"></ion-radio>
  </ion-radio-group>
  <!-- 深色主题单选按钮组 -->
  <ion-radio-group value="dark">
    <ion-radio aria-label="Dark" color="dark" value="dark"></ion-radio>
  </ion-radio-group>
</template>

<script setup lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```