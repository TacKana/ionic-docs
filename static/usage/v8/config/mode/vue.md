```html
<template>
  <ion-button :color="color" :fill="fill"> 当前模式: {{ mode }} </ion-button>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { IonButton } from '@ionic/vue';
  import { getMode } from '@ionic/core';

  const mode = ref('');

  const color = computed(() => (mode.value === 'ios' ? 'secondary' : 'tertiary'));
  const fill = computed(() => (mode.value === 'ios' ? 'outline' : 'solid'));

  onMounted(() => {
    mode.value = getMode() || 'md';
  });
</script>
```