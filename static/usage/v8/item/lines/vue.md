```html
<template>
  <ion-item>
    <ion-label>默认项目行</ion-label>
  </ion-item>

  <ion-item lines="inset">
    <ion-label>项目行内嵌</ion-label>
  </ion-item>

  <ion-item lines="full">
    <ion-label>项目行全宽</ion-label>
  </ion-item>

  <ion-item lines="none">
    <ion-label>无项目行</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>默认项目行</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="inset">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>项目行内嵌</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="full">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>项目行全宽</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="none">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>无项目行</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { informationCircle, star } from 'ionicons/icons';
</script>
```