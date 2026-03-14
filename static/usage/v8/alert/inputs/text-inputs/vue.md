```html
<template>
  <ion-button id="present-alert">点击我</ion-button>
  <ion-alert
    trigger="present-alert"
    header="请输入您的信息"
    :buttons="alertButtons"
    :inputs="alertInputs"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['确定'];
  const alertInputs = [
    {
      placeholder: '姓名',
    },
    {
      placeholder: '昵称（最多8个字符）',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: '年龄',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: '简单介绍一下自己',
    },
  ];
</script>
```