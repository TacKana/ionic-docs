```html
<template>
  <ion-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script setup lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
  import { ref } from 'vue';

  const maxBreadcrumbs = ref(4);

  const expandBreadcrumbs = () => {
    maxBreadcrumbs.value = undefined;
  };
</script>
```