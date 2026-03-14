```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label="默认标签" placeholder="输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="固定标签" label-placement="fixed" placeholder="输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="堆叠标签" label-placement="stacked" placeholder="输入文本"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="浮动标签" label-placement="floating" placeholder="输入文本"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonTextarea, IonItem, IonList } from '@ionic/vue';
</script>
```