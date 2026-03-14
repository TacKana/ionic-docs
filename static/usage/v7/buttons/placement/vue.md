```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button>开始</ion-button>
    </ion-buttons>
    <ion-title>按钮</ion-title>
    <ion-buttons slot="end">
      <ion-button>结束</ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>次要</ion-button>
    </ion-buttons>
    <ion-title>按钮</ion-title>
    <ion-buttons slot="primary">
      <ion-button>主要</ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script setup lang="ts">
  import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```