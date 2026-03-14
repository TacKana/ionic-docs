```html
<template>
  <ion-radio-group value="strawberries">
    <ion-radio value="grapes">葡萄</ion-radio><br />
    <ion-radio value="strawberries">草莓</ion-radio><br />
    <ion-radio value="pineapple">菠萝</ion-radio><br />
    <ion-radio value="cherries">樱桃</ion-radio>
  </ion-radio-group>
</template>

<script setup lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```