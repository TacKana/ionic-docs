```html
<template>
  <ion-textarea
    placeholder="输入文本，离开文本框，再返回并输入以清空内容"
    :clear-on-edit="true"
  ></ion-textarea>
</template>

<script setup lang="ts">
  import { IonTextarea } from '@ionic/vue';
</script>
```