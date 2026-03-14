```html
<template>
  <ion-button id="open-inline-toast">打开基线布局 Toast</ion-button>
  <ion-button id="open-stacked-toast">打开堆叠布局 Toast</ion-button>
  <ion-toast
    trigger="open-inline-toast"
    :duration="3000"
    :buttons="toastButtons"
    message="这是一个包含长消息的 Toast，按钮显示在同一行。"
  ></ion-toast>
  <ion-toast
    trigger="open-stacked-toast"
    :duration="3000"
    :buttons="toastButtons"
    message="这是一个包含长消息的 Toast，按钮显示在下一行。"
    layout="stacked"
  ></ion-toast>
</template>

<script setup lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';

  const toastButtons = [
    {
      text: 'Action With Long Text',
    },
  ];
</script>
```