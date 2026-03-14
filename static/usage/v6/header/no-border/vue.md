```html
<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>顶部栏</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>内容区</h1>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonTitle, IonToolbar },
  });
</script>
```