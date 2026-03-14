```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="标题宜简短"
  sub-header="副标题可选"
  message="消息内容应为简短完整的句子。"
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');
  alert.buttons = ['操作'];
</script>
```