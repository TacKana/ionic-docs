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
        console.log('Alert canceled');
      },
    },
    {
      text: '确认',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  alert.addEventListener('ionAlertDidDismiss', (event) => {
    console.log(`Dismissed with role: ${event.detail.role}`);
  });
</script>
```