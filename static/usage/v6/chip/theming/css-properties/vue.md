```html
<style>
  ion-chip {
    --background: #00213f;
    --color: #adefd1;
  }
</style>

<template>
  <ion-chip>默认</ion-chip>
</template>

<script lang="ts">
  import { IonChip } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonChip },
  });
</script>
```