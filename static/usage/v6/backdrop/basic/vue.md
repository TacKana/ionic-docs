```html
<template>
  <ion-backdrop :visible="true"></ion-backdrop>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>背景遮罩层</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>复选框</ion-label>
      </ion-item>
      <ion-button expand="block">按钮</ion-button>
    </ion-content>
  </div>
</template>
<script lang="ts">
  import {
    IonBackdrop,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonButton,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackdrop, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCheckbox, IonLabel, IonButton },
  });
</script>
```