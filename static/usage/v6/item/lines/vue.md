```html
<template>
  <ion-item>
    <ion-label>默认项目分隔线</ion-label>
  </ion-item>

  <ion-item lines="inset">
    <ion-label>内嵌式分隔线</ion-label>
  </ion-item>

  <ion-item lines="full">
    <ion-label>完整分隔线</ion-label>
  </ion-item>

  <ion-item lines="none">
    <ion-label>无分隔线</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>默认项目分隔线</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="inset">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>内嵌式分隔线</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="full">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>完整分隔线</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="none">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>无分隔线</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>
</template>

<script lang="ts">
  import { IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { informationCircle, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonItem, IonLabel },
    setup() {
      return { informationCircle, star };
    },
  });
</script>
```