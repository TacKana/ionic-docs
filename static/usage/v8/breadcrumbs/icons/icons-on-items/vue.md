```html
<template>
  <ion-label>图标置于开头</ion-label>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      <ion-icon slot="start" :icon="home"></ion-icon>
      首页
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      <ion-icon slot="start" :icon="flash"></ion-icon>
      电子产品
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      <ion-icon slot="start" :icon="camera"></ion-icon>
      相机
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      <ion-icon slot="start" :icon="film"></ion-icon>
      胶片
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <ion-label class="ion-margin-top">图标置于结尾</ion-label>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      首页
      <ion-icon slot="end" :icon="home"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      电子产品
      <ion-icon slot="end" :icon="flash"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      相机
      <ion-icon slot="end" :icon="camera"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      胶片
      <ion-icon slot="end" :icon="film"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script setup lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
  import { camera, film, flash, home } from 'ionicons/icons';
</script>
```