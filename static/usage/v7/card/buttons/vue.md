```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      这是卡片内容的简要描述。不多不少，恰到好处。
    </ion-card-content>

    <ion-button fill="clear">操作一</ion-button>
    <ion-button fill="clear">操作二</ion-button>
  </ion-card>
</template>

<script setup lang="ts">
  import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
</script>
```