```html
<template>
  <ion-content class="ion-padding">
    <h1>页面一</h1>
    <ion-button @click="navigateToPageTwo">前往页面二</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  interface Props {
    nav: any;
  }

  const props = defineProps<Props>();

  const navigateToPageTwo = () => {
    const { nav } = props;
    nav.push(PageTwo, { nav });
  };
</script>
```