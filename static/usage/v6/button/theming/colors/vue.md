```html
<template>
  <ion-button>默认</ion-button>
  <ion-button color="primary">主色</ion-button>
  <ion-button color="secondary">次色</ion-button>
  <ion-button color="tertiary">第三色</ion-button>
  <ion-button color="success">成功</ion-button>
  <ion-button color="warning">警告</ion-button>
  <ion-button color="danger">危险</ion-button>
  <ion-button color="light">浅色</ion-button>
  <ion-button color="medium">中性色</ion-button>
  <ion-button color="dark">深色</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```