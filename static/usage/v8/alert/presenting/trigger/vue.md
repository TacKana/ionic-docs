```html
<template>
  <ion-button id="present-alert">点击我</ion-button>
  <ion-alert
    trigger="present-alert"
    header="标题简短为佳"
    sub-header="副标题可选"
    message="提示信息应为简短完整的句子。"
    :buttons="alertButtons"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['操作'];
</script>
```