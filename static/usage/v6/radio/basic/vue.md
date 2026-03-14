```html
<template>
  <ion-list>
    <ion-radio-group value="strawberries">
      <ion-item>
        <ion-label>葡萄</ion-label>
        <ion-radio slot="end" value="grapes"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>草莓</ion-label>
        <ion-radio slot="end" value="strawberries"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>菠萝</ion-label>
        <ion-radio slot="end" value="pineapple"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>樱桃（已禁用）</ion-label>
        <ion-radio slot="end" value="cherries" :disabled="true"></ion-radio>
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