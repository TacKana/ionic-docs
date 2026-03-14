```html
<template>
  <ion-list>
    <ion-item>
      <ion-select placeholder="选择水果">
        <div slot="label">最喜欢的水果 <ion-text color="danger">(必填)</ion-text></div>
        <ion-select-option value="apple">苹果</ion-select-option>
        <ion-select-option value="banana">香蕉</ion-select-option>
        <ion-select-option value="orange">橙子</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/vue';
</script>
```