```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>默认开关</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>已选中开关</ion-label>
      <ion-toggle slot="end" :checked="true"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>禁用开关</ion-label>
      <ion-toggle slot="end" :disabled="true"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>禁用已选中开关</ion-label>
      <ion-toggle slot="end" :checked="true" :disabled="true"></ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonToggle },
  });
</script>
```