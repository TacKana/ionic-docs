```html
<template>
  <ion-datetime presentation="date" :value="datetime"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { ref } from 'vue';

  let datetime = ref('');

  const date = new Date();

  // 将日期时间的值设置为当前日期的前两天
  let dayChange = -2;

  // 如果我们要设置的值在上个月
  // 那么将日期设置为两天后，使其保持在同一月份
  if (date.getDate() + dayChange <= 0) {
    dayChange = -dayChange;
  }

  // 将日期时间的值设置为上面计算出的日期
  date.setDate(date.getDate() + dayChange);
  datetime = date.toISOString();
</script>

<style scoped>
  /*
  * 自定义日期时间组件日期部分样式
  * -------------------------------------------
  */

  ion-datetime::part(calendar-day) {
    color: #da5296;
  }

  ion-datetime::part(calendar-day today) {
    color: #8462d1;
  }

  ion-datetime::part(calendar-day):focus {
    background-color: rgb(154 209 98 / 0.2);
    box-shadow: 0px 0px 0px 4px rgb(154 209 98 / 0.2);
  }

  /*
  * 自定义 Material Design 风格日期时间组件日期部分样式
  * -------------------------------------------
  */

  ion-datetime.md::part(calendar-day active),
  ion-datetime.md::part(calendar-day active):focus {
    background-color: #9ad162;
    border-color: #9ad162;
    color: #fff;
  }

  ion-datetime.md::part(calendar-day today) {
    border-color: #8462d1;
  }

  /*
  * 自定义 iOS 风格日期时间组件日期部分样式
  * -------------------------------------------
  */

  ion-datetime.ios::part(calendar-day active),
  ion-datetime.ios::part(calendar-day active):focus {
    background-color: rgb(154 209 98 / 0.2);
    color: #9ad162;
  }
</style>
```