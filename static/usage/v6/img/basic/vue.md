```html
<template>
  <ion-img
    src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
    alt="威斯康星州麦迪逊市夜晚的州议会大厦"
  ></ion-img>
</template>

<script lang="ts">
  import { IonImg } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonImg },
  });
</script>
```