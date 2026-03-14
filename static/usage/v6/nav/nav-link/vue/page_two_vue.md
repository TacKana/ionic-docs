```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>第二页</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>第二页</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>前往第三页</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script lang="ts">
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

  export default {
    components: {
      IonHeader,
      IonTitle,
      IonToolbar,
      IonContent,
      IonNavLink,
      IonButton,
      IonButtons,
      IonBackButton,
    },
    data() {
      return {
        component: markRaw(PageThree),
      };
    },
  };
</script>
```