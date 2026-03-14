```html
<template>
  <ion-breadcrumbs :max-items="4">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶卷</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script setup lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
</script>
```