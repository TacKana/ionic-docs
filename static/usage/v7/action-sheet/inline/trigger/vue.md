```html
<template>
  <ion-button id="open-action-sheet">打开</ion-button>
  <ion-action-sheet trigger="open-action-sheet" header="操作选项" :buttons="actionSheetButtons"></ion-action-sheet>
</template>

<script setup lang="ts">
  import { IonActionSheet, IonButton } from '@ionic/vue';

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
</script>
```