```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>页面二</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>页面二</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>前往页面三</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
  import { markRaw } from 'vue';
  import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonButtons,
    IonBackButton,
  } from '@ionic/vue';
  import PageThree from './PageThree.vue';

  const component = markRaw(PageThree);
</script>
```