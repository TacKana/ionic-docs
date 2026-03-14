```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      首页
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      电子产品
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      相机
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      胶卷
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script setup lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
  import { arrowForwardCircle } from 'ionicons/icons';
</script>
```