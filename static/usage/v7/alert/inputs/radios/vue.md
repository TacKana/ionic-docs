```html
<template>
  <ion-button id="present-alert">点击我</ion-button>
  <ion-alert
    trigger="present-alert"
    header="选择你最喜欢的颜色"
    :buttons="alertButtons"
    :inputs="alertInputs"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['确认'];
  const alertInputs = [
    {
      label: '红色',
      type: 'radio',
      value: 'red',
    },
    {
      label: '蓝色',
      type: 'radio',
      value: 'blue',
    },
    {
      label: '绿色',
      type: 'radio',
      value: 'green',
    },
  ];
</script>
```