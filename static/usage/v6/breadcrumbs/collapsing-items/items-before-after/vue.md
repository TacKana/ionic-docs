```html
<template>
  <div>折叠前显示 = 2</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2">
    <ion-breadcrumb href="#home">主页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠前显示 = 0</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="0">
    <ion-breadcrumb href="#home">主页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠后显示 = 2</div>
  <ion-breadcrumbs :max-items="4" :items-after-collapse="2">
    <ion-breadcrumb href="#home">主页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>

  <div class="ion-margin-top">折叠前显示 = 2，折叠后显示 = 2</div>
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2" :items-after-collapse="2">
    <ion-breadcrumb href="#home">主页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 毫米</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs },
  });
</script>
```