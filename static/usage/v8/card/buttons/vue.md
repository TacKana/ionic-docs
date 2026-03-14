```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      这里是一小段用于卡片内容的描述文本。不多不少，恰到好处。
    </ion-card-content>

    <ion-button fill="clear">操作 1</ion-button>
    <ion-button fill="clear">操作 2</ion-button>
  </ion-card>
</template>

<script setup lang="ts">
  import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
</script>
```