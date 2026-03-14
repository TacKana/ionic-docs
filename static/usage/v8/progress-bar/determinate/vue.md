```html
<template>
  <ion-progress-bar :value="progress"></ion-progress-bar>
</template>

<script setup lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const progress = ref(0);

  onMounted(() => {
    setInterval(() => {
      progress.value += 0.01;

      // 当进度条达到 100% 时重置
      // 以便持续展示演示效果
      if (progress.value > 1) {
        setTimeout(() => {
          progress.value = 0;
        }, 1000);
      }
    }, 50);
  });
</script>
```