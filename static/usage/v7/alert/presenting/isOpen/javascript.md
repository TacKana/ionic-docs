```html
<ion-button onclick="alert.isOpen = true">点击我</ion-button>
<ion-alert
  header="简短的标题最佳"
  sub-header="副标题可选"
  message="消息内容应为简短、完整的句子。"
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['操作'];
  alert.addEventListener('ionAlertDidDismiss', () => {
    alert.isOpen = false;
  });
</script>
```