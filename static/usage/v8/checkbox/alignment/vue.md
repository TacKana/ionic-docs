```html
<template>
  <ion-list>
    <ion-item>
      <ion-checkbox label-placement="stacked" alignment="start">对齐到起始位置</ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-checkbox label-placement="stacked" alignment="center">对齐到中心位置</ion-checkbox>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonCheckbox } from '@ionic/vue';
</script>
```