```html
<template>
  <ion-datetime :show-default-buttons="true" done-text="已完成" cancel-text="取消"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```