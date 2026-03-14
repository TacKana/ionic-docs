```html
<template>
  <ion-button>默认</ion-button>
  <ion-button shape="round">圆角</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```