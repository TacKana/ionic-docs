```html
<template>
  <ion-button @click="showLoading">显示加载</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, loadingController } from '@ionic/vue';

  const showLoading = async () => {
    const loading = await loadingController.create({
      message: '将在3秒后关闭...',
      duration: 3000,
    });

    loading.present();
  };
</script>
```