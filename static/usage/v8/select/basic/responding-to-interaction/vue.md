```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        aria-label="Fruit"
        placeholder="选择水果"
        @ionChange="handleChange($event)"
        @ionCancel="handleCancel()"
        @ionDismiss="handleDismiss()"
      >
        <ion-select-option value="apples">苹果</ion-select-option>
        <ion-select-option value="oranges">橙子</ion-select-option>
        <ion-select-option value="bananas">香蕉</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';

  const handleChange = (event) => {
    console.log('ionChange 事件触发，值为: ' + event.detail.value);
  };

  const handleCancel = () => {
    console.log('ionCancel 事件触发');
  };

  const handleDismiss = () => {
    console.log('ionDismiss 事件触发');
  };
</script>
```