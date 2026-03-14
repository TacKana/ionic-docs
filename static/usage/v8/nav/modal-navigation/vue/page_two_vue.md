```html
<template>
  <ion-content class="ion-padding">
    <h1>页面二</h1>
    <ion-button @click="navigateToPageThree">前往页面三</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageThree from './PageThree.vue';

  interface Props {
    nav: any;
  }

  const props = defineProps<Props>();

  const navigateToPageThree = () => {
    const { nav } = props;
    nav.push(PageThree, { nav });
  };
</script>
```