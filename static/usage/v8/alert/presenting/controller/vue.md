```html
<template>
  <ion-button @click="presentAlert">点击我</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  const presentAlert = async () => {
    const alert = await alertController.create({
      header: '标题宜简短',
      subHeader: '副标题可选',
      message: '消息内容应为简短完整的句子。',
      buttons: ['操作'],
    });

    await alert.present();
  };
</script>
```