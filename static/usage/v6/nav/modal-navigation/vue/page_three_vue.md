```html
<template>
  <ion-content class="ion-padding">
    <h1>页面三</h1>
    <ion-button @click="navigateBack">返回上一页</ion-button>
    <ion-button @click="navigateToRoot">返回根页面</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';

  export default {
    components: { IonContent, IonButton },
    props: ['nav'],
    methods: {
      navigateBack() {
        const { nav } = this;
        nav.pop();
      },
      navigateToRoot() {
        const { nav } = this;
        nav.popToRoot();
      },
    },
  };
</script>
```