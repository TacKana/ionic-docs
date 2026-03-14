```html
<template>
  <ion-button id="open-toast">打开 Toast</ion-button>
  <ion-toast
    trigger="open-toast"
    message="你好，世界！"
    :duration="3000"
    :buttons="toastButtons"
    @didDismiss="handleDismiss($event)"
  ></ion-toast>
</template>

<script setup lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';

  const toastButtons = [
    {
      text: '更多信息',
      role: 'info',
      handler: () => {
        console.log('点击了更多信息');
      },
    },
    {
      text: '关闭',
      role: 'cancel',
      handler: () => {
        console.log('点击了关闭');
      },
    },
  ];

  const handleDismiss = (event: CustomEvent) => {
    const { role } = event.detail;
    console.log(`已关闭，角色：${role}`);
  };
</script>
```