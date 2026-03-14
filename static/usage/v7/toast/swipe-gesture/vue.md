```html
<template>
  <ion-content class="ion-padding">
    <ion-button id="open-toast">打开 Toast</ion-button>
    <ion-toast
      message="此 Toast 可通过滑动关闭"
      trigger="open-toast"
      swipe-gesture="vertical"
      position="bottom"
      position-anchor="footer"
    ></ion-toast>
  </ion-content>
  <ion-footer id="footer">
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonFooter, IonTitle, IonToast, IonToolbar } from '@ionic/vue';
</script>
```