```html
<style>
  ion-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* role: "destructive" 按钮的 iOS 样式覆盖 */
    --ion-color-danger: #000000;
  }
</style>

<template>
  <ion-button @click="presentActionSheet">打开</ion-button>
</template>

<script lang="ts">
  import { IonButton, actionSheetController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentActionSheet = async () => {
        const actionSheet = await actionSheetController.create({
          header: '示例标题',
          subHeader: '示例副标题',
          cssClass: 'my-custom-class',
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

        actionSheet.present();
      };

      return { presentActionSheet };
    },
  };
</script>
```