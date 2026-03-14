```html
<template>
  <div>折叠前保留 2 项</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠前保留 0 项</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="0">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠后保留 2 项</div>
  <ion-breadcrumbs :max-items="4" :items-after-collapse="2">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠前保留 2 项，折叠后保留 2 项</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2" :items-after-collapse="2">
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
</script>
```