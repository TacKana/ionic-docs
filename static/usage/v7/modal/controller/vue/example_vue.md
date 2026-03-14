```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>控制器模态框</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" @click="openModal">打开模态框</ion-button>
      <p>{{ message }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';
  import { ref } from 'vue';

  const message = ref('此模态框示例使用 modalController 来呈现和关闭模态框。');

  const openModal = async () => {
    const modal = await modalController.create({
      component: Modal,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      message.value = `你好，${data}！`;
    }
  };
</script>
```