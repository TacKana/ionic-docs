```html
<template>
  <ion-button @click="presentToast">点击我</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  export default {
    components: { IonButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: '你好，风格化的世界！',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: '关闭',
              role: 'cancel',
            },
          ],
        });

        await toast.present();
      },
    },
  };
</script>

<style>
  ion-toast.custom-toast {
    --background: #f4f4fa;
    --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
    --color: #4b4a50;
  }

  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }

  ion-toast.custom-toast::part(button) {
    border-left: 1px solid #d2d2d2;
    color: #030207;
    font-size: 15px;
  }
</style>
```