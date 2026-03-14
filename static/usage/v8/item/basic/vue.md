```html
<template>
  <ion-item>
    <ion-label>基础项目</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      多行文本在过长无法单行显示时应自动换行。Lorem ipsum dolor sit amet, consectetur
      adipiscing elit。
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-nowrap">
      多行文本在过长无法单行显示时应显示省略号。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit。
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h1>H1 标题</h1>
      <p>段落</p>
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h2>H2 标题</h2>
      <p>段落</p>
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h3>H3 标题</h3>
      <p>段落</p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
</script>
```