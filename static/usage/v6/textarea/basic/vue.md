```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>普通文本域</ion-label>
      <ion-textarea placeholder="在此输入内容"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>只读文本域</ion-label>
      <ion-textarea :readonly="true" placeholder="无法编辑此项"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>禁用文本域</ion-label>
      <ion-textarea :disabled="true" placeholder="无法在此输入"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonTextarea },
  });
</script>
```