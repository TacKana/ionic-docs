```html
<template>
  <ion-button @click="presentToast">点击我</ion-button>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  export default {
    components: { IonButton },
    data() {
      return {
        handlerMessage: '',
        roleMessage: '',
      };
    },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: '你好，世界！',
          duration: 3000,
          buttons: [
            {
              text: '更多信息',
              role: 'info',
              handler: () => {
                this.handlerMessage = '点击了“更多信息”';
              },
            },
            {
              text: '关闭',
              role: 'cancel',
              handler: () => {
                this.handlerMessage = '点击了“关闭”';
              },
            },
          ],
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        this.roleMessage = `以角色 ${role} 关闭`;
      },
    },
  };
</script>
```