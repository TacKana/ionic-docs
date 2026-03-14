```html
<template>
  <ion-button @click="showLoading">显示加载中</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, loadingController } from '@ionic/vue';

  const showLoading = async () => {
    const loading = await loadingController.create({
      message: '3秒后自动关闭...',
      duration: 3000,
    });

    loading.present();
  };
</script>
```