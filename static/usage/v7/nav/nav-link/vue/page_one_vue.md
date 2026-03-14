```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>页面一</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>页面一</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>前往页面二</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
  import { markRaw } from 'vue';
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  const component = markRaw(PageTwo);
</script>
```