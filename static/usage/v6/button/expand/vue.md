```html
<template>
  <ion-button expand="block">块级按钮</ion-button>
  <ion-button expand="full">全宽按钮</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```