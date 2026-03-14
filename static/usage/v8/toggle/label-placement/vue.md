```html
<template>
  <ion-toggle label-placement="start">标签在起始位置</ion-toggle><br /><br />
  <ion-toggle label-placement="end">标签在结束位置</ion-toggle><br /><br />
  <ion-toggle label-placement="fixed">固定宽度标签</ion-toggle><br /><br />
  <ion-toggle label-placement="stacked">堆叠标签</ion-toggle>
</template>

<script setup lang="ts">
  import { IonToggle } from '@ionic/vue';
</script>
```