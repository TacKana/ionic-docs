```html
<template>
  <ion-list-header>
    <ion-label>默认</ion-label>
  </ion-list-header>
  <ion-list-header color="primary">
    <ion-label>主要</ion-label>
  </ion-list-header>
  <ion-list-header color="secondary">
    <ion-label>次要</ion-label>
  </ion-list-header>
  <ion-list-header color="tertiary">
    <ion-label>第三级</ion-label>
  </ion-list-header>
  <ion-list-header color="success">
    <ion-label>成功</ion-label>
  </ion-list-header>
  <ion-list-header color="warning">
    <ion-label>警告</ion-label>
  </ion-list-header>
  <ion-list-header color="danger">
    <ion-label>危险</ion-label>
  </ion-list-header>
  <ion-list-header color="light">
    <ion-label>浅色</ion-label>
  </ion-list-header>
  <ion-list-header color="medium">
    <ion-label>中等</ion-label>
  </ion-list-header>
  <ion-list-header color="dark">
    <ion-label>深色</ion-label>
  </ion-list-header>
</template>

<script lang="ts">
  import { IonLabel, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonListHeader },
  });
</script>
```