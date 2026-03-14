```html
<template>
  <ion-datetime presentation="date"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  /*
   * 自定义日期时间组件日历头部部件
   * -------------------------------------------
   */
  ion-datetime::part(calendar-header) {
    background-color: orange;
  }

  ion-datetime::part(month-year-button) {
    background-color: lightblue;
  }

  ion-datetime::part(navigation-button) {
    background-color: firebrick;
  }

  ion-datetime::part(previous-button) {
    color: white;
  }

  ion-datetime::part(next-button) {
    color: black;
  }

  ion-datetime::part(calendar-days-of-week) {
    background-color: #9ad162;
    color: white;
  }
</style>
```