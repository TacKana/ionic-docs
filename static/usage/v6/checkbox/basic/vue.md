```html
<template>
  <ion-item>
    <ion-checkbox slot="start"></ion-checkbox>
    <ion-label>我同意条款和条件</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonCheckbox, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonItem,
      IonLabel,
    },
  });
</script>
```