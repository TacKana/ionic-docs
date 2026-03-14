```html
<ion-datetime presentation="date"></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');

  const date = new Date();

  // 将日期选择器的值设置为当前日期的前两天
  let dayChange = -2;

  // 如果计算出的日期在上个月，则将日期改为两天后，以确保仍处在同一个月内
  if (date.getDate() + dayChange <= 0) {
    dayChange = -dayChange;
  }

  // 将日期选择器的值设置为上述计算出的日期
  date.setDate(date.getDate() + dayChange);
  datetime.value = date.toISOString();
</script>

<style>
  /*
  * 自定义日期时间选择器的日期部分样式
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
  * 自定义 Material Design 日期时间选择器的日期部分样式
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
  * 自定义 iOS 日期时间选择器的日期部分样式
  * -------------------------------------------
  */

  ion-datetime.ios::part(calendar-day active),
  ion-datetime.ios::part(calendar-day active):focus {
    background-color: rgb(154 209 98 / 0.2);
    color: #9ad162;
  }
</style>
```