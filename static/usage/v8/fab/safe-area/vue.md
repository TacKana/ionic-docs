```html
<template>
  <ion-fab slot="fixed" vertical="top" horizontal="center">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script setup lang="ts">
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { add } from 'ionicons/icons';
</script>

<style>
  :root {
    /**
     * 以下变量仅为演示目的而设置。
     * 在构建 iOS 或 Android 应用时，这些值会自动设置。
     */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
  }
</style>

<style scoped>
  ion-fab {
    margin-top: var(--ion-safe-area-top, 0);
    margin-bottom: var(--ion-safe-area-bottom, 0);
  }
</style>
```