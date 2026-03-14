```html
<template>
  <ion-button id="present-alert">点击我</ion-button>
  <ion-alert
    trigger="present-alert"
    header="警告！"
    :buttons="alertButtons"
    @didDismiss="logResult($event)"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = [
    {
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('警告已取消');
      },
    },
    {
      text: '确定',
      role: 'confirm',
      handler: () => {
        console.log('警告已确认');
      },
    },
  ];

  const logResult = (event: CustomEvent) => {
    console.log(`以角色关闭：${event.detail.role}`);
  };
</script>
```