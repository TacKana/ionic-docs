```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button text="Previous" :icon="caretBack"></ion-back-button>
      </ion-buttons>
      <ion-title>返回按钮</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>页面二</h1>
    <p>使用返回按钮可以导航至上一页面。</p>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
  import { caretBack } from 'ionicons/icons';
</script>
```