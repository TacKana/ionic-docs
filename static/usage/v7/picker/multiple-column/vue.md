```html
<template>
  <ion-button id="open-picker">打开选择器</ion-button>
  <ion-picker trigger="open-picker" :columns="pickerColumns" :buttons="pickerButtons"></ion-picker>
</template>

<script setup lang="ts">
  import { IonButton, IonPicker } from '@ionic/vue';

  const pickerColumns = [
    {
      name: 'meat',
      options: [
        {
          text: 'Pepperoni',
          value: 'pepperoni',
        },
        {
          text: 'Smoked Ham',
          value: 'smoked-ham',
        },
        {
          text: 'Crispy Bacon',
          value: 'bacon',
        },
      ],
    },
    {
      name: 'veggies',
      options: [
        {
          text: 'Red onion',
          value: 'red-onion',
        },
        {
          text: 'Peppers',
          value: 'peppers',
        },
        {
          text: 'Black olives',
          value: 'black-olives',
        },
      ],
    },
    {
      name: 'crust',
      options: [
        {
          text: 'Pan style',
          value: 'pan',
        },
        {
          text: 'Hand tossed',
          value: 'hand-tossed',
        },
        {
          text: 'Stuffed crust',
          value: 'stuffed-crust',
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
        console.log(`您选择了一个${value.crust.text}披萨，配${value.meat.text}和${value.veggies.text}`);
      },
    },
  ];
</script>
```