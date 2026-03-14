```html
<template>
  <ion-item>
    <ion-label>标签</ion-label>
    <ion-note slot="end">备注（结束位置）</ion-note>
  </ion-item>

  <ion-item>
    <ion-note slot="start">备注（起始位置）</ion-note>
    <ion-label>标签</ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonNote } from '@ionic/vue';
</script>
```