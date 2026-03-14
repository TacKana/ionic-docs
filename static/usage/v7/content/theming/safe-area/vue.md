```html
<template>
  <ion-content>
    <span>这里是一段针对内容的小说明，仅此而已。</span>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent } from '@ionic/vue';
</script>

<style>
  :root {
    /**
     * 以下变量仅用于演示目的。
     * 构建 iOS 或 Android 应用时，这些值会自动设置。
     */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
    --ion-safe-area-left: 20px;
    --ion-safe-area-right: 20px;
  }
</style>

<style scoped>
  ion-content::part(scroll) {
    padding-top: var(--ion-safe-area-top, 0);
    padding-bottom: var(--ion-safe-area-bottom, 0);
    padding-left: var(--ion-safe-area-left, 0);
    padding-right: var(--ion-safe-area-right, 0);
  }
</style>
```