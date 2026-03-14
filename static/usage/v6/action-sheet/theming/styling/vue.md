```html
<style>
  ion-action-sheet.my-custom-class .action-sheet-group {
    background: #f58840;
  }

  ion-action-sheet.my-custom-class .action-sheet-title {
    color: #fff;
  }

  ion-action-sheet.my-custom-class .action-sheet-cancel::after {
    background: #e97223;
  }

  ion-action-sheet.my-custom-class .action-sheet-button,
  ion-action-sheet.my-custom-class .action-sheet-button.ion-focused {
    color: #000000;
  }

  @media (any-hover: hover) {
    ion-action-sheet.my-custom-class .action-sheet-button:hover {
      color: #000000;
    }
  }

  ion-action-sheet.my-custom-class ion-backdrop {
    opacity: 0.6;
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