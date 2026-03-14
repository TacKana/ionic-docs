```html
<template>
  <ion-content class="ion-padding">
    <h1>标题 1</h1>
    <h2>标题 2</h2>
    <h3>标题 3</h3>
    <h4>标题 4</h4>
    <h5>标题 5</h5>
    <h6>标题 6</h6>

    <p>这里是内容的一个简短文字描述。不多不少，恰到好处。</p>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent } from '@ionic/vue';
</script>

<style scoped>
  ion-content {
    --background: #d31373;
    --color: #fff;
  }
</style>
```