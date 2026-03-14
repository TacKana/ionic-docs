```html
<template>
  <ion-list>
    <ion-item>
      <ion-select aria-label="水果" placeholder="请选择所有适用的水果" :multiple="true">
        <ion-select-option value="apples">苹果</ion-select-option>
        <ion-select-option value="oranges">橙子</ion-select-option>
        <ion-select-option value="bananas">香蕉</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
</script>
```