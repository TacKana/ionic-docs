```html
<ion-button onclick="alert.isOpen = true">点击我</ion-button>
<ion-alert
  header="标题宜简短"
  sub-header="副标题可选"
  message="提示信息应为简短完整的句子。"
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['操作'];
  alert.addEventListener('ionAlertDidDismiss', () => {
    alert.isOpen = false;
  });
</script>
```