```html
<template>
  <ion-range aria-label="双滑块范围" :dual-knobs="true" :value="{ lower: 20, upper: 80 }"></ion-range>
</template>

<script setup lang="ts">
  import { IonContent, IonRange } from '@ionic/vue';
</script>
```