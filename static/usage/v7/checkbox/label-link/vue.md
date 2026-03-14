```html
<template>
  <ion-checkbox>我同意 <a href="#" @click="$event.stopPropagation()">条款与条件</a></ion-checkbox>
</template>

<script setup lang="ts">
  import { IonCheckbox } from '@ionic/vue';
</script>
```