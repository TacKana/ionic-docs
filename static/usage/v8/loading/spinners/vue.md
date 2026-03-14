```html
<template>
  <ion-button id="open-loading">显示加载状态</ion-button>
  <ion-loading trigger="open-loading" message="加载中..." duration="3000" spinner="circles"></ion-loading>
</template>

<script setup lang="ts">
  import { IonButton, IonLoading } from '@ionic/vue';
</script>
```