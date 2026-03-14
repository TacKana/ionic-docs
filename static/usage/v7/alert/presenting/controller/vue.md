```html
<template>
  <ion-button @click="presentAlert">点击我</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  const presentAlert = async () => {
    const alert = await alertController.create({
      header: '短标题效果最佳',
      subHeader: '副标题是可选的',
      message: '消息应为简短、完整的句子。',
      buttons: ['操作'],
    });

    await alert.present();
  };
</script>
```