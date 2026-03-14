```html
<template>
  <ion-item>
    <ion-label>默认样式</ion-label>
    <ion-spinner></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>点状</ion-label>
    <ion-spinner name="dots"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>线条</ion-label>
    <ion-spinner name="lines"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>小号线条</ion-label>
    <ion-spinner name="lines-small"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>锐利线条</ion-label>
    <ion-spinner name="lines-sharp"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>小号锐利线条</ion-label>
    <ion-spinner name="lines-sharp-small"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>气泡</ion-label>
    <ion-spinner name="bubbles"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>圆圈</ion-label>
    <ion-spinner name="circles"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>环形</ion-label>
    <ion-spinner name="circular"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>新月形</ion-label>
    <ion-spinner name="crescent"></ion-spinner>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonSpinner },
  });
</script>
```