```html
<template>
  <ion-toolbar>
    <!-- 左侧按钮 -->
    <ion-buttons slot="start">
      <ion-button>Start</ion-button>
    </ion-buttons>
    <ion-title>Buttons</ion-title>
    <!-- 右侧按钮 -->
    <ion-buttons slot="end">
      <ion-button>End</ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <!-- 次要按钮 -->
    <ion-buttons slot="secondary">
      <ion-button>Secondary</ion-button>
    </ion-buttons>
    <ion-title>Buttons</ion-title>
    <!-- 主要按钮 -->
    <ion-buttons slot="primary">
      <ion-button>Primary</ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script setup lang="ts">
  import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```