```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>返回按钮</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>页面一</h1>
    <p>导航到下一页即可看到返回按钮。</p>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>导航</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  const component = PageTwo;
</script>
```