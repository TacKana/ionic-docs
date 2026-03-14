```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }

  code {
    white-space: pre-wrap;
  }
</style>

<template>
  <div class="container">
    <ion-button @click="presentActionSheet">打开</ion-button>
    <code>{{ result }}</code>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonButton, actionSheetController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const result = ref('');

      const presentActionSheet = async () => {
        const actionSheet = await actionSheetController.create({
          header: '示例标题',
          subHeader: '示例副标题',
          buttons: [
            {
              text: '删除',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: '分享',
              data: {
                action: 'share',
              },
            },
            {
              text: '取消',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ],
        });

        await actionSheet.present();

        const res = await actionSheet.onDidDismiss();
        result.value = JSON.stringify(res, null, 2);
      };

      return {
        result,
        presentActionSheet,
      };
    },
  };
</script>
```