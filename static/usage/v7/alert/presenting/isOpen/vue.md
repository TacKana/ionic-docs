```html
<template>
  <ion-button @click="setOpen(true)">点击我</ion-button>
  <ion-alert
    :is-open="isOpen"
    header="简短标题效果最佳"
    sub-header="子标题可选"
    message="消息应为简短完整的句子。"
    :buttons="alertButtons"
    @didDismiss="setOpen(false)"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonAlert, IonButton } from '@ionic/vue';

  const isOpen = ref(false);
  const alertButtons = ['操作'];

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```