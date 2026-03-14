```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label="Default label" placeholder="请输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Fixed label" label-placement="fixed" placeholder="请输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Stacked label" label-placement="stacked" placeholder="请输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Floating label" label-placement="floating" placeholder="请输入文本"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonTextarea, IonItem, IonList } from '@ionic/vue';
</script>
```