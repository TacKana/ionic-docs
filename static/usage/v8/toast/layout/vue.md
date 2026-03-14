```html
<template>
  <ion-button id="open-inline-toast">打开基线布局提示条</ion-button>
  <ion-button id="open-stacked-toast">打开堆叠布局提示条</ion-button>
  <ion-toast
    trigger="open-inline-toast"
    :duration="3000"
    :buttons="toastButtons"
    message="这是一条包含长消息和出现在同一行按钮的提示条。"
  ></ion-toast>
  <ion-toast
    trigger="open-stacked-toast"
    :duration="3000"
    :buttons="toastButtons"
    message="这是一条包含长消息和出现在下一行按钮的提示条。"
    layout="stacked"
  ></ion-toast>
</template>

<script setup lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';

  const toastButtons = [
    {
      text: '长文本操作按钮',
    },
  ];
</script>
```