```html
<template>
  <ion-button @click="presentAlert">点击我</ion-button>
</template>

<script lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: '提示',
          subHeader: '重要信息',
          message: '这是一个提示框！',
          buttons: ['确定'],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```