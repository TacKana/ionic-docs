```html
<style>
  ion-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* 覆盖 iOS 中 role: "destructive" 按钮的样式 */
    --ion-color-danger: #000000;
  }
</style>

<template>
  <ion-button id="open-action-sheet">打开</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    class="my-custom-class"
    header="示例标题"
    sub-header="示例副标题"
    :buttons="actionSheetButtons"
  ></ion-action-sheet>
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