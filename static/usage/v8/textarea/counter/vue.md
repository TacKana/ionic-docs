```html
<template>
  <ion-textarea label="默认计数器" label-placement="floating" :counter="true" maxlength="20"></ion-textarea>

  <ion-textarea
    label="自定义计数器格式"
    label-placement="floating"
    :counter="true"
    maxlength="20"
    :counter-formatter="customFormatter"
  ></ion-textarea>
</template>

<script setup lang="ts">
  import { IonTextarea } from '@ionic/vue';

  const customFormatter = (inputLength, maxLength) => {
    return `${maxLength - inputLength} characters remaining`;
  };
</script>
```