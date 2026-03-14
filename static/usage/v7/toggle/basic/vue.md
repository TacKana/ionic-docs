```html
<template>
  <ion-toggle>默认开关</ion-toggle><br /><br />
  <ion-toggle :checked="true">已选中开关</ion-toggle><br /><br />
  <ion-toggle :disabled="true">禁用开关</ion-toggle><br /><br />
  <ion-toggle :checked="true" :disabled="true">禁用的选中开关</ion-toggle>
</template>

<script setup lang="ts">
  import { IonToggle } from '@ionic/vue';
</script>
```