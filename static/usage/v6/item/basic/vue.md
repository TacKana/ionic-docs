```html
<template>
  <ion-item>
    <ion-label>基础项</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      当多行文本过长无法在一行内显示时会自动截断省略。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      当多行文本过长无法在一行内显示时会自动换行显示。Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
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

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```