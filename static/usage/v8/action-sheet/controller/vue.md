```html
<template>
  <ion-button @click="presentActionSheet">打开</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, actionSheetController } from '@ionic/vue';

  const presentActionSheet = async () => {
    const actionSheet = await actionSheetController.create({
      header: '操作',
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
  };
</script>
```