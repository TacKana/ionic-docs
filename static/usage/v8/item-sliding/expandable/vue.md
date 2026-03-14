```html
<template>
  <ion-list>
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success" expandable>归档</ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>带可展开选项的滑动项</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option>收藏</ion-item-option>
        <ion-item-option color="danger" expandable>删除</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/vue';
</script>
```