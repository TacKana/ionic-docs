```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">取消</ion-button>
      </ion-buttons>
      <ion-title>模态框</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirm" :strong="true">确认</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="stacked">您的姓名</ion-label>
      <ion-input v-model="name" placeholder="请输入姓名"></ion-input>
    </ion-item>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Modal',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(this.name, 'confirm');
      },
    },
  });
</script>
```