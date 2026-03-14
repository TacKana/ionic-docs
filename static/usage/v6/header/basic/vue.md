```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>页眉</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>内容</h1>
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