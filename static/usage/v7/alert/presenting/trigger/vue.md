```html
<template>
  <ion-button id="present-alert">点击我</ion-button>
  <ion-alert
    trigger="present-alert"
    header="简短标题效果最佳"
    sub-header="副标题为可选"
    message="消息应是一个简短、完整的句子。"
    :buttons="alertButtons"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['Action'];
</script>
```