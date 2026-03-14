```html
<template>
  <ion-button @click="presentAlert">点击我</ion-button>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');

      const presentAlert = async () => {
        const alert = await alertController.create({
          header: '警告！',
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              handler: () => {
                handlerMessage.value = '警告已取消';
              },
            },
            {
              text: '确定',
              role: 'confirm',
              handler: () => {
                handlerMessage.value = '警告已确认';
              },
            },
          ],
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        roleMessage.value = `已关闭，角色：${role}`;
      };

      return {
        handlerMessage,
        roleMessage,
        presentAlert,
      };
    },
  };
</script>
```