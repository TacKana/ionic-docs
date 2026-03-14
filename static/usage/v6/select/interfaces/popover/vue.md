```html
<template>
  <ion-list>
    <ion-item>
      <ion-select interface="popover" placeholder="选择水果">
        <IonSelectOption value="apples">苹果</IonSelectOption>
        <IonSelectOption value="oranges">橙子</IonSelectOption>
        <IonSelectOption value="bananas">香蕉</IonSelectOption>
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