```html
<template>
  <ion-button id="click-trigger">左键点击我</ion-button>
  <ion-popover trigger="click-trigger" trigger-action="click">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>

  <ion-button id="context-menu-trigger">右键点击我</ion-button>
  <ion-popover trigger="context-menu-trigger" trigger-action="context-menu">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>

  <ion-button id="hover-trigger">鼠标悬停我</ion-button>
  <ion-popover trigger="hover-trigger" trigger-action="hover">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
</script>
```