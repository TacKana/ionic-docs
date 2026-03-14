```html
<template>
  <ion-item>
    <ion-label>默认标签</ion-label>
    <ion-input placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">固定标签</ion-label>
    <ion-input placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">浮动标签</ion-label>
    <ion-input placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">堆叠标签</ion-label>
    <ion-input placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>开关</ion-label>
    <ion-toggle slot="end" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox slot="start" checked></ion-checkbox>
    <ion-label>复选框</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle },
  });
</script>
```