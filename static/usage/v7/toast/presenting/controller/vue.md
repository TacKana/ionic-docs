```html
<template>
  <ion-button expand="block" @click="presentToast('top')">在顶部显示 Toast</ion-button>
  <ion-button expand="block" @click="presentToast('middle')">在中间显示 Toast</ion-button>
  <ion-button expand="block" @click="presentToast('bottom')">在底部显示 Toast</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  const presentToast = async (position: 'top' | 'middle' | 'bottom') => {
    const toast = await toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  };
</script>
```