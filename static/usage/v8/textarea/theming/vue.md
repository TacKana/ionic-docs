```html
<style>
  ion-textarea.custom {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }

  ion-textarea.custom.ios .textarea-bottom .helper-text,
  ion-textarea.custom.ios .textarea-bottom .counter,
  ion-textarea.custom.md .textarea-bottom .helper-text,
  ion-textarea.custom.md .textarea-bottom .counter {
    color: var(--ion-color-primary);
  }
</style>

<template>
  <ion-textarea
    aria-label="自定义文本区域"
    placeholder="在这里输入内容"
    class="custom"
    helper-text="辅助说明文本"
    :counter="true"
    :maxlength="100"
  ></ion-textarea>
</template>

<script setup lang="ts">
  import { IonTextarea } from '@ionic/vue';
</script>
```