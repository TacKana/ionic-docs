```html
<template>
  <ion-button @click="presentToast">点击我</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';
  import { globe } from 'ionicons/icons';

  export default {
    components: { IonButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: '你好，世界！',
          duration: 1500,
          icon: globe,
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        this.roleMessage = `以角色关闭：${role}`;
      },
    },
  };
</script>
```