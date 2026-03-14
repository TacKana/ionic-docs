```html
<template>
  <ion-list>
    <ion-radio-group value="start">
      <ion-item>
        <ion-radio value="start" justify="start">靠行首排列</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="end">
      <ion-item>
        <ion-radio value="end" justify="end">靠行尾排列</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="space-between">
      <ion-item>
        <ion-radio value="space-between" justify="space-between">标签与控件间留空</ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```