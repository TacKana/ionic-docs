```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      这里是卡片内容的一段简短描述。仅此而已。
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
</script>
```