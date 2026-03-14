```html
<template>
  <ion-button id="click-trigger">点击我（左键）</ion-button>
  <ion-popover trigger="click-trigger" trigger-action="click">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>

  <ion-button id="context-menu-trigger">右键点击我</ion-button>
  <ion-popover trigger="context-menu-trigger" trigger-action="context-menu">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>

  <ion-button id="hover-trigger">鼠标悬停我上方</ion-button>
  <ion-popover trigger="hover-trigger" trigger-action="hover">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
</script>
```