```html
<template>
  <ion-item href="#">
    <ion-label>锚点项目</ion-label>
  </ion-item>

  <ion-item href="#" disabled="true">
    <ion-label>禁用锚点项目</ion-label>
  </ion-item>

  <ion-item button>
    <ion-label>按钮项目</ion-label>
  </ion-item>

  <ion-item button disabled="true">
    <ion-label>禁用按钮项目</ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
</script>
```