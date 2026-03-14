```html
<template>
  <ion-button @click="setOpen(true)">打开</ion-button>
  <ion-picker
    :is-open="isOpen"
    :columns="pickerColumns"
    :buttons="pickerButtons"
    @didDismiss="setOpen(false)"
  ></ion-picker>
</template>

<script setup lang="ts">
  import { IonButton, IonPicker } from '@ionic/vue';
  import { ref } from 'vue';

  const isOpen = ref(false);

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

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```