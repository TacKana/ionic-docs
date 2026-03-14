```html
<template>
  <ion-button>默认</ion-button>
  <ion-button fill="clear">透明</ion-button>
  <ion-button fill="outline">描边</ion-button>
  <ion-button fill="solid">实心</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```