```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>关注者</ion-label>
      <ion-badge color="primary">22k</ion-badge>
    </ion-item>
    <ion-item>
      <ion-label>点赞</ion-label>
      <ion-badge color="secondary">118k</ion-badge>
    </ion-item>
    <ion-item>
      <ion-label>收藏</ion-label>
      <ion-badge color="tertiary">34k</ion-badge>
    </ion-item>
    <ion-item>
      <ion-label>已完成</ion-label>
      <ion-badge color="success">80</ion-badge>
    </ion-item>
    <ion-item>
      <ion-label>警告</ion-label>
      <ion-badge color="warning">70</ion-badge>
    </ion-item>
    <ion-item>
      <ion-label>通知</ion-label>
      <ion-badge color="danger">1000</ion-badge>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';
</script>
```