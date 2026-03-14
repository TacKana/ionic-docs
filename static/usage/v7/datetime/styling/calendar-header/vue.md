```html
<template>
  <ion-datetime presentation="date"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  /*
   * 自定义日期时间组件日历标题部分
   * -------------------------------------------
   */
  ion-datetime::part(month-year-button) {
    background-color: lightblue;
  }
</style>
```