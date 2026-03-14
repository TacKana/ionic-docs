```html
<template>
  <ion-item>
    <ion-label>默认项目</ion-label>
  </ion-item>
  <ion-item color="primary">
    <ion-label>主色项目</ion-label>
  </ion-item>
  <ion-item color="secondary">
    <ion-label>辅色项目</ion-label>
  </ion-item>
  <ion-item color="tertiary">
    <ion-label>第三色项目</ion-label>
  </ion-item>
  <ion-item color="success">
    <ion-label>成功状态项目</ion-label>
  </ion-item>
  <ion-item color="warning">
    <ion-label>警告状态项目</ion-label>
  </ion-item>
  <ion-item color="danger">
    <ion-label>危险状态项目</ion-label>
  </ion-item>
  <ion-item color="light">
    <ion-label>浅色项目</ion-label>
  </ion-item>
  <ion-item color="medium">
    <ion-label>中等色项目</ion-label>
  </ion-item>
  <ion-item color="dark">
    <ion-label>深色项目</ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
</script>
```