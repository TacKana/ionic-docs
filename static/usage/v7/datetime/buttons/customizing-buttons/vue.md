```html
<template>
  <ion-datetime ref="datetime">
    <ion-buttons slot="buttons">
      <ion-button color="danger" @click="reset()">重置</ion-button>
      <ion-button color="primary" @click="cancel()">取消</ion-button>
      <ion-button color="primary" @click="confirm()">确认</ion-button>
    </ion-buttons>
  </ion-datetime>
</template>

<script setup lang="ts">
  import { IonButtons, IonButton, IonDatetime } from '@ionic/vue';
  import { ref } from 'vue';

  const datetime = ref();
  const reset = () => datetime.value.$el.reset();
  const cancel = () => datetime.value.$el.cancel();
  const confirm = () => datetime.value.$el.confirm();
</script>
```