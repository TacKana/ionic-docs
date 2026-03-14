```html
<template>
  <ion-chip>默认</ion-chip>
  <ion-chip :disabled="true">禁用</ion-chip>
  <ion-chip :outline="true">轮廓</ion-chip>
</template>

<script setup lang="ts">
  import { IonChip } from '@ionic/vue';
</script>
```