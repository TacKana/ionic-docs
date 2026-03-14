```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>默认标签</ion-label>
      <ion-input placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="fixed">固定标签</ion-label>
      <ion-input placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">堆叠标签</ion-label>
      <ion-input placeholder="输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="floating">浮动标签</ion-label>
      <ion-input placeholder="输入文本"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList },
  });
</script>
```