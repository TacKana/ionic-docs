```html
<template>
  <ion-item>
    <ion-label>默认标签</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      当多行文字过长无法在一行内完整显示时，应该以省略号结尾。Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      当多行文字过长无法在一行内完整显示时，应该自动换行。Lorem ipsum dolor sit amet, consectetur
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

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```