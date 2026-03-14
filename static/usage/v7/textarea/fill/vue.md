```html
<template>
  <ion-textarea label="实心文本框" label-placement="floating" fill="solid" placeholder="请输入文本"></ion-textarea>

  <br />

  <ion-textarea
    label="描边文本框"
    label-placement="floating"
    fill="outline"
    placeholder="请输入文本"
  ></ion-textarea>
</template>

<script setup lang="ts">
  import { IonTextarea } from '@ionic/vue';
</script>
```