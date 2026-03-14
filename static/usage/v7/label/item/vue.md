```html
<template>
  <ion-item>
    <ion-label>默认标签</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      当文本过长无法单行显示时，多行文本应自动换行。Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-nowrap">
      当文本过长无法单行显示时，多行文本应显示省略号。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h1>标题</h1>
      <p>段落</p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
</script>
```