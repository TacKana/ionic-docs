```html
<template>
  <ion-item-divider>
    <ion-label>默认</ion-label>
  </ion-item-divider>
  <ion-item-divider color="primary">
    <ion-label>主要</ion-label>
  </ion-item-divider>
  <ion-item-divider color="secondary">
    <ion-label>次要</ion-label>
  </ion-item-divider>
  <ion-item-divider color="tertiary">
    <ion-label>第三级</ion-label>
  </ion-item-divider>
  <ion-item-divider color="success">
    <ion-label>成功</ion-label>
  </ion-item-divider>
  <ion-item-divider color="warning">
    <ion-label>警告</ion-label>
  </ion-item-divider>
  <ion-item-divider color="danger">
    <ion-label>危险</ion-label>
  </ion-item-divider>
  <ion-item-divider color="light">
    <ion-label>浅色</ion-label>
  </ion-item-divider>
  <ion-item-divider color="medium">
    <ion-label>中等</ion-label>
  </ion-item-divider>
  <ion-item-divider color="dark">
    <ion-label>深色</ion-label>
  </ion-item-divider>
</template>

<script lang="ts">
  import { IonItemDivider, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItemDivider, IonLabel },
  });
</script>
```