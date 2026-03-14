```html
<ion-datetime presentation="date">
  <span slot="title">选择日期</span>
</ion-datetime>

<style>
  /*
   * 自定义日期时间头部组件样式
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