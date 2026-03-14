```html
<template>
  <ion-item>
    <ion-label>默认标签</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      当多行文本过长超出单行显示时，应以省略号截断。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      当多行文本过长超出单行显示时，应自动换行。Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
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