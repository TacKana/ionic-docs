```html
<template>
  <ion-note>默认注释</ion-note>
  <ion-note color="primary">主色调注释</ion-note>
  <ion-note color="secondary">次级色调注释</ion-note>
  <ion-note color="tertiary">第三色调注释</ion-note>
  <ion-note color="success">成功状态注释</ion-note>
  <ion-note color="warning">警告状态注释</ion-note>
  <ion-note color="danger">危险状态注释</ion-note>
  <ion-note color="light">浅色注释</ion-note>
  <ion-note color="medium">中等色注释</ion-note>
  <ion-note color="dark">深色注释</ion-note>
</template>

<script lang="ts">
  import { IonNote } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonNote },
  });
</script>
```