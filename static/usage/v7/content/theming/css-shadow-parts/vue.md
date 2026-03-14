```html
<template>
  <ion-content class="ion-padding">
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>

    <p>这里是一段简短的正文内容描述，仅此而已。</p>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent } from '@ionic/vue';
</script>

<style scoped>
  ion-content::part(background) {
    background: #d31373;
  }

  ion-content::part(scroll) {
    color: #fff;
  }
</style>
```