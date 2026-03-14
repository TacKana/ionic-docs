```html
<template>
  <ion-range
    aria-label="启用旋钮事件的滑块"
    @ionKnobMoveStart="onIonKnobMoveStart"
    @ionKnobMoveEnd="onIonKnobMoveEnd"
  ></ion-range>
</template>

<script setup lang="ts">
  import { IonRange } from '@ionic/vue';

  const onIonKnobMoveStart = ({ detail }) => {
    console.log('ionKnobMoveStart:', detail.value);
  };

  const onIonKnobMoveEnd = ({ detail }) => {
    console.log('ionKnobMoveEnd:', detail.value);
  };
</script>
```