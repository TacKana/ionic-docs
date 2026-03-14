```html
<template>
  <ion-list>
    <ion-item>
      <ion-toggle justify="start">标签靠左对齐</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="end">标签靠右对齐</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between">标签与控制项两端对齐</ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonToggle } from '@ionic/vue';
</script>
```