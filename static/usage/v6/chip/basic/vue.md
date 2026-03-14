```html
<template>
  <ion-chip>默认</ion-chip>
  <ion-chip :disabled="true">禁用</ion-chip>
  <ion-chip :outline="true">轮廓</ion-chip>
</template>

<script lang="ts">
  import { IonChip } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonChip },
  });
</script>
```