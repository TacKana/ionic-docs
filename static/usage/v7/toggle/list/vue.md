```html
<template>
  <ion-list>
    <ion-item>
      <ion-toggle>接收推送通知</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle>接收邮件</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle>接收短信</ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonToggle } from '@ionic/vue';
</script>
```