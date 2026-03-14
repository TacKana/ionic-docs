```html
<template>
  <ion-item>
    <ion-label>默认图标</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label>大号图标</ion-label>
    <ion-icon :icon="informationCircle" size="large" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label>小号图标</ion-label>
    <ion-icon :icon="informationCircle" size="small" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>默认图标</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { informationCircle, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonIcon, IonItem, IonLabel },
    setup() {
      return { informationCircle, star };
    },
  });
</script>
```