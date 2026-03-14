```html
<template>
  <ion-list>
    <ion-item>
      <ion-badge slot="start">11</ion-badge>
      <ion-label>徽章位于起始插槽</ion-label>
    </ion-item>
    <ion-item>
      <ion-badge slot="end">22</ion-badge>
      <ion-label>徽章位于结束插槽</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';
</script>
```