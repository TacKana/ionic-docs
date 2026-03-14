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
      <ion-input label-placement="stacked" label="输入您的姓名" v-model="name" placeholder="您的姓名"></ion-input>
    </ion-item>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonItem,
    IonInput,
    modalController,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const name = ref();

  const cancel = () => modalController.dismiss(null, 'cancel');
  const confirm = () => modalController.dismiss(name.value, 'confirm');
</script>
```