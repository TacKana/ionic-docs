```html
<template>
  <ion-list>
    <ion-item>
      <ion-select interface="action-sheet" placeholder="请选择水果">
        <ion-select-option value="apples">苹果</ion-select-option>
        <ion-select-option value="oranges">橙子</ion-select-option>
        <ion-select-option value="bananas">香蕉</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonList, IonItem, IonSelect, IonSelectOption },
  });
</script>
```