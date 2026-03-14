```html
<template>
  <ion-button>默认</ion-button>
  <ion-button :disabled="true">禁用</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```