```html
<template>
  <ion-toggle>默认开关</ion-toggle><br /><br />
  <ion-toggle :checked="true">选中状态开关</ion-toggle><br /><br />
  <ion-toggle :disabled="true">禁用开关</ion-toggle><br /><br />
  <ion-toggle :checked="true" :disabled="true">禁用且选中状态开关</ion-toggle>
</template>

<script setup lang="ts">
  import { IonToggle } from '@ionic/vue';
</script>
```