```html
<template>
  <ion-datetime presentation="date">
    <span slot="title">选择日期</span>
  </ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  /*
   * 自定义日期时间组件头部样式
   * -------------------------------------------
   */

  ion-datetime::part(datetime-header) {
    background-color: orange;
  }

  ion-datetime::part(datetime-title) {
    background-color: pink;
  }

  ion-datetime::part(datetime-selected-date) {
    background-color: violet;
  }
</style>
```