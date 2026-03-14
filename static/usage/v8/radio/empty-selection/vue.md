```html
<template>
  <ion-radio-group allow-empty-selection="true" value="turtles">
    <ion-radio value="dogs">狗狗</ion-radio><br />
    <ion-radio value="cats">猫咪</ion-radio><br />
    <ion-radio value="turtles">乌龟</ion-radio><br />
    <ion-radio value="fish">鱼类</ion-radio><br />
  </ion-radio-group>
</template>

<script setup lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
</script>
```