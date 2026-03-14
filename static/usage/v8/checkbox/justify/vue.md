```html
<template>
  <ion-list>
    <ion-item>
      <ion-checkbox justify="start">位于行首</ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-checkbox justify="end">位于行尾</ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-checkbox justify="space-between">标签与控件间留空</ion-checkbox>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonCheckbox, IonItem, IonList } from '@ionic/vue';
</script>
```