```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>返回按钮</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>页面二</h1>
    <p>使用返回按钮可导航至上一页。</p>
  </ion-content>
</template>

<script lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';

  export default {
    components: { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar },
  };
</script>
```