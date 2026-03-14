```html
<template>
  <ion-item>
    <ion-label>基础项目</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      多行文本，当内容过长无法在一行显示时应自动换行。Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-nowrap">
      多行文本，当内容过长无法在一行显示时应用省略号截断。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h1>一级标题</h1>
      <p>段落文本</p>
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h2>二级标题</h2>
      <p>段落文本</p>
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h3>三级标题</h3>
      <p>段落文本</p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
</script>
```