```html
<template>
  <ion-button id="open-toast">打开 Toast</ion-button>
  <ion-toast
    trigger="open-toast"
    message="Hello World!"
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
        console.log('More Info clicked');
      },
    },
    {
      text: '关闭',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  const handleDismiss = (event: CustomEvent) => {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  };
</script>
```