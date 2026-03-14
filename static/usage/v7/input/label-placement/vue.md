```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Default label" placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Fixed label" label-placement="fixed" placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Stacked label" label-placement="stacked" placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Floating label" label-placement="floating" placeholder="输入文本"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
</script>
```