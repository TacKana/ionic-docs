```html
<template>
  <ion-button size="small">小号</ion-button>
  <ion-button size="default">默认</ion-button>
  <ion-button size="large">大号</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```