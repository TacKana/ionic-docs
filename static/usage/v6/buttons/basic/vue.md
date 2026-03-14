```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button>按钮</ion-button>
    </ion-buttons>
    <ion-title>默认按钮</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonButtons, IonTitle, IonToolbar },
  });
</script>
```