```html
<ion-datetime presentation="date"></ion-datetime>

<style>
  /*
   * 自定义日期时间组件日历标题部分
   * -------------------------------------------
   */
  ion-datetime::part(month-year-button) {
    background-color: lightblue;
  }
</style>
```