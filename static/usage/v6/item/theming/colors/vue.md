```html
<template>
  <ion-item>
    <ion-label>默认项目</ion-label>
  </ion-item>
  <ion-item color="primary">
    <ion-label>主要项目</ion-label>
  </ion-item>
  <ion-item color="secondary">
    <ion-label>次要项目</ion-label>
  </ion-item>
  <ion-item color="tertiary">
    <ion-label>三级项目</ion-label>
  </ion-item>
  <ion-item color="success">
    <ion-label>成功项目</ion-label>
  </ion-item>
  <ion-item color="warning">
    <ion-label>警告项目</ion-label>
  </ion-item>
  <ion-item color="danger">
    <ion-label>危险项目</ion-label>
  </ion-item>
  <ion-item color="light">
    <ion-label>浅色项目</ion-label>
  </ion-item>
  <ion-item color="medium">
    <ion-label>中等项目</ion-label>
  </ion-item>
  <ion-item color="dark">
    <ion-label>深色项目</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```