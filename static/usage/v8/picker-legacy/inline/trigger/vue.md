```html
<template>
  <ion-button id="open-picker">打开</ion-button>
  <ion-picker-legacy trigger="open-picker" :columns="pickerColumns" :buttons="pickerButtons"></ion-picker-legacy>
</template>

<script setup lang="ts">
  import { IonButton, IonPickerLegacy } from '@ionic/vue';

  const pickerColumns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
        },
      ],
    },
  ];

  const pickerButtons = [
    {
      text: '取消',
      role: 'cancel',
    },
    {
      text: '确认',
      handler: (value) => {
        console.log(`您选择了: ${value.languages.value}`);
      },
    },
  ];
</script>
```