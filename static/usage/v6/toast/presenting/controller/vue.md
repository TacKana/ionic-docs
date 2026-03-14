```html
<template>
  <ion-button expand="block" @click="presentToast('top')">在顶部显示提示</ion-button>
  <ion-button expand="block" @click="presentToast('middle')">在中间显示提示</ion-button>
  <ion-button expand="block" @click="presentToast('bottom')">在底部显示提示</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  export default {
    components: { IonButton },
    methods: {
      async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 1500,
          position: position,
        });

        await toast.present();
      },
    },
  };
</script>
```