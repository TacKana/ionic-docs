```html
<template>
  <ion-content class="ion-padding">
    <h1>内容区域</h1>
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title>底部栏</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
  import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFooter, IonTitle, IonToolbar },
  });
</script>
```