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
          header: '请输入您的信息',
          buttons: ['确定'],
          inputs: [
            {
              placeholder: '姓名',
            },
            {
              placeholder: '昵称（最多8个字符）',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: '年龄',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: '关于您自己的一些介绍',
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