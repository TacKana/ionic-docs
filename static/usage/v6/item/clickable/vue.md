```html
<template>
  <ion-item href="#">
    <ion-label>锚点项目</ion-label>
  </ion-item>

  <ion-item href="#" disabled="true">
    <ion-label>禁用的锚点项目</ion-label>
  </ion-item>

  <ion-item button>
    <ion-label>按钮项目</ion-label>
  </ion-item>

  <ion-item button disabled="true">
    <ion-label>禁用的按钮项目</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```