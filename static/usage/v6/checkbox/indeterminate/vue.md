```html
<template>
  <ion-item>
    <ion-checkbox slot="start" :indeterminate="true"></ion-checkbox>
    <ion-label>不确定状态复选框</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonCheckbox, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonItem,
      IonLabel,
    },
  });
</script>
```