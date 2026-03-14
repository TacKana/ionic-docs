```html
<template>
  <ion-list>
    <ion-item>
      <ion-select justify="start" label="左对齐" placeholder="选择最喜欢的水果">
        <ion-select-option value="apple">苹果</ion-select-option>
        <ion-select-option value="banana">香蕉</ion-select-option>
        <ion-select-option value="orange">橙子</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select justify="end" label="右对齐" placeholder="选择最喜欢的水果">
        <ion-select-option value="apple">苹果</ion-select-option>
        <ion-select-option value="banana">香蕉</ion-select-option>
        <ion-select-option value="orange">橙子</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select justify="space-between" label="两端对齐" placeholder="选择最喜欢的水果">
        <ion-select-option value="apple">苹果</ion-select-option>
        <ion-select-option value="banana">香蕉</ion-select-option>
        <ion-select-option value="orange">橙子</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
</script>
```