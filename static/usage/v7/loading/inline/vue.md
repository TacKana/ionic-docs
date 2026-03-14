```html
<template>
  <ion-button id="open-loading">显示加载中</ion-button>
  <ion-loading trigger="open-loading" :duration="3000" message="3秒后自动关闭..."> </ion-loading>
</template>

<script setup lang="ts">
  import { IonButton, IonLoading } from '@ionic/vue';
</script>
```