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
          header: '选择你最喜欢的颜色',
          buttons: ['确认'],
          inputs: [
            {
              label: '红色',
              type: 'radio',
              value: 'red',
            },
            {
              label: '蓝色',
              type: 'radio',
              value: 'blue',
            },
            {
              label: '绿色',
              type: 'radio',
              value: 'green',
            },
          ],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```