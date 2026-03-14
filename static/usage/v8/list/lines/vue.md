```html
<template>
  <ion-list lines="full">
    <ion-item>
      <ion-label>全宽分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>全宽分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>全宽分隔线</ion-label>
    </ion-item>
  </ion-list>

  <ion-list lines="inset">
    <ion-item>
      <ion-label>内嵌分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>内嵌分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>内嵌分隔线</ion-label>
    </ion-item>
  </ion-list>

  <ion-list lines="none">
    <ion-item>
      <ion-label>无分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>无分隔线</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>无分隔线</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList } from '@ionic/vue';
</script>
```