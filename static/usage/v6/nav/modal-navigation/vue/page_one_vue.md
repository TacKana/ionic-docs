```html
<template>
  <ion-content class="ion-padding">
    <h1>页面一</h1>
    <ion-button @click="navigateToPageTwo">前往页面二</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonContent, IonButton },
    props: ['nav'],
    methods: {
      navigateToPageTwo() {
        const { nav } = this;
        nav.push(PageTwo, { nav });
      },
    },
  };
</script>
```