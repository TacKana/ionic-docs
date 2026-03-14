```html
<template>
  <ion-button id="auto-trigger">尺寸=自适应</ion-button>
  <ion-popover trigger="auto-trigger" size="auto">
    <ion-content class="ion-padding">你好！</ion-content>
  </ion-popover>

  <ion-button id="cover-trigger">尺寸=覆盖</ion-button>
  <ion-popover trigger="cover-trigger" size="cover">
    <ion-content class="ion-padding">你好！</ion-content>
  </ion-popover>
</template>

<script setup lang="ts">
  import { IonButton, IonPopover } from '@ionic/vue';
</script>
```