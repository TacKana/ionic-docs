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

<script lang="ts">
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';

  export default {
    components: { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
    data() {
      return {
        message: '这个模态框示例使用 modalController 来展示和关闭模态框。',
      };
    },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
        });
        modal.present();

        const { data, role } = await modal.onWillDismiss();

        if (role === 'confirm') {
          this.message = `你好，${data}!`;
        }
      },
    },
  };
</script>
```