```html
<template>
  <ion-range aria-label="双旋钮范围选择器" :dual-knobs="true" :value="{ lower: 20, upper: 80 }"></ion-range>
</template>

<script setup lang="ts">
  import { IonContent, IonRange } from '@ionic/vue';
</script>
```