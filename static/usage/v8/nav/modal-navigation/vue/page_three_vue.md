```html
<template>
  <ion-content class="ion-padding">
    <h1>页面三</h1>
    <ion-button @click="navigateBack">返回</ion-button>
    <ion-button @click="navigateToRoot">返回根页面</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';

  interface Props {
    nav: any;
  }

  const props = defineProps<Props>();

  const navigateBack = () => {
    const { nav } = props;
    nav.pop();
  };

  const navigateToRoot = () => {
    const { nav } = props;
    nav.popToRoot();
  };
</script>
```