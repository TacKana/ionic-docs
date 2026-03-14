```html
<template>
  <ion-button @click="presentBaselineToast()">打开基线布局提示</ion-button>
  <ion-button @click="presentStackedToast()">打开堆叠布局提示</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';
  import type { ToastOptions } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    setup() {
      const presentToast = async (opts: ToastOptions) => {
        const toast = await toastController.create(opts);

        await toast.present();
      };

      const presentBaselineToast = async () => {
        await presentToast({
          duration: 3000,
          message: '这是一个包含长消息和按钮的提示，按钮与消息显示在同一行。',
          buttons: [{ text: 'Action With Long Text' }],
        });
      };

      const presentStackedToast = async () => {
        await presentToast({
          duration: 3000,
          message: '这是一个包含长消息和按钮的提示，按钮显示在下一行。',
          buttons: [{ text: 'Action With Long Text' }],
          layout: 'stacked',
        });
      };

      return { presentBaselineToast, presentStackedToast };
    },
  });
</script>
```