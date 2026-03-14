```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label="Regular textarea" placeholder="在此处输入内容"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea :readonly="true" label="Readonly textarea" placeholder="无法编辑此项"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea :disabled="true" label="Disabled textarea" placeholder="无法在此输入"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonTextarea } from '@ionic/vue';
</script>
```