```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        interface="popover"
        :toggle-icon="add"
        :expanded-icon="remove"
        aria-label="fruit"
        placeholder="选择水果"
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
  import { add, remove } from 'ionicons/icons';
</script>
```