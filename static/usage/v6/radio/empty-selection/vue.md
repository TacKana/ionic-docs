```html
<template>
  <ion-list>
    <ion-radio-group :allow-empty-selection="true" value="turtles">
      <ion-item>
        <ion-label>狗</ion-label>
        <ion-radio slot="end" value="dogs"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>猫</ion-label>
        <ion-radio slot="end" value="cats"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>乌龟</ion-label>
        <ion-radio slot="end" value="turtles"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>鱼</ion-label>
        <ion-radio slot="end" value="fish"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup },
  });
</script>
```