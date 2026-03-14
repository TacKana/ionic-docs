```html
<template>
  <ion-button @click="setOpen(true)">打开</ion-button>
  <ion-action-sheet
    :is-open="isOpen"
    header="操作"
    :buttons="actionSheetButtons"
    @didDismiss="setOpen(false)"
  ></ion-action-sheet>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonActionSheet, IonButton } from '@ionic/vue';

  const isOpen = ref(false);
  const actionSheetButtons = [
    {
      text: '删除',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: '分享',
      data: {
        action: 'share',
      },
    },
    {
      text: '取消',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```