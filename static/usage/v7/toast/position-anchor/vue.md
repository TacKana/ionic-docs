```html
<template>
  <ion-header id="header">
    <ion-toolbar>
      <ion-title>页眉</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-button id="headerAnchor">定位到页眉</ion-button>
    <ion-button id="footerAnchor">定位到页脚</ion-button>

    <ion-toast
      trigger="headerAnchor"
      position="top"
      position-anchor="header"
      message="你好，世界！"
      :duration="2000"
    ></ion-toast>
    <ion-toast
      trigger="footerAnchor"
      position="bottom"
      position-anchor="footer"
      message="你好，世界！"
      :duration="2000"
    ></ion-toast>
  </ion-content>

  <ion-footer id="footer">
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/vue';
</script>
```