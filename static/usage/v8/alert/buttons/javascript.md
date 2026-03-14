```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert trigger="present-alert" header="警告！"></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = [
    {
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('警报已取消');
      },
    },
    {
      text: '确定',
      role: 'confirm',
      handler: () => {
        console.log('警报已确认');
      },
    },
  ];

  alert.addEventListener('ionAlertDidDismiss', (event) => {
    console.log(`关闭角色：${event.detail.role}`);
  });
</script>
```