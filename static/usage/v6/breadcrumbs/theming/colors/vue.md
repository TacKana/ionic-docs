```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb color="primary" href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#film">胶卷</ion-breadcrumb>
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