```html
<template>
  <ion-item>
    <ion-label position="floating">默认输入框</ion-label>
    <ion-input placeholder="请输入文本"></ion-input>
  </ion-item>

  <ion-item fill="solid">
    <ion-label position="floating">实心输入框</ion-label>
    <ion-input placeholder="请输入文本"></ion-input>
  </ion-item>

  <ion-item fill="outline">
    <ion-label position="floating">轮廓输入框</ion-label>
    <ion-input placeholder="请输入文本"></ion-input>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel },
  });
</script>
```